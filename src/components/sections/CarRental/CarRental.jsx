import React, { useState, useEffect } from 'react';
import { 
  Car, MapPin, Calendar, Users, Fuel, Cog, Shield, 
  Clock, Award, Star, ChevronRight, Menu, X, Phone,
  Mail, Facebook, Instagram, Twitter, Linkedin,
  CheckCircle, MessageCircle, Send
} from 'lucide-react';

const CarRental = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    returnDate: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  // Add animation styles dynamically
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      .animate-slideDown {
        animation: slideDown 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Web3Forms submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual Web3Forms access key
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pickup_location: formData.pickupLocation,
        dropoff_location: formData.dropoffLocation,
        pickup_date: formData.pickupDate,
        return_date: formData.returnDate,
        message: formData.message,
        subject: 'New Car Rental Booking Request'
      })
    });

    const result = await response.json();
    
    if (result.success) {
      setFormStatus('success');
      setFormData({
        name: '', email: '', phone: '', pickupLocation: '',
        dropoffLocation: '', pickupDate: '', returnDate: '', message: ''
      });
      setTimeout(() => setFormStatus(''), 5000);
    } else {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp contact function
  const contactWhatsApp = () => {
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number (country code + number)
    const message = 'Hi! I would like to inquire about car rental services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const features = [
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Wide Selection',
      desc: 'Choose from our diverse fleet of premium vehicles'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fully Insured',
      desc: 'All vehicles come with comprehensive insurance coverage'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      desc: 'Round-the-clock customer service and roadside assistance'
    }
  ];

  const benefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Best price guarantee' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Free cancellation up to 48h' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'No hidden charges' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Clean & sanitized cars' }
  ];

  const carCategories = ['All', 'Economy', 'SUV', 'Luxury', 'Sports'];

  const cars = [
    {
      id: 1,
      name: 'Maruti Alto',
      category: 'Economy',
      image: 'https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2015/03/Suzuki-Alto-K10-Chile-February-2015.-Picture-courtesy-topspeed.in_-600x400.jpg?resize=600%2C400&ssl=1',
      price: 45,
      seats: 5,
      transmission: 'manual',
      fuel: 'Petrol',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Honda CR-V',
      category: 'SUV',
      image: 'https://motorguide.lk/_next/image?url=https%3A%2F%2Fmotorguide-store.s3.ap-southeast-1.amazonaws.com%2Fikman%2Fmedium_Honda_City_RS_2025_e9bec08a9c.jpg&w=3840&q=75',
      price: 65,
      seats: 7,
      transmission: 'Auto',
      fuel: 'Diesel',
      rating: 4.9
    },
    {
      id: 3,
      name: 'BMW 5 Series',
      category: 'Luxury',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
      price: 120,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Petrol',
      rating: 5.0
    },
    {
      id: 4,
      name: 'LANCER CK2',
      category: 'Sports',
      image: 'https://i.pinimg.com/736x/84/97/c9/8497c9c7b944c2f7b746d1ccd5dbf232.jpg',
      price: 150,
      seats: 4,
      transmission: 'Manual',
      fuel: 'Petrol',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Toyota Premio',
      category: 'Economy',
      image: 'https://www.vahana.lk/_next/image?url=https%3A%2F%2Fcloud.appwrite.io%2Fv1%2Fstorage%2Fbuckets%2Fvahana-lk-listings%2Ffiles%2F697088e4001a928acf25%2Fview%3Fproject%3D66b5784a0022a1339e94&w=3840&q=75',
      price: 40,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Hybrid',
      rating: 4.7
    },
    {
      id: 6,
      name: 'VAN',
      category: 'Economy',
      image: 'https://www.lankaholidays.com/pics/49796/4.jpeg',
      price: 140,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Diesel',
      rating: 5.0
    }
  ];

  const stats = [
    { value: '5000+', label: 'Happy Customers' },
    { value: '150+', label: 'Premium Cars' },
    { value: '25+', label: 'Pickup Locations' },
    { value: '24/7', label: 'Customer Support' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      rating: 5,
      text: 'Absolutely fantastic service! The car was spotless and the booking process was incredibly smooth. Will definitely use again for my next trip.',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Family Vacation',
      rating: 5,
      text: 'Perfect experience from start to finish. The SUV was spacious and comfortable for our family road trip. Highly recommend!',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Weekend Getaway',
      rating: 5,
      text: 'Great selection of luxury cars at competitive prices. The BMW I rented was in pristine condition. Customer service was top-notch!',
      avatar: 'ER'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Corporate Client',
      rating: 5,
      text: 'I rent cars frequently for business, and this is by far the best service I\'ve used. Professional, reliable, and hassle-free.',
      avatar: 'DT'
    }
  ];

  const filteredCars = selectedCategory === 'All' 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">CarRent</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</a>
              <a href="#cars" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Cars</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About Us</a>
              <a href="#benefits" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Benefits</a>
              <a href="#reviews" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={contactWhatsApp}
                className="flex items-center gap-2 px-4 py-2 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
              <a href="#booking" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-slideDown">
              <nav className="p-6">
                <div className="space-y-1 mb-6">
                  <a 
                    href="#home" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
                  >
                    Home
                  </a>
                  <a 
                    href="#cars" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
                  >
                    Cars
                  </a>
                  <a 
                    href="#about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
                  >
                    About Us
                  </a>
                  <a 
                    href="#benefits" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
                  >
                    Benefits
                  </a>
                  <a 
                    href="#reviews" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
                  >
                    Reviews
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
                  >
                    Contact
                  </a>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      contactWhatsApp();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                  <a 
                    href="#booking" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                  >
                    Book Now
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Booking Form */}
      <section id="home" className="bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Experience the road like never before
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Discover freedom with our premium car rental service. Wide selection, best prices, 24/7 support.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#booking" className="px-8 py-4 bg-yellow-400 text-purple-900 rounded-lg hover:bg-yellow-300 transition-colors font-bold text-lg">
                  Book a Car
                </a>
                <button 
                  onClick={contactWhatsApp}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors font-bold text-lg flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with Us
                </button>
              </div>
            </div>

            {/* Booking Form - Web3Forms */}
            <div id="booking" className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Make your trip</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Date</label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Return Date</label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location</label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                    placeholder="City or Airport"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Drop-off Location</label>
                  <input
                    type="text"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900"
                    placeholder="City or Airport"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-gray-900 resize-none"
                    placeholder="Any special requirements?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formStatus === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Request
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-lg font-semibold text-center">
                    ✓ Request submitted successfully! We'll contact you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-800 rounded-lg font-semibold text-center">
                    ✗ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                  <img 
                    src="/assets/e.png" 
                    alt="Luxury car showroom"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-48">
                  <img 
                    src="/assets/b.png" 
                    alt="Happy customer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl overflow-hidden shadow-xl h-48">
                  <img 
                    src="/assets/c.png" 
                    alt="Premium vehicle"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                  <img 
                    src="/assets/d.png" 
                    alt="Customer service"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Premium Car Rentals
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Since 2015, we've been dedicated to providing exceptional car rental experiences. With a passion for quality and customer satisfaction, we've grown to become one of the most trusted names in the industry.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our mission is simple: to make premium vehicles accessible to everyone, whether you're traveling for business, pleasure, or special occasions. Every car in our fleet is meticulously maintained and regularly serviced to ensure your safety and comfort.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Award Winning</h4>
                    <p className="text-sm text-gray-600">Industry recognized service excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Fully Insured</h4>
                    <p className="text-sm text-gray-600">Comprehensive coverage on all vehicles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-sm text-gray-600">Professional and friendly staff</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">24/7 Service</h4>
                    <p className="text-sm text-gray-600">Always here when you need us</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#booking" 
                  className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center gap-2"
                >
                  Book Your Car <ChevronRight className="w-5 h-5" />
                </a>
                <button 
                  onClick={contactWhatsApp}
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="text-purple-600 flex-shrink-0">{benefit.icon}</div>
                  <p className="text-gray-900 font-semibold text-lg">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="assets/a.jpg" 
                  alt="About Us - Luxury Cars"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-100 rounded-3xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-yellow-100 rounded-full -z-10"></div>
              
              {/* Stats Card Overlay */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-gray-900">10+</p>
                    <p className="text-sm text-gray-600 font-semibold">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Your Trusted Partner in Premium Car Rental
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Since 2013, we've been providing exceptional car rental services to thousands of satisfied customers. 
                Our mission is to make every journey memorable with our premium fleet and unparalleled customer service.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe in transparency, reliability, and putting our customers first. Whether you're traveling for 
                business or pleasure, we have the perfect vehicle to match your needs and style.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-purple-100">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Licensed</h3>
                  <p className="text-gray-600">Certified and insured for your peace of mind</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-100">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Top Rated</h3>
                  <p className="text-gray-600">4.9/5 rating from 5000+ customers</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#booking" className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center gap-2">
                  Book Your Car <ChevronRight className="w-5 h-5" />
                </a>
                <button 
                  onClick={contactWhatsApp}
                  className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose the car that suits you</h2>
            <p className="text-gray-600 text-lg">Browse our premium fleet</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {carCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${car.price}/day
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
                      <p className="text-sm text-gray-500">{car.category}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-900">{car.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-100">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">{car.seats} Seats</p>
                    </div>
                    <div className="text-center">
                      <Cog className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">{car.transmission}</p>
                    </div>
                    <div className="text-center">
                      <Fuel className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">{car.fuel}</p>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center gap-2">
                    Book Now <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Facts by Numbers</h2>
          <p className="text-center text-purple-100 mb-12 text-lg">Your trusted car rental partner</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - Dynamic */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from real people who have experienced our service
            </p>
          </div>

          {/* Reviews Grid with Dynamic Hover Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {reviews.map((review, idx) => (
              <div 
                key={review.id} 
                className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-100 group-hover:border-purple-200 transition-colors">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-lg">{review.name}</p>
                    <p className="text-sm text-purple-600 font-semibold">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-purple-600 mb-2">4.9/5</div>
                <p className="text-gray-600 font-semibold">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-600 mb-2">5,000+</div>
                <p className="text-gray-600 font-semibold">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-600 mb-2">98%</div>
                <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-600 mb-2">100%</div>
                <p className="text-gray-600 font-semibold">Verified Reviews</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-black mb-4">Ready to Join Our Happy Customers?</h3>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference for yourself. Book your car today and see why thousands trust us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#booking"
                className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-yellow-400 hover:text-purple-900 transition-all font-bold text-lg shadow-xl transform hover:scale-105"
              >
                Book Your Car Now
              </a>
              <button 
                onClick={contactWhatsApp}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-all font-bold text-lg flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enjoy every mile with our loyalty companionship
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our loyalty program and earn rewards on every rental. Get exclusive discounts and priority service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking" className="px-8 py-4 bg-yellow-400 text-purple-900 rounded-lg hover:bg-yellow-300 transition-colors font-bold text-lg">
              Join Now - It's Free
            </a>
            <button 
              onClick={contactWhatsApp}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors font-bold text-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">CarRent</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium car rental services for all your travel needs. Quality vehicles, transparent pricing, exceptional service.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#cars" className="hover:text-purple-400 transition-colors">Our Fleet</a></li>
                <li><a href="#benefits" className="hover:text-purple-400 transition-colors">Benefits</a></li>
                <li><a href="#reviews" className="hover:text-purple-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Airport Transfer</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Corporate Rental</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Long-term Rental</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Chauffeur Service</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span>123 Main Street, City, State 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>+1 (234) 567-8900</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>info@carrent.com</span>
                </li>
                <li>
                  <button 
                    onClick={contactWhatsApp}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} CarRent. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CarRental;