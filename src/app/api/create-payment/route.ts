import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, receipt, bookingData } = await request.json();

    // Initialize Razorpay instance
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_key',
      key_secret: process.env.RAZORPAY_KEY_SECRET || 'rzp_test_secret',
    });

    // Create order
    const order = await instance.orders.create({
      amount: amount * 100, // Amount in paise (₹100 = 10000 paise)
      currency: currency || 'INR',
      receipt: receipt,
      notes: {
        name: bookingData.name,
        phone: bookingData.phoneNumber,
        date: bookingData.checkingDate,
        time: bookingData.preferableTime
      }
    });

    return NextResponse.json({
      success: true,
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to create payment order' 
      }, 
      { status: 500 }
    );
  }
}
