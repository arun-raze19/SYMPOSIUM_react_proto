import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Updates from './pages/Updates';
import Navbar from './components/Navbar';
import FuturisticBackground from './components/FuturisticBackground';
import LoadingRedirect from './components/LoadingRedirect';
import LoadingRedirectMEC from './components/LoadingRedirectMEC';
import GlowingDotsEffect from './components/GlowingDotsEffect';

function App() {

  return (
    <Router>
      <FuturisticBackground />
      <GlowingDotsEffect />
      <div className="min-h-screen relative z-10" style={{
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'thin',
        backgroundColor: 'rgba(18, 53, 36, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}>
        <Navbar />
        <main className="pt-0 relative z-10 bg-transparent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/loading-redirect" element={<LoadingRedirect />} />
            <Route path="/loading-redirect-mec" element={<LoadingRedirectMEC />} />
            <Route path="/updates" element={<Updates />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
