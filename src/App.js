import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import NoPage from './pages/NoPage'; // This should be your custom 404 component
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work" element={<Services />} />
          <Route path="*" element={<NoPage />} /> {/* Handles 404s */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
