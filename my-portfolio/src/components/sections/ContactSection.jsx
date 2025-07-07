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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sumindabandarapc@gmail.com",
      link: "sumindabandarapc@gmail.com",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 751380749",
      link: "+94 751380749",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kandy,Srilanka",
      link: "https://maps.google.com/?q=Kalmunai,Eastern+Province,LK",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Coffee,
      title: "Coffee Chat",
      value: "Let's grab a virtual coffee!",
      link: "https://calendly.com/funkyboyz",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/SumindaBandara", color: "hover:text-gray-400" },
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/suminda-rathna-bandara-b66063255/", color: "hover:text-blue-400" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/funkyboyz", color: "hover:text-sky-400" },
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/suminda_bandara/", color: "hover:text-pink-400" },
    { icon: Globe, name: "Website", url: "https://funkyboyz.dev", color: "hover:text-purple-400" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border rounded-2xl 
    text-white placeholder-gray-400 transition-all duration-300 focus:outline-none
    ${focusedField === fieldName 
      ? 'border-blue-500 shadow-lg shadow-blue-500/25 bg-slate-800/80' 
      : 'border-slate-600 hover:border-slate-500'
    }
  `;

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
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
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your Name"
                    className={inputClasses('name') + ' pl-12'}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your Email"
                    className={inputClasses('email') + ' pl-12'}
                    required
                  />
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Subject"
                    className={inputClasses('subject') + ' pl-12'}
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your Message"
                    rows={6}
                    className={inputClasses('message') + ' resize-none'}
                    required
                  />
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

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span>Get In Touch</span>
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"
                      >
                        <div className={`p-3 bg-gradient-to-r ${info.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{info.title}</h4>
                          <p className="text-gray-300 text-sm">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <span>Follow Me</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group ${social.color}`}
                      >
                        <IconComponent className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-700/30 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">20+</div>
                    <div className="text-sm text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-xl">
                    <div className="text-2xl font-bold text-purple-400">24h</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-xl">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-xl">
                    <div className="text-2xl font-bold text-cyan-400">2+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContactSection;