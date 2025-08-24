import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: "👁️",
      title: "Comprehensive Eye Exams",
      description: "Complete vision assessment including visual acuity, eye pressure, and retinal examination.",
      features: ["Visual Acuity Test", "Glaucoma Screening", "Retinal Examination", "Prescription Updates"],
      link: "/services/comprehensive-eye-exams"
    },
    {
      icon: "🔍",
      title: "Cataract Surgery",
      description: "Advanced cataract removal with premium IOL implantation for crystal clear vision.",
      features: ["Phacoemulsification", "Premium IOL Options", "Laser-Assisted Surgery", "Quick Recovery"],
      link: "/services/cataract-surgery"
    },
    {
      icon: "⚡",
      title: "Retinal Treatments",
      description: "Specialized care for diabetic retinopathy, macular degeneration, and retinal disorders.",
      features: ["Anti-VEGF Injections", "Laser Photocoagulation", "Diabetic Eye Care", "Macular Treatment"],
      link: "/services/retinal-treatments"
    },
    {
      icon: "🎯",
      title: "LASIK Surgery",
      description: "Bladeless LASIK for vision correction with the latest femtosecond laser technology.",
      features: ["Bladeless LASIK", "PRK Surgery", "ICL Implantation", "Custom Ablation"],
      link: "/services/lasik-surgery"
    },
    {
      icon: "👶",
      title: "Pediatric Eye Care",
      description: "Specialized eye care for children including amblyopia and strabismus treatment.",
      features: ["Child-Friendly Exams", "Amblyopia Treatment", "Strabismus Surgery", "Vision Therapy"],
      link: "/services/pediatric-eye-care"
    },
    {
      icon: "🔬",
      title: "Glaucoma Management",
      description: "Early detection and comprehensive treatment of glaucoma to preserve vision.",
      features: ["IOP Monitoring", "Visual Field Testing", "Surgical Options", "Medication Management"],
      link: "/services/glaucoma-management"
    }
  ];

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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card bg-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={service.link} className="btn-secondary w-full text-center block">
                Learn More
              </Link>
            </div>
          ))}
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
              href="tel:+1234567890" 
              className="btn-secondary bg-white text-blue-500 hover:bg-gray-100"
            >
              Emergency Contact
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
