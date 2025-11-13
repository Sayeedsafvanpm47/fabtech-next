# Booking System Setup Instructions

## 🚀 Quick Setup

### 1. Create Environment File
Create a `.env.local` file in the root directory with the following content:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://gzqenpdavooyghpcwgtb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cWVucGRhdm9veWdocGN3Z3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MTExMjksImV4cCI6MjA3NzM4NzEyOX0.9l83ubwVTpVCJMaA5kJxn8W1a-K3NMs2o7GHghaS-PY
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cWVucGRhdm9veWdocGN3Z3RiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTgxMTEyOSwiZXhwIjoyMDc3Mzg3MTI5fQ.KjtgpofQ4-NoWQTJFvxW0SQdRO_AMqBtKhDWtx33Npk

# Email Configuration (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=bizzaura1@gmail.com
SMTP_PASS=Fabtech@123

# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyBbX_0Hb6cELpb0URO5P4er-g9kXN5l6rw
```

### 2. Setup Supabase Database
1. Go to your Supabase project: https://gzqenpdavooyghpcwgtb.supabase.co
2. Navigate to SQL Editor
3. Run the SQL script from `supabase-schema.sql`

### 3. Test the System
1. Run `npm run dev`
2. Go to any service page (e.g., `/services/residential-deep-cleaning`)
3. Click "Book Service Now"
4. Fill out the booking form
5. Submit and check your email at fms@fabtechqatar.com

## 📧 Email Configuration

The system sends booking notifications from:
- **From:** bizzaura1@gmail.com
- **To:** fms@fabtechqatar.com
- **SMTP:** Gmail (smtp.gmail.com:587)

## 🗺️ Address Autocomplete

The booking form includes Google Maps address autocomplete:
- Restricted to Qatar addresses
- Real-time suggestions as you type
- Powered by Google Places API

## 💰 Pricing Structure

### Residential Deep Cleaning
- 1 BHK: QAR 150
- 2 BHK: QAR 250  
- 3 BHK: QAR 350
- Villa: QAR 500

### Commercial Deep Cleaning
- Small Office: QAR 200
- Medium Office: QAR 400
- Large Office: QAR 800
- Warehouse: QAR 1200

### General Cleaning
- Weekly: QAR 80
- Bi-weekly: QAR 120
- Monthly: QAR 200
- One-time: QAR 150

### Pest Control
- Apartment: QAR 120
- Villa: QAR 200
- Commercial: QAR 300
- Garden: QAR 150

### Marble Polishing
- Small Area: QAR 100
- Medium Area: QAR 200
- Large Area: QAR 350
- Full Villa: QAR 600

## 🔧 Features Implemented

✅ **Service Selection** - Choose from 5 main services
✅ **Dynamic Pricing** - Real-time cost calculation
✅ **Address Autocomplete** - Google Maps integration
✅ **Form Validation** - Comprehensive validation with Zod
✅ **Database Storage** - Supabase integration
✅ **Email Notifications** - NodeMailer with Gmail SMTP
✅ **Responsive Design** - Works on all devices
✅ **Loading States** - User-friendly loading indicators
✅ **Error Handling** - Proper error messages and fallbacks

## 🚀 Ready to Use!

The booking system is fully functional and ready to accept customer bookings. All bookings will be:
1. Saved to your Supabase database
2. Emailed to fms@fabtechqatar.com
3. Include complete customer and service details
4. Generate unique booking IDs

## 📞 Next Steps

1. Test the booking flow
2. Customize pricing if needed
3. Add more services if required
4. Set up booking management dashboard (optional)

The system is production-ready and will help streamline your booking process!

