import Link from 'next/link';

export default function CataractSurgery() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cataract Surgery</h1>
          <p className="text-xl text-blue-100">Get your clear vision back with modern cataract surgery</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What is Cataract */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What is a Cataract?</h2>
              <p className="text-lg text-gray-600 mb-6">
                A cataract is like a cloudy film that forms over the lens in your eye. Think of it like a dirty window - 
                it makes everything look blurry, hazy, or less colorful. This happens naturally as we get older, 
                usually after age 60.
              </p>
              <p className="text-lg text-gray-600">
                The good news is that cataract surgery is one of the most successful surgeries in medicine. 
                It's safe, quick, and can restore your clear vision!
              </p>
            </section>

            {/* Signs you might need surgery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Signs You Might Need Cataract Surgery</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Blurry or cloudy vision</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Difficulty seeing at night</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Colors look faded or yellowish</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Seeing halos around lights</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Double vision in one eye</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Frequent changes in glasses prescription</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Difficulty reading or watching TV</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-600 mr-3">•</span>
                      <span>Problems with daily activities</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Surgery Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">How Does Cataract Surgery Work?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Don't worry - cataract surgery is much simpler than you might think! Here's what happens:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Before Surgery (1 week before)</h4>
                    <p className="text-gray-600">We'll do tests to measure your eye and choose the best artificial lens for you. You'll get eye drops to use before surgery.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Surgery Day (15-20 minutes)</h4>
                    <p className="text-gray-600">We use numbing drops so you won't feel pain. We make a tiny cut, remove the cloudy lens, and put in a new clear artificial lens.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">After Surgery (1-2 hours rest)</h4>
                    <p className="text-gray-600">You'll rest for a short time, then go home the same day. Someone should drive you home.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Recovery (2-4 weeks)</h4>
                    <p className="text-gray-600">You'll use eye drops and avoid heavy lifting. Most people see much better within a few days!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Lenses */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Types of Artificial Lenses (IOLs)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">👓 Basic Lens (Monofocal)</h3>
                  <p className="text-gray-600 mb-3">Good for distance vision. You may still need reading glasses for close work.</p>
                  <p className="text-lg font-semibold text-green-600">Covered by insurance</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">🎯 Premium Lens (Multifocal)</h3>
                  <p className="text-gray-600 mb-3">Allows you to see both far and near without glasses for most activities.</p>
                  <p className="text-lg font-semibold text-blue-600">Extra cost</p>
                </div>
              </div>
            </section>

            {/* Recovery Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Recovery Tips</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">✅ Do These Things:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Use your eye drops as prescribed</li>
                      <li>• Wear the protective eye shield while sleeping</li>
                      <li>• Keep your follow-up appointments</li>
                      <li>• Rest and relax</li>
                      <li>• Wear sunglasses outside</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">❌ Avoid These Things:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Don't rub or press your eye</li>
                      <li>• No heavy lifting (over 10 kg)</li>
                      <li>• No swimming for 2 weeks</li>
                      <li>• Don't get soap in your eye</li>
                      <li>• No strenuous exercise for 1 week</li>
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
              <h3 className="text-2xl font-bold mb-4 text-green-800">💰 Surgery Cost (Per Eye)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Basic Package</h4>
                  <p className="text-2xl font-bold text-green-600">₹25,000 - ₹40,000</p>
                  <p className="text-sm text-gray-600">Standard lens + surgery</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Premium Package</h4>
                  <p className="text-2xl font-bold text-green-600">₹60,000 - ₹1,00,000</p>
                  <p className="text-sm text-gray-600">Advanced lens + laser surgery</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Luxury Package</h4>
                  <p className="text-2xl font-bold text-green-600">₹1,20,000 - ₹2,00,000</p>
                  <p className="text-sm text-gray-600">Premium multifocal lens + laser</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Insurance:</strong> Most health insurance covers basic cataract surgery. Premium lenses may have additional cost.
                </p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-800">📊 Success Rate</h3>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
                <p className="text-gray-600">Patient satisfaction rate</p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>• Most people see better within 24 hours</p>
                <p>• Full recovery in 2-4 weeks</p>
                <p>• Very low risk of complications</p>
              </div>
            </div>

            {/* Book Appointment */}
            <div className="bg-blue-500 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">📅 Free Consultation</h3>
              <p className="mb-4">Get a free cataract evaluation and discuss your options with our expert doctors.</p>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-500 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  📞 Call for Free Consultation
                </button>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  💻 Book Online Assessment
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">❓ Common Questions</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-800">Is it painful?</p>
                  <p className="text-gray-600">No, we use numbing drops. You may feel slight pressure but no pain.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">How long does it take?</p>
                  <p className="text-gray-600">The surgery itself takes 15-20 minutes per eye.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Can both eyes be done together?</p>
                  <p className="text-gray-600">Usually we do one eye first, then the other eye 1-2 weeks later.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
