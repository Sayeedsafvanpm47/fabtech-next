import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration - same as booking system
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER, // bizzaura1@gmail.com
    pass: process.env.SMTP_PASS, // App password or regular password
  },
  tls: {
    rejectUnauthorized: false
  }
};

export async function POST(request) {
  try {
    const contactData = await request.json();
    console.log('Received contact form data:', contactData);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    for (const field of requiredFields) {
      if (!contactData[field]) {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate contact ID for tracking
    const contactId = `CT${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

    // Send email notification
    await sendContactEmail(contactData, contactId);

    console.log('Contact form email sent successfully');

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      contactId: contactId
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit contact form',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

async function sendContactEmail(contactData, contactId) {
  const transporter = nodemailer.createTransport(emailConfig);

  // Email content
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission - ${contactId}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .contact-details { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .message-section { background: #fee2e2; border: 1px solid #fecaca; padding: 15px; border-radius: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; }
        .label { font-weight: bold; color: #dc2626; }
        .priority { background: #fef3c7; border: 1px solid #f59e0b; padding: 10px; border-radius: 5px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Contact ID: ${contactId}</p>
        </div>
        
        <div class="content">
          <div class="contact-details">
            <h2>Contact Information</h2>
            <p><span class="label">Name:</span> ${contactData.name}</p>
            <p><span class="label">Email:</span> ${contactData.email}</p>
            ${contactData.phone ? `<p><span class="label">Phone:</span> ${contactData.phone}</p>` : ''}
            ${contactData.company ? `<p><span class="label">Company:</span> ${contactData.company}</p>` : ''}
            ${contactData.service ? `<p><span class="label">Service Interest:</span> ${contactData.service}</p>` : ''}
          </div>

          <div class="message-section">
            <h2>Message</h2>
            <div style="background: white; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${contactData.message}</div>
          </div>

          <div class="priority">
            <h2>⚡ Action Required</h2>
            <ul>
              <li><strong>Response Time:</strong> Within 2 hours (as per company policy)</li>
              <li><strong>Priority:</strong> ${contactData.service === 'Emergency Response' ? 'HIGH - Emergency Service' : 'Standard'}</li>
              <li><strong>Next Steps:</strong> Contact customer and provide consultation</li>
            </ul>
          </div>

          <div class="contact-details">
            <h2>Quick Actions</h2>
            <ul>
              <li>📞 Call customer at: ${contactData.phone || 'No phone provided'}</li>
              <li>📧 Reply to: ${contactData.email}</li>
              <li>📅 Schedule consultation if requested</li>
              <li>📋 Add to CRM system</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>This contact form was submitted through the FabTech website.</p>
          <p>Submission received at: ${new Date().toLocaleString()}</p>
          <p><strong>Remember:</strong> Respond within 2 hours to maintain service standards</p>
        </div>
      </div>
    </body>
    </html>
`;

  const mailOptions = {
    from: process.env.SMTP_USER, // bizzaura1@gmail.com
    to: 'fms@fabtechqatar.com', // Same as booking system
    subject: `New Contact Form - ${contactId} - ${contactData.name}${contactData.service ? ` (${contactData.service})` : ''}`,
    html: emailHtml,
    // Also send a copy to the sender as confirmation
    replyTo: contactData.email
  };

  await transporter.sendMail(mailOptions);

  // Send confirmation email to the customer
  const confirmationHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You for Contacting FabTech</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .info-box { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Contacting FabTech!</h1>
          <p>We've received your message</p>
        </div>
        
        <div class="content">
          <div class="info-box">
            <h2>What happens next?</h2>
            <ul>
              <li>✅ Your message has been received (Reference: ${contactId})</li>
              <li>📞 We'll contact you within 2 hours during business hours</li>
              <li>📋 Our team will review your requirements</li>
              <li>💼 We'll provide a customized solution for your needs</li>
            </ul>
          </div>

          <div class="info-box">
            <h2>Need Immediate Assistance?</h2>
            <p><strong>Emergency Hotline:</strong> (+974) 7146 0844</p>
            <p><strong>Office Phone:</strong> (+974) 5518 7619</p>
            <p><strong>Email:</strong> fms@fabtechqatar.com</p>
            <p><strong>Office Hours:</strong> Sat-Thu: 8AM-6PM</p>
          </div>

          <div class="info-box">
            <h2>Your Message Summary</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.service ? `<p><strong>Service Interest:</strong> ${contactData.service}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background: #f3f4f6; padding: 10px; border-radius: 5px; margin-top: 5px; white-space: pre-wrap;">${contactData.message}</div>
          </div>
        </div>

        <div class="footer">
          <p>Thank you for choosing FabTech for your facility management needs!</p>
          <p><strong>FabTech Qatar</strong> - Your Trusted Facility Management Partner</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const confirmationOptions = {
    from: process.env.SMTP_USER,
    to: contactData.email,
    subject: 'Thank You for Contacting FabTech - We\'ll Respond Within 2 Hours',
    html: confirmationHtml,
  };

  await transporter.sendMail(confirmationOptions);
}

