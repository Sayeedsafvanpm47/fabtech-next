import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

// Get all blog posts
export function getAllBlogs() {
  try {
    // Check if directory exists
    if (!fs.existsSync(blogsDirectory)) {
      console.log("Blogs directory doesn't exist yet");
      return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory);
    const allBlogs = fileNames
      .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.(mdx|md)$/, "");
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          content,
          ...data,
          // Ensure we have default values
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString().split('T')[0],
          category: data.category || "General",
          author: data.author || "FabTech Team",
          tags: data.tags || [],
          excerpt: data.excerpt || content.substring(0, 200) + "...",
          published: data.published !== false, // Default to true unless explicitly false
          featuredImage: data.featuredImage || data.image || null,
          imageAlt: data.imageAlt || data.title || "Blog post image",
        };
      })
      .filter((blog) => blog.published) // Only return published blogs
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

    return allBlogs;
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

// Get a single blog post by slug
export function getBlogBySlug(slug) {
  try {
    // Check if directory exists
    if (!fs.existsSync(blogsDirectory)) {
      console.log("Blogs directory doesn't exist yet");
      return null;
    }

    const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
    let fileContents;
    
    // Try .mdx first, then .md
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } else {
      const mdPath = path.join(blogsDirectory, `${slug}.md`);
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, "utf8");
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
      // Ensure we have default values
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split('T')[0],
      category: data.category || "General",
      author: data.author || "FabTech Team",
      tags: data.tags || [],
      excerpt: data.excerpt || content.substring(0, 200) + "...",
      published: data.published !== false,
      featuredImage: data.featuredImage || data.image || null,
      imageAlt: data.imageAlt || data.title || "Blog post image",
    };
  } catch (error) {
    console.error(`Error reading blog ${slug}:`, error);
    return null;
  }
}

// Convert markdown content to HTML
export async function markdownToHtml(markdown) {
  try {
    const result = await remark().use(html).process(markdown);
    return result.toString();
  } catch (error) {
    console.error("Error converting markdown to HTML:", error);
    return markdown; // Return original markdown if conversion fails
  }
}

// Get all unique categories
export function getAllCategories() {
  const blogs = getAllBlogs();
  const categories = [...new Set(blogs.map((blog) => blog.category))];
  
  return categories.map((category) => ({
    name: category,
    count: blogs.filter((blog) => blog.category === category).length,
  }));
}

// Get all unique tags
export function getAllTags() {
  const blogs = getAllBlogs();
  const allTags = blogs.flatMap((blog) => blog.tags || []);
  const uniqueTags = [...new Set(allTags)];
  
  return uniqueTags.map((tag) => ({
    name: tag,
    count: blogs.filter((blog) => blog.tags?.includes(tag)).length,
  }));
}

// Get blogs by category
export function getBlogsByCategory(category) {
  const blogs = getAllBlogs();
  return blogs.filter((blog) => blog.category === category);
}

// Get blogs by tag
export function getBlogsByTag(tag) {
  const blogs = getAllBlogs();
  return blogs.filter((blog) => blog.tags?.includes(tag));
}

// Get related blogs (same category, excluding current blog)
export function getRelatedBlogs(currentSlug, category, limit = 3) {
  const blogs = getAllBlogs();
  return blogs
    .filter((blog) => blog.slug !== currentSlug && blog.category === category)
    .slice(0, limit);
}

// Search blogs by title or content
export function searchBlogs(query) {
  const blogs = getAllBlogs();
  const searchTerm = query.toLowerCase();
  
  return blogs.filter((blog) => 
    blog.title.toLowerCase().includes(searchTerm) ||
    blog.content.toLowerCase().includes(searchTerm) ||
    blog.excerpt.toLowerCase().includes(searchTerm) ||
    blog.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}
