-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id BIGSERIAL PRIMARY KEY,
  booking_id VARCHAR(50) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  service_key VARCHAR(100) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  selected_option VARCHAR(100) NOT NULL,
  selected_addons JSONB DEFAULT '[]',
  total_cost DECIMAL(10,2) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(20) NOT NULL,
  special_instructions TEXT,
  selected_location JSONB,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_booking_id ON bookings(booking_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at);
CREATE INDEX IF NOT EXISTS idx_bookings_service_key ON bookings(service_key);
CREATE INDEX IF NOT EXISTS idx_bookings_preferred_date ON bookings(preferred_date);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bookings_updated_at 
    BEFORE UPDATE ON bookings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS (adjust based on your needs)
-- Allow service role to do everything
CREATE POLICY "Service role can do everything" ON bookings
    FOR ALL USING (auth.role() = 'service_role');

-- Allow authenticated users to insert their own bookings
CREATE POLICY "Users can insert bookings" ON bookings
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view their own bookings (if you add user authentication later)
-- CREATE POLICY "Users can view own bookings" ON bookings
--     FOR SELECT USING (auth.uid()::text = user_id);

-- Sample data (optional, for testing)
-- INSERT INTO bookings (
--   booking_id, customer_name, phone_number, email, address, 
--   service_key, service_name, selected_option, total_cost, 
--   preferred_date, preferred_time, status
-- ) VALUES (
--   'BK001SAMPLE', 'John Doe', '+974 5555 1234', 'john@example.com', 
--   '123 Test Street, Doha, Qatar', 'residential-deep-cleaning', 
--   'Residential Deep Cleaning', '2bhk', 250.00, 
--   CURRENT_DATE + INTERVAL '1 day', '10:00 AM', 'pending'
-- );

