-- Create storage bucket for event images
INSERT INTO storage.buckets (id, name, public)
VALUES ('event-images', 'event-images', true);

-- Allow anyone to upload images (since we allow anonymous event submissions)
CREATE POLICY "Anyone can upload event images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'event-images');

-- Allow public read access to event images
CREATE POLICY "Event images are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'event-images');