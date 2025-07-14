import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageCircle,
  Globe,
  Calendar,
  Coffee
} from 'lucide-react';

const ModernContactSection = () => {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const contactInfo = [/* unchanged */];
  const socialLinks = [/* unchanged */];

  const inputClasses = (fieldName) => `
    w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border rounded-2xl 
    text-white placeholder-gray-400 transition-all duration-300 focus:outline-none
    ${focusedField === fieldName 
      ? 'border-blue-500 shadow-lg shadow-blue-500/25 bg-slate-800/80' 
      : 'border-slate-600 hover:border-slate-500'
    }
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "f92d23d2-5491-4b38-b56c-57a11fc7367c"); // Replace this!

    const json = JSON.stringify(Object.fromEntries(formData));

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      e.target.reset(); // clear form
    } else {
      setFormStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* background divs same as before */}
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Whether you need development expertise or marketing strategy, I'm here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    className={inputClasses('name') + ' pl-12'}
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className={inputClasses('email') + ' pl-12'}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    className={inputClasses('subject') + ' pl-12'}
                    required
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    className={inputClasses('message') + ' resize-none'}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Message */}
                {formStatus.message && (
                  <div className={`flex items-center space-x-2 p-4 rounded-xl ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30' 
                      : 'bg-red-500/20 border border-red-500/30'
                  }`}>
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    )}
                    <p className={`text-sm ${formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {formStatus.message}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information / Social / Stats — all unchanged */}
          {/* Just keep your original components here as-is */}
        </div>
      </div>
    </section>
  );
};

export default ModernContactSection;
