import { useState } from "react";
import logoImg from "../assets/logo-text.png";


const Nav = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Technologies", href: "#" },
    { name: "Projects", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <div>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-337.5 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-2">
                <img
                  src={logoImg}
                  alt="DevStack Logo"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeTab === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveTab(link.name)}
                    className={`text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#E62E7B] font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-base font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                Sign In
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-base font-medium text-white bg-linear-to-r from-[#E62E7B] to-[#E62E7B] hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Sign Up
              </a>
            </div>

            <div className="flex md:hidden items-center space-x-3">
              <a
                href="#"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                Sign In
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-[#E62E7B] hover:opacity-90 transition-all shadow-sm"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === link.name
                    ? "text-[#E62E7B] bg-pink-50 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-gray-50 text-center"
              >
                Sign In
              </a>
              <a
                href="#"
                className="block text-center py-2.5 rounded-full text-base font-medium text-white bg-[#E62E7B] hover:opacity-90 transition-all"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Nav;