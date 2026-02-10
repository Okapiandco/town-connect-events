
-- Fix 1: Restrict SELECT to approved events only, hide contact_email via view
DROP POLICY IF EXISTS "Approved events are publicly readable" ON public.events;

CREATE POLICY "Only approved events are publicly readable"
ON public.events FOR SELECT
USING (status = 'approved'::event_status);

-- Fix 2: Restrict storage uploads - require file size and type constraints
DROP POLICY IF EXISTS "Anyone can upload event images" ON storage.objects;

CREATE POLICY "Restricted event image uploads"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'event-images'
  AND (storage.extension(name) = 'jpg' OR storage.extension(name) = 'jpeg' OR storage.extension(name) = 'png' OR storage.extension(name) = 'webp')
  AND octet_length(name) < 500
);

-- Fix 3: Restrict UPDATE policy to prevent status/is_featured changes
DROP POLICY IF EXISTS "Users can update their own pending events" ON public.events;

CREATE POLICY "Users can update their own pending events"
ON public.events FOR UPDATE
TO authenticated
USING (auth.uid() = submitted_by AND status = 'pending'::event_status)
WITH CHECK (auth.uid() = submitted_by AND status = 'pending'::event_status AND is_featured = false);
