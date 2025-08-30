'use client';

import { useRouter } from 'next/navigation';

const PaymentSuccessPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🎉 Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your eye check-up camp session has been successfully booked and payment confirmed.
          </p>

          {/* What's Next */}
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">📋 What's Next?</h2>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-green-700">Confirmation email sent to your registered contact</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-green-700">We'll call you 1 day before your appointment</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-green-700">Arrive 15 minutes before your scheduled time</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-green-700">Bring any previous eye prescriptions</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-800 mb-3">📞 Need Help?</h3>
            <p className="text-gray-600 mb-3">
              If you have any questions or need to reschedule, please contact us:
            </p>
            <div className="space-y-2">
              <a 
                href="tel:+919860040607" 
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                📞 Call: +91 98600 40607
              </a>
              <br />
              <a 
                href="mailto:drpartanieyecarenashik@gmail.com" 
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                📧 Email: drpartanieyecarenashik@gmail.com
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => router.push('/')}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              🏠 Back to Home
            </button>
            <button
              onClick={() => router.push('/camp-booking')}
              className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              📅 Book Another Session
            </button>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Thank you for choosing Partani Eye Care for your eye health needs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
