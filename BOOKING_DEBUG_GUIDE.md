# 🔍 Booking Submission Debug Guide

## ✅ **Fixed Issues:**

1. **Added better error handling** in BookingForm.js
2. **Added validation** for required fields
3. **Added console logging** for debugging
4. **Improved API error responses** with detailed messages

## 🧪 **How to Debug Booking Issues:**

### **Step 1: Check Browser Console**
1. Open browser dev tools (F12)
2. Go to Console tab
3. Try submitting a booking
4. Look for these logs:
   - `"Submitting booking data:"` - Shows what's being sent
   - `"API response:"` - Shows server response
   - Any error messages

### **Step 2: Check Server Logs**
1. Look at your terminal where `npm run dev` is running
2. Check for these logs:
   - `"Received booking data:"` - Shows what API received
   - `"Attempting to save to database:"` - Shows database operation
   - `"Successfully saved to database:"` - Confirms success
   - Any error messages

### **Step 3: Test Database Connection**
```bash
# Test if database is working
curl http://localhost:3000/api/test-db
```
Should return: `{"success": true, "tableExists": true}`

### **Step 4: Test Email Configuration**
```bash
# Test if email is working
curl http://localhost:3000/api/test-email
```
Should return: `{"success": true}`

## 🚨 **Common Issues & Solutions:**

### **Issue 1: "Missing required field" Error**
**Cause:** Form validation failing
**Solution:** 
- Check that all required fields are filled
- Ensure service option is selected
- Verify form data structure

### **Issue 2: "Failed to save booking to database"**
**Cause:** Database connection or table issues
**Solutions:**
1. **Check .env.local file exists** with correct Supabase credentials
2. **Run database setup SQL** in Supabase dashboard
3. **Test database connection** at `/api/test-db`

### **Issue 3: Email sending fails**
**Cause:** SMTP configuration issues
**Solutions:**
1. **Check Gmail app password** is correct in .env.local
2. **Test email configuration** at `/api/test-email`
3. **Enable 2FA and generate app password** for Gmail

### **Issue 4: Form doesn't submit**
**Cause:** Client-side validation or JavaScript errors
**Solutions:**
1. **Check browser console** for JavaScript errors
2. **Ensure all required fields** are filled
3. **Check network tab** for API call status

## 📋 **Debug Checklist:**

### **Environment Setup:**
- [ ] `.env.local` file exists with all credentials
- [ ] Supabase database table created
- [ ] Gmail app password configured
- [ ] Google Maps API key working

### **Form Validation:**
- [ ] Service option selected
- [ ] All required fields filled
- [ ] Address autocomplete working
- [ ] No JavaScript errors in console

### **API Testing:**
- [ ] `/api/test-db` returns success
- [ ] `/api/test-email` returns success
- [ ] `/api/bookings` accepts POST requests

### **Database:**
- [ ] Supabase project accessible
- [ ] `bookings` table exists
- [ ] Correct permissions set

## 🔧 **Manual Testing Steps:**

1. **Start dev server:** `npm run dev`
2. **Go to booking page:** `/booking`
3. **Select a service** (e.g., Residential Deep Cleaning)
4. **Fill out form completely:**
   - Name: Test User
   - Phone: +974 5555 1234
   - Email: test@example.com
   - Address: Test Address, Doha, Qatar
   - Date: Tomorrow
   - Time: 10:00 AM
5. **Submit form**
6. **Check console logs** for debugging info
7. **Check database** for new booking record
8. **Check email** at fms@fabtechqatar.com

## 📞 **Quick Fixes:**

### **If database fails:**
```sql
-- Run this in Supabase SQL Editor
SELECT * FROM bookings LIMIT 1;
```

### **If email fails:**
- Check Gmail security settings
- Generate new app password
- Update .env.local with new password

### **If form validation fails:**
- Check all required fields are filled
- Ensure service option is selected
- Check browser console for errors

## 🎯 **Expected Success Flow:**

1. **Form submission** → Loading spinner appears
2. **Client logs** → "Submitting booking data"
3. **Server logs** → "Received booking data"
4. **Database logs** → "Successfully saved to database"
5. **Email logs** → Email sent successfully
6. **UI feedback** → Green success message
7. **Database** → New booking record created
8. **Email** → Booking notification received

The booking system should now provide detailed error messages and logging to help identify any issues!

