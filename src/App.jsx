import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Registration from './pages/Registration';
import Updates from './pages/Updates';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1A1A1A]">
        <Navbar />
        <main className="pt-32 sm:pt-32 md:pt-32 lg:pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/updates" element={<Updates />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
