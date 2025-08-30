'use client';

import { useState } from 'react';

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const services = [
    {
      icon: "👁️",
      title: "Comprehensive Eye Exam",
      description: "Complete vision check-up to detect eye problems early.",
      symptoms: [
        "Blurry vision",
        "Eye strain", 
        "Headaches",
        "Night vision problems"
      ],
      pricing: "₹500 - ₹4,000"
    },
    {
      icon: "🔍",
      title: "Cataract Surgery",
      description: "Safe surgery to remove cloudy lens and restore clear vision.",
      symptoms: [
        "Cloudy, blurry vision",
        "Light sensitivity",
        "Seeing halos",
        "Frequent prescription changes"
      ],
      pricing: "₹25,000 - ₹2,00,000"
    },
    {
      icon: "⚡",
      title: "Retinal Treatments",
      description: "Treatment for diabetes-related eye problems and retinal diseases.",
      symptoms: [
        "Sudden vision loss",
        "Dark spots or floaters",
        "Flashing lights",
        "Curtain across vision"
      ],
      pricing: "₹1,500 - ₹1,50,000"
    },
    {
      icon: "🎯",
      title: "LASIK Surgery", 
      description: "Laser surgery to correct vision and reduce dependence on glasses.",
      symptoms: [
        "Need for glasses/contacts",
        "Blurry distance vision",
        "Difficulty with activities",
        "Eye strain from glasses"
      ],
      pricing: "₹80,000 - ₹3,00,000"
    },
    {
      icon: "👶",
      title: "Children's Eye Care",
      description: "Special eye care for babies and children up to 18 years.",
      symptoms: [
        "Crossed eyes",
        "Lazy eye",
        "Difficulty reading",
        "Squinting often"
      ],
      pricing: "₹800 - ₹50,000"
    },
    {
      icon: "🔬",
      title: "Glaucoma Treatment",
      description: "Early detection and treatment to prevent vision loss.",
      symptoms: [
        "Gradual vision loss",
        "Eye pain",
        "Seeing halos",
        "Tunnel vision"
      ],
      pricing: "₹1,500 - ₹80,000"
    }
  ];

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 text-sm">
            Expert eye care with latest technology
          </p>
        </div>

        {/* Mobile-First Accordion Services */}
        <div className="space-y-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleService(index)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 flex-1">
                  <div className="text-2xl">{service.icon}</div>
                  <h3 className="text-base font-semibold text-gray-800 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <div className={`transform transition-transform duration-300 ml-2 ${
                  openService === index ? 'rotate-45' : 'rotate-0'
                }`}>
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>

              {/* Accordion Content */}
              <div className={`transition-all duration-500 ease-in-out ${
                openService === index 
                  ? 'max-h-screen opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-4 pb-4 border-t border-gray-100">
                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed pt-3">
                    {service.description}
                  </p>

                  {/* Symptoms */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center">
                      <span className="text-red-500 mr-2">⚠️</span>
                      Warning Signs:
                    </h4>
                    <div className="space-y-2">
                      {service.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex items-center bg-red-50 rounded-lg p-3">
                          <span className="text-red-500 mr-3 text-sm">•</span>
                          <span className="text-red-700 text-sm font-medium flex-1">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-1 text-sm flex items-center">
                      <span className="mr-2">💰</span>
                      Cost Range:
                    </h4>
                    <p className="text-green-700 font-bold text-lg">{service.pricing}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact - Mobile Optimized */}
        <div className="mt-8 bg-orange-500 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-3">24/7 Emergency Eye Care</h3>
          
          <p className="text-orange-100 mb-4 text-sm">
            Immediate attention for eye emergencies
          </p>
          
          <a 
            href="tel:+919860040607" 
            className="inline-block bg-white text-orange-500 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            📞 Call: +91 98600 40607
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
