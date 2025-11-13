-- FabTech Booking System Database Setup
-- Run this SQL in your Supabase SQL Editor

-- Create bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
  id BIGSERIAL PRIMARY KEY,
  booking_id VARCHAR(50) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  service_key VARCHAR(100) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  selected_option VARCHAR(100) NOT NULL,
  selected_addons JSONB DEFAULT '[]'::jsonb,
  total_cost DECIMAL(10,2) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(20) NOT NULL,
  special_instructions TEXT DEFAULT '',
  selected_location JSONB DEFAULT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_booking_id ON public.bookings(booking_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.bookings(created_at);
CREATE INDEX IF NOT EXISTS idx_bookings_service_key ON public.bookings(service_key);
CREATE INDEX IF NOT EXISTS idx_bookings_preferred_date ON public.bookings(preferred_date);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_bookings_updated_at ON public.bookings;
CREATE TRIGGER update_bookings_updated_at 
    BEFORE UPDATE ON public.bookings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Service role can do everything" ON public.bookings;
DROP POLICY IF EXISTS "Users can insert bookings" ON public.bookings;

-- Create policies for RLS
CREATE POLICY "Service role can do everything" ON public.bookings
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Users can insert bookings" ON public.bookings
    FOR INSERT WITH CHECK (true);

-- Insert a test booking to verify the table works
INSERT INTO public.bookings (
  booking_id, customer_name, phone_number, email, address, 
  service_key, service_name, selected_option, total_cost, 
  preferred_date, preferred_time, status
) VALUES (
  'BK001TEST', 'Test Customer', '+974 5555 1234', 'test@example.com', 
  '123 Test Street, Doha, Qatar', 'residential-deep-cleaning', 
  'Residential Deep Cleaning', '2bhk', 250.00, 
  CURRENT_DATE + INTERVAL '1 day', '10:00 AM', 'pending'
) ON CONFLICT (booking_id) DO NOTHING;

-- Verify the table was created successfully
SELECT 'Table created successfully!' as message, COUNT(*) as test_records FROM public.bookings;

