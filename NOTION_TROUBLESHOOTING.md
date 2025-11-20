# 🔧 Notion API Troubleshooting Guide

## Quick Diagnosis

### Step 1: Test Your Connection
Visit: `http://localhost:3000/api/notion-test`

This endpoint will tell you exactly what's wrong:
- ✅ Environment variables configured
- ✅ Notion client can initialize  
- ✅ Database is accessible
- ✅ Integration has proper permissions

## Common Errors & Solutions

### 1. "Notion API credentials not configured"

**Cause:** Missing environment variables

**Solution:**
```bash
# Check if .env.local exists
ls -la .env.local

# Create .env.local with:
NOTION_SECRET=secret_your_integration_token_here
NOTION_DATABASE_ID=your_database_id_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Restart your dev server after adding environment variables!**

### 2. "Database access failed" (403 Error)

**Cause:** Integration doesn't have access to the database

**Solution:**
1. Go to your Notion database
2. Click "Share" (top right)
3. Click "Connect to integration"
4. Select your integration
5. Click "Confirm"

### 3. "notion.databases.query is not a function"

**Cause:** Wrong import or SDK version mismatch

**Solution:**
```javascript
// ✅ Correct import
import { Client } from "@notionhq/client";

// ✅ Correct initialization
const notion = new Client({ auth: process.env.NOTION_SECRET });

// ❌ Wrong import
import notion from "@notionhq/client"; // Don't do this
```

### 4. "Invalid database_id"

**Cause:** Wrong database ID format

**Solution:**
1. Open your database in browser
2. URL looks like: `https://notion.so/workspace/DATABASE_ID?v=...`
3. Copy the long string between `/` and `?v=`
4. Should be 32 characters with dashes: `12345678-1234-1234-1234-123456789012`

### 5. "Property does not exist" Errors

**Cause:** Database properties don't match the code

**Required Properties:**
- `Title` (Title type)
- `Slug` (Rich Text type)  
- `Content` (Rich Text type)
- `Published` (Checkbox type)
- `Category` (Select type) - Optional
- `Author` (Rich Text type) - Optional
- `Excerpt` (Rich Text type) - Optional
- `Tags` (Multi-select type) - Optional
- `Thumbnail` (Files type) - Optional
- `MetaDescription` (Rich Text type) - Optional

### 6. "Blog post not found" (404)

**Causes & Solutions:**
- ✅ Check "Published" checkbox in Notion
- ✅ Ensure slug matches URL exactly (case-sensitive)
- ✅ Verify slug has no spaces or special characters
- ✅ Use kebab-case: `my-blog-post` not `My Blog Post`

### 7. Empty Blog List

**Causes & Solutions:**
- ✅ At least one post must have "Published" checked
- ✅ Posts must have a "Slug" value
- ✅ Check console logs for query results count

## Environment Variable Formats

### Development (.env.local)
```env
NOTION_SECRET=secret_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
NOTION_DATABASE_ID=12345678-1234-1234-1234-123456789012
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Production (Vercel/Netlify)
```env
NOTION_SECRET=secret_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
NOTION_DATABASE_ID=12345678-1234-1234-1234-123456789012
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## Debug Console Logs

When testing, check your terminal for these logs:

### ✅ Success Logs
```
Querying Notion database... { databaseId: '12345678-...', slug: 'test-post' }
Query results: 1
Published blogs found: 1
```

### ❌ Error Logs
```
Error fetching blogs from Notion: APIResponseError: Unauthorized
Error details: { message: 'Unauthorized', code: 'unauthorized' }
```

## Testing Your Setup

### 1. Test Database Connection
```bash
curl http://localhost:3000/api/notion-test
```

### 2. Test Blog Listing
```bash
curl http://localhost:3000/api/blogs
```

### 3. Test Individual Blog
```bash
curl http://localhost:3000/api/blogs/your-blog-slug
```

## Notion Database Setup Checklist

- [ ] Database created in Notion
- [ ] Integration created at developers.notion.com
- [ ] Database shared with integration
- [ ] All required properties added
- [ ] At least one test post created
- [ ] Test post has "Published" checked
- [ ] Test post has a slug value
- [ ] Environment variables added to .env.local
- [ ] Development server restarted

## Still Having Issues?

### Check These Common Mistakes:

1. **Wrong Property Types:**
   - Title must be "Title" type (not Rich Text)
   - Published must be "Checkbox" type (not Select)
   - Category must be "Select" type (not Rich Text)

2. **Case Sensitivity:**
   - Property names are case-sensitive
   - Use exact names: "Title", "Slug", "Published"

3. **Integration Permissions:**
   - Integration must have "Read content" permission
   - Database must be explicitly shared with integration

4. **Environment Variables:**
   - Must restart server after adding .env.local
   - Variable names must be exact: NOTION_SECRET, NOTION_DATABASE_ID

### Get Detailed Error Info:

Check your browser's Network tab or terminal logs for detailed error messages. The API now provides comprehensive error details including error type and stack traces.

## Need More Help?

1. Check the `/api/notion-test` endpoint first
2. Look at browser console and terminal logs
3. Verify all environment variables are set correctly
4. Ensure database properties match exactly
5. Test with a simple blog post first

The most common issue is forgetting to share the database with your integration! 🔗

