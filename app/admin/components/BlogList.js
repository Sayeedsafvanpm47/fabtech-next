'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BlogList({ blogs, isLoading, onEdit, onDelete, onRefresh }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blogs based on status and search term
  const filteredBlogs = blogs.filter(blog => {
    const matchesFilter = filter === 'all' || 
      (filter === 'published' && blog.published) ||
      (filter === 'draft' && !blog.published);
    
    const matchesSearch = !searchTerm || 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      {/* Header with filters */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
            <p className="text-sm text-gray-600">
              {filteredBlogs.length} of {blogs.length} posts
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            
            {/* Filter */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Posts</option>
              <option value="published">Published</option>
              <option value="draft">Drafts</option>
            </select>
            
            {/* Refresh */}
            <button
              onClick={onRefresh}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Blog list */}
      <div className="divide-y divide-gray-200">
        {filteredBlogs.length === 0 ? (
          <div className="px-6 py-8 text-center">
            <p className="text-gray-500">
              {searchTerm || filter !== 'all' 
                ? 'No blogs match your filters.' 
                : 'No blog posts yet. Create your first blog post!'
              }
            </p>
          </div>
        ) : (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Featured Image Thumbnail */}
                    {blog.featured_image && (
                      <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={blog.featured_image}
                          alt={blog.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {blog.category}
                        </span>
                        <span>by {blog.author}</span>
                        <span>{formatDate(blog.created_at)}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          blog.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {blog.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {blog.excerpt && (
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {blog.excerpt}
                    </p>
                  )}
                  
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2 ml-4">
                  <a
                    href={`/blog/${blog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View
                  </a>
                  <button
                    onClick={() => onEdit(blog)}
                    className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(blog.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}


