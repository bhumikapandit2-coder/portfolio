import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background/80 py-8 border-t border-white/10 text-center">
      <div className="container mx-auto px-6">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Designed & Developed by <span className="text-white font-medium">Bhumika Sharma</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
