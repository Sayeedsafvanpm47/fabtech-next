# 📧 Email Configuration Fix

## ✅ **Fixed Issues:**

1. **Function Name Error:** Changed `createTransporter` to `createTransport`
2. **Gmail Configuration:** Added proper TLS settings
3. **Connection Settings:** Optimized for Gmail SMTP

## 🔧 **Gmail Setup Required**

Your Gmail account (`bizzaura1@gmail.com`) needs special configuration:

### **Option 1: App Password (Recommended)**

1. **Enable 2-Factor Authentication:**
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "FabTech Booking System"
   - Copy the 16-character password

3. **Update .env.local:**
   ```env
   SMTP_PASS=your_16_character_app_password_here
   ```

### **Option 2: Less Secure Apps (Not Recommended)**

1. Go to: https://myaccount.google.com/lesssecureapps
2. Turn ON "Allow less secure apps"
3. Keep your regular password in .env.local

## 🧪 **Test Email Configuration**

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Test email sending:**
   - Visit: http://localhost:3000/api/test-email
   - Check if you get: `{"success": true}`
   - Check fms@fabtechqatar.com for test email

3. **If successful, test booking:**
   - Go to any service page
   - Click "Book Service Now"
   - Submit a test booking
   - Check for booking email

## 🚨 **Common Gmail Issues & Solutions**

### **Error: "Invalid login"**
- **Solution:** Use App Password instead of regular password

### **Error: "Less secure app access"**
- **Solution:** Enable "Less secure apps" OR use App Password

### **Error: "Authentication failed"**
- **Solution:** Double-check email and password in .env.local

### **Error: "Connection timeout"**
- **Solution:** Check firewall/antivirus blocking port 587

## 📋 **Current Email Settings**

```javascript
Host: smtp.gmail.com
Port: 587
Security: TLS (not SSL)
Username: bizzaura1@gmail.com
Password: [from .env.local]
```

## 🔍 **Debug Steps**

1. **Check .env.local file exists and has correct values**
2. **Test email API:** `/api/test-email`
3. **Check Gmail security settings**
4. **Verify no typos in email/password**
5. **Check server logs for detailed error messages**

## ✅ **Expected Email Flow**

When booking works correctly:

1. **Customer submits booking** → Saved to database
2. **Email sent FROM:** bizzaura1@gmail.com
3. **Email sent TO:** fms@fabtechqatar.com
4. **Email contains:** Complete booking details, customer info, pricing

## 🚀 **Quick Test**

Run this to test everything:

```bash
# 1. Test database connection
curl http://localhost:3000/api/test-db

# 2. Test email sending
curl http://localhost:3000/api/test-email

# 3. If both work, try a real booking!
```

The email system will work perfectly once Gmail is properly configured!

