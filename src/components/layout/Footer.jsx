import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {year} DSWD Counter System. All rights reserved.</p>
        <p className="text-sm mt-2">A project for the Department of Social Welfare and Development</p>
      </div>
    </footer>
  );
};

export default Footer;