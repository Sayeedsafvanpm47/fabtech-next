'use client';

import { useState, useEffect } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('create');
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState(null);

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/admin/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      } else {
        console.error('Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlogCreated = () => {
    fetchBlogs(); // Refresh the blog list
    setActiveTab('manage'); // Switch to manage tab
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setActiveTab('create'); // Switch to create tab for editing
  };

  const handleCancelEdit = () => {
    setEditingBlog(null);
  };

  const handleDeleteBlog = async (blogId) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/blogs/${blogId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBlogs(); // Refresh the list
      } else {
        alert('Failed to delete blog post');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Error deleting blog post');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">FabTech Admin</h1>
              <p className="text-gray-600">Blog Management System</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => {
                setActiveTab('create');
                setEditingBlog(null);
              }}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'create'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {editingBlog ? 'Edit Blog' : 'Create Blog'}
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'manage'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Manage Blogs ({blogs.length})
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'create' && (
            <BlogForm
              onBlogCreated={handleBlogCreated}
              editingBlog={editingBlog}
              onCancelEdit={handleCancelEdit}
            />
          )}
          {activeTab === 'manage' && (
            <BlogList
              blogs={blogs}
              isLoading={isLoading}
              onEdit={handleEditBlog}
              onDelete={handleDeleteBlog}
              onRefresh={fetchBlogs}
            />
          )}
        </div>
      </div>
    </div>
  );
}
