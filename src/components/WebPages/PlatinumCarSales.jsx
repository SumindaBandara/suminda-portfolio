import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Car, Shield, Users, Award, Star, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';

const PlatinumCarSales = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const galleryImages = [
    "/assets/abc.jpeg",
    "/assets/abc1.jpeg",
    "/assets/abc2.jpeg",
    "/assets/abc3.jpeg",
    "/assets/abc4.jpeg"
  ];

  const reviews = [
    {
      name: "Raj Perera",
      rating: 5,
      text: "Excellent service and quality vehicles! The team at Platinum helped me find the perfect car within my budget. Highly recommend their customer-oriented approach.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Samantha Fernando",
      rating: 5,
      text: "Very reliable dealership. They took time to understand my needs and recommended the best options. Got a great deal on my Suzuki!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Nimal Silva",
      rating: 5,
      text: "Professional and trustworthy. Bought two vehicles from Platinum Car Sales and both times the experience was smooth and transparent. Great after-sales support too!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "Priya Jayasinghe",
      rating: 5,
      text: "Best car dealership in Matale! They have a wonderful selection and the staff is incredibly helpful. Found my dream car here!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  useEffect(() => {
    const galleryTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    const reviewTimer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => {
      clearInterval(galleryTimer);
      clearInterval(reviewTimer);
    };
  }, []);

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
            <Car className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">PLATINUM CAR SALES</h1>
              <p className="text-xs text-red-100">(PVT) LTD.</p>
            </div>
          </div>
          <a href="tel:+94771009376" className="bg-white text-red-900 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg">
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
              <h2 className="text-white text-5xl md:text-7xl font-bold mb-6 animate-slide-up delay-200 leading-tight">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Dream Car</span><br />Awaits You
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up delay-400 leading-relaxed">
                Premium vehicles, unbeatable service, and deals that drive your dreams forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-600">
                <a href="tel:+94771009376" className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-110 shadow-2xl flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  +94 77 100 9376
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
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">15+</div>
                  <div className="text-gray-400 text-sm">Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">98%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Advanced 3D Card Stack */}
            <div className="relative h-[500px] md:h-[600px] animate-fade-in delay-400">
              {/* Main Featured Car */}
              <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                <div className="relative w-full h-full animate-3d-rotate">
                  {/* Card 1 - Front */}
                  <div className="absolute w-full h-full transform-gpu rotate-y-0 animate-slide-in-right">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500/50 hover:border-red-500 transition-all duration-500 group">
                      <img 
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=800&fit=crop" 
                        alt="Luxury Car 1"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Premium Selection</h3>
                        <p className="text-gray-300">Top-tier vehicles at competitive prices</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 2 - Behind Right */}
                  <div className="absolute w-full h-full transform-gpu translate-x-8 translate-y-8 -rotate-6 scale-95 opacity-70 animate-slide-in-right delay-200">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
                      <img 
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=800&fit=crop" 
                        alt="Luxury Car 2"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Card 3 - Behind Left */}
                  <div className="absolute w-full h-full transform-gpu -translate-x-8 translate-y-8 rotate-6 scale-95 opacity-70 animate-slide-in-left delay-400">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
                      <img 
                        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=800&fit=crop" 
                        alt="Luxury Car 3"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full shadow-2xl animate-bounce-slow z-30">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-bold">Certified</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-full shadow-2xl border-2 border-red-500 animate-pulse z-30">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  <span className="font-bold">Warranty</span>
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
              { icon: Car, title: "Quality Vehicles", desc: "Wide selection of used and imported cars", delay: "0" },
              { icon: Shield, title: "Trusted Brands", desc: "Suzuki, Nissan, Mahindra & more", delay: "100" },
              { icon: Users, title: "Customer Support", desc: "Personalized vehicle consulting", delay: "200" },
              { icon: Award, title: "Best Deals", desc: "Competitive pricing & financing", delay: "300" }
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

      {/* Reviews Section */}
      <section id="section-reviews" className={`py-20 px-6 bg-gradient-to-br from-red-50 to-gray-50 ${isVisible['section-reviews'] ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">Customer Reviews</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">What Our Clients Say</p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 ${
                    idx === currentReviewIndex ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-red-600"
                    />
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{review.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>
              ))}
              
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevReview}
                  className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextReview}
                  className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentReviewIndex ? 'bg-red-600 w-8' : 'bg-gray-300'
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
                src="https://lh3.googleusercontent.com/p/AF1QipPbAnLRNYRfIovHULlzzdXp30JBbjvB58uBY19L=s1360-w1360-h1020-rw"
                alt="Car Showroom"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="animate-slide-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Us</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                <span className="font-bold text-red-600">Platinum Car Sales (Pvt) Ltd.</span> is your trusted partner in finding the perfect vehicle. Located in the heart of Matale, we specialize in providing quality used and imported vehicles from renowned brands including Suzuki, Nissan, and Mahindra.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Our reputation is built on customer-focused service, transparent dealings, and a commitment to helping you make the right choice. With years of experience in the automotive industry, we understand that buying a car is a significant decision, and we're here to guide you every step of the way.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                What sets us apart is our personalized approach – we take the time to understand your needs, budget, and preferences to recommend the best options. Our growing list of satisfied customers is a testament to our dedication to excellence.
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
            <a href="tel:+94771009376" className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
              <Phone className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Call Us</h3>
              <p className="text-red-100 text-center">+94 77 100 9376</p>
            </a>
            
            <a href="mailto:info_pcsmatale@yahoo.com" className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20">
              <Mail className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Email Us</h3>
              <p className="text-red-100 text-center break-all">info_pcsmatale@yahoo.com</p>
            </a>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <MapPin className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">Visit Us</h3>
              <p className="text-red-100 text-center">146 Kandy Road, Matale, Sri Lanka</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://facebook.com/platinumcarsales" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-4 rounded-full font-semibold hover:bg-red-50 transition-all transform hover:scale-110 shadow-lg">
              <Facebook className="w-6 h-6" />
              Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">© 2025 Platinum Car Sales (Pvt) Ltd. All rights reserved.</p>
          <p className="text-gray-500">Designed by <span className="text-red-400 font-semibold">Mindclick</span></p>
          <p className="text-gray-600 text-sm mt-2">146 Kandy Road, Matale, Matale District, Sri Lanka</p>
        </div>
      </footer>

      <style jsx>{`
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

export default PlatinumCarSales;