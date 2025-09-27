const Doctors = () => {
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

  return (
    <section id="doctors" className="py-16 md:py-20 bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Meet Our Expert Doctors
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified ophthalmologists brings years of experience 
            and expertise to provide you with the best possible eye care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {doctors.map((doctor, index) => (
            <div key={index} className="card bg-white hover:shadow-xl transition-shadow duration-300">
              {/* Doctor Header */}
              <div className="text-center mb-6 border-b border-gray-100 pb-6">
                <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-14 h-14 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-orange-600 font-semibold text-sm mb-2">{doctor.designation}</p>
                <p className="text-blue-600 font-medium mb-3">{doctor.specialization}</p>
                <p className="text-gray-600 text-sm font-medium">{doctor.education}</p>
                <div className="flex justify-center items-center mt-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {doctor.experience} Experience
                  </span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed">{doctor.description}</p>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">🏥</span> Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">🏆</span> Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {doctor.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experience Details */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">💼</span> Professional Experience
                  </h4>
                  <ul className="space-y-1">
                    {doctor.experience_details.map((exp, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="btn-secondary w-full font-semibold">
                    📅 Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center bg-blue-500 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Schedule Your Appointment</h3>
          <p className="mb-6 text-blue-100">
            Ready to experience the best in eye care? Book your appointment with our expert doctors today.
          </p>
          <div className="flex justify-center">
            <button className="btn-primary bg-white text-blue-500 hover:bg-gray-100">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
