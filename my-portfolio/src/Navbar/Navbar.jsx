import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ onProjectsClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        onProjectsClick();
        setUnderline("projects");
      }, 100);
    } else {
      onProjectsClick();
      setUnderline("projects");
    }
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <div>
      {showNavbar && (
        <nav
          className={`bg-gradient-to-r from-blue-950 to-fuchsia-300 w-full h-[90px] text-white fixed top-0 left-0 z-50 shadow-md transition-transform duration-700 ease-out ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 pt-6">
            <h1 className="text-3xl font-bold">My Portfolio</h1>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex text-xl space-x-12 pr-6">
              <li>
                <Link
                  to="/"
                  onClick={() => setUnderline("home")}
                  className={`${
                    underline === "home"
                      ? "underline underline-offset-4 decoration-yellow-400"
                      : ""
                  } hover:text-yellow-400`}
                >
                  .Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setUnderline("about")}
                  className={`${
                    underline === "about"
                      ? "underline underline-offset-4 decoration-yellow-400"
                      : ""
                  } hover:text-yellow-400`}
                >
                  .About Me
                </Link>
              </li>
              <li>
                <button
                  onClick={handleProjectsClick}
                  className={`${
                    underline === "projects"
                      ? "underline underline-offset-4 decoration-yellow-400"
                      : ""
                  } hover:text-yellow-400`}
                >
                  .Projects
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-lg font-semibold border px-3 py-1  rounded"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <div className="flex  gap-3 items-baseline-last pl-[400px] pb-9 lg:hidden text-lg font-bold ">
              <Link
                to="/"
                onClick={() => {
                  setUnderline("home");
                  setMenuOpen(false);
                }}
                className={underline === "home" ? "underline decoration-yellow-400" : ""}
              >
                .Home
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  setUnderline("about");
                  setMenuOpen(false);
                }}
                className={underline === "about" ? "underline decoration-yellow-400" : ""}
              >
                .About Me
              </Link>
              <button
                onClick={handleProjectsClick}
                className={underline === "projects" ? "underline decoration-yellow-400" : ""}
              >
                .Projects
              </button>
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
