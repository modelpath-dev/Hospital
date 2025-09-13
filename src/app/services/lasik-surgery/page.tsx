import Link from 'next/link';

export default function LasikSurgery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-500 text-white py-16">
        <div className="container-max">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-200 hover:text-white mr-4">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LASIK Surgery</h1>
          <p className="text-xl text-blue-100">Freedom from glasses and contact lenses forever</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What is LASIK */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What is LASIK Surgery?</h2>
              <p className="text-lg text-gray-600 mb-6">
                LASIK (Laser-Assisted In-Situ Keratomileusis) is a modern eye surgery that can free you from glasses and contact lenses. 
                Think of it as reshaping your eye's surface to fix vision problems like nearsightedness, farsightedness, and astigmatism.
              </p>
              <p className="text-lg text-gray-600">
                It's like getting a permanent prescription built into your eyes! The surgery is quick, safe, and most people see clearly 
                within 24 hours without needing glasses or contacts.
              </p>
            </section>

            {/* Who can get LASIK */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Are You a Good Candidate for LASIK?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">✅ Good Candidates</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Age 18-45 years</li>
                    <li>• Stable vision for 1+ years</li>
                    <li>• Healthy eyes (no diseases)</li>
                    <li>• Not pregnant or nursing</li>
                    <li>• Realistic expectations</li>
                    <li>• Power: -1 to -10 (nearsighted)</li>
                    <li>• Power: +1 to +6 (farsighted)</li>
                    <li>• Astigmatism up to 6D</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-red-800">❌ Not Suitable For</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Very high power (over -10 or +6)</li>
                    <li>• Thin corneas</li>
                    <li>• Eye diseases (glaucoma, cataracts)</li>
                    <li>• Autoimmune diseases</li>
                    <li>• Frequently changing prescription</li>
                    <li>• Unrealistic expectations</li>
                    <li>• Certain medications</li>
                    <li>• Severe dry eyes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LASIK Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">The LASIK Process - Step by Step</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Initial Consultation & Tests (1-2 hours)</h4>
                    <p className="text-gray-600">We check if you're suitable for LASIK. We measure your eyes thoroughly and answer all your questions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Pre-Surgery Preparation (1 week)</h4>
                    <p className="text-gray-600">Stop wearing contact lenses for a few days. Use prescribed eye drops to prepare your eyes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Surgery Day (10-15 minutes per eye)</h4>
                    <p className="text-gray-600">Numbing drops are applied. We create a thin flap, reshape your cornea with laser, and replace the flap. You're awake but comfortable!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Recovery (1-3 days)</h4>
                    <p className="text-gray-600">Rest your eyes, use eye drops, and avoid rubbing. Most people return to work in 1-2 days!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of LASIK */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Types of LASIK Surgery</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🔧 Traditional LASIK</h3>
                  <p className="text-gray-600 mb-3">Uses a blade to create the corneal flap. Proven and effective for most people.</p>
                  <p className="text-lg font-semibold text-green-600">₹40,000 - ₹60,000 per eye</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">⚡ Bladeless LASIK (Femto LASIK)</h3>
                  <p className="text-gray-600 mb-3">Uses femtosecond laser to create the flap. More precise and safer.</p>
                  <p className="text-lg font-semibold text-green-600">₹70,000 - ₹1,00,000 per eye</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🎯 Custom LASIK (Wavefront)</h3>
                  <p className="text-gray-600 mb-3">Personalized treatment based on your unique eye characteristics. Best quality vision.</p>
                  <p className="text-lg font-semibold text-green-600">₹1,20,000 - ₹1,50,000 per eye</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🔬 PRK/ASA</h3>
                  <p className="text-gray-600 mb-3">Surface treatment for thin corneas. No flap creation, longer healing time.</p>
                  <p className="text-lg font-semibold text-green-600">₹50,000 - ₹80,000 per eye</p>
                </div>
              </div>
            </section>

            {/* Benefits and Risks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Benefits and Considerations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">✅ Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Freedom from glasses/contacts</li>
                    <li>• Quick recovery (1-3 days)</li>
                    <li>• Long-lasting results</li>
                    <li>• Improved quality of life</li>
                    <li>• Cost-effective in long term</li>
                    <li>• Better sports performance</li>
                    <li>• High success rate (95%+)</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-800">⚠️ Possible Side Effects</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Temporary dry eyes (3-6 months)</li>
                    <li>• Night vision issues (rare)</li>
                    <li>• Under/over-correction (may need touch-up)</li>
                    <li>• Infection (very rare)</li>
                    <li>• Flap complications (rare)</li>
                    <li>• Glare or halos (temporary)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-green-800">💰 LASIK Cost (Both Eyes)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Basic LASIK</h4>
                  <p className="text-2xl font-bold text-green-600">₹80,000 - ₹1,20,000</p>
                  <p className="text-sm text-gray-600">Traditional method</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Bladeless LASIK</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,40,000 - ₹2,00,000</p>
                  <p className="text-sm text-gray-600">Femtosecond laser</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Custom LASIK</h4>
                  <p className="text-2xl font-bold text-green-600">₹2,40,000 - ₹3,00,000</p>
                  <p className="text-sm text-gray-600">Wavefront technology</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💳 EMI Available:</strong> 0% interest EMI options available. Monthly payments from ₹3,000 onwards.
                </p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-800">📊 Success Statistics</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">96%</p>
                  <p className="text-sm text-gray-600">Achieve 6/6 vision</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">99%</p>
                  <p className="text-sm text-gray-600">Patient satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">&lt;1%</p>
                  <p className="text-sm text-gray-600">Serious complications</p>
                </div>
              </div>
            </div>

            {/* Professional Assessment */}
            <div className="bg-blue-500 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">🔍 LASIK Suitability Assessment</h3>
              <p className="mb-4">Find out if you're suitable for LASIK with our comprehensive professional evaluation.</p>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-500 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  📞 Book Assessment
                </button>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  💻 Schedule Consultation
                </button>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">📅 Timeline</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-800">Day 1:</p>
                  <p className="text-gray-600">Initial consultation & tests</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Day 2-7:</p>
                  <p className="text-gray-600">Preparation (stop contacts)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Surgery Day:</p>
                  <p className="text-gray-600">15-minute procedure</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Next Day:</p>
                  <p className="text-gray-600">Check-up, usually back to work</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">1 Month:</p>
                  <p className="text-gray-600">Final check-up, full recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
