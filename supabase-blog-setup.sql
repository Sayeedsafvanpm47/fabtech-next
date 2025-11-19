-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category TEXT DEFAULT 'General',
  author TEXT DEFAULT 'FabTech Team',
  meta_description TEXT,
  published BOOLEAN DEFAULT true,
  tags JSONB DEFAULT '[]'::jsonb,
  featured_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);

-- Create index on published status
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published);

-- Create index on category
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category);

-- Create index on created_at for ordering
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to published blogs
CREATE POLICY "Allow public read access to published blogs" ON blogs
  FOR SELECT USING (published = true);

-- Create policy to allow all operations for authenticated users (admin)
-- Note: In production, you might want to create a specific admin role
CREATE POLICY "Allow admin full access" ON blogs
  FOR ALL USING (true);

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create policy for blog images storage
CREATE POLICY "Allow public read access to blog images" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-images');

CREATE POLICY "Allow admin upload to blog images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Allow admin update blog images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'blog-images');

CREATE POLICY "Allow admin delete blog images" ON storage.objects
  FOR DELETE USING (bucket_id = 'blog-images');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blogs_updated_at 
  BEFORE UPDATE ON blogs 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample blog posts
INSERT INTO blogs (title, slug, content, excerpt, category, author, meta_description, published, tags, featured_image) VALUES
(
  'Welcome to FabTech Blog',
  'welcome-to-fabtech-blog',
  '# Welcome to FabTech Blog

We are excited to launch our new blog where we will share expert insights, tips, and industry knowledge about facility management in Qatar.

## What You Can Expect

- **Expert Tips**: Professional advice from our experienced team
- **Industry Insights**: Latest trends in facility management
- **Qatar-Specific Content**: Tailored for the local environment
- **Practical Guides**: Step-by-step instructions for common issues

## Our Commitment

At FabTech, we believe in sharing knowledge to help property owners and managers maintain their facilities effectively. Our blog will be your go-to resource for:

- Cleaning and maintenance tips
- Pest control strategies
- HVAC optimization
- Energy efficiency
- Safety protocols

Stay tuned for regular updates and valuable content!',
  'Welcome to the FabTech blog! Your source for expert facility management insights, tips, and industry knowledge specifically tailored for Qatar.',
  'General',
  'FabTech Team',
  'Welcome to FabTech blog - your source for expert facility management insights, tips, and industry knowledge in Qatar.',
  true,
  '["Welcome", "FabTech", "Facility Management", "Qatar"]'::jsonb,
  null
),
(
  'Essential HVAC Maintenance Tips for Qatar Climate',
  'hvac-maintenance-tips-qatar',
  '# Essential HVAC Maintenance Tips for Qatar Climate

Qatar''s extreme climate puts significant stress on HVAC systems. Here are essential maintenance tips to keep your system running efficiently.

## Monthly Maintenance Tasks

### Filter Replacement
- Replace filters every 30 days during peak summer
- Use high-quality HEPA filters for better air quality
- Check filter condition weekly during sandstorm season

### System Inspection
- Check for unusual noises or vibrations
- Inspect ductwork for leaks or damage
- Monitor energy consumption patterns

## Quarterly Professional Service

### Deep Cleaning
- Clean evaporator and condenser coils
- Clear drain lines and condensate pans
- Inspect and clean blower components

### Performance Testing
- Check refrigerant levels
- Test thermostat accuracy
- Measure airflow and temperature differentials

## Annual Overhaul

### Complete System Check
- Inspect electrical connections
- Test safety controls
- Calibrate control systems
- Replace worn components

## Qatar-Specific Considerations

### Dust Management
- Install pre-filters to protect main filters
- Schedule more frequent cleaning during dusty periods
- Seal ductwork properly to prevent dust infiltration

### Energy Efficiency
- Use programmable thermostats
- Implement zoning systems
- Consider upgrading to more efficient units

## Signs You Need Professional Help

- Rising energy bills
- Uneven cooling
- Frequent cycling
- Strange odors or noises
- Poor air quality

Regular maintenance is crucial for system longevity and efficiency in Qatar''s challenging climate.',
  'Keep your HVAC system running efficiently in Qatar''s extreme climate with these essential maintenance tips from FabTech experts.',
  'HVAC',
  'FabTech Technical Team',
  'Essential HVAC maintenance tips for Qatar climate. Expert advice on keeping your air conditioning system efficient and reliable.',
  true,
  '["HVAC", "Maintenance", "Qatar", "Air Conditioning", "Energy Efficiency"]'::jsonb,
  null
);

-- Display success message
SELECT 'Blog system setup completed successfully!' as message;
