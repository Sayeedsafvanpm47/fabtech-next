import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

// GET - Fetch all published blogs
export async function GET() {
  try {
    const supabase = createServerClient();
    
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blogs:', error);
      return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }

    // Transform data to match frontend expectations
    const transformedBlogs = blogs.map(blog => ({
      id: blog.id,
      slug: blog.slug,
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      category: blog.category,
      author: blog.author,
      tags: blog.tags || [],
      featuredImage: blog.featured_image,
      imageAlt: blog.title,
      created: blog.created_at,
      lastEdited: blog.updated_at || blog.created_at,
      published: blog.published,
      metaDescription: blog.meta_description,
      date: blog.created_at.split('T')[0], // Format as YYYY-MM-DD
    }));

    return NextResponse.json(transformedBlogs);
  } catch (error) {
    console.error('Error in GET /api/blogs:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}