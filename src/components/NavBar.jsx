import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function NavBar({ Link = RouterLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pageData = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  // Function to close the burger menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-zinc-900 text-white px-4 py-3">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="font-bold text-lg animate-pulse">Daniel Leon</div>
        <div className="hidden md:flex gap-4">
          {pageData.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="hover:text-zinc-600 transition-colors duration-150 ease-in-out"
            >
              {page.name}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-3">
          {pageData.map((page) => (
            <RouterLink
              key={page.name}
              to={page.path}
              className="block py-1 hover:text-zinc-600 transition-colors duration-150 ease-in-out"
              onClick={handleCloseMenu} // Close the menu on click
            >
              {page.name}
            </RouterLink>
          ))}
        </div>
      )}
    </nav>
  );
}
