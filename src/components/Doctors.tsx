const Doctors = () => {
  const doctors = [
    {
      name: "Dr. [Doctor Name Placeholder]",
      specialization: "Senior Consultant Ophthalmologist",
      experience: "15+ Years",
      education: "MBBS, MS Ophthalmology",
      expertise: ["Cataract Surgery", "Retinal Disorders", "Glaucoma Treatment", "LASIK Surgery"],
      description: "Leading ophthalmologist with extensive experience in complex eye surgeries and patient care."
    },
    {
      name: "Dr. [Doctor Name Placeholder]",
      specialization: "Pediatric Ophthalmologist",
      experience: "12+ Years",
      education: "MBBS, MS, Fellowship in Pediatric Ophthalmology",
      expertise: ["Pediatric Eye Care", "Strabismus Surgery", "Amblyopia Treatment", "Congenital Disorders"],
      description: "Specialized in children's eye care with a gentle approach and child-friendly treatment methods."
    },
    {
      name: "Dr. [Doctor Name Placeholder]",
      specialization: "Retinal Specialist",
      experience: "10+ Years",
      education: "MBBS, MS, Fellowship in Vitreo-Retinal Surgery",
      expertise: ["Diabetic Retinopathy", "Macular Degeneration", "Retinal Detachment", "Vitrectomy"],
      description: "Expert in medical and surgical retinal treatments with focus on preserving and restoring vision."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="card bg-white">
              {/* Doctor Avatar */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
                <p className="text-gray-500 text-sm">{doctor.education}</p>
              </div>

              {/* Doctor Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Experience</span>
                    <span className="text-sm text-blue-600 font-semibold">{doctor.experience}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm">{doctor.description}</p>

                {/* CTA Button */}
                <button className="btn-secondary w-full">
                  Book Appointment
                </button>
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
