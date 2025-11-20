import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog & Insights | FabTech Qatar',
  description: 'Stay updated with the latest facility management trends, tips, and insights from FabTech experts. Learn about best practices and industry innovations.',
  openGraph: {
    title: 'Blog & Insights | FabTech Facility Management',
    description: 'Expert insights and tips on facility management, cleaning, maintenance, and property care.',
  },
};

// Fetch blogs from API
async function getBlogs() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fabtechqatar.com';
    console.log('Fetching blogs from:', `${baseUrl}/api/blogs`);
    
    const res = await fetch(`${baseUrl}/api/blogs`, {
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });
    
    if (!res.ok) {
      console.error('Failed to fetch blogs:', res.status, res.statusText);
      const errorText = await res.text();
      console.error('Error response:', errorText);
      return [];
    }
    
    const blogs = await res.json();
    console.log('Fetched blogs:', blogs.length, 'blogs');
    console.log('First blog:', blogs[0]);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function Blog() {
  // Get initial blogs from Supabase API
  const initialBlogs = await getBlogs();
  
  return <BlogClient initialBlogs={initialBlogs} />;
}