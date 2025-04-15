import { Link, useLocation } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/events', label: 'EVENTS' },
    { path: '/registration', label: 'REGISTER' },
    { path: '/updates', label: 'UPDATES' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3E7B27] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-3">
          {/* Logo */}
          <div className="flex justify-center w-full">
            <Link
              to="/"
              className="logo-3d px-4 py-2 transform-gpu transition-all duration-300 mx-auto text-center"
            >
              <span className="logo-text">AIDS_HACKBLITZ</span>
              <span className="logo-suffix">XXV</span>
            </Link>
          </div>

        </div>

        {/* Navigation */}
        <div className="flex justify-center pb-2 w-full">
          <div className="container borderYtoX">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
