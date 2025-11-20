'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Helper function to get emoji for category
function getCategoryEmoji(category) {
  const emojiMap = {
    'Technology': '🏢',
    'Maintenance': '✨',
    'Cleaning': '🧽',
    'Sustainability': '🌱',
    'Pest Control': '🛡️',
    'HVAC': '❄️',
    'Security': '🔒',
    'General': '📝',
    'Tips': '💡',
    'Construction': '🏗️'
  };
  return emojiMap[category] || '📄';
}

export default function BlogClient({ initialBlogs = [] }) {
  const [allBlogs, setAllBlogs] = useState(initialBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(initialBlogs);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const blogsPerPage = 6;

  // Fetch blogs on component mount and refresh
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs', {
        cache: 'no-store'
      });
      if (res.ok) {
        const blogs = await res.json();
        setAllBlogs(blogs);
        setFilteredBlogs(blogs);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Refresh blogs every 30 seconds
  useEffect(() => {
    const interval = setInterval(fetchBlogs, 30000);
    return () => clearInterval(interval);
  }, []);

  // Filter and sort blogs
  useEffect(() => {
    let filtered = [...allBlogs];

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const dateA = new Date(a.created || a.date || a.created_at);
      const dateB = new Date(b.created || b.date || b.created_at);
      
      switch (sortBy) {
        case 'oldest':
          return dateA - dateB;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'newest':
        default:
          return dateB - dateA;
      }
    });

    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allBlogs, selectedCategory, searchTerm, sortBy]);

  // Generate categories from blogs
  const categoryCount = {};
  allBlogs.forEach(blog => {
    categoryCount[blog.category] = (categoryCount[blog.category] || 0) + 1;
  });

  const categories = [
    { name: "All", count: allBlogs.length },
    ...Object.entries(categoryCount).map(([name, count]) => ({ name, count }))
  ];

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Featured post (first blog)
  const featuredPost = allBlogs.length > 0 ? {
    id: allBlogs[0].slug,
    title: allBlogs[0].title,
    excerpt: allBlogs[0].excerpt || allBlogs[0].content?.substring(0, 200) + "...",
    author: allBlogs[0].author,
    date: new Date(allBlogs[0].created || allBlogs[0].date || allBlogs[0].created_at).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    readTime: Math.ceil((allBlogs[0].content?.length || 0) / 200) + " min read",
    category: allBlogs[0].category,
    image: getCategoryEmoji(allBlogs[0].category),
    tags: allBlogs[0].tags || [],
    slug: allBlogs[0].slug,
    featuredImage: allBlogs[0].featuredImage || allBlogs[0].featured_image,
    imageAlt: allBlogs[0].imageAlt || allBlogs[0].title,
  } : null;

  // Recent posts
  const recentPosts = allBlogs.slice(0, 4);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Stay informed with expert insights, industry trends, and practical 
            tips from our facility management professionals.
          </p>
          {loading && (
            <div className="mt-4">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
                Refreshing content...
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Featured Article
              </span>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {featuredPost.featuredImage ? (
                        <Image
                          src={featuredPost.featuredImage}
                          alt={featuredPost.imageAlt}
                          width={40}
                          height={40}
                          className="rounded-full mr-3 object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{featuredPost.author}</div>
                        <div className="text-gray-600 text-sm">{featuredPost.date}</div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
                
                <div className="text-center">
                  {featuredPost.featuredImage ? (
                    <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                      <Image
                        src={featuredPost.featuredImage}
                        alt={featuredPost.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="text-8xl mb-4">{featuredPost.image}</div>
                  )}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Latest Articles ({filteredBlogs.length})
                </h2>
                <div className="flex gap-4">
                  <button
                    onClick={fetchBlogs}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    disabled={loading}
                  >
                    {loading ? 'Refreshing...' : 'Refresh'}
                  </button>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="newest">Most Recent</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">Title A-Z</option>
                  </select>
                </div>
              </div>
              
              {currentBlogs.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentBlogs.map((post) => (
                      <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {/* Featured Image */}
                        {post.featuredImage ? (
                          <div className="relative h-48 w-full">
                            <Image
                              src={post.featuredImage}
                              alt={post.imageAlt || post.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        ) : (
                          <div className="h-48 bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center">
                            <div className="text-6xl">{getCategoryEmoji(post.category)}</div>
                          </div>
                        )}
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                            <span className="text-gray-500 text-sm">{post.readTime}</span>
                          </div>
                          
                          <Link href={`/blog/${post.slug}`}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-red-600 cursor-pointer transition-colors duration-200">
                              {post.title}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                                {post.author.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">{post.author}</div>
                                <div className="text-gray-500 text-xs">{post.date}</div>
                              </div>
                            </div>
                            
                            <Link 
                              href={`/blog/${post.slug}`}
                              className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors duration-200"
                            >
                              Read More →
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                      <nav className="flex space-x-2">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="px-3 py-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                          <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-2 rounded-lg ${
                              currentPage === i + 1
                                ? 'bg-red-600 text-white'
                                : 'text-gray-700 hover:text-gray-900 border border-gray-300'
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="px-3 py-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    {searchTerm || selectedCategory !== 'All' 
                      ? 'Try adjusting your search or filter criteria.'
                      : 'Check back later for new content!'
                    }
                  </p>
                  {(searchTerm || selectedCategory !== 'All') && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All');
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                
                
                {/* Categories */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <button 
                          onClick={() => setSelectedCategory(category.name)}
                          className={`text-left transition-colors duration-200 ${
                            selectedCategory === category.name
                              ? 'text-red-600 font-medium'
                              : 'text-gray-600 hover:text-red-600'
                          }`}
                        >
                          {category.name}
                        </button>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <ul className="space-y-3">
                    {recentPosts.map((post, index) => (
                      <li key={index}>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-gray-600 hover:text-red-600 text-sm leading-relaxed text-left transition-colors duration-200 block"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Newsletter */}
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to our newsletter for the latest facility management insights.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


