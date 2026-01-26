import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Car, Shield, Users, Award, Star, 
  Facebook, ChevronRight, Globe, Search, ArrowRight, 
  Calendar, Gauge, Fuel, CheckCircle, Menu, X, Instagram,
  MessageCircle, Clock, Send
} from 'lucide-react';

// --- DATA SOURCE UPDATED FOR BUSINESS LANKA ---
const PAGE_DATA = {
  company: {
    name: "Business Lanka",
    full_name: "Business Lanka Car Sales",
    tagline: "Premier Quality Vehicles",
    founded: 2018, // Preserved placeholder logic
    logo: "/assets/logo.png", 
  },
  contact: {
    address: "No. 283 - A, New Kandy Rd, Kaduwela, Sri Lanka",
    phones: ["+94 76 484 0179"],
    whatsapp_number: "94764840179", 
    email: "businesslankacarsales@gmail.com",
    facebook: "https://www.facebook.com/_businesslankacarsale_",
    website: "https://ikman.lk/en/shops/business-lanka-car-sales",
    mapLink: "https://goo.gl/maps/example", 
    hours: "Open Daily: 9:00 AM onwards",
  },
  inventory: [
    {
      id: 1,
      title: "2020 Toyota Land Cruiser Prado",
      price: "LKR 48,500,000",
      mileage: "24,000 KM",
      fuel: "Diesel",
      year: "2020",
      image: "https://motorguide-store.s3.ap-southeast-1.amazonaws.com/ikman/Toyota_Land_Cruiser_Prado_2023_247c967116.jpg",
      tag: "Just Arrived"
    },
    {
      id: 2,
      title: "2019 Mercedes-Benz C200 AMG",
      price: "LKR 28,000,000",
      mileage: "18,500 KM",
      fuel: "Petrol",
      year: "2019",
      image: "https://riyasewana.com/uploads/mercedes-benz-c200-amg-2019-256433312821.jpg",
      tag: "Best Deal"
    },
    {
      id: 3,
      title: "2021 BMW 520d M-Sport",
      price: "LKR 35,200,000",
      mileage: "12,000 KM",
      fuel: "Diesel",
      year: "2021",
      image: "https://img-ik.cars.co.za/news-site-za/images/2021/10/BMW-520d-M-Sport-Review_5.jpg",
      tag: null
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Verified Customer",
      text: "Most trustworthy car sale in Town!! They will run you with any detail about the rides they have.",
      rating: 5,
    },
    {
      id: 2,
      name: "Happy Buyer",
      text: "Genuine owner and great place for a best deal. Highly recommended.",
      rating: 5,
    },
  ],
  stats: {
    sold: "500+",
    rating: "4.8",
    years: "8+"
  }
};

const corholdings2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquiry = (text) => {
    const message = text || `Hi ${PAGE_DATA.company.full_name}, I am interested in your inventory.`;
    const url = `https://wa.me/${PAGE_DATA.contact.whatsapp_number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-900 selection:text-white relative">
      
      {/* --- 1. STICKY HEADER --- */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
            : 'bg-gradient-to-r from-slate-900 to-emerald-950 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${isScrolled ? 'bg-emerald-900' : 'bg-white'}`}>
                <span className={`font-bold text-xl ${isScrolled ? 'text-white' : 'text-emerald-900'}`}>B</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl tracking-tight uppercase ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                {PAGE_DATA.company.name}
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Inventory', 'About', 'Appointment', 'Trade-In'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href={`tel:${PAGE_DATA.contact.phones[0]}`} 
              className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} className={isScrolled ? "text-black" : "text-white"} /> : <Menu size={28} className={isScrolled ? "text-black" : "text-white"} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 animate-fadeIn">
            {['Inventory', 'About', 'Appointment', 'Trade-In'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2">{item}</a>
            ))}
          </div>
        )}
      </header>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80" 
            alt="Hero Car" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-emerald-950/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-emerald-300 text-sm font-bold uppercase tracking-wider mb-6 animate-fadeIn">
            {PAGE_DATA.company.tagline}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Excellence</span> <br/>
            of Quality Vehicles.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inventory" className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-red-900/20">
              Browse Inventory
            </a>
            <a href="#appointment" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all">
              Book a Visit
            </a>
          </div>
        </div>
      </section>

      {/* --- 3. QUICK SEARCH BAR --- */}
      <div className="relative z-20 -mt-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-slate-100">
          <div className="grid md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Year</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 font-medium outline-none">
                <option>Any Year</option>
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Make</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 font-medium outline-none">
                <option>Any Make</option>
                <option>Toyota</option>
                <option>Benz</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Model</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 font-medium outline-none">
                <option>Any Model</option>
              </select>
            </div>
            <button 
                onClick={(e) => { e.preventDefault(); setIsSearchModalOpen(true); }}
                className="w-full bg-emerald-900 text-white font-bold rounded-lg px-4 py-3 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
            >
              <Search size={20} /> Search
            </button>
          </div>
        </div>
      </div>

      {/* --- 4. FEATURED INVENTORY --- */}
      <section id="inventory" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h3 className="text-emerald-900 font-bold uppercase tracking-widest text-sm mb-2">Latest Arrivals</h3>
              <h2 className="text-4xl font-black text-slate-900">Featured Inventory</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PAGE_DATA.inventory.map((car) => (
              <div key={car.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img src={car.image} alt={car.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {car.tag && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {car.tag}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold text-xl truncate">{car.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-2xl font-black text-emerald-900">{car.price}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6 text-sm text-slate-500">
                    <div className="flex flex-col items-center bg-slate-50 p-2 rounded-lg">
                      <Calendar size={16} className="mb-1 text-red-500"/> {car.year}
                    </div>
                    <div className="flex flex-col items-center bg-slate-50 p-2 rounded-lg">
                      <Gauge size={16} className="mb-1 text-red-500"/> {car.mileage}
                    </div>
                    <div className="flex flex-col items-center bg-slate-50 p-2 rounded-lg">
                      <Fuel size={16} className="mb-1 text-red-500"/> {car.fuel}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleInquiry(`Hi, I am interested in the ${car.title}`)}
                      className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-all"
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </button>
                    <a 
                      href={`tel:${PAGE_DATA.contact.phones[0]}`}
                      className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-50 transition-all"
                    >
                      <Phone size={18} /> Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" 
                        alt="Business Lanka Showroom" 
                        className="w-full h-[500px] object-cover"
                    />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-8 rounded-3xl shadow-xl animate-bounce-slow">
                    <p className="text-4xl font-black">{PAGE_DATA.stats.years}</p>
                    <p className="text-sm uppercase tracking-widest text-emerald-300 font-bold">Years of Trust</p>
                </div>
            </div>

            <div>
                <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    Driven by Quality <span className="text-emerald-800">Standards.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    <span className="font-bold text-emerald-900">{PAGE_DATA.company.full_name}</span> is a premier car sale located in Kaduwela, providing quality vehicles and professional service.
                </p>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    We bring professional practices to the automobile industry in Sri Lanka. From the moment you step into our Kaduwela showroom to the moment you drive away, you experience transparency, integrity, and the highest quality service.
                </p>

                <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
                    <div>
                        <h4 className="font-black text-3xl text-slate-900">{PAGE_DATA.stats.sold}</h4>
                        <p className="text-slate-500 text-sm">Vehicles Delivered</p>
                    </div>
                    <div>
                        <h4 className="font-black text-3xl text-slate-900">{PAGE_DATA.stats.rating}/5</h4>
                        <p className="text-slate-500 text-sm">Customer Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- 6. APPOINTMENT SECTION --- */}
      <section id="appointment" className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-sm mb-4">
                        <Calendar size={18} />
                        <span>VIP Service</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-6">Schedule a Visit</h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        We value your time. Schedule an appointment for a test drive, vehicle inspection, or a trade-in valuation. Our team will be ready for you.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                            <Clock className="text-emerald-600" size={24} />
                            <div>
                                <p className="font-bold text-slate-900">Working Hours</p>
                                <p className="text-sm text-slate-500">{PAGE_DATA.contact.hours}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                            <MapPin className="text-emerald-600" size={24} />
                            <div>
                                <p className="font-bold text-slate-900">Showroom Location</p>
                                <p className="text-sm text-slate-500">Kaduwela, Sri Lanka</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Appointment Details</h3>
                    
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
                        <input type="hidden" name="subject" value={`New Appointment Request - ${PAGE_DATA.company.name}`} />
                        
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">Your Name</label>
                            <input required type="text" name="name" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter your full name" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-500 mb-2">Phone Number</label>
                            <input required type="tel" name="phone" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+94 7X XXX XXXX" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-2">Preferred Date</label>
                                <input required type="date" name="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-2">Service Type</label>
                                <select name="service_type" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500">
                                    <option>Test Drive</option>
                                    <option>Vehicle Inspection</option>
                                    <option>Trade-In Valuation</option>
                                    <option>General Visit</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg mt-4 flex justify-center items-center gap-2">
                             Confirm Appointment <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
                  <a 
                      href={PAGE_DATA.contact.mapLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group block cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                        <div className="absolute inset-0 opacity-20">
                          {[...Array(10)].map((_, i) => (
                            <div key={`h${i}`} className="absolute w-full h-px bg-white" style={{ top: `${i * 10}%` }}></div>
                          ))}
                          {[...Array(10)].map((_, i) => (
                            <div key={`v${i}`} className="absolute h-full w-px bg-white" style={{ left: `${i * 10}%` }}></div>
                          ))}
                        </div>
                        
                        <img 
                          src="/assets/newmap2.png"
                          alt="Map Location"
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
                        />
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full animate-bounce-slow">
                          <div className="relative">
                            <MapPin className="w-16 h-16 text-red-600 fill-red-600 drop-shadow-2xl" />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full blur-xl opacity-50"></div>
                          </div>
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-32 h-32 border-4 border-red-500 rounded-full animate-ping opacity-30"></div>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-10">
                        <MapPin className="w-5 h-5 text-red-600" />
                        <span className="font-bold">Kaduwela, Sri Lanka</span>
                      </div>
                      
                      <div className="absolute bottom-20 left-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 p-4 rounded-xl shadow-xl">
                        <h4 className="font-bold text-lg mb-1">{PAGE_DATA.company.full_name}</h4>
                        <p className="text-gray-600 text-sm flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          {PAGE_DATA.contact.address}
                        </p>
                      </div>
                      
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                        <div className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg">
                          Click to Open in Google Maps
                        </div>
                      </div>
                    </a>
                </div>
      </section>

      {/* --- 7. FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <h2 className="text-2xl font-black text-white uppercase mb-4">{PAGE_DATA.company.name}</h2>
            <p className="text-sm leading-relaxed mb-6">
              Premier car sale located in Kaduwela, providing quality vehicles and unmatched customer service.
            </p>
            <div className="flex gap-4">
              <a href={PAGE_DATA.contact.facebook} className="bg-slate-800 p-2 rounded-full hover:bg-red-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-red-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href={PAGE_DATA.contact.website} className="bg-slate-800 p-2 rounded-full hover:bg-red-600 hover:text-white transition-all"><Globe size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#inventory" className="hover:text-emerald-400 transition-colors">Inventory</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#appointment" className="hover:text-emerald-400 transition-colors">Book Visit</a></li>
              <li><a href="#trade-in" className="hover:text-emerald-400 transition-colors">Trade In</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-500 shrink-0" size={18} />
                <span>{PAGE_DATA.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-500 shrink-0" size={18} />
                <span>{PAGE_DATA.contact.phones.join(", ")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-500 shrink-0" size={18} />
                <span>{PAGE_DATA.contact.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-xs mb-4">Subscribe to get the latest arrivals and exclusive deals.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-white w-full focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-red-600 text-white px-4 rounded-lg font-bold hover:bg-red-700 transition-colors">Go</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {new Date().getFullYear()} {PAGE_DATA.company.full_name}. All rights reserved.</p>
        </div>
      </footer>

      {/* --- CONCIERGE SEARCH POPUP --- */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl border border-slate-100">
            <button 
              onClick={() => setIsSearchModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-2 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Looking for something specific?</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our online inventory is being updated daily! To get the best deal and current stock details, please call us directly.
              </p>
              <div className="space-y-4">
                <a 
                  href={`tel:${PAGE_DATA.contact.phones[0]}`} 
                  className="w-full bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-xl shadow-red-900/20"
                >
                  <Phone size={20} /> Call Now
                </a>
                <button 
                  onClick={() => handleInquiry("Hi, I am looking for a specific vehicle that I couldn't find on the site.")}
                  className="w-full bg-emerald-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20"
                >
                  <MessageCircle size={20} /> WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default corholdings2;