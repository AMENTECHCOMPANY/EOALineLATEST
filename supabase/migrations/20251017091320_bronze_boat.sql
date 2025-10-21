/*
  # Create orders and checkout sessions tables

  1. New Tables
    - `checkout_sessions`
      - `id` (uuid, primary key)
      - `session_id` (text, unique, not null) - Stripe session ID
      - `customer_email` (text)
      - `amount_total` (integer) - Amount in cents
      - `currency` (text, default 'eur')
      - `status` (text, default 'created')
      - `payment_status` (text)
      - `customer_details` (jsonb)
      - `metadata` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `orders`
      - `id` (uuid, primary key)
      - `session_id` (text, references checkout_sessions.session_id)
      - `customer_email` (text, not null)
      - `amount_total` (integer, not null)
      - `currency` (text, default 'eur')
      - `status` (text, default 'pending')
      - `shipping_details` (jsonb)
      - `metadata` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for service role access
    - Add policies for customers to view their own orders
*/

-- Checkout Sessions Table
CREATE TABLE IF NOT EXISTS checkout_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  customer_email text,
  amount_total integer,
  currency text DEFAULT 'eur',
  status text DEFAULT 'created',
  payment_status text,
  customer_details jsonb,
  metadata jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text REFERENCES checkout_sessions(session_id),
  customer_email text NOT NULL,
  amount_total integer NOT NULL,
  currency text DEFAULT 'eur',
  status text DEFAULT 'pending',
  shipping_details jsonb,
  metadata jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE checkout_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Service role policies (for webhooks and admin)
CREATE POLICY "Service role can manage checkout sessions"
  ON checkout_sessions
  FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Service role can manage orders"
  ON orders
  FOR ALL
  TO service_role
  USING (true);

-- Customer policies (customers can view their own orders)
CREATE POLICY "Customers can view own checkout sessions"
  ON checkout_sessions
  FOR SELECT
  TO authenticated
  USING (customer_email = auth.jwt() ->> 'email');

CREATE POLICY "Customers can view own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (customer_email = auth.jwt() ->> 'email');

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_checkout_sessions_session_id ON checkout_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_checkout_sessions_customer_email ON checkout_sessions(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_session_id ON orders(session_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);