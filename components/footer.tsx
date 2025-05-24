import Image from "next/image";
import { Phone, Mail, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-blue-900 text-white">
      <div className="w-[90%] md:w-[90%] mx-auto px-4">
        <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-nfb.png" 
                alt="logo nfb"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
              />
              <img
                src="/logo-m111-white.png"
                alt="M111 Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base font-bold text-center sm:text-left mt-2 sm:mt-0">
              © 2025 Ngalam Folding Bike – All Rights Reserved
            </p>
          </div>

          {/* Contact & Social Media */}
          <div className="flex items-center justify-center md:justify-end space-x-4 sm:space-x-6">
            <a
              href="https://instagram.com/ngalamfoldingbike"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}