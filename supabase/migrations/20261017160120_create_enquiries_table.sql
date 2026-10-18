/*
# Create enquiries table (single-tenant, no auth)

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) - customer name
  - `phone` (text, not null) - contact number
  - `email` (text, nullable) - optional email
  - `bag_type` (text, nullable) - D-Cut, W-Cut, Box, Loop, or Other
  - `quantity` (text, nullable) - requested quantity
  - `size` (text, nullable) - requested size
  - `colour` (text, nullable) - requested colour
  - `printing` (text, nullable) - printing details
  - `message` (text, nullable) - additional notes
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `enquiries`.
- Allow anon + authenticated INSERT only (public can submit enquiries).
- No SELECT/UPDATE/DELETE for anon (enquiries are private to the owner).
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  bag_type text,
  quantity text,
  size text,
  colour text,
  printing text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
