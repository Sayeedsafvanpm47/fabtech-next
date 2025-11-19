import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

// GET - Fetch single blog
export async function GET(request, { params }) {
  try {
    const supabase = createServerClient();
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching blog:', error);
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error in GET /api/admin/blogs/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update blog
export async function PUT(request, { params }) {
  try {
    const supabase = createServerClient();
    const resolvedParams = await params;
    const { id } = resolvedParams;
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

    // Get existing blog
    const { data: existingBlog, error: fetchError } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Check if slug is taken by another blog
    if (slug !== existingBlog.slug) {
      const { data: slugCheck } = await supabase
        .from('blogs')
        .select('id')
        .eq('slug', slug)
        .neq('id', id)
        .single();

      if (slugCheck) {
        return NextResponse.json({ error: 'A blog with this slug already exists' }, { status: 400 });
      }
    }

    let featuredImageUrl = existingBlog.featured_image;

    // Upload new featured image if provided
    if (featuredImage && featuredImage.size > 0) {
      // Delete old image if exists
      if (existingBlog.featured_image) {
        const oldImagePath = existingBlog.featured_image.split('/').pop();
        await supabase.storage
          .from('blog_images')
          .remove([oldImagePath]);
      }

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

    // Update blog in database
    const { data: blog, error: updateError } = await supabase
      .from('blogs')
      .update({
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
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating blog:', updateError);
      return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error in PUT /api/admin/blogs/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete blog
export async function DELETE(request, { params }) {
  try {
    const supabase = createServerClient();
    const resolvedParams = await params;
    const { id } = resolvedParams;

    // Get existing blog to delete associated image
    const { data: existingBlog, error: fetchError } = await supabase
      .from('blogs')
      .select('featured_image')
      .eq('id', id)
      .single();

    if (fetchError) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Delete associated image if exists
    if (existingBlog.featured_image) {
      const imagePath = existingBlog.featured_image.split('/').pop();
      await supabase.storage
        .from('blog_images')
        .remove([imagePath]);
    }

    // Delete blog from database
    const { error: deleteError } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Error deleting blog:', deleteError);
      return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/admin/blogs/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
