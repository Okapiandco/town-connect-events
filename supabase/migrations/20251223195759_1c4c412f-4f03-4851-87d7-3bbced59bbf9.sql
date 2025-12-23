-- Create event category enum
CREATE TYPE public.event_category AS ENUM (
  'community', 'music', 'sports', 'arts', 'education', 
  'markets', 'charity', 'council', 'other'
);

-- Create event status enum
CREATE TYPE public.event_status AS ENUM ('pending', 'approved', 'rejected');

-- Create venues table
CREATE TABLE public.venues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  capacity INTEGER,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  end_time TIME,
  category event_category NOT NULL DEFAULT 'other',
  venue_id UUID REFERENCES public.venues(id) ON DELETE SET NULL,
  image_url TEXT,
  organizer TEXT NOT NULL,
  contact_email TEXT,
  status event_status NOT NULL DEFAULT 'pending',
  is_featured BOOLEAN DEFAULT false,
  ticket_url TEXT,
  price TEXT,
  submitted_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.venues ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Venues: Anyone can read
CREATE POLICY "Venues are publicly readable"
ON public.venues FOR SELECT
USING (true);

-- Events: Anyone can read approved events
CREATE POLICY "Approved events are publicly readable"
ON public.events FOR SELECT
USING (status = 'approved' OR status = 'pending');

-- Events: Authenticated users can submit events
CREATE POLICY "Authenticated users can submit events"
ON public.events FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = submitted_by);

-- Events: Users can update their own pending submissions
CREATE POLICY "Users can update their own pending events"
ON public.events FOR UPDATE
TO authenticated
USING (auth.uid() = submitted_by AND status = 'pending')
WITH CHECK (auth.uid() = submitted_by);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers
CREATE TRIGGER update_venues_updated_at
  BEFORE UPDATE ON public.venues
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();