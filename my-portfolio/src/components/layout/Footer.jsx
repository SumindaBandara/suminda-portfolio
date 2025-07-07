import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center border-t">
      <p className="text-gray-600">© {new Date().getFullYear()} . Built with ❤️ using React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;
