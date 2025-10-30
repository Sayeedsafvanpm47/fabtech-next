import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import nodemailer from 'nodemailer';

// Initialize Supabase client
const supabase = createServerClient();

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER, // bizzaura1@gmail.com
    pass: process.env.SMTP_PASS, // Fabtech@123
  },
  tls: {
    rejectUnauthorized: false
  }
};

export async function POST(request) {
  try {
    const bookingData = await request.json();
    console.log('Received booking data:', bookingData);
    
    // Validate required fields
    const requiredFields = ['customerName', 'phoneNumber', 'email', 'address', 'serviceKey', 'selectedOption'];
    for (const field of requiredFields) {
      if (!bookingData[field]) {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate booking ID
    const bookingId = `BK${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

    // Prepare booking data for database
    const dbBookingData = {
      booking_id: bookingId,
      customer_name: bookingData.customerName,
      phone_number: bookingData.phoneNumber,
      email: bookingData.email,
      address: bookingData.address,
      service_key: bookingData.serviceKey,
      service_name: bookingData.serviceName,
      selected_option: bookingData.selectedOption,
      selected_addons: bookingData.selectedAddOns || [],
      total_cost: bookingData.totalCost,
      preferred_date: bookingData.preferredDate,
      preferred_time: bookingData.preferredTime,
      special_instructions: bookingData.specialInstructions || '',
      selected_location: bookingData.selectedLocation,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Save to Supabase
    console.log('Attempting to save to database:', dbBookingData);
    const { data, error } = await supabase
      .from('bookings')
      .insert([dbBookingData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save booking to database', details: error.message },
        { status: 500 }
      );
    }

    console.log('Successfully saved to database:', data);

    // Send email notification
    try {
      await sendBookingEmail(bookingData, bookingId);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the entire request if email fails
    }

    return NextResponse.json({
      success: true,
      bookingId,
      message: 'Booking created successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendBookingEmail(bookingData, bookingId) {
  const transporter = nodemailer.createTransport(emailConfig);

  // Email content
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Booking Request - ${bookingId}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .booking-details { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .cost-summary { background: #fee2e2; border: 1px solid #fecaca; padding: 15px; border-radius: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; }
        .label { font-weight: bold; color: #dc2626; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Service Booking</h1>
          <p>Booking ID: ${bookingId}</p>
        </div>
        
        <div class="content">
          <div class="booking-details">
            <h2>Customer Information</h2>
            <p><span class="label">Name:</span> ${bookingData.customerName}</p>
            <p><span class="label">Phone:</span> ${bookingData.phoneNumber}</p>
            <p><span class="label">Email:</span> ${bookingData.email}</p>
            <p><span class="label">Address:</span> ${bookingData.address}</p>
          </div>

          <div class="booking-details">
            <h2>Service Details</h2>
            <p><span class="label">Service:</span> ${bookingData.serviceName}</p>
            <p><span class="label">Option:</span> ${bookingData.selectedOption}</p>
            ${bookingData.selectedAddOns && bookingData.selectedAddOns.length > 0 ? 
              `<p><span class="label">Add-ons:</span> ${bookingData.selectedAddOns.join(', ')}</p>` : ''
            }
            <p><span class="label">Preferred Date:</span> ${bookingData.preferredDate}</p>
            <p><span class="label">Preferred Time:</span> ${bookingData.preferredTime}</p>
            ${bookingData.specialInstructions ? 
              `<p><span class="label">Special Instructions:</span> ${bookingData.specialInstructions}</p>` : ''
            }
          </div>

          <div class="cost-summary">
            <h2>Cost Summary</h2>
            <p style="font-size: 18px; font-weight: bold; color: #dc2626;">
              Total Amount: QAR ${bookingData.totalCost}
            </p>
          </div>

          <div class="booking-details">
            <h2>Next Steps</h2>
            <ul>
              <li>Contact the customer within 2 hours to confirm the booking</li>
              <li>Verify the service details and address</li>
              <li>Schedule the service team</li>
              <li>Send confirmation to the customer</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>This booking was submitted through the FabTech website.</p>
          <p>Booking received at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER, // sales@fabtechqatar.com
    to: 'fms@fabtechqatar.com',
    subject: `New Service Booking - ${bookingId} - ${bookingData.serviceName}`,
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
}

// GET method to retrieve bookings (optional, for admin panel)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit')) || 50;

    let query = supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch bookings' },
        { status: 500 }
      );
    }

    return NextResponse.json({ bookings: data });

  } catch (error) {
    console.error('Get bookings error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
