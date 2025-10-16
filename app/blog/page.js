export const metadata = {
  title: 'Blog & Insights',
  description: 'Stay updated with the latest facility management trends, tips, and insights from FabTech experts. Learn about best practices and industry innovations.',
  openGraph: {
    title: 'Blog & Insights | FabTech Facility Management',
    description: 'Expert insights and tips on facility management, cleaning, maintenance, and property care.',
  },
};

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: "The Future of Smart Building Management in the UAE",
    excerpt: "Discover how IoT technology and smart systems are revolutionizing facility management in the UAE, improving efficiency and reducing costs.",
    author: "Sarah Johnson",
    date: "October 10, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "🏢",
    tags: ["Smart Buildings", "IoT", "Technology", "UAE"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "Essential Marble Care Tips for UAE Climate",
      excerpt: "Learn how to maintain and protect marble surfaces in the harsh UAE climate with expert tips from our stone care specialists.",
      author: "Ahmed Al-Mansouri",
      date: "October 8, 2024",
      readTime: "5 min read",
      category: "Maintenance",
      image: "✨",
      tags: ["Marble Care", "Maintenance", "UAE Climate"]
    },
    {
      id: 3,
      title: "Sustainable Cleaning Practices for Commercial Buildings",
      excerpt: "Explore eco-friendly cleaning methods that reduce environmental impact while maintaining high standards of cleanliness.",
      author: "Maria Rodriguez",
      date: "October 5, 2024",
      readTime: "6 min read",
      category: "Sustainability",
      image: "🌱",
      tags: ["Green Cleaning", "Sustainability", "Commercial"]
    },
    {
      id: 4,
      title: "Pest Control Strategies for UAE Properties",
      excerpt: "Effective pest management techniques tailored for the UAE environment, focusing on prevention and safe treatment methods.",
      author: "Dr. Hassan Ali",
      date: "October 3, 2024",
      readTime: "7 min read",
      category: "Pest Control",
      image: "🛡️",
      tags: ["Pest Control", "Prevention", "UAE"]
    },
    {
      id: 5,
      title: "HVAC Maintenance Best Practices for Energy Efficiency",
      excerpt: "Maximize your HVAC system's efficiency and lifespan with these proven maintenance strategies and energy-saving tips.",
      author: "Michael Chen",
      date: "September 30, 2024",
      readTime: "9 min read",
      category: "HVAC",
      image: "❄️",
      tags: ["HVAC", "Energy Efficiency", "Maintenance"]
    },
    {
      id: 6,
      title: "Post-Construction Cleaning: A Complete Guide",
      excerpt: "Everything you need to know about post-construction cleaning, from safety protocols to final detailing.",
      author: "Lisa Thompson",
      date: "September 28, 2024",
      readTime: "4 min read",
      category: "Cleaning",
      image: "🏗️",
      tags: ["Construction", "Cleaning", "Safety"]
    },
    {
      id: 7,
      title: "Security Integration in Modern Facility Management",
      excerpt: "How to integrate security systems with facility management for comprehensive property protection and monitoring.",
      author: "Omar Khalil",
      date: "September 25, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "🔒",
      tags: ["Security", "Integration", "Technology"]
    }
  ];

  const categories = [
    { name: "All", count: 25 },
    { name: "Technology", count: 8 },
    { name: "Maintenance", count: 6 },
    { name: "Cleaning", count: 5 },
    { name: "Sustainability", count: 4 },
    { name: "Security", count: 2 }
  ];

  const recentPosts = [
    "The Future of Smart Building Management in the UAE",
    "Essential Marble Care Tips for UAE Climate", 
    "Sustainable Cleaning Practices for Commercial Buildings",
    "Pest Control Strategies for UAE Properties"
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay informed with expert insights, industry trends, and practical 
            tips from our facility management professionals.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Featured Article
            </span>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
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
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{featuredPost.author}</div>
                      <div className="text-gray-600 text-sm">{featuredPost.date}</div>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    Read Article
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-8xl mb-4">{featuredPost.image}</div>
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

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Oldest First</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      
                      <div className="text-4xl mb-4 text-center">{post.image}</div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                        {post.title}
                      </h3>
                      
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
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{post.author}</div>
                            <div className="text-gray-500 text-xs">{post.date}</div>
                          </div>
                        </div>
                        
                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-3 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">2</button>
                  <button className="px-3 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">3</button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg">
                    Next
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Search Articles</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
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
                        <button className="text-gray-600 hover:text-blue-600 text-sm leading-relaxed text-left transition-colors duration-200">
                          {post}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Newsletter */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to our newsletter for the latest facility management insights.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
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
