import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message, subject, bookingType } = await request.json();

    // Create a transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // You'll need to set this in environment variables
        pass: process.env.EMAIL_PASS, // App password for Gmail
      },
    });

    // Determine colors based on booking type
    const headerColor = bookingType === 'appointment' ? '#10b981' : '#f97316'; // Green for appointment, Orange for consultation
    const accentColor = bookingType === 'appointment' ? '#10b981' : '#f97316';
    const emailTitle = bookingType ? `New ${bookingType === 'appointment' ? 'Appointment' : 'Consultation'} Request` : 'New Contact Form Submission';

    // Create structured email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background-color: ${headerColor}; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🏥 Partani Eye Care</h1>
          <p style="margin: 5px 0 0 0; font-size: 16px;">${emailTitle}</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid ${accentColor}; padding-bottom: 10px;">Patient Information</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 30%;">👤 Name:</td>
              <td style="padding: 10px 0; color: #333;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">📧 Email:</td>
              <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: ${accentColor}; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">📱 Phone:</td>
              <td style="padding: 10px 0; color: #333;"><a href="tel:${phone}" style="color: ${accentColor}; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">🏥 Service:</td>
              <td style="padding: 10px 0; color: #333; text-transform: capitalize;">${service}</td>
            </tr>
          </table>

          <h3 style="color: #333; border-bottom: 1px solid ${accentColor}; padding-bottom: 8px;">💬 ${bookingType ? (bookingType === 'appointment' ? 'Appointment' : 'Consultation') + ' Request' : 'Patient Message'}:</h3>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid ${accentColor}; margin-bottom: 20px;">
            <p style="margin: 0; line-height: 1.6; color: #333;">${message}</p>
          </div>

          <h3 style="color: #333; border-bottom: 1px solid ${accentColor}; padding-bottom: 8px;">📅 Submission Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 5px 0; font-weight: bold; color: #555; width: 30%;">Date:</td>
              <td style="padding: 5px 0; color: #333;">${new Date().toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</td>
            </tr>
            <tr>
              <td style="padding: 5px 0; font-weight: bold; color: #555;">Time:</td>
              <td style="padding: 5px 0; color: #333;">${new Date().toLocaleTimeString('en-IN')}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: ${headerColor}; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">Please respond to this ${bookingType || 'inquiry'} as soon as possible</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">📍 Partani Eye Care, Nashik | 📞 +91 98600 40607</p>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"Partani Eye Care Website" <${process.env.EMAIL_USER}>`,
      to: 'drpartanieyecarenashik@gmail.com',
      subject: subject || `🏥 New Contact Form - ${service ? service.charAt(0).toUpperCase() + service.slice(1) : 'General Inquiry'} | ${name}`,
      html: emailHtml,
      text: `
NEW CONTACT FORM SUBMISSION - PARTANI EYE CARE
============================================

PATIENT INFORMATION:
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
🏥 Service: ${service}

MESSAGE:
${message}

SUBMISSION DETAILS:
📅 Date: ${new Date().toLocaleDateString('en-IN')}
🕐 Time: ${new Date().toLocaleTimeString('en-IN')}

Please respond to this inquiry as soon as possible.

--
Partani Eye Care Website
📍 Nashik | 📞 +91 98600 40607
      `.trim()
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email. Please try again or call us directly.' 
      }, 
      { status: 500 }
    );
  }
}
