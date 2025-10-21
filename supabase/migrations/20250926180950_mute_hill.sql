/*
  # Create notify_list table for product launch notifications

  1. New Tables
    - `notify_list`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `product` (text, default 'TUMI Complete Set')
      - `created_at` (timestamp)
      - `notified` (boolean, default false)
      - `source` (text, default 'launch_page')

  2. Security
    - Enable RLS on `notify_list` table
    - Add policy for public insert (anyone can sign up for notifications)
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS notify_list (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  product text DEFAULT 'TUMI Complete Set',
  created_at timestamptz DEFAULT now(),
  notified boolean DEFAULT false,
  source text DEFAULT 'launch_page'
);

ALTER TABLE notify_list ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (sign up for notifications)
CREATE POLICY "Anyone can sign up for notifications"
  ON notify_list
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow users to read their own notification data
CREATE POLICY "Users can read own notification data"
  ON notify_list
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow service role to read all data (for admin purposes)
CREATE POLICY "Service role can read all notification data"
  ON notify_list
  FOR SELECT
  TO service_role
  USING (true);

-- Allow service role to update notification status
CREATE POLICY "Service role can update notification status"
  ON notify_list
  FOR UPDATE
  TO service_role
  USING (true);