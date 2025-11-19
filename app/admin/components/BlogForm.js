'use client';

import { useState, useEffect } from 'react';

export default function BlogForm({ onBlogCreated, editingBlog, onCancelEdit }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: 'General',
    tags: '',
    author: 'FabTech Team',
    metaDescription: '',
    published: true,
  });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    'General',
    'Cleaning',
    'Maintenance',
    'Pest Control',
    'HVAC',
    'Security',
    'Technology',
    'Sustainability',
    'Construction',
    'Tips'
  ];

  // Load editing blog data
  useEffect(() => {
    if (editingBlog) {
      setFormData({
        title: editingBlog.title || '',
        slug: editingBlog.slug || '',
        content: editingBlog.content || '',
        excerpt: editingBlog.excerpt || '',
        category: editingBlog.category || 'General',
        tags: editingBlog.tags ? editingBlog.tags.join(', ') : '',
        author: editingBlog.author || 'FabTech Team',
        metaDescription: editingBlog.meta_description || '',
        published: editingBlog.published !== false,
      });
      setImagePreview(editingBlog.featured_image || '');
    }
  }, [editingBlog]);

  // Auto-generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'title') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        slug: generateSlug(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const submitData = new FormData();
      
      // Add form data
      Object.keys(formData).forEach(key => {
        if (key === 'tags') {
          // Convert tags string to array
          const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
          submitData.append('tags', JSON.stringify(tagsArray));
        } else {
          submitData.append(key, formData[key]);
        }
      });

      // Add image if selected
      if (featuredImage) {
        submitData.append('featuredImage', featuredImage);
      }

      // Add blog ID if editing
      if (editingBlog) {
        submitData.append('id', editingBlog.id);
      }

      const url = editingBlog ? `/api/admin/blogs/${editingBlog.id}` : '/api/admin/blogs';
      const method = editingBlog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: submitData,
      });

      if (response.ok) {
        // Reset form
        setFormData({
          title: '',
          slug: '',
          content: '',
          excerpt: '',
          category: 'General',
          tags: '',
          author: 'FabTech Team',
          metaDescription: '',
          published: true,
        });
        setFeaturedImage(null);
        setImagePreview('');
        
        if (editingBlog) {
          onCancelEdit();
        }
        
        onBlogCreated();
        alert(editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to save blog post');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      setError('An error occurred while saving the blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          {editingBlog && (
            <button
              onClick={onCancelEdit}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel Edit
            </button>
          )}
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title and Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                Slug *
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Category and Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="e.g. cleaning, qatar, tips"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              placeholder="Brief description of the blog post..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Meta Description */}
          <div>
            <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">
              Meta Description (SEO)
            </label>
            <textarea
              id="metaDescription"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              rows={2}
              maxLength={160}
              placeholder="SEO meta description (max 160 characters)..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-sm text-gray-500">
              {formData.metaDescription.length}/160 characters
            </p>
          </div>

          {/* Featured Image */}
          <div>
            <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700">
              Featured Image
            </label>
            <input
              type="file"
              id="featuredImage"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-xs h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={20}
              placeholder="Write your blog content here... You can use Markdown formatting."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              required
            />
            <p className="mt-1 text-sm text-gray-500">
              You can use Markdown formatting (# for headers, **bold**, *italic*, etc.)
            </p>
          </div>

          {/* Published Status */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
              Publish immediately
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-md font-medium"
            >
              {isSubmitting 
                ? (editingBlog ? 'Updating...' : 'Creating...') 
                : (editingBlog ? 'Update Blog' : 'Create Blog')
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
