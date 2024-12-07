import React from "react"; 
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function GamifiedCertification() { 
  return ( 
    <div className="bg-black text-white py-12 px-6"> 
      <div className="max-w-4xl mx-auto text-center"> 
        <h2 className="text-3xl font-bold mb-4">Gamified Certification</h2> 
        <p className="text-gray-300 mb-8"> 
          This page is dedicated to offering certification programs with interactive learning through games. You can unlock certifications as you complete various educational challenges. 
        </p> 
        
        <div className="space-x-6"> 
          {/* Certification Game Links */}
          <Link 
            to="/game-certification" 
            className="text-white border border-white px-6 py-3 rounded-full hover:bg-sky-600 hover:text-black transition"
          > 
            Start Certification 
          </Link> 

          <Link 
            to="/all-courses" 
            className="text-white border border-white px-6 py-3 rounded-full hover:bg-sky-600 hover:text-black transition"
          >
            View All Courses 
          </Link> 
        </div> 
      </div> 
    </div> 
  ); 
}

export default GamifiedCertification;
