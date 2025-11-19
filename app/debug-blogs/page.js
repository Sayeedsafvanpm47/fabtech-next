'use client';

import { useState, useEffect } from 'react';

export default function DebugBlogs() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchDebugData = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Fetch from admin API (all blogs)
      const adminRes = await fetch('/api/admin/blogs');
      const adminData = adminRes.ok ? await adminRes.json() : [];
      
      // Fetch from public API (published only)
      const publicRes = await fetch('/api/blogs');
      const publicData = publicRes.ok ? await publicRes.json() : [];
      
      setAllBlogs(adminData);
      setPublishedBlogs(publicData);
      
      console.log('Admin API response:', adminData);
      console.log('Public API response:', publicData);
      
    } catch (err) {
      setError(err.message);
      console.error('Debug fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDebugData();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Blog Debug Page</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Debug Page</h1>
        <button
          onClick={fetchDebugData}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Refresh Data
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          Error: {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* All Blogs (Admin API) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            All Blogs (Admin API) - {allBlogs.length} total
          </h2>
          
          {allBlogs.length === 0 ? (
            <p className="text-gray-500">No blogs found in database</p>
          ) : (
            <div className="space-y-4">
              {allBlogs.map((blog, index) => (
                <div key={blog.id || index} className="border rounded p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{blog.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      blog.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Slug: {blog.slug}</p>
                  <p className="text-sm text-gray-600 mb-2">Category: {blog.category}</p>
                  <p className="text-sm text-gray-600 mb-2">Author: {blog.author}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Created: {new Date(blog.created_at).toLocaleString()}
                  </p>
                  {blog.featured_image && (
                    <p className="text-sm text-gray-600 mb-2">
                      Image: <span className="text-blue-600">✓ Has image</span>
                    </p>
                  )}
                  {blog.tags && blog.tags.length > 0 && (
                    <p className="text-sm text-gray-600">
                      Tags: {Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Published Blogs (Public API) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Published Blogs (Public API) - {publishedBlogs.length} published
          </h2>
          
          {publishedBlogs.length === 0 ? (
            <p className="text-gray-500">No published blogs found</p>
          ) : (
            <div className="space-y-4">
              {publishedBlogs.map((blog, index) => (
                <div key={blog.id || index} className="border rounded p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">Slug: {blog.slug}</p>
                  <p className="text-sm text-gray-600 mb-2">Category: {blog.category}</p>
                  <p className="text-sm text-gray-600 mb-2">Author: {blog.author}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Date: {blog.date || 'No date'}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Created: {blog.created ? new Date(blog.created).toLocaleString() : 'No created date'}
                  </p>
                  {blog.featuredImage && (
                    <p className="text-sm text-gray-600 mb-2">
                      Featured Image: <span className="text-blue-600">✓ Available</span>
                    </p>
                  )}
                  {blog.tags && blog.tags.length > 0 && (
                    <p className="text-sm text-gray-600">
                      Tags: {Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* API Test Buttons */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">API Test Actions</h2>
        <div className="flex gap-4">
          <button
            onClick={() => window.open('/api/blogs', '_blank')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Test Public API
          </button>
          <button
            onClick={() => window.open('/api/admin/blogs', '_blank')}
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Test Admin API
          </button>
          <button
            onClick={() => window.open('/blog', '_blank')}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            View Blog Page
          </button>
          <button
            onClick={() => window.open('/admin', '_blank')}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            View Admin Panel
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Debug Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-blue-800">
          <li>Check if blogs appear in the "All Blogs" section (left)</li>
          <li>Verify that published blogs appear in the "Published Blogs" section (right)</li>
          <li>If blogs are missing from "Published Blogs", check the published status</li>
          <li>Use the API test buttons to check raw API responses</li>
          <li>Create a new blog in the admin panel and refresh this page</li>
        </ol>
      </div>
    </div>
  );
}
