import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature, 
      bookingData 
    } = await request.json();

    // Verify payment signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'rzp_test_secret')
      .update(body.toString())
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { success: false, message: 'Payment verification failed' },
        { status: 400 }
      );
    }

    // Payment is verified, now:
    // 1. Save to Google Sheets
    // 2. Send confirmation email

    try {
      // Save to Google Sheets (if configured)
      const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...bookingData,
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            status: 'Confirmed',
            timestamp: new Date().toISOString()
          }),
        });
      }

      // Send confirmation email
      await sendConfirmationEmail(bookingData, razorpay_payment_id);

    } catch (error) {
      console.error('Post-payment processing error:', error);
      // Payment was successful, but post-processing failed
      // We still return success to avoid confusing the user
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified and booking confirmed!'
    });

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Payment verification failed' 
      }, 
      { status: 500 }
    );
  }
}

async function sendConfirmationEmail(bookingData: any, paymentId: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background-color: #f97316; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🏥 Partani Eye Care</h1>
          <p style="margin: 5px 0 0 0; font-size: 16px;">Camp Booking Confirmation</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333; text-align: center; margin-bottom: 20px;">✅ Booking Confirmed!</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">📋 Booking Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px 0; font-weight: bold; color: #555; width: 40%;">👤 Name:</td>
                <td style="padding: 10px 0; color: #333;">${bookingData.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px 0; font-weight: bold; color: #555;">📱 Phone:</td>
                <td style="padding: 10px 0; color: #333;">${bookingData.phoneNumber}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px 0; font-weight: bold; color: #555;">📅 Date:</td>
                <td style="padding: 10px 0; color: #333;">${new Date(bookingData.checkingDate).toLocaleDateString('en-IN')}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px 0; font-weight: bold; color: #555;">🕐 Time:</td>
                <td style="padding: 10px 0; color: #333;">${bookingData.preferableTime}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">💳 Payment ID:</td>
                <td style="padding: 10px 0; color: #333; font-family: monospace;">${paymentId}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #e7f3ff; padding: 15px; border-radius: 8px; border-left: 4px solid #2196F3;">
            <h4 style="color: #1976D2; margin-top: 0;">📍 Important Instructions:</h4>
            <ul style="color: #333; line-height: 1.6;">
              <li>Please arrive 15 minutes before your scheduled time</li>
              <li>Bring this confirmation email or show it on your phone</li>
              <li>Bring any previous eye prescriptions or reports</li>
              <li>The consultation includes comprehensive eye examination</li>
            </ul>
          </div>
        </div>

        <div style="background-color: #f97316; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">Thank you for choosing Partani Eye Care!</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">📍 Nashik | 📞 +91 98600 40607</p>
        </div>
      </div>
    `;

    // Send to customer
    await transporter.sendMail({
      from: `"Partani Eye Care" <${process.env.EMAIL_USER}>`,
      to: bookingData.email || bookingData.phoneNumber + '@example.com', // Use email if available
      subject: '✅ Camp Booking Confirmed - Partani Eye Care',
      html: confirmationHtml
    });

    // Send to clinic
    await transporter.sendMail({
      from: `"Partani Eye Care Website" <${process.env.EMAIL_USER}>`,
      to: 'drpartanieyecarenashik@gmail.com',
      subject: `🏕️ New Camp Booking - ${bookingData.name}`,
      html: `
        <h2>New Camp Booking Received</h2>
        <p><strong>Name:</strong> ${bookingData.name}</p>
        <p><strong>Phone:</strong> ${bookingData.phoneNumber}</p>
        <p><strong>Date:</strong> ${new Date(bookingData.checkingDate).toLocaleDateString('en-IN')}</p>
        <p><strong>Time:</strong> ${bookingData.preferableTime}</p>
        <p><strong>Payment ID:</strong> ${paymentId}</p>
        <p><strong>Status:</strong> Confirmed & Paid</p>
      `
    });

  } catch (error) {
    console.error('Email sending error:', error);
  }
}
