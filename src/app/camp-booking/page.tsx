'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CampBookingPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    checkingDate: '',
    preferableTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Google Sheets
      const response = await fetch('/api/camp-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Store booking data for payment
        localStorage.setItem('campBookingData', JSON.stringify(formData));
        
        // Redirect to payment page
        router.push('/payment');
      } else {
        alert('Failed to book session. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-2xl px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🏕️ Camp Booking Form
          </h1>
          <p className="text-gray-600">
            Fill in your details to book a free eye check-up session
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                👤 Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📱 Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="+91 98600 40607"
                required
              />
            </div>

            {/* Preferred Checking Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📅 Preferred Checking Date *
              </label>
              <input
                type="date"
                name="checkingDate"
                value={formData.checkingDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            {/* Preferred Timing */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🕐 Preferred Timing *
              </label>
              <select
                name="preferableTime"
                value={formData.preferableTime}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              >
                <option value="">Select preferred time</option>
                <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                '💳 Book Session & Proceed to Payment'
              )}
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">📋 What to Expect:</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Free comprehensive eye examination</li>
              <li>• Expert consultation with qualified doctors</li>
              <li>• Prescription and recommendations if needed</li>
              <li>• Small registration fee to confirm your slot</li>
            </ul>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <button 
            onClick={() => router.push('/')}
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampBookingPage;
