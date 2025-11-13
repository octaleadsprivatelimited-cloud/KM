import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-primary-800 text-primary-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-300 mb-4">Katyani Media</h3>
            <p className="text-sm mb-4 text-primary-200">
              Your trusted partner for offline marketing solutions. We help businesses grow through strategic marketing campaigns.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-300 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-200 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-200 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-200 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-primary-200 hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-200 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-300 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>Bus Advertising</li>
              <li>Cycle Advertising</li>
              <li>Radio Ads</li>
              <li>Corporate Events</li>
              <li>Metro Advertising</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-300 font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 flex-shrink-0 text-primary-400" />
                <span className="text-sm text-primary-200">Your Business Address, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-400" />
                <a href="tel:+1234567890" className="text-sm text-primary-200 hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-400" />
                <a href="mailto:info@katyanimedia.com" className="text-sm text-primary-200 hover:text-primary-400 transition-colors">
                  info@katyanimedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-sm text-primary-200">
          <p>&copy; {currentYear} Katyani Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

