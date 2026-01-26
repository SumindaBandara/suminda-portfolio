import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Car, Shield, Users, Award, Star, Facebook, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const CeyloneCarSale = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // --- DATA DEFINITIONS ---

  const galleryImages = [
    "/assets/Car5.jpg",
    "/assets/Car1.jpg",
    "/assets/Car2.jpg",
    "/assets/Car3.jpg",
    "/assets/Car4.jpg"
  ];

  const reviews = [
    {
      name: "Raj Perera",
      rating: 5,
      text: "Excellent service and quality vehicles! The team at Ceylon Car Sales helped me find the perfect SUV within my budget. Highly recommend their customer-oriented approach.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Samantha Fernando",
      rating: 5,
      text: "Very reliable dealership in Malabe. They took time to understand my needs and recommended the best reconditioned options. Got a great deal!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Nimal Silva",
      rating: 5,
      text: "Professional and trustworthy. Bought two vehicles from Ceylon Car Sales and both times the experience was smooth and transparent. Great after-sales support too!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "Priya Jayasinghe",
      rating: 5,
      text: "Best car dealership I've visited! They have a wonderful selection of sedans and the staff is incredibly helpful. Found my dream car here!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  // NOTE: Ensure these URLs are publicly accessible image links (ending in .jpg, .png etc usually work best)
  const customerMoments = [
    { img: "https://lh3.googleusercontent.com/p/AF1QipNafOazwniptRLmJE0p_doTXQHRqTclMQ51RpAj=s1360-w1360-h1020-rw", caption: "Happy Customer from Kandy" },
    { img: "https://lh3.googleusercontent.com/p/AF1QipO1BcaH9A4BP0g1Ak1dccU0-uWBkIM7ewCXMXKY=s1360-w1360-h1020-rw", caption: "New Car Delivery" },
    { img: "https://lh3.googleusercontent.com/p/AF1QipOMyeHWCwQpje8Xdwm5ZHTX6_2sbrEVax9cOvWu=s1360-w1360-h1020-rw", caption: "Thank you for trusting us!" },
    { img: "https://lh3.googleusercontent.com/p/AF1QipPvPDvh803Y3axMmH2HrXhM5EeqFIUHDX1UN82S=s1360-w1360-h1020-rw", caption: "Thank you for trusting us!" },
  ];

  // --- TIMERS & EFFECTS ---

  useEffect(() => {
    // 1. Gallery Timer
    const galleryTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    // 2. Review Timer
    const reviewTimer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    // 3. Client Moments Timer (Moved inside here to fix lag)
    const momentTimer = setInterval(() => {
      setCurrentMomentIndex((prev) => (prev + 1) % customerMoments.length);
    }, 4500);

    // Cleanup all timers when component unmounts
    return () => {
      clearInterval(galleryTimer);
      clearInterval(reviewTimer);
      clearInterval(momentTimer);
    };
  }, [galleryImages.length, reviews.length, customerMoments.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // --- NAVIGATION HANDLERS ---

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 to-red-700 text-white py-4 px-6 shadow-lg fixed w-full top-0 z-50 animate-slide-down">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Round Logo with Lighting Animation */}
            <div className="relative">
               <img
                 // REPLACE YOUR IMAGE PATH HERE
                 src="/assets/logo.png"
                 alt="Ceylon Car Sales Logo"
                 className="h-14 w-14 rounded-full object-cover border-2 border-white/30 animate-lighting bg-white"
               />
            </div>
            <div>
              <h1 className="text-2xl font-bold uppercase">Ceylon Car Sales</h1>
              <p className="text-xs text-red-100">Your Trusted Auto Partner</p>
            </div>
          </div>
          <a href="tel:+94768178686" className="bg-white text-red-900 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg">
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-black to-gray-900/50 z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-red-500 rounded-full animate-float-random"
                  style={{
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 10 + 10}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left animate-fade-in">
              <div className="inline-block bg-red-600/20 border border-red-500 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-slide-up backdrop-blur-sm">
                🏆 Sri Lanka's Trusted Dealership
              </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-6 animate-slide-up delay-200 leading-tight text-white">
                    Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Dream Car</span>
                    <br />
                    Awaits You
                    </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up delay-400 leading-relaxed">
                Brand new, reconditioned, and pre-owned vehicles with unbeatable service and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-600">
                <a href="tel:+94768178686" className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-110 shadow-2xl flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  +94 76 817 8686
                </a>
                <a href="#contact" className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-900 transition-all transform hover:scale-110 shadow-2xl">
                  Explore Now
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 animate-slide-up delay-800">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Cars Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">4.7</div>
                  <div className="text-gray-400 text-sm">Star Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Transparent</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Modern Carousel Showcase */}
            <div className="relative h-[500px] md:h-[600px] animate-fade-in delay-400">
              {/* Main Carousel Container */}
              <div className="relative w-full h-full">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Carousel Images */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  {[
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop"
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="absolute inset-0 transition-all duration-1000 ease-in-out"
                      style={{
                        opacity: idx === (currentImageIndex % 3) ? 1 : 0,
                        transform: idx === (currentImageIndex % 3) ? 'scale(1)' : 'scale(1.1)',
                      }}
                    >
                      <img 
                        src={img}
                        alt={`Featured Car ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-red-900/30"></div>
                    </div>
                  ))}
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Premium Collection</h3>
                      <p className="text-gray-200 mb-4">Discover luxury vehicles at unbeatable prices</p>
                      <div className="flex gap-2">
                        {[0, 1, 2].map((idx) => (
                          <div
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              idx === (currentImageIndex % 3) ? 'w-12 bg-red-500' : 'w-6 bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white opacity-10 blur-2xl animate-pulse delay-1000"></div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full shadow-2xl animate-bounce-slow z-30">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-bold">Verified</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-full shadow-2xl border-2 border-red-500 animate-pulse z-30">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  <span className="font-bold">After-Sales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="section-services" className={`py-20 px-6 bg-gray-50 ${isVisible['section-services'] ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Excellence in Every Aspect</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Car, title: "Wide Variety", desc: "SUVs, Sedans, and Hatchbacks available", delay: "0" },
              { icon: Shield, title: "Condition Choice", desc: "Brand new, Reconditioned & Pre-owned", delay: "100" },
              { icon: Users, title: "Expert Consult", desc: "Guidance for families & first-time buyers", delay: "200" },
              { icon: Award, title: "Trusted", desc: "4.69-star reputation & transparent pricing", delay: "300" }
            ].map((service, idx) => (
              <div 
                key={idx}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-red-600 animate-slide-up`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <service.icon className="w-16 h-16 text-red-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="section-gallery" className={`py-20 px-6 bg-white ${isVisible['section-gallery'] ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">Our Collection</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Browse Our Premium Vehicles</p>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl relative h-96 md:h-[600px]">
              {galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Car ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />
              ))}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-red-900" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-red-900" />
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Happy Customers Section */}
      <section id="section-reviews" className={`py-20 px-6 bg-gradient-to-br from-red-50 to-gray-50 ${isVisible['section-reviews'] ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Stories</h2>
            <p className="text-gray-600 text-lg">Real feedback from our happy family</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN: The Text Reviews */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center border border-gray-100 relative overflow-hidden">
                {/* Decorative Quote Mark */}
                <div className="absolute top-4 right-8 text-9xl text-red-50 font-serif leading-none opacity-50">"</div>
                
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-700 ease-in-out ${
                      idx === currentReviewIndex ? 'opacity-100 translate-x-0 absolute inset-0 p-8 md:p-12 flex flex-col justify-center' : 'opacity-0 translate-x-10 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-red-500 shadow-md"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{review.name}</h4>
                        <div className="flex gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed italic relative z-10">
                      "{review.text}"
                    </p>
                  </div>
                ))}

                {/* Navigation Buttons for Reviews */}
                <div className="absolute bottom-8 left-12 flex gap-4 z-20">
                    <button onClick={prevReview} className="p-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={nextReview} className="p-2 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Large Customer Delivery Photos */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
               {/* Lighting/Flash Animation on container */}
               <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-transparent z-10 pointer-events-none"></div>

               {customerMoments.map((moment, idx) => (
                 <div
                   key={idx}
                   className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                     idx === currentMomentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                   }`}
                 >
                   <img
                     src={moment.img}
                     alt="Happy Customer"
                     className="w-full h-full object-cover"
                     // Add error handling to hide broken images (optional improvement)
                     onError={(e) => {e.target.style.display='none'}} 
                   />
                   
                   {/* Caption Overlay */}
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 pt-24">
                     <div className="transform translate-y-0 transition-transform duration-500">
                       <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                          OFFICIAL DELIVERY
                       </span>
                       <p className="text-white text-xl font-bold">{moment.caption}</p>
                     </div>
                   </div>
                 </div>
               ))}

               {/* Progress Bar for Photos */}
               <div className="absolute top-6 right-6 flex gap-2 z-20">
                  {customerMoments.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === currentMomentIndex ? 'w-8 bg-red-500' : 'w-4 bg-white/50'
                      }`} 
                    />
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="section-about" className={`py-20 px-6 bg-white ${isVisible['section-about'] ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipNbOJkZJyIcEAWt1qGVO66Hv0aEAkVCWe78Jh2e=s1360-w1360-h1020-rw"
                alt="Car Showroom"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="animate-slide-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Us</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                <span className="font-bold text-red-600">Ceylon Car Sales</span> is your trusted partner in finding the perfect vehicle. Located at <span className="font-semibold">49C, 13 New Kandy Rd, Kothalawala, Malabe</span>, we specialize in providing quality brand-new, reconditioned, and pre-owned vehicles.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Our reputation is built on customer-focused service, transparent dealings, and a commitment to helping you make the right choice. Whether you are looking for an SUV, Sedan, or Hatchback, we are here to guide you every step of the way.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                What sets us apart is our personalized approach – we take the time to understand your needs, budget, and preferences to recommend the best options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-red-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-center text-red-100 mb-12 text-lg">Visit Us or Contact Us Today</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a href="tel:+94768178686" className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
              <Phone className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Call Us</h3>
              <p className="text-red-100 text-center">0117 144 448<br/>+94 76 817 8686</p>
            </a>
            
            <a href="mailto:info@ceyloncarsales.lk" className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
              <Mail className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Email Us</h3>
              <p className="text-red-100 text-center break-all">info@ceyloncarsales.lk</p>
            </a>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <MapPin className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Visit Us</h3>
              <p className="text-red-100 text-center">49C, 13 New Kandy Rd,<br/>Kothalawala, Malabe 10640</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
            <a href="https://www.facebook.com/profile.php?id=61550304535175&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-4 rounded-full font-semibold hover:bg-red-50 transition-all transform hover:scale-110 shadow-lg">
              <Facebook className="w-6 h-6" />
              Follow Us on Facebook
            </a>
            <a href="http://ceyloncarsales.lk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-900 transition-all transform hover:scale-110 shadow-lg">
              <Globe className="w-6 h-6" />
              Visit Website
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <a 
              href="https://www.google.com/maps/place/Ceylon+Car+Sales/data=!4m2!3m1!1s0x0:0x36602673b99ef2ab?sa=X&ved=1t:2428&ictx=111" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group block cursor-pointer"
            >
              {/* Static Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                {/* Map Pattern/Grid */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(10)].map((_, i) => (
                    <div key={`h${i}`} className="absolute w-full h-px bg-white" style={{ top: `${i * 10}%` }}></div>
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <div key={`v${i}`} className="absolute h-full w-px bg-white" style={{ left: `${i * 10}%` }}></div>
                  ))}
                </div>
                
                {/* Map Image Overlay */}
                <img 
                  src="/assets/map.png"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                
                {/* Center Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full animate-bounce-slow">
                  <div className="relative">
                    <MapPin className="w-16 h-16 text-red-600 fill-red-600 drop-shadow-2xl" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full blur-xl opacity-50"></div>
                  </div>
                </div>
                
                {/* Ripple Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-4 border-red-500 rounded-full animate-ping opacity-30"></div>
                </div>
              </div>
              
              {/* Overlay on Map */}
              <div className="absolute top-4 left-4 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-10">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="font-bold">Malabe, Sri Lanka</span>
              </div>
              
              {/* Address Info Card */}
              <div className="absolute bottom-20 left-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 p-4 rounded-xl shadow-xl">
                <h4 className="font-bold text-lg mb-1">Ceylon Car Sales</h4>
                <p className="text-gray-600 text-sm flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  49C, 13 New Kandy Rd, Kothalawala, Malabe 10640
                </p>
              </div>
              
              
              
              {/* Hover Instruction */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg">
                  Click to Open in Google Maps
                </div>
              </div>
            </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">© 2026 Ceylon Car Sales. All rights reserved.</p>
          <p className="text-gray-500">Designed by <span className="text-red-400 font-semibold">Mindclick</span></p>
          <p className="text-gray-600 text-sm mt-2">49C, 13 New Kandy Rd, Kothalawala, Malabe 10640, Sri Lanka</p>
        </div>
      </footer>

      <style jsx>{`
        /* ADDED THIS MISSING ANIMATION FOR THE LOGO */
        @keyframes lighting-pulse {
          0%, 100% {
            box-shadow: 0 0 5px 0px rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.8);
            border-color: rgba(255, 255, 255, 1);
          }
        }
        
        .animate-lighting {
          animation: lighting-pulse 2s infinite ease-in-out;
        }

        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-right {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-left {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-random {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-60px) translateX(-20px);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotate-3d {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          100% {
            transform: perspective(1000px) rotateY(360deg);
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100px) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-100px) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-random {
          animation: float-random linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-3d-rotate {
          animation: rotate-3d 30s linear infinite;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }

        .delay-800 {
          animation-delay: 800ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default CeyloneCarSale;