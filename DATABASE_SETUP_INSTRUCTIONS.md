# 🚨 URGENT: Database Setup Required

## The booking error occurs because the database table doesn't exist yet.

### 📋 **Step-by-Step Setup:**

#### **1. Go to Supabase Dashboard**
- Open: https://supabase.com/dashboard
- Navigate to your project: `gzqenpdavooyghpcwgtb`

#### **2. Open SQL Editor**
- Click on "SQL Editor" in the left sidebar
- Click "New Query"

#### **3. Run the Database Setup**
- Copy the entire content from `setup-database.sql`
- Paste it into the SQL Editor
- Click "Run" button

#### **4. Verify Setup**
After running the SQL, you should see:
```
Table created successfully! | 1
```

#### **5. Test the Connection**
- Start your dev server: `npm run dev`
- Visit: http://localhost:3000/api/test-db
- You should see: `{"success": true, "tableExists": true}`

#### **6. Test Booking**
- Go to any service page
- Click "Book Service Now"
- Fill out and submit the form
- Check your email at fms@fabtechqatar.com

---

## 🔧 **Alternative: Manual Table Creation**

If the SQL script doesn't work, create the table manually:

1. Go to Supabase Dashboard → Table Editor
2. Click "Create a new table"
3. Table name: `bookings`
4. Add these columns:

| Column Name | Type | Default | Required |
|-------------|------|---------|----------|
| id | int8 | Auto-increment | ✅ |
| booking_id | varchar | - | ✅ |
| customer_name | varchar | - | ✅ |
| phone_number | varchar | - | ✅ |
| email | varchar | - | ✅ |
| address | text | - | ✅ |
| service_key | varchar | - | ✅ |
| service_name | varchar | - | ✅ |
| selected_option | varchar | - | ✅ |
| selected_addons | jsonb | [] | - |
| total_cost | numeric | - | ✅ |
| preferred_date | date | - | ✅ |
| preferred_time | varchar | - | ✅ |
| special_instructions | text | '' | - |
| selected_location | jsonb | null | - |
| status | varchar | 'pending' | - |
| created_at | timestamptz | now() | - |
| updated_at | timestamptz | now() | - |

---

## 🚀 **Quick Fix Commands**

If you have Supabase CLI installed:

```bash
# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref gzqenpdavooyghpcwgtb

# Run the migration
supabase db push
```

---

## ❓ **Troubleshooting**

### Error: "Could not find table 'public.bookings'"
- **Solution:** Run the SQL setup script above

### Error: "Permission denied"
- **Solution:** Make sure you're using the service role key in your .env.local

### Error: "Invalid API key"
- **Solution:** Double-check your Supabase credentials in .env.local

---

## 📧 **Need Help?**

If you're still having issues:
1. Check the Supabase dashboard for any error messages
2. Verify your .env.local file has the correct credentials
3. Test the database connection at `/api/test-db`

The booking system will work perfectly once the database table is created!

