import React, { useState, useEffect } from 'react';
import { Phone, Package, Truck, Wrench, MapPin, ArrowRight, Star, Globe, Shield, Clock, Menu, X, ChevronRight } from 'lucide-react';

export default function CarGalleryLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Truck className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: "Premium Vehicle Import",
      description: "Access to luxury cars, sports vehicles, and motorcycles from international markets with full documentation support"
    },
    {
      icon: <Package className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: "Global Export Services",
      description: "Seamless export solutions connecting Sri Lankan vehicles to buyers worldwide with complete logistics handling"
    },
    {
      icon: <Wrench className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: "Genuine Spare Parts",
      description: "Authentic OEM parts for all vehicle types and machinery, sourced directly from manufacturers"
    }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />, text: "Trusted & Licensed" },
    { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />, text: "Global Network" },
    { icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />, text: "Fast Processing" },
    { icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />, text: "Premium Service" }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', title: 'Luxury Sports Car', category: 'Import' },
    { url: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80', title: 'Premium SUV', category: 'Export' },
    { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', title: 'Classic Collection', category: 'Import' },
    { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80', title: 'Modern Sedan', category: 'Export' },
    { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', title: 'Sports Performance', category: 'Import' },
    { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', title: 'Executive Class', category: 'Export' }
  ];

  const menuItems = ['Services', 'Gallery', 'About', 'Contact'];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">CAR GALLERY</h1>
                <p className="text-xs text-blue-400">KANDY</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors font-medium">
                  {item}
                </a>
              ))}
              <a 
                href="tel:+94777003092"
                className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call Now</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-black/98 backdrop-blur-lg border-t border-blue-900/20 px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:+94777003092"
              className="block bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Advanced Animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')",
            transform: `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-grid" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.4) 2px, transparent 2px), linear-gradient(90deg, rgba(59, 130, 246, 0.4) 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + Math.sin(scrollY * 0.01) * 20}% ${50 + Math.cos(scrollY * 0.01) * 20}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <div className="inline-block px-4 sm:px-6 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-4 sm:mb-6">
              <span className="text-blue-300 font-semibold tracking-wide text-xs sm:text-sm">LUXURY AUTOMOTIVE SPECIALISTS</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none animate-slide-up">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              CAR GALLERY
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 sm:mt-4 text-blue-400 animate-pulse-glow">KANDY</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-gray-300 font-light max-w-4xl mx-auto leading-relaxed px-4">
            Where Dreams Meet Reality in Vehicle Import & Export Excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <a 
              href="tel:+94777003092"
              className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-lg sm:text-xl font-bold overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-blue-500/50 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">+94 777 003 092</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {features.slice(0, 2).map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-blue-300 bg-blue-900/20 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                  {feature.icon}
                  <span className="text-xs sm:text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="text-white mb-2 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-white font-semibold text-xs sm:text-base">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Premium Services
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Comprehensive solutions tailored for discerning automotive enthusiasts
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''} space-y-4 sm:space-y-6`}>
                  <div className="text-blue-400 mb-4 sm:mb-6 transform hover:scale-110 transition-transform inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">{service.description}</p>
                  <button className="group flex items-center gap-2 sm:gap-3 text-blue-400 font-semibold text-base sm:text-lg hover:gap-4 sm:hover:gap-5 transition-all">
                    Learn More 
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''} relative group overflow-hidden rounded-2xl`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={index === 0 ? 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800&q=80' : index === 1 ? 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80' : 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80'}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                    <div className="bg-blue-600/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                      <p className="text-white font-bold text-sm sm:text-base">Professional & Reliable</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Gallery Section */}
      <section id="gallery" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-black to-blue-950/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Our Collection
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our curated selection of premium vehicles
            </p>
          </div>

          {/* Advanced Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((item, i) => (
              <div 
                key={i} 
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                } ${i === 3 ? 'lg:col-span-2' : ''}`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/10] sm:aspect-auto sm:h-full' : i === 3 ? 'aspect-square lg:aspect-[21/10]' : 'aspect-square'}`}>
                  <img 
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold text-white">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm sm:text-base font-semibold">View Details</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <button className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105">
              View Full Collection
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Excellence in Every Transaction
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Car Gallery Kandy (Pvt) Ltd stands as Kandy's premier destination for luxury vehicle import and export services. We don't just move vehicles—we deliver dreams across borders.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                With an extensive global network and years of expertise, we specialize in connecting discerning clients with their perfect vehicles. From exotic sports cars to reliable family vehicles, motorcycles to heavy machinery parts—we handle it all with unmatched professionalism.
              </p>
              <div className="flex items-start gap-3 sm:gap-4 bg-blue-950/30 p-4 sm:p-6 rounded-xl border border-blue-500/20">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg sm:text-xl mb-2 text-blue-300">Visit Our Showroom</p>
                  <p className="text-sm sm:text-base text-gray-300">No. 298, Colombo Road, Pilimathalawa, Kandy</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Showroom"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section - Premium Animated Design */}
      <section className="relative min-h-screen bg-black overflow-hidden px-4 sm:px-6">
        {/* Aurora / Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/30 blur-[160px] rounded-full animate-pulse-slow" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full animate-pulse-slow" style={{animationDelay: '1s'}} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
          
          {/* Top Content */}
          <div className="pt-24 sm:pt-32 text-center space-y-6 z-20">
            {/* Icon Badge */}
            <div className="inline-flex flex-col items-center gap-4 animate-fade-in-down">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-shadow duration-500">
                <Truck className="w-12 h-12 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-widest">
                  CAR GALLERY
                </h3>
                <p className="text-blue-400 text-sm tracking-wider">KANDY</p>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight animate-fade-in-up">
              Find Your Next
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Premium Vehicle
              </span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Hand-picked luxury vehicles with unmatched quality and performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <a
                href="tel:+94777003092"
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Book Test Drive
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition backdrop-blur-sm"
              >
                View Collection
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Car Showcase */}
          <div
            className="relative z-10 flex justify-center items-end gap-4 sm:gap-6 lg:gap-10 pb-16 mt-16"
          >
            {/* Left Car */}
            <div className="relative w-1/3 max-w-[260px] animate-slide-in-left hover:-translate-y-4 hover:scale-110 transition-all duration-500 cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6Fce9ucDm4OLU10DdFvpn4xUWuyqNkecSw&s"
                alt="Luxury Car"
                className="w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </div>

            {/* Center Featured Car */}
            <div className="relative w-1/3 max-w-[320px] -mt-10 animate-slide-in-up hover:-translate-y-6 hover:scale-110 transition-all duration-500 cursor-pointer">
              <img
                src="https://www.shutterstock.com/image-vector/front-car-silhouette-rear-white-600nw-2404578461.jpg"
                alt="Featured Car"
                className="w-full drop-shadow-[0_50px_120px_rgba(0,0,0,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              {/* Featured Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-601 to-blue-500 px-4 py-1 rounded-full text-white text-sm font-bold shadow-lg animate-bounce-slow">
                FEATURED
              </div>
            </div>

            {/* Right Car */}
            <div className="relative w-1/3 max-w-[260px] animate-slide-in-right hover:-translate-y-4 hover:scale-110 transition-all duration-500 cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAppyJj7tCM6-nh_tC-rlRXCjECVLaIAgBA&s"
                alt="Premium Car"
                className="w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </div>
          </div>

          {/* Footer Brand */}
          <div className="pb-6 flex justify-center z-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="font-semibold tracking-wide">
                Car Gallery Kandy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">Ready to Start Your Journey?</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-blue-100">Let's make your automotive dreams a reality</p>
          <a 
            href="tel:+94777003092"
            className="inline-flex items-center gap-3 sm:gap-4 bg-white text-blue-600 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-xl sm:text-2xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
          >
            <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-base sm:text-xl">Call Now: +94 777 003 092</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 sm:py-16 px-4 sm:px-6 border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                CAR GALLERY KANDY
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">(PVT) LTD</p>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">Your trusted partner in premium vehicle import and export services.</p>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">Contact</h4>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">No. 298, Colombo Road</p>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">Pilimathalawa, Kandy</p>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">Sri Lanka</p>
              <a href="tel:+94777003092" className="text-blue-400 font-semibold hover:text-blue-300 text-sm sm:text-base">
                +94 777 003 092
              </a>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Vehicle Import</li>
                <li>Vehicle Export</li>
                <li>Motorcycle Trading</li>
                <li>Spare Parts Supply</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm sm:text-base">© 2025 Car Gallery Kandy (Pvt) Ltd. All rights reserved.</p>
            <p className="text-gray-600 text-sm sm:text-base">
              Designed with excellence by <span className="text-blue-400 font-bold">Mindclick</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes grid {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-grid {
          animation: grid 20s linear infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        .animate-slide-in-up {
          animation: slide-in-up 1s ease-out;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}