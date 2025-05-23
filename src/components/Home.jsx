import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-roboto bg-white text-gray-900">
    
      <section 
        className="h-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Global-Desktop.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center relative"
      >
        <div className="hero-content -mt-20 z-10">
          <h1 className="text-4xl md:text-5xl font-medium mb-2">Model Y</h1>
          <p className="text-base mb-8">Lease starting at $399/mo</p>
          <div className="cta-buttons flex flex-col md:flex-row gap-4 w-4/5 md:w-auto">
            <NavLink
              to="/cars" 
              className="btn bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors text-center"
            >
              View Inventory
            </NavLink>
            <NavLink 
              to="/contact" 
              className="btn bg-white text-gray-800 border border-gray-800 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Custom Order
            </NavLink>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;