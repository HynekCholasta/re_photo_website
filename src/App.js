import './App.css';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import NoPage from './pages/NoPage.js';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.js';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work" element={<Services />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
