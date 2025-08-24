import Link from 'next/link';

export default function ComprehensiveEyeExams() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Eye Exams</h1>
          <p className="text-xl text-blue-100">Complete vision assessment for healthy eyes</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What is it */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What is a Comprehensive Eye Exam?</h2>
              <p className="text-lg text-gray-600 mb-6">
                A comprehensive eye exam is like a complete health check-up for your eyes. It's much more than just checking if you need glasses. 
                Our doctors examine every part of your eye to make sure they are healthy and working properly.
              </p>
              <p className="text-lg text-gray-600">
                Think of it as a detailed inspection of your precious eyes - from the front surface to the back of your eye, 
                we check everything to catch any problems early and keep your vision sharp.
              </p>
            </section>

            {/* What we check */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What Do We Check?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">👁️ Visual Acuity Test</h3>
                  <p className="text-gray-600">We check how clearly you can see at different distances using the eye chart. This tells us if you need glasses or contact lenses.</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">📊 Eye Pressure Check</h3>
                  <p className="text-gray-600">We measure the pressure inside your eyes to screen for glaucoma - a serious condition that can cause blindness if not treated early.</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🔍 Retinal Examination</h3>
                  <p className="text-gray-600">We look at the back of your eye (retina) to check for problems like diabetes damage, blood vessel issues, or other eye diseases.</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">📋 Prescription Updates</h3>
                  <p className="text-gray-600">If you wear glasses or contacts, we'll check if your current prescription is still right for you or if it needs updating.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What Happens During Your Visit?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Registration & History (10 mins)</h4>
                    <p className="text-gray-600">We'll ask about your eye health, any problems you're having, and your family's eye history.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Vision Tests (15 mins)</h4>
                    <p className="text-gray-600">We'll test your vision with different charts and check how your eyes work together.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Eye Health Examination (20 mins)</h4>
                    <p className="text-gray-600">The doctor will examine your eyes using special instruments to check for any problems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Results & Recommendations (10 mins)</h4>
                    <p className="text-gray-600">We'll explain what we found and recommend any treatment or follow-up care if needed.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Who needs it */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Who Should Get Regular Eye Exams?</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>Everyone above 40 years:</strong> Should get checked every 1-2 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>People with diabetes:</strong> Should get checked every year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>Family history of eye problems:</strong> Should start regular check-ups early</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>People who wear glasses/contacts:</strong> Should get checked every 1-2 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>Anyone with eye problems:</strong> Should get checked immediately</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-green-800">💰 Pricing (Indian Standards)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Basic Eye Exam</h4>
                  <p className="text-2xl font-bold text-green-600">₹500 - ₹800</p>
                  <p className="text-sm text-gray-600">Includes vision test & basic eye check</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Comprehensive Exam</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,200 - ₹2,000</p>
                  <p className="text-sm text-gray-600">Includes all tests + detailed retinal exam</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Advanced Screening</h4>
                  <p className="text-2xl font-bold text-green-600">₹2,500 - ₹4,000</p>
                  <p className="text-sm text-gray-600">Includes OCT scan & specialized tests</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Good News:</strong> Many insurance plans cover annual eye exams. Check with your insurance provider!
                </p>
              </div>
            </div>

            {/* Book Appointment */}
            <div className="bg-blue-500 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">📅 Book Your Eye Exam</h3>
              <p className="mb-4">Ready to take care of your eyes? Book your comprehensive eye exam today!</p>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-500 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  📞 Call Now: [Phone Number]
                </button>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  💻 Book Online
                </button>
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-800">🚨 When to Come Immediately</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Sudden vision loss</li>
                <li>• Severe eye pain</li>
                <li>• Flashing lights or floaters</li>
                <li>• Eye injury</li>
                <li>• Double vision</li>
              </ul>
              <p className="mt-4 text-sm text-red-600">
                Don't wait for an appointment - come immediately or call our emergency line!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
