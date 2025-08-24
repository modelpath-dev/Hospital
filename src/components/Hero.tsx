import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="hero-bg py-16 md:py-24">
      <div className="container-max">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Vision is Our
            <span className="block text-cyan-300">Mission</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Experience comprehensive eye care with the latest technology and compassionate service. 
            Your clear vision starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#contact" className="btn-primary">
              Book Consultation
            </Link>
            <Link href="#services" className="btn-secondary">
              Our Services
            </Link>
          </div>

          {/* Stats - Enhanced with better contrast and animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="group relative">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    10K+
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    Happy Patients
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-green-600 group-hover:text-green-700 transition-colors duration-300">
                    15+
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    Years Experience
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                    2
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    Expert Doctors
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                    50+
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    Services
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
