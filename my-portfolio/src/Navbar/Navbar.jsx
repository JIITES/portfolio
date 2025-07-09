import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ onProjectsClick }) => {
  const [open, setOpen] = useState(true);
  const [underline, setUnderline] = useState("home");
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectsClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        onProjectsClick(); // Scroll to section
        setUnderline("projects");
      }, 100); // delay so home loads first
    } else {
      onProjectsClick();
      setUnderline("projects");
    }
  };

  return (
    <div>
      {showNavbar && (
        <nav className={`bg-gradient-to-r from-blue-950 to-fuchsia-300 w-full h-[90px] text-white fixed top-0 left-0 z-50 shadow-md transition-transform duration-700 ease-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex justify-between items-center pt-7">
            <h1 className="text-3xl font-bold pl-8">My Portfolio</h1>
            <ul className="flex text-2xl space-x-12 pr-28">
              <li>
                <Link
                  to="/"
                  onClick={() => setUnderline("home")}
                  className={`${underline === "home" ? "underline underline-offset-4 decoration-yellow-400" : ""} hover:text-yellow-400`}
                >
                  .Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setUnderline("about")}
                  className={`${underline === "about" ? "underline underline-offset-4 decoration-yellow-400" : ""} hover:text-yellow-400`}
                >
                  .About Me
                </Link>
              </li>
              <li>
                <button
                  onClick={handleProjectsClick}
                  className={`${underline === "projects" ? "underline underline-offset-4 decoration-yellow-400" : ""} hover:text-yellow-400`}
                >
                  .Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Nav */}
          <div>
            <button onClick={() => setOpen(!open)} className="sm:hidden ml-4 text-lg font-bold">Menu</button>
            <div className={`${open ? "flex flex-col gap-2 items-center pt-4 sm:hidden" : "hidden"}`}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <button onClick={handleProjectsClick}>Projects</button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

