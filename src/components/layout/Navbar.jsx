import React from "react";
import { Link, NavLink } from "react-router-dom";
import ResumindLogo from "../../assets/Resumind Logo.png";

function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 shadow-lg">
        <div className="flex items-center gap-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 object-contain"
              src={ResumindLogo}
              alt="Resumind Logo"
            />
            <Link to="/">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                ResumindAI
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-10 text-gray-300 font-medium">
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="hover:text-white transition-all duration-300"
              >
                Features
              </a>
            </li>

            <li>
              <Link
                to="/analyzer"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-2 rounded-full transition-all duration-300 shadow-md"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
