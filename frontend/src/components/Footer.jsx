import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light tracking-tight text-gray-900 mb-2">
              Long Float
            </h3>
            <p className="text-sm text-gray-500 font-light">
              Designed for work that lasts.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex items-center gap-8">
            <a
              href="#products"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Products
            </a>
            <a
              href="#philosophy"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 font-light">
            © {new Date().getFullYear()} Long Float. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
