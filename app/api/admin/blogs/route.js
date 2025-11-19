import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

// GET - Fetch all blogs
export async function GET() {
  try {
    const supabase = createServerClient();
    
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blogs:', error);
      return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }

    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error in GET /api/admin/blogs:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new blog
export async function POST(request) {
  try {
    const supabase = createServerClient();
    const formData = await request.formData();

    // Extract form data
    const title = formData.get('title');
    const slug = formData.get('slug');
    const content = formData.get('content');
    const excerpt = formData.get('excerpt');
    const category = formData.get('category');
    const author = formData.get('author');
    const metaDescription = formData.get('metaDescription');
    const published = formData.get('published') === 'true';
    const tagsString = formData.get('tags');
    const featuredImage = formData.get('featuredImage');

    // Parse tags
    let tags = [];
    try {
      tags = JSON.parse(tagsString || '[]');
    } catch (e) {
      tags = [];
    }

    // Check if slug already exists
    const { data: existingBlog } = await supabase
      .from('blogs')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existingBlog) {
      return NextResponse.json({ error: 'A blog with this slug already exists' }, { status: 400 });
    }

    let featuredImageUrl = null;

    // Upload featured image if provided
    if (featuredImage && featuredImage.size > 0) {
      const fileExt = featuredImage.name.split('.').pop();
      const fileName = `${slug}-${Date.now()}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('blog_images')
        .upload(fileName, featuredImage, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('blog_images')
        .getPublicUrl(fileName);
      
      featuredImageUrl = publicUrl;
    }

    // Insert blog into database
    const { data: blog, error: insertError } = await supabase
      .from('blogs')
      .insert({
        title,
        slug,
        content,
        excerpt,
        category,
        author,
        meta_description: metaDescription,
        published,
        tags,
        featured_image: featuredImageUrl,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting blog:', insertError);
      return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
    }

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/admin/blogs:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
