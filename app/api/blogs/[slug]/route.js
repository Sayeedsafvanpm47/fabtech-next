import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

// GET - Fetch single blog by slug
export async function GET(request, { params }) {
  try {
    const supabase = createServerClient();
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      console.error('Error fetching blog:', error);
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Transform data to match frontend expectations
    const transformedBlog = {
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
    };

    return NextResponse.json(transformedBlog);
  } catch (error) {
    console.error('Error in GET /api/blogs/[slug]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}