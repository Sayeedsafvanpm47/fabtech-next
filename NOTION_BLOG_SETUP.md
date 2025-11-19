# Notion Blog Setup Guide

## 🚀 Quick Setup Instructions

### Step 1: Create Notion Database

1. Go to [Notion](https://notion.so) and create a new page
2. Add a database (table) called "Blogs"
3. Add these properties to your database:

| Property Name | Type | Required | Description |
|---------------|------|----------|-------------|
| Title | Title | ✅ | Blog post title |
| Slug | Rich Text | ✅ | URL slug (e.g., "my-blog-post") |
| Content | Rich Text | ✅ | Full blog content |
| Excerpt | Rich Text | ❌ | Short description for previews |
| Category | Select | ❌ | Blog category (Technology, Cleaning, etc.) |
| Author | Rich Text | ❌ | Author name |
| Published | Checkbox | ✅ | Whether to show the blog publicly |
| MetaDescription | Rich Text | ❌ | SEO meta description |
| Tags | Multi-select | ❌ | Blog tags |
| Thumbnail | URL | ❌ | Featured image URL |

### Step 2: Create Notion Integration

1. Go to [https://developers.notion.com/](https://developers.notion.com/)
2. Click "Create new integration"
3. Give it a name like "FabTech Blog"
4. Copy the **Integration Token** (starts with `secret_`)

### Step 3: Share Database with Integration

1. In your Notion database, click "Share" (top right)
2. Click "Connect to integration"
3. Select your integration from the dropdown
4. Click "Confirm"

### Step 4: Get Database ID

1. Open your Notion database in a browser
2. Copy the URL - it looks like: `https://notion.so/your-workspace/DATABASE_ID?v=...`
3. The DATABASE_ID is the long string between the last `/` and `?v=`

### Step 5: Add Environment Variables

Create a `.env.local` file in your `fabtech` folder with:

```env
# Notion API Configuration
NOTION_SECRET=secret_your_integration_token_here
NOTION_DATABASE_ID=your_database_id_here

# Base URL for API calls
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**For Production (Vercel/Netlify):**
```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Step 6: Test the Setup

1. Add a test blog post to your Notion database:
   - Title: "Welcome to Our Blog"
   - Slug: "welcome-to-our-blog"
   - Content: "This is our first blog post using Notion!"
   - Category: "General"
   - Author: "FabTech Team"
   - Published: ✅ (checked)

2. Start your development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000/blog` to see your blog!

## 🎯 Creating Blog Posts

### Using AI to Generate Content

Use this prompt with ChatGPT, Claude, or Gemini:

```
Write an SEO-friendly blog post about [TOPIC] for a facility management company in Qatar. 

Include:
- Engaging title
- 140-character meta description  
- Introduction paragraph
- 3-4 main sections with H2/H3 headings
- Practical tips and insights
- Conclusion
- 3-4 relevant FAQs

Target audience: Property managers and business owners in Qatar
Tone: Professional but approachable
Length: 800-1200 words
```

### Blog Post Template

When adding to Notion, use this structure:

**Title:** [Your SEO-optimized title]
**Slug:** [url-friendly-version] (e.g., "hvac-maintenance-qatar")
**Category:** Choose from: Technology, Maintenance, Cleaning, Sustainability, Pest Control, HVAC, Security, General, Tips, Construction
**Author:** [Your name or "FabTech Team"]
**Published:** ✅ (check when ready to publish)
**MetaDescription:** [140 characters max]
**Tags:** [Relevant tags separated by commas]
**Content:** [Full blog post content]

## 🔧 Advanced Features

### Automatic Blog Generation (Optional)

You can automate blog creation using:
- **Make.com** (Free tier available)
- **Zapier** (Free tier available) 
- **n8n** (Self-hosted, completely free)

Workflow:
1. AI generates blog content
2. Automatically creates Notion database entry
3. Blog appears on your website

### Rich Content Support

The current setup supports:
- ✅ Headings (H1, H2, H3)
- ✅ Paragraphs
- ✅ Bullet points
- ✅ Numbered lists
- ✅ Images (via URL)
- ⚠️ Advanced formatting (requires custom implementation)

### SEO Features

Built-in SEO features:
- ✅ Dynamic meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Structured data for search engines
- ✅ Automatic sitemap generation

## 🚨 Troubleshooting

### Common Issues:

1. **"Notion API credentials not configured"**
   - Check your `.env.local` file exists
   - Verify the environment variable names are correct: `NOTION_SECRET` and `NOTION_DATABASE_ID`
   - Restart your development server after adding environment variables

2. **"Blog post not found"**
   - Ensure the slug matches exactly (case-sensitive)
   - Check that "Published" is checked in Notion
   - Verify the database ID is correct

3. **Empty blog list**
   - Make sure at least one post has "Published" checked
   - Verify the integration has access to the database
   - Check the database ID in your environment variables

4. **Images not showing**
   - Use direct image URLs (not Notion file uploads)
   - Try services like Cloudinary, Imgur, or upload to your server

5. **"notion.databases.query is not a function"**
   - Check you're using the correct import: `import { Client } from "@notionhq/client";`
   - Verify your Notion SDK version: `npm list @notionhq/client` (should be v5.x.x)
   - Make sure you're initializing the client correctly: `new Client({ auth: process.env.NOTION_SECRET })`

6. **Rich text filter not working**
   - Ensure you're using the correct filter format for rich text properties:
   ```javascript
   filter: {
     property: "Slug",
     rich_text: {
       equals: slug,
     }
   }
   ```

### Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Look at the server logs in your terminal
3. Verify all Notion properties are spelled correctly
4. Test the API endpoints directly: `/api/blogs`

## 🎉 You're All Set!

Your Notion-powered blog is now ready! You can:
- ✅ Write blogs in Notion's familiar interface
- ✅ Use AI to generate content quickly
- ✅ Publish/unpublish with a simple checkbox
- ✅ Organize with categories and tags
- ✅ Get automatic SEO optimization

Happy blogging! 🚀
