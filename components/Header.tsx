'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    if (isServicesOpen) {
      // Add event listener after a small delay to prevent immediate closing
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
      }, 10)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isServicesOpen])

  const services = [
    { href: '/services/bus-advertising', label: 'Bus Advertising' },
    { href: '/services/cycle-advertising', label: 'Cycle Advertising' },
    { href: '/services/radio-ads', label: 'Radio Ads' },
    { href: '/services/pamphlet-distribution', label: 'Pamphlet Distribution' },
    { href: '/services/corporate-events', label: 'Corporate Events' },
    { href: '/services/gate-board', label: 'Gate Board' },
    { href: '/services/television-ads', label: 'Television Ads' },
    { href: '/services/metro-advertising', label: 'Metro Advertising' },
    { href: '/services/look-walker', label: 'Look Walker' },
    { href: '/services/rwa-activities', label: 'RWA Activities' },
  ]

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black shadow-lg py-2 border-b border-primary-600'
          : 'bg-black/90 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
          >
            Katyani Media
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary-400 text-primary-200"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsServicesOpen(!isServicesOpen)
                }}
                className="text-sm font-medium transition-colors hover:text-primary-400 flex items-center space-x-1 text-primary-200"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <FiChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-black border border-primary-600 rounded-lg shadow-xl py-2 z-[100]"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-primary-200 hover:bg-primary-900/50 hover:text-primary-400 transition-colors font-medium"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="border-t border-primary-800 my-1"></div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-primary-300 hover:bg-primary-900/50 hover:text-primary-400 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="bg-primary-500 text-black px-6 py-2 rounded-full hover:bg-primary-400 transition-colors font-medium font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-black border border-primary-600 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-primary-200 font-medium hover:text-primary-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-primary-200 font-medium hover:text-primary-400 transition-colors py-2 flex items-center justify-between w-full"
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <FiChevronDown className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} size={16} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary-600">
                    <Link
                      href="/services"
                      className="block text-primary-300 hover:text-primary-400 transition-colors py-1 text-sm font-medium"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsMobileServicesOpen(false)
                      }}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-primary-300 hover:text-primary-400 transition-colors py-1 text-sm"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsMobileServicesOpen(false)
                        }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="bg-primary-500 text-black px-6 py-2 rounded-full hover:bg-primary-400 transition-colors font-medium text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

