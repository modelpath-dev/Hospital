'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try API route first
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Thank you! Your message has been sent successfully. We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('API error, falling back to mailto:', error);
      
      // Fallback to mailto if API fails
      const emailSubject = `New Contact Form - ${formData.service || 'General Inquiry'}`;
      const emailBody = `
NEW CONTACT FORM SUBMISSION
============================

PATIENT INFORMATION:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🏥 Service Required: ${formData.service}

MESSAGE:
${formData.message}

SUBMISSION DETAILS:
📅 Date: ${new Date().toLocaleDateString('en-IN')}
🕐 Time: ${new Date().toLocaleTimeString('en-IN')}

Please respond to this inquiry as soon as possible.

--
Partani Eye Care Website
      `.trim();

      const mailtoLink = `mailto:drpartanieyecarenashik@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      alert('📧 Opening your email client. Please send the email to complete your inquiry.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Contact Us
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards better vision. 
            Our friendly team is here to help you with all your eye care needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98600 40607"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">General Consultation</option>
                    <option value="cataract">Cataract Surgery</option>
                    <option value="lasik">LASIK Surgery</option>
                    <option value="retinal">Retinal Treatment</option>
                    <option value="pediatric">Pediatric Eye Care</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your symptoms or questions..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  '📧 Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="text-gray-800 font-medium">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-800 font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergency</span>
                  <span className="text-gray-800 font-medium">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 text-blue-500 mr-3 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Shree Kalika Plaza, Old Agra Road</p>
                    <p className="text-gray-600">Opposite Kalika Devi Temple, Shingada Talav</p>
                    <p className="text-gray-600">Mumbai Naka, Renuka Nagar, Nashik, Maharashtra 422002</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-blue-500 mr-3 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">+91 98600 40607</p>
                    <p className="text-gray-600">Main Office & Appointments</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-blue-500 mr-3 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">info@partanieyecare.in</p>
                    <p className="text-gray-600">General Inquiries & Appointments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-red-800">Emergency Contact</h3>
              <p className="text-red-600 mb-4">For urgent eye emergencies, call us immediately:</p>
              <p className="text-2xl font-bold text-red-800">+91 98600 40607</p>
              <p className="text-sm text-red-600 mt-2">Available 24/7 for emergency eye care</p>
            </div>

            {/* Map */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Location</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.6748534447574!2d73.77582431447563!3d19.993536881472234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebb05730a739%3A0x6c8ad0a06e4c8b7e!2sDr.Partani's%20(%20Maheshwari)%20Eye%20Care%20Hospital%20Nashik!5e0!3m2!1sen!2sin!4v1735112567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Partani's Eye Care Hospital Nashik"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
