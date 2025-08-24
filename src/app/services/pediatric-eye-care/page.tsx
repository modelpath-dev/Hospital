import Link from 'next/link';

export default function PediatricEyeCare() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pediatric Eye Care</h1>
          <p className="text-xl text-blue-100">Specialized eye care for children from birth to 18 years</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Children Need Special Eye Care</h2>
              <p className="text-lg text-gray-600 mb-6">
                Children's eyes are still developing, and many eye problems can be fixed completely if caught early. 
                About 25% of children have vision problems that can affect their learning and development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At Partani Eye Care, we make eye exams fun and comfortable for children. Our doctors are specially 
                trained to work with kids and can detect problems even in babies who can't talk yet.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">🎯 Important to Know:</h3>
                <p className="text-yellow-700">
                  80% of learning happens through vision. Children often don't complain about vision problems 
                  because they think everyone sees the way they do.
                </p>
              </div>
            </section>

            {/* When to Bring Your Child */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">When Should Your Child Have an Eye Exam?</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">👶 Birth to 6 months</h3>
                  <p className="text-gray-600 mb-3">
                    First eye exam by pediatrician or eye doctor to check for serious eye problems like cataracts or glaucoma.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800"><strong>What we check:</strong> Eye structure, pupil response, tracking movement</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">🧒 6 months to 3 years</h3>
                  <p className="text-gray-600 mb-3">
                    Second comprehensive exam to check eye alignment, movement, and overall eye health.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800"><strong>What we check:</strong> Lazy eye, crossed eyes, focusing ability</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">🎒 3 to 5 years (Before School)</h3>
                  <p className="text-gray-600 mb-3">
                    Complete vision screening before starting school. This is crucial for learning readiness.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800"><strong>What we check:</strong> Visual acuity, color vision, depth perception</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-800">📚 School Age (6+ years)</h3>
                  <p className="text-gray-600 mb-3">
                    Annual or bi-annual exams, especially if there are learning difficulties or family history of eye problems.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800"><strong>What we check:</strong> Nearsightedness, farsightedness, astigmatism</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Problems */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Common Eye Problems in Children</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-red-800">👁️ Lazy Eye (Amblyopia)</h3>
                  <p className="text-gray-600 mb-4">
                    One eye doesn't develop normal vision. The brain starts ignoring the weaker eye. 
                    If caught early (before age 7), it can usually be fixed completely.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Signs to watch for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Eyes don't move together</li>
                        <li>• Covers or closes one eye</li>
                        <li>• Tilts head to see</li>
                        <li>• Poor depth perception</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Treatment:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Eye patching (2-6 hours daily)</li>
                        <li>• Special eye drops</li>
                        <li>• Glasses if needed</li>
                        <li>• Vision therapy exercises</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">↔️ Crossed Eyes (Strabismus)</h3>
                  <p className="text-gray-600 mb-4">
                    Eyes don't line up properly. One eye may turn in, out, up, or down. 
                    Can cause double vision and lead to lazy eye if not treated.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Types:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Eye turns inward (most common)</li>
                        <li>• Eye turns outward</li>
                        <li>• Eye turns up or down</li>
                        <li>• Intermittent turning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Treatment:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Glasses to correct vision</li>
                        <li>• Eye patching</li>
                        <li>• Eye muscle surgery</li>
                        <li>• Vision therapy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">👓 Refractive Errors</h3>
                  <p className="text-gray-600 mb-4">
                    Problems with how the eye focuses light. Include nearsightedness, farsightedness, and astigmatism.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Nearsightedness:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Can't see far clearly</li>
                        <li>• Squints at board</li>
                        <li>• Sits close to TV</li>
                        <li>• Increasing in children</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Farsightedness:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Difficulty with close work</li>
                        <li>• Eye strain/headaches</li>
                        <li>• May avoid reading</li>
                        <li>• Fatigue after schoolwork</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Astigmatism:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Blurry vision at all distances</li>
                        <li>• Eye strain</li>
                        <li>• Headaches</li>
                        <li>• Often with other errors</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-800">🌈 Color Blindness</h3>
                  <p className="text-gray-600 mb-4">
                    Difficulty seeing or distinguishing certain colors. More common in boys (8%) than girls (0.5%).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Signs:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Difficulty naming colors</li>
                        <li>• Problems with colored schoolwork</li>
                        <li>• Avoids color-based activities</li>
                        <li>• Uses wrong color names</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Management:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Inform school teachers</li>
                        <li>• Special colored glasses (some cases)</li>
                        <li>• Learning adaptations</li>
                        <li>• Career guidance later</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Warning Signs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">When to Bring Your Child Immediately</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4">🚨 Warning Signs - See a Doctor Right Away:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">👶 For Babies & Toddlers:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• White pupil (should be black)</li>
                      <li>• Eyes don't follow objects</li>
                      <li>• Constant eye turning after 4 months</li>
                      <li>• Excessive tearing</li>
                      <li>• Red, swollen eyelids</li>
                      <li>• Sensitivity to light</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">🧒 For Older Children:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Sudden vision loss</li>
                      <li>• Double vision</li>
                      <li>• Severe eye pain</li>
                      <li>• Injury to the eye</li>
                      <li>• Flashing lights or floaters</li>
                      <li>• Eye infection signs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Learning & Vision */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Vision and Learning Connection</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-lg text-gray-700 mb-6">
                  Poor vision can seriously affect your child's performance in school. Many children with learning 
                  difficulties actually have undiagnosed vision problems.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">📚 Signs of Vision-Related Learning Problems:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Difficulty reading or slow reading</li>
                      <li>• Skips lines while reading</li>
                      <li>• Uses finger to track words</li>
                      <li>• Closes one eye while reading</li>
                      <li>• Complains of headaches after schoolwork</li>
                      <li>• Poor handwriting</li>
                      <li>• Avoids close work</li>
                      <li>• Short attention span for visual tasks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">✅ How Good Vision Helps Learning:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Better reading comprehension</li>
                      <li>• Improved concentration</li>
                      <li>• Better sports performance</li>
                      <li>• Increased confidence</li>
                      <li>• Better social interaction</li>
                      <li>• Improved academic performance</li>
                      <li>• Reduced fatigue</li>
                      <li>• Better overall development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Making Exams Fun */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">How We Make Eye Exams Fun for Kids</h2>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">🎮 For Young Children (2-5 years):</h4>
                  <p className="text-gray-600">
                    We use picture charts, matching games, and toys instead of letters. 
                    Our doctors are patient and make it feel like playtime.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">📚 For School-age Children (6+ years):</h4>
                  <p className="text-gray-600">
                    We explain everything in simple terms and let them help with the examination. 
                    Many children find the equipment interesting and fun to use.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">🏆 Rewards and Encouragement:</h4>
                  <p className="text-gray-600">
                    Every child gets a small reward for being brave and cooperative during their eye exam. 
                    We celebrate their participation!
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-green-800">💰 Pediatric Eye Care Costs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Baby Eye Screening</h4>
                  <p className="text-2xl font-bold text-green-600">₹800 - ₹1,500</p>
                  <p className="text-sm text-gray-600">Birth to 2 years comprehensive check</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Preschool Eye Exam</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,200 - ₹2,000</p>
                  <p className="text-sm text-gray-600">Ages 3-5 years, school readiness</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">School-age Eye Exam</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,500 - ₹2,500</p>
                  <p className="text-sm text-gray-600">Complete examination with all tests</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Children's Glasses</h4>
                  <p className="text-2xl font-bold text-green-600">₹2,000 - ₹8,000</p>
                  <p className="text-sm text-gray-600">Durable frames + lenses</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Eye Muscle Surgery</h4>
                  <p className="text-2xl font-bold text-green-600">₹25,000 - ₹50,000</p>
                  <p className="text-sm text-gray-600">For crossed eyes/eye alignment</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Insurance:</strong> Most pediatric eye care is covered by health insurance plans.
                </p>
              </div>
            </div>

            {/* Age Guidelines */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-800">📅 Exam Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm font-medium">Birth - 6 months</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">First check</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm font-medium">6 months - 3 years</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Second check</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm font-medium">3-5 years</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Before school</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm font-medium">School age</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Annual</span>
                </div>
              </div>
            </div>

            {/* Parent Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-800">👨‍👩‍👧‍👦 Tips for Parents</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">📱</span>
                  <span>Limit screen time - follow 20-20-20 rule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">☀️</span>
                  <span>Encourage outdoor play for eye development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">🥕</span>
                  <span>Feed eye-healthy foods (carrots, leafy greens)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">👓</span>
                  <span>Make glasses cool and fun if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">👀</span>
                  <span>Watch for signs of vision problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">📚</span>
                  <span>Ensure good lighting for reading/homework</span>
                </li>
              </ul>
            </div>

            {/* Book Appointment */}
            <div className="bg-blue-500 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">👶 Children's Eye Care</h3>
              <p className="mb-4">Give your child the gift of clear vision and bright future. Early detection is key!</p>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-500 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  🎈 Schedule Fun Exam
                </button>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  📞 Parent Consultation
                </button>
              </div>
              <div className="mt-4 text-sm text-blue-100">
                <p>👨‍👩‍👧‍👦 Family discounts available for multiple children</p>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-800">🌟 Success Rate</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-1">95%</p>
                  <p className="text-sm text-gray-600">Lazy eye successfully treated when caught early</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-1">90%</p>
                  <p className="text-sm text-gray-600">Children happily wear prescribed glasses</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-1">100%</p>
                  <p className="text-sm text-gray-600">Parents satisfied with child-friendly approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
