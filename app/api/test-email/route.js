import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Email configuration
    const emailConfig = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    };

    console.log('Testing email with config:', {
      host: emailConfig.host,
      port: emailConfig.port,
      user: emailConfig.auth.user,
      // Don't log password for security
    });

    const transporter = nodemailer.createTransport(emailConfig);

    // Verify connection
    await transporter.verify();

    // Send test email
    const testEmail = {
      from: process.env.SMTP_USER,
      to: 'fms@fabtechqatar.com',
      subject: 'Test Email - FabTech Booking System',
      html: `
        <h2>Email Test Successful!</h2>
        <p>This is a test email from your FabTech booking system.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.SMTP_USER}</p>
        <p>If you receive this email, your email configuration is working correctly!</p>
      `
    };

    const result = await transporter.sendMail(testEmail);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
      messageId: result.messageId,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Email test error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      code: error.code,
      command: error.command,
      details: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        // Don't expose password
      }
    }, { status: 500 });
  }
}

