-- Drop the existing insert policy that requires authentication
DROP POLICY IF EXISTS "Authenticated users can submit events" ON public.events;

-- Create new policy allowing anyone to submit events (anonymous submissions)
CREATE POLICY "Anyone can submit events"
ON public.events
FOR INSERT
WITH CHECK (true);