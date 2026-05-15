import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ResumindLogo from "../../assets/Resumind Logo.png";

function Footer() {
  return (
    <footer className="w-full py-16 relative overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-400/10 blur-[120px] rounded-full"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo + Description */}
          <div className="max-w-sm text-center md:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={ResumindLogo}
                alt="ResumindAI Logo"
                className="h-10 w-10 object-contain"
              />

              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-indigo-500 bg-clip-text text-transparent tracking-tight">
                ResumindAI
              </h2>
            </div>

            {/* Description */}
            <p className="mt-5 text-slate-600 leading-7">
              AI-powered resume analysis platform designed to help you optimize
              your resume and improve your chances of getting hired.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-end gap-6">
            {/* Links */}
            <ul className="flex items-center gap-8 text-slate-700 font-medium">
              <li>
                <a
                  href="#hero"
                  className="hover:text-indigo-500 transition-all duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-indigo-500 transition-all duration-300"
                >
                  Features
                </a>
              </li>

              <li>
                <Link
                  to="/analyzer"
                  className="hover:text-indigo-500 transition-all duration-300"
                >
                  Analyze
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/vishal-ray-00"
                className="w-11 h-11 rounded-full bg-white/50 backdrop-blur-xl border border-white/30 flex items-center justify-center text-slate-700 hover:text-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-500/5"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/vishal-ray-864564322/"
                className="w-11 h-11 rounded-full bg-white/50 backdrop-blur-xl border border-white/30 flex items-center justify-center text-slate-700 hover:text-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-500/5"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://x.com/vishalray09"
                className="w-11 h-11 rounded-full bg-white/50 backdrop-blur-xl border border-white/30 flex items-center justify-center text-slate-700 hover:text-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-500/5"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 pt-8 border-t border-white/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 ResumindAI. All rights reserved.</p>

          <p>Built by Vishal Ray with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
