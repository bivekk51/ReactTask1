import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './views/Home';
import About from './views/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
