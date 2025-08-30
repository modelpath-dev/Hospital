import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');

    // Create a transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test the connection
    await transporter.verify();
    console.log('SMTP connection verified successfully!');

    // Send a simple test email
    const mailOptions = {
      from: `"Partani Eye Care Website" <${process.env.EMAIL_USER}>`,
      to: 'drpartanieyecarenashik@gmail.com',
      subject: '🧪 Email Test - Partani Eye Care Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #f97316;">✅ Email Test Successful!</h2>
          <p>This is a test email to verify that your contact form email system is working properly.</p>
          <hr>
          <p><strong>Configuration:</strong></p>
          <ul>
            <li>From: ${process.env.EMAIL_USER}</li>
            <li>To: drpartanieyecarenashik@gmail.com</li>
            <li>Time: ${new Date().toLocaleString('en-IN')}</li>
          </ul>
          <p style="color: #28a745;"><strong>✅ Email system is working correctly!</strong></p>
        </div>
      `,
      text: `
Email Test Successful!

This is a test email to verify that your contact form email system is working properly.

Configuration:
- From: ${process.env.EMAIL_USER}
- To: drpartanieyecarenashik@gmail.com
- Time: ${new Date().toLocaleString('en-IN')}

✅ Email system is working correctly!
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully!');

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully!',
      details: {
        from: process.env.EMAIL_USER,
        to: 'drpartanieyecarenashik@gmail.com',
        time: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Email test failed:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Email test failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}
