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
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive eye care services using advanced technology and 
            personalized treatment approaches.
          </p>
        </div>

        {/* Accordion Services */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleService(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{service.icon}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    openService === index ? 'rotate-45' : 'rotate-0'
                  }`}>
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Detailed Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        {service.details.symptoms && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-red-500 mr-2">⚠️</span>
                              Symptoms to Watch For:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.symptoms.map((symptom, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {symptom}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.conditions && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-orange-500 mr-2">🔍</span>
                              Conditions We Treat:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.conditions.map((condition, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {condition}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.whatToExpect && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-blue-500 mr-2">📋</span>
                              What to Expect:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.whatToExpect.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.ageGroups && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-purple-500 mr-2">👶</span>
                              Age Groups:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.ageGroups.map((group, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {group}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.riskFactors && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-yellow-500 mr-2">⚡</span>
                              Risk Factors:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.riskFactors.map((factor, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {factor}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        {service.details.treatments && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-green-500 mr-2">💊</span>
                              Treatment Options:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.treatments.map((treatment, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-green-500 mr-2 mt-1">✓</span>
                                  {treatment}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.causes && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-orange-500 mr-2">🔍</span>
                              Common Causes:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.causes.map((cause, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {cause}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.procedure && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-blue-500 mr-2">🔬</span>
                              Procedure Details:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.procedure.map((step, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.diagnosis && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-purple-500 mr-2">🔬</span>
                              Diagnostic Tests:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.diagnosis.map((test, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {test}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.commonIssues && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-red-500 mr-2">🚨</span>
                              Common Issues:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.commonIssues.map((issue, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-500 mr-2 mt-1">•</span>
                                  {issue}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.candidates && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-green-500 mr-2">✅</span>
                              Good Candidates:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.candidates.map((candidate, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-green-500 mr-2 mt-1">✓</span>
                                  {candidate}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.details.benefits && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                              <span className="text-green-500 mr-2">🌟</span>
                              Benefits:
                            </h4>
                            <ul className="space-y-1">
                              {service.details.benefits.map((benefit, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-green-500 mr-2 mt-1">✓</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing and Duration */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-1 flex items-center">
                            <span className="mr-2">💰</span>
                            Cost Range:
                          </h4>
                          <p className="text-green-700 font-medium">{service.details.pricing}</p>
                        </div>
                        
                        {(service.details.duration || service.details.recovery) && (
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-1 flex items-center">
                              <span className="mr-2">⏰</span>
                              {service.details.duration ? 'Duration:' : 'Recovery:'}
                            </h4>
                            <p className="text-blue-700 font-medium">
                              {service.details.duration || service.details.recovery}
                            </p>
                          </div>
                        )}

                        {service.details.prevention && (
                          <div className="bg-yellow-50 p-4 rounded-lg md:col-span-2">
                            <h4 className="font-semibold text-yellow-800 mb-1 flex items-center">
                              <span className="mr-2">🛡️</span>
                              Prevention:
                            </h4>
                            <p className="text-yellow-700 font-medium">{service.details.prevention}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Services Banner */}
        <div className="mt-12 bg-blue-500 rounded-lg p-6 md:p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">24/7 Emergency Eye Care</h3>
          
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Immediate attention for eye emergencies including sudden vision loss, 
            eye injuries, and urgent eye conditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919860040607" 
              className="btn-secondary bg-white text-blue-500 hover:bg-gray-100"
            >
              Emergency Contact: +91 98600 40607
            </a>
            <button className="btn-primary bg-blue-600 hover:bg-blue-700">
              Emergency Guidelines
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
