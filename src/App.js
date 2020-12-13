import React from 'react';
import './App.css';
import Navigation from './Components/Navigation.js';
import Home from "./Components/Home";
import Project from "./Components/Project"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navigation/>
      <Home/>
      <Project/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
