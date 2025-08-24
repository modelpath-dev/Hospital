import Link from 'next/link';

export default function RetinalTreatments() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Retinal Treatments</h1>
          <p className="text-xl text-blue-100">Advanced care for the back of your eye</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What is Retina */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What is the Retina?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Think of your retina as the "film" in your eye's camera. It's a thin layer at the back of your eye that captures light 
                and sends pictures to your brain. When the retina has problems, it can seriously affect your vision.
              </p>
              <p className="text-lg text-gray-600">
                Retinal problems are often serious and need quick treatment to prevent permanent vision loss. 
                The good news is that we have many effective treatments to help preserve and restore your sight.
              </p>
            </section>

            {/* Common Retinal Problems */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Common Retinal Problems We Treat</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🩸 Diabetic Retinopathy</h3>
                  <p className="text-gray-600 mb-3">
                    This happens when diabetes damages the small blood vessels in your retina. It's the most common cause of blindness in working-age adults.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800"><strong>Warning signs:</strong> Blurry vision, dark spots, difficulty seeing at night</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">👁️ Macular Degeneration</h3>
                  <p className="text-gray-600 mb-3">
                    The macula (center of your retina) gets damaged, making it hard to see fine details. More common in people over 60.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800"><strong>Warning signs:</strong> Blurry central vision, straight lines look wavy, dark spots in center vision</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🚨 Retinal Detachment</h3>
                  <p className="text-gray-600 mb-3">
                    The retina pulls away from the back of your eye. This is an emergency that needs immediate treatment to save your vision.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-800"><strong>Emergency signs:</strong> Sudden flashing lights, shower of dark spots, curtain across vision</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🕳️ Macular Hole</h3>
                  <p className="text-gray-600 mb-3">
                    A small hole forms in the macula, causing central vision problems. Can often be fixed with surgery.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800"><strong>Warning signs:</strong> Dark spot in center vision, distorted vision, difficulty reading</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatments */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Retinal Treatments</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">💉 Anti-VEGF Injections</h3>
                  <p className="text-gray-600 mb-4">
                    We inject medicine directly into your eye to stop abnormal blood vessel growth and reduce swelling. 
                    Don't worry - we use numbing drops so you won't feel pain.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Used for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Diabetic retinopathy</li>
                        <li>• Macular degeneration</li>
                        <li>• Retinal vein occlusion</li>
                        <li>• Macular edema</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What to expect:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 5-10 minute procedure</li>
                        <li>• Monthly injections initially</li>
                        <li>• Gradual improvement</li>
                        <li>• Regular monitoring needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">⚡ Laser Photocoagulation</h3>
                  <p className="text-gray-600 mb-4">
                    We use a special laser to seal leaking blood vessels or destroy abnormal tissue. 
                    It's like welding to fix the damaged areas in your retina.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Types:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Focal laser (spot treatment)</li>
                        <li>• Scatter laser (PRP)</li>
                        <li>• Grid laser pattern</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Stops bleeding</li>
                        <li>• Prevents further damage</li>
                        <li>• Outpatient procedure</li>
                        <li>• Quick recovery</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">🔬 Vitrectomy Surgery</h3>
                  <p className="text-gray-600 mb-4">
                    We remove the gel (vitreous) from inside your eye and fix retinal problems. 
                    This is used for more serious retinal conditions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">When needed:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Retinal detachment</li>
                        <li>• Macular hole</li>
                        <li>• Severe diabetic retinopathy</li>
                        <li>• Eye injuries</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Recovery:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 1-2 hours surgery</li>
                        <li>• 2-6 weeks recovery</li>
                        <li>• May need face-down position</li>
                        <li>• High success rate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Diabetic Eye Care */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Special Focus: Diabetic Eye Care</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>If you have diabetes, regular eye check-ups can save your vision!</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">📅 Recommended Schedule:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Type 1 Diabetes:</strong> Annual exams after 5 years</li>
                      <li>• <strong>Type 2 Diabetes:</strong> Annual exams from diagnosis</li>
                      <li>• <strong>Pregnancy + Diabetes:</strong> Each trimester</li>
                      <li>• <strong>Diabetic retinopathy:</strong> Every 3-6 months</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">🎯 Prevention Tips:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Keep blood sugar controlled</li>
                      <li>• Control blood pressure</li>
                      <li>• Don't smoke</li>
                      <li>• Exercise regularly</li>
                      <li>• Take medications as prescribed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-green-800">💰 Treatment Costs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Retinal Consultation</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,500 - ₹2,500</p>
                  <p className="text-sm text-gray-600">Includes detailed retinal examination</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Anti-VEGF Injection</h4>
                  <p className="text-2xl font-bold text-green-600">₹25,000 - ₹40,000</p>
                  <p className="text-sm text-gray-600">Per injection (3-6 injections usually needed)</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Laser Treatment</h4>
                  <p className="text-2xl font-bold text-green-600">₹15,000 - ₹30,000</p>
                  <p className="text-sm text-gray-600">Per session (may need multiple sessions)</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Vitrectomy Surgery</h4>
                  <p className="text-2xl font-bold text-green-600">₹80,000 - ₹1,50,000</p>
                  <p className="text-sm text-gray-600">Complete surgical treatment</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Insurance:</strong> Most treatments are covered by health insurance. Check with your provider.
                </p>
              </div>
            </div>

            {/* Emergency Warning */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-red-800">🚨 Emergency Signs</h3>
              <p className="text-red-700 mb-3">Come immediately if you have:</p>
              <ul className="space-y-2 text-red-600 text-sm">
                <li>• Sudden vision loss</li>
                <li>• Shower of floaters</li>
                <li>• Flashing lights</li>
                <li>• Curtain across vision</li>
                <li>• Severe eye pain</li>
              </ul>
              <div className="mt-4 p-3 bg-red-100 rounded">
                <p className="text-sm text-red-800 font-semibold">
                  ⏰ Time is critical for retinal emergencies. Every hour counts!
                </p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-800">📊 Treatment Success</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">85%</p>
                  <p className="text-sm text-gray-600">Vision improvement with injections</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">90%</p>
                  <p className="text-sm text-gray-600">Successful retinal reattachment</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">95%</p>
                  <p className="text-sm text-gray-600">Prevention of further vision loss</p>
                </div>
              </div>
            </div>

            {/* Book Appointment */}
            <div className="bg-blue-500 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">👁️ Retinal Screening</h3>
              <p className="mb-4">Early detection can save your vision. Book a comprehensive retinal evaluation today.</p>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-500 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  📞 Emergency/Urgent Care
                </button>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  📅 Schedule Screening
                </button>
              </div>
            </div>

            {/* Diabetic Care */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-800">🩺 Diabetic Eye Program</h3>
              <p className="text-sm text-gray-600 mb-3">
                Special comprehensive program for diabetic patients with regular monitoring and preventive care.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Annual dilated eye exams</li>
                <li>• OCT scans for early detection</li>
                <li>• Blood sugar counseling</li>
                <li>• Priority emergency care</li>
              </ul>
              <div className="mt-4">
                <p className="text-lg font-semibold text-orange-600">Package: ₹5,000/year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
