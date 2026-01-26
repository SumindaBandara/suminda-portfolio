import React, { useState, useEffect, useMemo } from 'react';
import { Phone, Mail, MapPin, Car, Shield, Users, Award, Star, Facebook, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

// --- UPDATE ONLY THIS OBJECT TO CHANGE THE WEBSITE CONTENT ---
const PAGE_DATA = {
  company: {
    name: "C.O.R Holdings Pvt Ltd",
    tagline: "Best Corporate Practices",
    founded: 2016,
    description: "Founded in 2016 as a construction company. This company expects to deliver best corporate practices and premium vehicle solutions.",
    logo: "/assets/logo.png", // Replace with your actual logo path
  },
  contact: {
    address: "249/1, Kaduwela Road, Malabe, Sri Lanka",
    phones: ["+94 77 554 0059", "077 751 1836"],
    email: "chamindu.r@gmail.com",
    facebook: "https://www.facebook.com/your-profile", // Update this link
    website: "https://corholdings.lk",
    mapLink: "https://maps.google.com/?q=249/1+Kaduwela+Road+Malabe",
  },
  theme: {
    primary: "bg-emerald-900",    // Dark Green
    primaryText: "text-emerald-900",
    accent: "bg-red-600",        // Red
    accentHover: "hover:bg-red-700",
    gradient: "from-emerald-900 to-emerald-800",
  },
  stats: {
    rating: 4.8,
    reviewCount: 76,
    soldCount: "500+",
  },
  reviews: [
    {
      id: 1,
      name: "Verified Customer",
      text: "There are some pretty cool cars here. Talk to them and they will run you with any detail about the rides they have. Most trustworthy car sale in Town!!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      id: 2,
      name: "Happy Buyer",
      text: "Genuine owner and great place for a best deal",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    {
      id: 3,
      name: "Local Guide",
      text: "Really genuine car retailer at Malabe area. Staff and the owner is really friendly and can recommend to anyone who wish to buy a new car",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200"
  ],
  customerMoments: [
    { img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800", caption: "Premium Quality" },
    { img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800", caption: "Trusted Deals" }
  ]
};

const CORHoldings2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Optimized Timers to prevent lag
  useEffect(() => {
    const galleryTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % PAGE_DATA.gallery.length);
    }, 5000);

    const reviewTimer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % PAGE_DATA.reviews.length);
    }, 6000);

    const momentTimer = setInterval(() => {
      setCurrentMomentIndex((prev) => (prev + 1) % PAGE_DATA.customerMoments.length);
    }, 4500);

    return () => {
      clearInterval(galleryTimer);
      clearInterval(reviewTimer);
      clearInterval(momentTimer);
    };
  }, []);

  // Intersection Observer for scroll animations
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
    document.querySelectorAll('[id^="section-"]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className={`${PAGE_DATA.theme.gradient} text-white py-4 px-6 shadow-xl fixed w-full top-0 z-50`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
             <img src={PAGE_DATA.company.logo} alt="Logo" className="h-12 w-12 rounded-full bg-white p-1" />
            <div>
              <h1 className="text-xl font-bold tracking-tight uppercase">{PAGE_DATA.company.name}</h1>
              <p className="text-[10px] text-emerald-100 opacity-80">{PAGE_DATA.company.tagline}</p>
            </div>
          </div>
          <a href={`tel:${PAGE_DATA.contact.phones[0]}`} className="bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg text-sm">
            Call Support
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-slate-950 to-red-950/30"></div>
        
        <div className="max-w-7xl mx-auto relative z-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <span className="bg-red-600/20 border border-red-500/50 text-red-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              Est. {PAGE_DATA.company.founded}
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Elite Vehicles <br/>
              <span className="text-emerald-400">Trusted Service</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              {PAGE_DATA.company.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PAGE_DATA.contact.phones[0]}`} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2">
                <Phone size={20} /> {PAGE_DATA.contact.phones[0]}
              </a>
              <a href="#section-gallery" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-900 transition-all">
                Browse Stock
              </a>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {PAGE_DATA.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Car"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="section-services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-black ${PAGE_DATA.theme.primaryText} mb-4`}>Why Choose Us?</h2>
            <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Best Practices", desc: "Corporate standards in every deal" },
              { icon: Award, title: "High Rating", desc: `${PAGE_DATA.stats.rating}/5 from ${PAGE_DATA.stats.reviewCount} happy clients` },
              { icon: MapPin, title: "Prime Location", desc: "Visit our showroom in the heart of Malabe" }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <s.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews - Refactored for Zero Lag */}
      <section id="section-reviews" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8">What People Say</h2>
              <div className="relative h-64">
                {PAGE_DATA.reviews.map((rev, idx) => (
                  <div
                    key={rev.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      idx === currentReviewIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
                  >
                    <div className="flex gap-1 mb-4 text-yellow-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-xl text-slate-700 italic mb-6">"{rev.text}"</p>
                    <div className="flex items-center gap-4">
                      <img src={rev.image} className="w-12 h-12 rounded-full border-2 border-emerald-900" alt={rev.name} />
                      <span className="font-bold text-emerald-900">{rev.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-8">
                {PAGE_DATA.reviews.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentReviewIndex(i)}
                    className={`h-2 rounded-full transition-all ${currentReviewIndex === i ? 'w-8 bg-red-600' : 'w-2 bg-slate-200'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px]">
              {PAGE_DATA.customerMoments.map((m, i) => (
                <img 
                  key={i} 
                  src={m.img} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentMomentIndex ? 'opacity-100' : 'opacity-0'}`} 
                  alt="Customer" 
                />
              ))}
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black text-white">
                <p className="font-bold text-xl">{PAGE_DATA.customerMoments[currentMomentIndex].caption}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${PAGE_DATA.theme.primary} py-24 text-white`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black mb-6">Visit Our Office</h2>
            <p className="text-emerald-100 mb-8 max-w-md">{PAGE_DATA.contact.address}</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Phone size={20}/></div>
                <div>
                  <p className="text-xs text-emerald-300">Phone</p>
                  <p className="font-bold">{PAGE_DATA.contact.phones.join(" / ")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Mail size={20}/></div>
                <div>
                  <p className="text-xs text-emerald-300">Email</p>
                  <p className="font-bold">{PAGE_DATA.contact.email}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href={PAGE_DATA.contact.facebook} className="bg-white/10 p-4 rounded-xl hover:bg-red-600 transition-colors"><Facebook /></a>
              <a href={PAGE_DATA.contact.website} className="bg-white/10 p-4 rounded-xl hover:bg-red-600 transition-colors"><Globe /></a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-2 h-[400px] shadow-2xl overflow-hidden relative group">
            <a href={PAGE_DATA.contact.mapLink} target="_blank" rel="noreferrer">
                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                    <span className="bg-emerald-900 text-white px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity">Open Google Maps</span>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                    alt="Map" 
                />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} {PAGE_DATA.company.name}. All rights reserved.</p>
          <p className="mt-2">Sri Lanka's Preferred Automobile Partner</p>
        </div>
      </footer>
    </div>
  );
};

export default CORHoldings2;