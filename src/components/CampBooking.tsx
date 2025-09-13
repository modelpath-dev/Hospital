'use client';

import Link from 'next/link';

const CampBooking = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              👁️ Eye Care Consultation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Schedule your professional eye examination with our experienced doctors
            </p>
          </div>

          {/* Camp Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Doctors</h3>
              <p className="text-sm text-gray-600">Experienced eye specialists</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-800 mb-2">Professional Service</h3>
              <p className="text-sm text-gray-600">Quality care with consultation fees</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-gray-800 mb-2">Community Centers</h3>
              <p className="text-sm text-gray-600">Convenient local locations</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Schedule Your Eye Consultation
            </h3>
            <p className="text-gray-600 mb-6">
              Book your appointment for professional eye care services
            </p>
            
            <Link 
              href="/camp-booking"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              📅 Book Appointment
            </Link>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>✅ Professional consultation • ✅ Expert diagnosis • ✅ Treatment recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampBooking;
