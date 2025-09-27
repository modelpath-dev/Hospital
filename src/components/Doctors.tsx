'use client';

import { useState } from 'react';

const Doctors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const doctors = [
    {
      name: "Dr. Sharad Partani",
      designation: "Director",
      specialization: "Cataract, Refractive, Glaucoma, Oculoplasty And Squint Surgeon",
      experience: "22+ Years",
      education: "MBBS, DO, MS, FIOS (UK)",
      expertise: ["Cataract Surgery", "Refractive Surgery", "Glaucoma Treatment", "Oculoplasty", "Squint Surgery", "Pediatric Cataract"],
      description: "Dr. Sharad Partani has been dedicated to ophthalmology since 2002, with over 22 years of invaluable experience. He completed his postgraduate studies at Government Medical College, Nagpur, and received special training in Oculoplasty surgeries at Norfolk And Norwich University, UK.",
      achievements: [
        "Over 70,000 complex eye surgeries performed",
        "Unique pain-free cataract surgery technique",
        "Master of Pediatric Cataract and Squint surgeries", 
        "2000+ lid and lacrimal surgeries completed"
      ],
      experience_details: [
        "MS at Sri Sadguru Netra Chikitsalaya, Chitrakoot",
        "HOD at Ayodhya Eye Hospital, Ayodhya", 
        "CMO and HOD at Vasan Eye Care Hospitals",
        "Senior Consultant at Dr Agarwal Eye Hospital",
        "Senior Consultant at Chaitanya Eye Hospital, Kerala"
      ]
    },
    {
      name: "Dr. Sarika Sharad Partani",
      designation: "Consultant Ophthalmologist",
      specialization: "Comprehensive Eye Care",
      experience: "10+ Years",
      education: "MBBS, DGO, DOMS",
      expertise: ["General Ophthalmology", "Eye Examinations", "Medical Eye Care", "Preventive Eye Care"],
      description: "Dr. Sarika Sharad Partani completed her graduation from the prestigious Government Medical College, Solapur. She initially pursued DGO from Jalgaon, but driven by her passion for ophthalmology, she completed her postgraduation in ophthalmology (DOMS) from Aurangabad.",
      achievements: [
        "Dedicated to comprehensive eye care",
        "Expert in medical ophthalmology",
        "Passionate about preventive eye care",
        "Experienced in patient-centered care"
      ],
      experience_details: [
        "Consultant Ophthalmologist at Nashik",
        "Specialized training in comprehensive eye care",
        "Focus on medical ophthalmology",
        "Community eye health advocate"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <section id="doctors" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
            👨‍⚕️ Meet Our Expert Doctors
          </h2>
          
          <p className="text-gray-600 max-w-lg mx-auto text-sm">
            Our team of highly qualified ophthalmologists brings years of experience 
            and expertise to provide you with the best possible eye care.
          </p>
        </div>

        {/* Mobile Carousel - Hidden on larger screens */}
        <div className="md:hidden relative max-w-sm mx-auto">
          {/* Doctor Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mx-2">
            {/* Doctor Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">{doctors[currentSlide].name}</h3>
              <p className="text-orange-600 font-semibold text-sm mb-2">{doctors[currentSlide].designation}</p>
              <p className="text-blue-600 text-sm font-medium mb-2">{doctors[currentSlide].education}</p>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                {doctors[currentSlide].experience} Experience
              </div>
            </div>

            {/* Specialization */}
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm font-medium text-center">
                {doctors[currentSlide].specialization}
              </p>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {doctors[currentSlide].description}
              </p>
            </div>

            {/* Expertise Pills */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">🏥 Expertise</h4>
              <div className="flex flex-wrap gap-1">
                {doctors[currentSlide].expertise.slice(0, 4).map((skill, idx) => (
                  <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">🏆 Highlights</h4>
              <ul className="space-y-1">
                {doctors[currentSlide].achievements.slice(0, 3).map((achievement, idx) => (
                  <li key={idx} className="text-xs text-gray-600 flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Slide Indicators */}
        <div className="md:hidden flex justify-center mt-6 space-x-2">
          {doctors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide 
                  ? 'bg-orange-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Desktop Side by Side Layout - Hidden on mobile */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                {/* Doctor Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-2">{doctor.designation}</p>
                  <p className="text-blue-600 text-sm font-medium mb-2">{doctor.education}</p>
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {doctor.experience} Experience
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm font-medium text-center">
                    {doctor.specialization}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doctor.description}
                  </p>
                </div>

                {/* Expertise Pills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">🏥 Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {doctor.expertise.slice(0, 4).map((skill, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">🏆 Highlights</h4>
                  <ul className="space-y-1">
                    {doctor.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
