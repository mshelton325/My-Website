import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    // In production, you'd integrate with a form service like Formspree, Netlify Forms, etc.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-primary-100">
            Ready to build systems that protect your time, energy, and freedom? Let's start with a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What to Expect
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial Conversation</h3>
                    <p className="text-gray-600">
                      We'll discuss your current challenges, goals, and what's standing in your way.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Strategy</h3>
                    <p className="text-gray-600">
                      I'll create a tailored implementation plan based on your specific situation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                    <p className="text-gray-600">
                      You get practical, plug-and-play systems and ongoing support to ensure success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Who This Works Best For:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Independent flooring dealers (especially CCA/Carpet One)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Owners ready to implement systems (not just gather information)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">•</span>
                    <span>Businesses committed to ethical, sustainable growth</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Send Me a Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h3 className="text-lg font-semibold text-green-900">Message Sent!</h3>
                        <p className="text-green-700">I'll get back to you within 24-48 hours.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your Flooring Store"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell me about your business and what challenges you're facing..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-700 text-white py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-lg"
                    >
                      Send Message
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields
                    </p>
                  </form>
                )}
              </div>

              <div className="mt-6 text-center text-gray-600">
                <p className="text-sm">
                  Prefer email? Reach out directly at{' '}
                  <a href="mailto:matt@mattshelton.consulting" className="text-primary-700 hover:underline font-medium">
                    matt@mattshelton.consulting
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How long does implementation take?
              </h3>
              <p className="text-gray-600">
                It depends on which systems we're implementing. Some tools (like review collection scripts) can go live within days. More comprehensive programs (like full sales training ecosystems) are rolled out over weeks to ensure proper adoption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Do I need to be tech-savvy?
              </h3>
              <p className="text-gray-600">
                No. My systems are designed to be simple and practical. If you can use email and Google, you can implement these systems. Everything is plug-and-play with clear, step-by-step instructions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What if I'm not sure which service I need?
              </h3>
              <p className="text-gray-600">
                That's what the initial consultation is for. We'll discuss your challenges and goals, and I'll recommend the systems that will have the biggest impact for your specific situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Do you work with businesses outside the flooring industry?
              </h3>
              <p className="text-gray-600">
                My primary focus is independent flooring dealers because that's where I have the most hands-on experience. However, many of my systems (review marketing, sales training, operational tools) can be adapted for other home improvement industries. Let's talk and see if it's a fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
