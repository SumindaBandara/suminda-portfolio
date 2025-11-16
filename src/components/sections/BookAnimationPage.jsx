import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Send,
  Music2,
  Camera,
  ShoppingBag,
  PlayCircle,
  Gamepad2,
  Mail,
  Video,
  Phone,
  Share2,
  TrendingUp,
  Heart,
  Bell,
  Users,
  Globe,
  Bookmark
} from 'lucide-react';

// 24 Social media and trendy app icons with tech-inspired colors (perfectly arranged in 3 rings: 6+8+10)
const appIcons = [
  // Inner ring - 6 icons
  { Icon: Facebook, color: 'from-blue-500 to-blue-700', name: 'Facebook', glowColor: '#3b82f6' },
  { Icon: Instagram, color: 'from-pink-500 via-purple-500 to-orange-500', name: 'Instagram', glowColor: '#ec4899' },
  { Icon: Youtube, color: 'from-red-500 to-red-700', name: 'YouTube', glowColor: '#ef4444' },
  { Icon: Twitter, color: 'from-sky-400 to-blue-500', name: 'Twitter', glowColor: '#38bdf8' },
  { Icon: MessageCircle, color: 'from-green-400 to-green-600', name: 'WhatsApp', glowColor: '#22c55e' },
  { Icon: TrendingUp, color: 'from-amber-400 to-orange-500', name: 'Trending', glowColor: '#fbbf24' },
  
  // Middle ring - 8 icons
  { Icon: Linkedin, color: 'from-blue-600 to-blue-800', name: 'LinkedIn', glowColor: '#2563eb' },
  { Icon: Send, color: 'from-blue-400 to-sky-500', name: 'Telegram', glowColor: '#60a5fa' },
  { Icon: Music2, color: 'from-green-500 to-green-700', name: 'Spotify', glowColor: '#22c55e' },
  { Icon: Camera, color: 'from-yellow-400 to-pink-500', name: 'Snapchat', glowColor: '#facc15' },
  { Icon: PlayCircle, color: 'from-purple-500 to-pink-600', name: 'TikTok', glowColor: '#a855f7' },
  { Icon: Mail, color: 'from-cyan-400 to-blue-500', name: 'Email', glowColor: '#22d3ee' },
  { Icon: Video, color: 'from-rose-500 to-pink-600', name: 'Video', glowColor: '#f43f5e' },
  { Icon: Heart, color: 'from-red-400 to-rose-600', name: 'Favorites', glowColor: '#f87171' },
  
  // Outer ring - 10 icons
  { Icon: Gamepad2, color: 'from-indigo-500 to-purple-600', name: 'Gaming', glowColor: '#6366f1' },
  { Icon: ShoppingBag, color: 'from-orange-400 to-red-500', name: 'Shopping', glowColor: '#fb923c' },
  { Icon: Phone, color: 'from-emerald-400 to-teal-500', name: 'Phone', glowColor: '#34d399' },
  { Icon: Share2, color: 'from-violet-500 to-purple-600', name: 'Share', glowColor: '#8b5cf6' },
  { Icon: Bell, color: 'from-yellow-400 to-amber-500', name: 'Notifications', glowColor: '#facc15' },
  { Icon: Users, color: 'from-blue-400 to-indigo-500', name: 'Community', glowColor: '#60a5fa' },
  { Icon: Globe, color: 'from-blue-500 to-cyan-500', name: 'Web', glowColor: '#3b82f6' },
  { Icon: Bookmark, color: 'from-pink-400 to-rose-500', name: 'Saved', glowColor: '#f472b6' },
  { Icon: Music2, color: 'from-purple-400 to-indigo-500', name: 'Music', glowColor: '#a78bfa' },
  { Icon: Camera, color: 'from-emerald-400 to-cyan-500', name: 'Photos', glowColor: '#34d399' }
];

// Digital particles for tech atmosphere
const DigitalParticle = ({ delay, duration }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        opacity: 0 
      }}
      animate={{
        y: -50,
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Circuit board pattern lines
const CircuitLine = ({ delay }) => {
  const isHorizontal = Math.random() > 0.5;
  const position = Math.random() * 100;
  
  return (
    <motion.div
      className="absolute bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"
      style={{
        [isHorizontal ? 'top' : 'left']: `${position}%`,
        [isHorizontal ? 'width' : 'height']: '100%',
        [isHorizontal ? 'height' : 'width']: '1px',
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
      }}
    />
  );
};

// AI Core - central energy sphere
const AICore = ({ active }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: active ? 1 : 0,
        opacity: active ? 1 : 0,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Outer rotating ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-32 h-32 -ml-16 -mt-16 rounded-full border-2 border-cyan-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-0 left-1/2 transform -translate-x-1/2" />
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full border-2 border-purple-500"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-0 left-1/2 transform -translate-x-1/2" />
      </motion.div>

      {/* Inner core */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
        animate={{ 
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 20px rgba(6, 182, 212, 0.5)',
            '0 0 40px rgba(168, 85, 247, 0.8)',
            '0 0 20px rgba(6, 182, 212, 0.5)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Energy pulse */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-32 h-32 -ml-16 -mt-16 rounded-full bg-cyan-500 opacity-20"
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.2, 0, 0.2]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

const BookAnimationPage = () => {
  const [showCore, setShowCore] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [litIcons, setLitIcons] = useState(new Set());
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const coreTimer = setTimeout(() => setShowCore(true), 500);
    const iconsTimer = setTimeout(() => setShowIcons(true), 1500);

    return () => {
      clearTimeout(coreTimer);
      clearTimeout(iconsTimer);
    };
  }, []);

  const handleIconInteraction = (index) => {
    setLitIcons(prev => {
      const newSet = new Set(prev);
      // Only add, never remove
      newSet.add(index);
      
      // Check if all icons are lit
      if (newSet.size === appIcons.length) {
        setTimeout(() => setShowThankYou(true), 500);
      }
      
      return newSet;
    });
  };

  // Calculate positions with maximum spacing - 3 rings (6+8+10 = 24 icons with generous gaps)
  const getIconPosition = (index) => {
    const total = appIcons.length;
    
    // Define ring structure: 6 icons in ring 1, 8 in ring 2, 10 in ring 3
    let ring, indexInRing, iconsInThisRing;
    
    if (index < 6) {
      ring = 0;
      indexInRing = index;
      iconsInThisRing = 6;
    } else if (index < 14) {
      ring = 1;
      indexInRing = index - 6;
      iconsInThisRing = 8;
    } else {
      ring = 2;
      indexInRing = index - 14;
      iconsInThisRing = 10;
    }
    
    // Calculate angle for even distribution in each ring
    const angle = (indexInRing / iconsInThisRing) * Math.PI * 2 - Math.PI / 2;
    
    // Maximum spacing using full available screen space
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenSize = Math.min(screenWidth, screenHeight);
    
    // Use much larger base radius to fill the screen
    const baseRadius = screenSize * 0.13; // Increased base radius
    
    // Much larger spacing multipliers to use full screen space
    const radiusMultipliers = [1, 2.2, 3.4]; // Dramatically increased gaps between rings
    
    // Allow icons to use nearly full screen width (up to 45% from center)
    const radius = Math.min(baseRadius * radiusMultipliers[ring], screenSize * 0.45);
    
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated tech grid background */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* LEFT SIDE CONTENT */}
      <motion.div
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Logo Container - Replace with your logo */}
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-1 mb-4"
            animate={{
              boxShadow: [
                '0 0 20px rgba(6, 182, 212, 0.5)',
                '0 0 40px rgba(168, 85, 247, 0.8)',
                '0 0 20px rgba(6, 182, 212, 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <img src="/assets/gemini2.png" alt="Logo" className="w-24 h-24 object-contain" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.p 
              className="text-cyan-400 text-xl font-bold tracking-wider"
              animate={{
                textShadow: [
                  '0 0 10px rgba(6, 182, 212, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.8)',
                  '0 0 10px rgba(6, 182, 212, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              "English Day"
            </motion.p>
            <p className="text-purple-400 text-2xl font-bold">2025</p>
            <p className="text-cyan-300 text-sm font-light leading-relaxed max-w-[200px]">
              Pulathisipura National<br />College Of Education
            </p>
            <p className="text-purple-300 text-lg font-semibold">"21st Batch"</p>
          </motion.div>

          {/* Decorative lines */}
          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 3 }}
          />
        </div>
      </motion.div>

      {/* RIGHT SIDE CONTENT */}
      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Logo Container - Replace with your logo */}
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 mb-4"
            animate={{
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.5)',
                '0 0 40px rgba(236, 72, 153, 0.8)',
                '0 0 20px rgba(168, 85, 247, 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <img src="/assets/gemini2.png" alt="Logo" className="w-24 h-24 object-contain" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.p 
              className="text-cyan-400 text-xl font-bold tracking-wider"
              animate={{
                textShadow: [
                  '0 0 10px rgba(6, 182, 212, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.8)',
                  '0 0 10px rgba(6, 182, 212, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              "English Day"
            </motion.p>
            <p className="text-purple-400 text-2xl font-bold">2025</p>
            <p className="text-cyan-300 text-sm font-light leading-relaxed max-w-[200px]">
              Pulathisipura National<br />College Of Education
            </p>
            <p className="text-purple-300 text-lg font-semibold">"21st Batch"</p>
          </motion.div>

          {/* Decorative lines */}
          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 3 }}
          />
        </div>
      </motion.div>

      {/* Animated circuit lines */}
      {[...Array(15)].map((_, i) => (
        <CircuitLine key={`circuit-${i}`} delay={i * 0.3} />
      ))}

      {/* Digital particles rising */}
      {[...Array(40)].map((_, i) => (
        <DigitalParticle 
          key={`particle-${i}`} 
          delay={i * 0.2} 
          duration={5 + Math.random() * 3}
        />
      ))}

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black" />

      {/* Central AI Core */}
      <AICore active={showCore} />

      {/* Data stream lines from core */}
      <AnimatePresence>
        {showCore && [...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <motion.div
              key={`stream-${i}`}
              className="absolute left-1/2 top-1/2 origin-bottom"
              style={{
                height: '400px',
                width: '2px',
                transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)`,
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ 
                scaleY: 1,
                opacity: [0, 0.6, 0.6],
              }}
              transition={{
                duration: 1.5,
                delay: 1 + i * 0.1,
              }}
            >
              <div className="w-full h-full bg-gradient-to-t from-cyan-500 via-purple-500 to-transparent" />
              
              {/* Traveling data packets */}
              <motion.div
                className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500"
                animate={{
                  y: [0, -400],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 1.5 + i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Floating app icons with advanced effects */}
      <AnimatePresence>
        {showIcons && appIcons.map((app, index) => {
          const position = getIconPosition(index);
          const isLit = litIcons.has(index);
          const isHovered = hoveredIcon === index;
          const showEffect = isLit || isHovered;
          
          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2 cursor-pointer z-30"
              initial={{ 
                x: -24,
                y: -24,
                opacity: 0,
                scale: 0,
              }}
              animate={{ 
                x: position.x - 24,
                y: position.y - 24,
                opacity: showEffect ? 1 : 0.4,
                scale: showEffect ? 1.2 : 0.8,
              }}
              transition={{
                duration: 1.5,
                delay: 1.5 + index * 0.08,
                type: "spring",
                stiffness: 60,
              }}
              onClick={() => handleIconInteraction(index)}
              onHoverStart={() => setHoveredIcon(index)}
              onHoverEnd={() => setHoveredIcon(null)}
              onTouchStart={() => handleIconInteraction(index)}
            >
              {/* Hexagonal glow effect */}
              {showEffect && (
                <>
                  <motion.div
                    className="absolute w-24 h-24 -left-6 -top-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon 
                        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
                        fill="none" 
                        stroke={app.glowColor}
                        strokeWidth="2"
                        opacity="0.6"
                      />
                    </svg>
                  </motion.div>

                  {/* Inner rotating circle */}
                  <motion.div
                    className="absolute w-20 h-20 -left-4 -top-4 rounded-full border border-white/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </>
              )}

              {/* Holographic glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{ 
                  background: showEffect ? app.glowColor : 'transparent',
                  width: '70px',
                  height: '70px',
                  left: '-11px',
                  top: '-11px'
                }}
                animate={showEffect ? {
                  opacity: [0.4, 0.8, 0.4],
                } : { opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Icon container with tech border */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Corner accents */}
                {showEffect && (
                  <>
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
                  </>
                )}
                
                {/* Main icon */}
                <div className={`relative w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-br ${app.color} shadow-2xl ${showEffect ? 'border-2 border-white/50' : 'border border-white/20'}`}>
                  <app.Icon 
                    className="w-6 h-6 text-white"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              {/* Connection beam to core */}
              {isLit && (
                <motion.div
                  className="absolute left-6 top-6 origin-top-left z-0"
                  style={{
                    width: '2px',
                    height: `${Math.sqrt((position.x) ** 2 + (position.y) ** 2)}px`,
                    transform: `rotate(${Math.atan2(position.y, position.x) * (180 / Math.PI) + 90}deg)`,
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 0.6 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                >
                  <div className={`w-full h-full bg-gradient-to-b ${app.color}`} />
                  
                  {/* Data pulse traveling */}
                  <motion.div
                    className="absolute w-2 h-2 rounded-full left-1/2 transform -translate-x-1/2"
                    style={{ background: app.glowColor }}
                    animate={{
                      y: ['0%', '100%'],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              )}

              {/* Holographic name display */}
              {showEffect && (
                <motion.div
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-50" />
                    <span className="relative text-white text-xs font-mono tracking-wider px-2 py-1 border border-cyan-500/50 bg-black/80 rounded">
                      {app.name}
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Interactive prompt */}
      <AnimatePresence>
        {showCore && litIcons.size === 0 && !showThankYou && (
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 3 }}
          >
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                textShadow: [
                  '0 0 10px rgba(6, 182, 212, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.8)',
                  '0 0 10px rgba(6, 182, 212, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400 text-lg font-mono tracking-widest"
            >
              [ DIGITAL FLUENCY THROUGH ENGLISH LETERACY ]
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Message - Epic Reveal */}
      <AnimatePresence>
        {showThankYou && (
          <>
            {/* Explosion effect overlay */}
            <motion.div
              className="absolute inset-0 z-50 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Expanding circles animation */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className="absolute left-1/2 top-1/2 rounded-full border-2 border-cyan-400 z-50"
                initial={{ 
                  width: 0, 
                  height: 0,
                  x: '-50%',
                  y: '-50%',
                  opacity: 0.8 
                }}
                animate={{ 
                  width: `${(i + 1) * 400}px`,
                  height: `${(i + 1) * 400}px`,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Particle burst */}
            {[...Array(50)].map((_, i) => {
              const angle = (i / 50) * Math.PI * 2;
              const distance = 200 + Math.random() * 300;
              return (
                <motion.div
                  key={`burst-${i}`}
                  className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full z-50"
                  style={{
                    background: `hsl(${Math.random() * 360}, 80%, 60%)`
                  }}
                  initial={{ 
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 0
                  }}
                  animate={{ 
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    opacity: 0,
                    scale: [0, 1.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.01,
                    ease: "easeOut"
                  }}
                />
              );
            })}

            {/* Main Thank You Container */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center"
              initial={{ scale: 0, rotateY: -180, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0, rotateY: 180, opacity: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Holographic frame */}
              <div className="relative">
                {/* Corner decorations */}
                <motion.div
                  className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-cyan-400"
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1 }}
                />
                <motion.div
                  className="absolute -top-8 -right-8 w-16 h-16 border-t-4 border-r-4 border-purple-400"
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.1 }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-16 h-16 border-b-4 border-l-4 border-pink-400"
                  initial={{ opacity: 0, x: 20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.2 }}
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-cyan-400"
                  initial={{ opacity: 0, x: -20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.3 }}
                />

                {/* Glowing background panel */}
                <motion.div
                  className="relative px-16 py-12 bg-black/80 backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(6, 182, 212, 0.3)',
                      '0 0 60px rgba(168, 85, 247, 0.5)',
                      '0 0 30px rgba(6, 182, 212, 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* "THANK YOU" text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <motion.h1 
                      className="text-7xl font-bold font-mono mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['0%', '100%', '0%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        backgroundSize: '200% 100%',
                        textShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
                      }}
                    >
                      
                      Thank you
                    </motion.h1>
                  </motion.div>

                  {/* Subtitle with typing effect */}
                  <motion.div
                    className="text-cyan-300 text-xl font-mono tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <motion.span
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      [SYSTEMS ACTIVATED]
                    </motion.span>
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                  />

                  {/* Success message */}
                  <motion.p
                    className="mt-6 text-purple-300 text-lg font-light"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                  >
                    Connection Established Successfully
                  </motion.p>

                  {/* Floating icons around message */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    const RandomIcon = appIcons[i].Icon;
                    return (
                      <motion.div
                        key={`float-${i}`}
                        className="absolute"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                          x: Math.cos(angle) * 150,
                          y: Math.sin(angle) * 150,
                          opacity: [0, 1, 1],
                          rotate: 360,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 1.5 + i * 0.1,
                        }}
                      >
                        <motion.div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${appIcons[i].color} flex items-center justify-center`}
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: 2 + i * 0.2,
                            repeat: Infinity,
                          }}
                        >
                          <RandomIcon className="w-4 h-4 text-white" />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Scanning lines effect */}
                <motion.div
                  className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  animate={{
                    top: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookAnimationPage;