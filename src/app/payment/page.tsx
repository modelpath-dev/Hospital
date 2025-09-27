'use client';

import Link from 'next/link';

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="text-center">
          {/* Coming Soon Header */}
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="text-6xl mb-6">🚧</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Payment System Coming Soon
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're working on integrating a secure payment system for camp bookings. 
              For now, please book your session and we'll contact you for payment details.
            </p>
            
            {/* Current Process */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">
                📋 Current Booking Process
              </h3>
              <div className="text-left space-y-3">
                <div className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">1.</span>
                  <span className="text-gray-700">Fill out the camp booking form</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">2.</span>
                  <span className="text-gray-700">We'll receive your booking request via email</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">3.</span>
                  <span className="text-gray-700">Our team will contact you to confirm your appointment</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">4.</span>
                  <span className="text-gray-700">Payment can be made at the camp location</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                📞 Need Immediate Assistance?
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> +91 98600 40607
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> drpartanieyecarenashik@gmail.com
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> Shree, Kalika Plaza, Old Agra Rd, opposite Kalika Devi Temple, Shingada Talav, Mumbai Naka, Renuka Nagar, Nashik, Maharashtra 422002
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/camp-booking"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                📋 Book Camp Session
              </Link>
              <Link
                href="/"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                🏠 Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
