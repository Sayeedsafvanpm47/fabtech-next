import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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

// Fetch single blog post from API
async function getBlogPost(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fabtechqatar.com';
    const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });
    
    if (!res.ok) {
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch all blogs for related posts
async function getAllBlogs() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fabtechqatar.com';
    const res = await fetch(`${baseUrl}/api/blogs`, {
      next: { revalidate: 300 }
    });
    
    if (!res.ok) {
      return [];
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | FabTech Qatar',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | FabTech Qatar Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: [
      post.title.toLowerCase(),
      post.category.toLowerCase(),
      'fabtech qatar',
      'facility management',
      'cleaning services',
      ...(post.tags || [])
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.created,
      modifiedTime: post.lastEdited,
      authors: [post.author],
      tags: post.tags,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);
  
  if (!post || !post.published) {
    notFound();
  }

  // Get related posts from the same category
  const allBlogs = await getAllBlogs();
  const relatedPosts = allBlogs
    .filter(blog => blog.category === post.category && blog.slug !== post.slug)
    .slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimatedReadTime = Math.ceil((post.content?.length || 0) / 200);

  // Simple markdown to HTML conversion
  const formatContent = (content) => {
    return content
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 mt-8">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3 mt-6">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-2 mt-4">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/^\- (.*$)/gim, '<li class="ml-4">• $1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
      .replace(/(?<!>)$/gm, '</p>');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-red-600">Blog</Link>
            <span>›</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          {/* Category Badge */}
          <div className="flex items-center mb-4">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
              {post.category}
            </span>
            <span className="text-gray-600 text-sm">{estimatedReadTime} min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium text-gray-900">{post.author}</div>
                <div className="text-gray-600 text-sm">
                  Published on {formatDate(post.created)}
                  {post.lastEdited !== post.created && (
                    <span> • Updated {formatDate(post.lastEdited)}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Category Emoji */}
            <div className="text-6xl">
              {getCategoryEmoji(post.category)}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-8">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div 
              className="prose prose-lg prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Last updated: {formatDate(post.lastEdited)}
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/blog"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                ← Back to Blog
              </Link>
              <Link 
                href="/contact"
                className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-3xl mb-4 text-center">
                      {getCategoryEmoji(relatedPost.category)}
                    </div>
                    
                    <div className="mb-3">
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                        {relatedPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="text-xs text-gray-500">
                      By {relatedPost.author} • {formatDate(relatedPost.created)}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Facility Management Services?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get in touch with our experts for customized solutions for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}