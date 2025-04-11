import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to DSWD Counter System</h1>
        <p className="text-gray-600">Manage and track service counters efficiently</p>
      </header>
      
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Real-time counter management</li>
            <li>Track service delivery metrics</li>
            <li>Generate reports and analytics</li>
            <li>Multi-user access with role-based permissions</li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;