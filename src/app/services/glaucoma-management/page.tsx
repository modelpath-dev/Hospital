import Link from 'next/link';

export default function GlaucomaManagement() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Glaucoma Management</h1>
          <p className="text-xl text-blue-100">Protecting your vision from the "silent thief of sight"</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What is Glaucoma */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What is Glaucoma?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Glaucoma is called the "silent thief of sight" because it slowly steals your vision without you noticing. 
                It happens when the pressure inside your eye gets too high and damages the nerve that sends pictures to your brain.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The scary part is that most people don't feel any pain or notice problems until they've already lost significant vision. 
                But the good news is that if we catch it early, we can usually stop it from getting worse.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Important Facts:</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Glaucoma affects over 12 million Indians</li>
                  <li>• It's the second leading cause of blindness worldwide</li>
                  <li>• Vision loss from glaucoma cannot be reversed</li>
                  <li>• BUT it can be prevented with early treatment</li>
                </ul>
              </div>
            </section>

            {/* Types of Glaucoma */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Types of Glaucoma</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🔄 Open-Angle Glaucoma (Most Common - 90%)</h3>
                  <p className="text-gray-600 mb-4">
                    This is the "sneaky" type. The drainage system in your eye gets clogged gradually, 
                    like a sink that drains slowly. You won't notice anything until vision is already damaged.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Symptoms (Late Stage):</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Loss of side vision first</li>
                        <li>• Tunnel vision</li>
                        <li>• Usually no pain</li>
                        <li>• No early warning signs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Who's at risk:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Age over 40</li>
                        <li>• Family history</li>
                        <li>• High eye pressure</li>
                        <li>• Diabetes, high blood pressure</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-red-800">🚨 Angle-Closure Glaucoma (Emergency Type)</h3>
                  <p className="text-gray-600 mb-4">
                    This is the "sudden attack" type. The drainage gets completely blocked quickly, 
                    like putting a cork in a drain. This is a medical emergency!
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Emergency Symptoms - Come Immediately:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Severe eye pain and headache</li>
                      <li>• Sudden vision loss or blurring</li>
                      <li>• Nausea and vomiting</li>
                      <li>• Seeing halos around lights</li>
                      <li>• Red, hard eye</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">👶 Other Types</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Normal-Tension Glaucoma:</h4>
                      <p className="text-sm text-gray-600">Eye pressure is normal but nerve still gets damaged</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Secondary Glaucoma:</h4>
                      <p className="text-sm text-gray-600">Caused by injury, medications, or other eye diseases</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Congenital Glaucoma:</h4>
                      <p className="text-sm text-gray-600">Present from birth, very rare</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Screening and Diagnosis */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">How We Detect Glaucoma</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since glaucoma has no early symptoms, regular eye exams are the only way to catch it early. 
                We use several painless tests to check for glaucoma.
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">👁️ Complete Glaucoma Screening Includes:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">📊 Eye Pressure Test (Tonometry):</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        We measure the pressure inside your eye. Takes just a few seconds and doesn't hurt.
                      </p>
                      <p className="text-xs text-blue-700">Normal: 10-21 mmHg</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">🔍 Optic Nerve Examination:</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        We look at the nerve at the back of your eye to see if it's damaged.
                      </p>
                      <p className="text-xs text-blue-700">Using special lenses and photos</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">📐 Visual Field Test:</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Tests your side vision to see if glaucoma has caused any vision loss.
                      </p>
                      <p className="text-xs text-blue-700">You click when you see lights</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">📸 OCT Scan:</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Takes detailed pictures of your optic nerve to detect early damage.
                      </p>
                      <p className="text-xs text-blue-700">Like CT scan for your eye</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">📏 Angle Examination:</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Checks the drainage system in your eye to see how fluid flows out.
                      </p>
                      <p className="text-xs text-blue-700">Using special contact lens</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">📝 Corneal Thickness:</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Measures thickness of the front of your eye, which affects pressure readings.
                      </p>
                      <p className="text-xs text-blue-700">Helps interpret pressure correctly</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Options */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Glaucoma Treatment Options</h2>
              <p className="text-lg text-gray-600 mb-6">
                The goal of treatment is to lower eye pressure to prevent further vision loss. 
                We usually start with the gentlest treatment and move to stronger ones if needed.
              </p>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">💧 Eye Drops (First Choice)</h3>
                  <p className="text-gray-600 mb-4">
                    Most people start with eye drops that either reduce fluid production in the eye 
                    or help fluid drain out better. Must be used daily for life.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Types of drops:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Prostaglandins (once daily)</li>
                        <li>• Beta-blockers (twice daily)</li>
                        <li>• Alpha agonists</li>
                        <li>• Carbonic anhydrase inhibitors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Important tips:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Use exactly as prescribed</li>
                        <li>• Don't miss doses</li>
                        <li>• Tell us about side effects</li>
                        <li>• Keep using even if you feel fine</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">⚡ Laser Treatment</h3>
                  <p className="text-gray-600 mb-4">
                    We use laser beams to help fluid drain better from your eye. 
                    It's done in the office and takes about 10-15 minutes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Types:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• SLT (Selective Laser Trabeculoplasty)</li>
                        <li>• ALT (Argon Laser Trabeculoplasty)</li>
                        <li>• Laser Peripheral Iridotomy</li>
                        <li>• Cyclophotocoagulation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• No cuts or stitches</li>
                        <li>• Quick recovery</li>
                        <li>• Can reduce need for drops</li>
                        <li>• Can be repeated</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">🔧 Glaucoma Surgery</h3>
                  <p className="text-gray-600 mb-4">
                    When drops and laser don't work well enough, we can create a new drainage pathway 
                    for fluid to leave your eye.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Surgical options:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Trabeculectomy (most common)</li>
                        <li>• Tube shunt surgery</li>
                        <li>• MIGS (minimally invasive)</li>
                        <li>• Cyclodestructive procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Recovery:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 1-2 hours surgery</li>
                        <li>• 4-6 weeks healing</li>
                        <li>• Regular follow-ups needed</li>
                        <li>• High success rate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Living with Glaucoma */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Living with Glaucoma</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-lg text-gray-700 mb-6">
                  Having glaucoma doesn't mean you'll go blind! With proper treatment and regular check-ups, 
                  most people keep their vision for life.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">✅ What You Can Do:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Take eye drops exactly as prescribed</li>
                      <li>• Never miss appointments</li>
                      <li>• Exercise regularly (helps lower pressure)</li>
                      <li>• Eat healthy foods</li>
                      <li>• Manage other health conditions</li>
                      <li>• Don't smoke</li>
                      <li>• Tell family members to get checked</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">⚠️ Things to Avoid:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Don't stop treatment on your own</li>
                      <li>• Avoid positions with head down for long</li>
                      <li>• Don't lift very heavy weights</li>
                      <li>• Limit caffeine</li>
                      <li>• Be careful with steroid medications</li>
                      <li>• Don't ignore new symptoms</li>
                      <li>• Don't delay follow-up visits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Risk Factors */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Who Should Get Screened?</h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">🎯 Higher Risk Groups - Need Regular Screening:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">👥 People who need annual exams:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Age 40+ (everyone)</li>
                      <li>• Family history of glaucoma</li>
                      <li>• High eye pressure</li>
                      <li>• African or Hispanic descent</li>
                      <li>• Diabetes</li>
                      <li>• High blood pressure</li>
                      <li>• Heart disease</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">🔍 People who need more frequent exams:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Previous eye injury</li>
                      <li>• Long-term steroid use</li>
                      <li>• Thin corneas</li>
                      <li>• Severe nearsightedness</li>
                      <li>• Previous eye surgery</li>
                      <li>• Suspicious optic nerve appearance</li>
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
              <h3 className="text-2xl font-bold mb-4 text-green-800">💰 Glaucoma Care Costs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Glaucoma Screening</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,500 - ₹3,000</p>
                  <p className="text-sm text-gray-600">Complete screening with all tests</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Eye Drops (Monthly)</h4>
                  <p className="text-2xl font-bold text-green-600">₹200 - ₹1,500</p>
                  <p className="text-sm text-gray-600">Depends on type and brand</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Laser Treatment</h4>
                  <p className="text-2xl font-bold text-green-600">₹15,000 - ₹25,000</p>
                  <p className="text-sm text-gray-600">Per eye, one-time treatment</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Glaucoma Surgery</h4>
                  <p className="text-2xl font-bold text-green-600">₹40,000 - ₹80,000</p>
                  <p className="text-sm text-gray-600">Per eye, includes follow-up</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Annual Monitoring</h4>
                  <p className="text-2xl font-bold text-green-600">₹2,000 - ₹4,000</p>
                  <p className="text-sm text-gray-600">Regular check-ups and tests</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Insurance:</strong> Most glaucoma treatments are covered by health insurance.
                </p>
              </div>
            </div>

            {/* Emergency Warning */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-red-800">🚨 Glaucoma Emergency</h3>
              <p className="text-red-700 mb-3">Come immediately if you have:</p>
              <ul className="space-y-2 text-red-600 text-sm">
                <li>• Severe eye pain</li>
                <li>• Sudden vision loss</li>
                <li>• Nausea and vomiting</li>
                <li>• Halos around lights</li>
                <li>• Hard, red eye</li>
              </ul>
              <div className="mt-4 p-3 bg-red-100 rounded">
                <p className="text-sm text-red-800 font-semibold">
                  ⏰ Acute glaucoma is an emergency. Come within hours to save vision!
                </p>
              </div>
            </div>

            {/* Screening Schedule */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-800">📅 Screening Schedule</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded">
                  <h4 className="font-semibold text-gray-800">Age 20-39</h4>
                  <p className="text-sm text-gray-600">Every 3-5 years (if low risk)</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <h4 className="font-semibold text-gray-800">Age 40-54</h4>
                  <p className="text-sm text-gray-600">Every 1-3 years</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <h4 className="font-semibold text-gray-800">Age 55-64</h4>
                  <p className="text-sm text-gray-600">Every 1-2 years</p>
                </div>
                <div className="p-3 bg-white rounded">
                  <h4 className="font-semibold text-gray-800">Age 65+</h4>
                  <p className="text-sm text-gray-600">Every 6-12 months</p>
                </div>
              </div>
            </div>

            {/* Treatment Success */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-green-800">📊 Treatment Success</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-1">95%</p>
                  <p className="text-sm text-gray-600">Vision preserved with early treatment</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-1">80%</p>
                  <p className="text-sm text-gray-600">Pressure controlled with drops alone</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-1">90%</p>
                  <p className="text-sm text-gray-600">Successful laser treatment</p>
                </div>
              </div>
            </div>

            {/* Book Appointment */}
            <div className="bg-blue-500 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">👁️ Glaucoma Screening</h3>
              <p className="mb-4">Don't wait for symptoms. Early detection saves vision. Get screened today!</p>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-500 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  🚨 Emergency Care
                </button>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  📅 Schedule Screening
                </button>
              </div>
            </div>

            {/* Prevention Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-800">🛡️ Prevention Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">👀</span>
                  <span>Regular eye exams after age 40</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">🏃‍♂️</span>
                  <span>Exercise regularly to lower eye pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">🥗</span>
                  <span>Eat antioxidant-rich foods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">🚭</span>
                  <span>Don't smoke</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">☕</span>
                  <span>Limit caffeine intake</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">👨‍👩‍👧‍👦</span>
                  <span>Know your family history</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
