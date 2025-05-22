"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react" // Added ArrowRight import

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("landing")

  // Navigation items array for easier management
  const navItems = [
    { id: "landing", label: "Home" },
    // { id: "about", label: "About" },
    { id: "timeline", label: "Timeline" },
    { id: "flow", label: "Registration Steps" },
    { id: "route", label: "Route" },
    { id: "contact", label: "Contact" },
    // { id: "gallery", label: "Gallery" },
  ]

  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth"

    const handleScroll = () => {
      // Set header background when scrolled
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Scroll spy functionality
      const sections = navItems.map((item) => item.id)

      // Find the current active section
      let currentSection = "home"
      let minDistance = Number.POSITIVE_INFINITY

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          // Calculate distance from top of viewport
          const distance = Math.abs(rect.top)

          // If this section is closer to the top than the previous closest, update
          if (distance < minDistance) {
            minDistance = distance
            currentSection = sectionId
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [navItems])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? `bg-white shadow-md ${isMenuOpen ? "py-6" : "py-3"} md:py-3`
        : `${isMenuOpen ? "py-8" : "py-5"} md:py-5 bg-transparent`
        }`}
    >
      <div className="w-full md:w-4/5 mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/#landing" className="flex items-center text-2xl font-bold text-primary">
          <img src="/logo_nfb.png" alt="logo nfb"
            className="h-16 w-16 mr-3 object-contain"
          />
            <img
              src="/logo_m111.png"
              alt="M111 Logo"
              className="h-16 w-16 mr-3 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className={`font-medium transition-colors ${activeSection === "landing"
                  ? activeSection === item.id
                    ? "text-white border-b-2 border-white"
                    : "text-gray-200"
                  : activeSection === item.id
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-gray-800 hover:text-secondary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Register Button - only show when NOT in landing section */}
            {activeSection !== "landing" && (
              <Link
                href="/#register"
                className={`ml-4 inline-flex items-center px-4 py-2 rounded-full ${isScrolled 
                  ? "bg-primary text-white hover:bg-blue-600" 
                  : "bg-white text-primary hover:bg-blue-600 hover:text-white"} 
                  font-medium transition-colors`}
              >
                Daftar Sekarang
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white mx-2 mt-2 rounded-lg shadow-lg">
          <div className="w-full px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className={`font-medium ${activeSection === "landing"
                      ? activeSection === item.id
                        ? "text-blue-600"
                        : "text-gray-600"
                      : activeSection === item.id
                        ? "text-blue-600"
                        : "text-gray-800"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Register Button for Mobile - only show when NOT in landing section */}
              {activeSection !== "landing" && (
                <Link
                  href="/#register"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Daftar Sekarang
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}