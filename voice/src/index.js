import React from "react"; 
import ReactDOM from "react-dom/client"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import "./index.css"; 
import Fruit from "./app/Features/Education/fruit/Fruit"; 
import Biologygame from "./app/Features/Education/biologygame/Biologygame"; 
import Mathgame from "./app/Features/Education/mathgame/Mathgame"; 
import GamifiedCertification from "./app/Features/GamifiedCertification/GamifiedCertification"; // Import GamifiedCertification Page
import reportWebVitals from "./app/reportWebVitals";  

// Navbar Component
function Navbar() { 
  return ( 
    <nav className="bg-sky-500 text-white flex items-center justify-between py-4 px-6 shadow-md"> 
      {/* Logo */}
      <div className="flex items-center"> 
        <img src="/logo.png" alt="App Logo" className="w-12 h-12 mr-3" /> 
        <h1 className="text-xl font-bold">Skill Learning Hub</h1> 
      </div> 

      {/* Navigation Links */}
      <ul className="flex items-center space-x-6"> 
        <li> 
          <Link to="/" className="hover:underline"> 
            Home 
          </Link> 
        </li> 
        <li className="relative group"> 
          <button className="hover:underline">Features</button> 
          {/* Dropdown for Features */}
          <ul className="absolute hidden group-hover:block bg-sky-600 text-white rounded shadow-md mt-2"> 
            <li className="hover:bg-sky-700"> 
              <Link to="/education" className="block px-4 py-2"> 
                Education 
              </Link> 
            </li> 
            <li className="hover:bg-sky-700"> 
              <Link to="/vocational" className="block px-4 py-2"> 
                Vocational 
              </Link> 
            </li> 
            <li className="hover:bg-sky-700"> 
              <Link to="/game-certification" className="block px-4 py-2"> 
                Game Certification 
              </Link> 
            </li> 
          </ul> 
        </li> 
        <li> 
          <button className="hover:underline">Sign In</button> 
        </li> 
        <li> 
          <button className="hover:underline">Contact</button> 
        </li> 
      </ul> 
    </nav> 
  ); 
}

// Hero Section Component
function HeroSection() { 
  return ( 
    <div className="bg-black text-white py-10 px-6 text-center"> 
      <h2 className="text-3xl font-bold mb-4">Skills Development Games</h2> 
      <p className="text-gray-300 max-w-2xl mx-auto"> 
        With our curated selection of educational games, you can train memory, 
        attention, fine motor skills, and reading abilities in an entertaining 
        way. Additionally, our resources improve speech, understanding 
        emotions, and time management for a more autonomous learning journey. 
      </p> 
    </div> 
  ); 
}

// Middle Part Component (for Home page)
function MiddlePart() { 
  return ( 
    <div className="bg-black text-white py-12 px-6"> 
      <div className="max-w-4xl mx-auto text-center"> 
        <h2 className="text-3xl font-bold mb-4">Explore Educational Games</h2> 
        <p className="text-gray-300 mb-8"> 
          Discover interactive games that make learning fun and engaging. 
          Explore biology, mathematics, and more to enhance your skills. 
        </p> 
        <div className="flex flex-wrap justify-center gap-4"> 
          {/* Buttons for different games */}
          <Link 
            to="/biologygame" 
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-sky-600 hover:text-black transition"
          > 
            Biology Game 
          </Link> 
          <Link 
            to="/mathgame" 
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-sky-600 hover:text-black transition"
          > 
            Math Game 
          </Link> 
          <Link 
            to="/fruit" 
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-sky-600 hover:text-black transition"
          > 
            Fruit Game 
          </Link> 
          <Link 
            to="/all-games" 
            className="border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
          > 
            Show All 
          </Link> 
        </div> 
      </div> 
    </div> 
  ); 
}

// Education Page Component
function EducationPage() { 
  return ( 
    <div className="bg-black text-white py-12 px-6"> 
      <div className="max-w-4xl mx-auto text-center"> 
        <h2 className="text-3xl font-bold mb-4">Choose a Game to Play</h2> 
        <p className="text-gray-300 mb-8"> 
          Select a game below to start learning! Pick from biology, mathematics, or fruit games. 
        </p> 
        <div className="flex justify-center gap-6"> 
          {/* Div Box for Biology Game */} 
          <div className="border border-white text-white px-8 py-6 rounded-lg hover:bg-sky-600 transition"> 
            <h3 className="text-xl font-bold mb-4">Biology Game</h3> 
            <Link 
              to="/biologygame" 
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-sky-700"
            > 
              Start Game 
            </Link> 
          </div> 

          {/* Div Box for Math Game */}
          <div className="border border-white text-white px-8 py-6 rounded-lg hover:bg-sky-600 transition"> 
            <h3 className="text-xl font-bold mb-4">Math Game</h3> 
            <Link 
              to="/mathgame" 
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-sky-700"
            > 
              Start Game 
            </Link> 
          </div> 

          {/* Div Box for Fruit Game */}
          <div className="border border-white text-white px-8 py-6 rounded-lg hover:bg-sky-600 transition"> 
            <h3 className="text-xl font-bold mb-4">Fruit Game</h3> 
            <Link 
              to="/fruit" 
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-sky-700"
            > 
              Start Game 
            </Link> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}

// Footer Component
function Footer() { 
  return ( 
    <footer className="bg-gray-800 text-white py-6 text-center"> 
      <p>&copy; 2024 Skill Learning Hub. All rights reserved.</p> 
      <p>Designed for enhancing learning experiences through innovation.</p> 
    </footer> 
  ); 
}

// Main App Component
function App() { 
  return ( 
    <Router> 
      <Navbar /> 
      <main> 
        <Routes> 
          {/* Home Route */}
          <Route path="/" element={ 
            <> 
              <HeroSection /> 
              <MiddlePart /> 
            </> 
          } /> 

          {/* Education Route */}
          <Route path="/education" element={<EducationPage />} /> 

          {/* Game Routes */}
          <Route path="/biologygame" element={<Biologygame />} /> 
          <Route path="/mathgame" element={<Mathgame />} /> 
          <Route path="/fruit" element={<Fruit />} /> 

          {/* Gamified Certification Route */}
          <Route path="/game-certification" element={<GamifiedCertification />} />  {/* Add the GamifiedCertification route */}
        </Routes> 
      </main> 
      <Footer /> 
    </Router> 
  ); 
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render( 
  <React.StrictMode> 
    <App /> 
  </React.StrictMode> 
); 

// Measure performance
reportWebVitals();
