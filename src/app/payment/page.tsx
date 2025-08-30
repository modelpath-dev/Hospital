'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Load booking data from localStorage
    const data = localStorage.getItem('campBookingData');
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      // Redirect back if no booking data
      router.push('/camp-booking');
    }

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [router]);

  const handlePayment = async () => {
    if (!bookingData) return;

    setIsProcessing(true);

    try {
      // Create Razorpay order
      const orderResponse = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 100, // ₹100 registration fee
          currency: 'INR',
          receipt: `camp_${Date.now()}`,
          bookingData
        }),
      });

      const order = await orderResponse.json();

      if (!order.success) {
        throw new Error('Failed to create payment order');
      }

      // Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_key', // Replace with your key
        amount: order.amount,
        currency: order.currency,
        name: 'Partani Eye Care',
        description: 'Eye Check-up Camp Registration',
        image: '/favicon.ico',
        order_id: order.id,
        handler: async function (response: any) {
          // Payment successful
          try {
            // Verify payment
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingData
              }),
            });

            const result = await verifyResponse.json();

            if (result.success) {
              // Clear localStorage
              localStorage.removeItem('campBookingData');
              
              // Redirect to success page
              router.push('/payment-success');
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            alert('Payment completed but verification failed. Please contact us.');
          }
        },
        prefill: {
          name: bookingData.name,
          contact: bookingData.phoneNumber,
        },
        notes: {
          address: 'Partani Eye Care, Nashik'
        },
        theme: {
          color: '#f97316'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to initiate payment. Please try again.');
    }

    setIsProcessing(false);
  };

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading booking details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-2xl px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            💳 Payment for Camp Booking
          </h1>
          <p className="text-gray-600">
            Complete your registration with a small fee to confirm your slot
          </p>
        </div>

        {/* Booking Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">📋 Booking Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">👤 Name:</span>
              <span className="font-medium">{bookingData.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">📱 Phone:</span>
              <span className="font-medium">{bookingData.phoneNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">📅 Date:</span>
              <span className="font-medium">{new Date(bookingData.checkingDate).toLocaleDateString('en-IN')}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">🕐 Time:</span>
              <span className="font-medium">{bookingData.preferableTime}</span>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">💰 Payment Details</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Registration Fee:</span>
              <span className="font-medium">₹100.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Processing Fee:</span>
              <span className="font-medium">₹0.00</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between py-2 text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-orange-600">₹100.00</span>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
              isProcessing 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              '🔒 Pay ₹100 & Confirm Booking'
            )}
          </button>

          {/* Security Info */}
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700 text-center">
              🔒 Secure payment powered by Razorpay • Your payment information is safe
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => router.push('/camp-booking')}
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            ← Back to Booking Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
