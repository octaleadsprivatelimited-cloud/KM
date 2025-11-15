import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white w-full mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Katyani Media"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm mb-4 text-white">
              Katyani Media is a trusted offline marketing partner based in Hyderabad, delivering impactful street, society, and local campaigns across Telangana.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/katyani-media/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary-300 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white hover:text-primary-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white hover:text-primary-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-300 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Bus Advertising</li>
              <li>Cycle Advertising</li>
              <li>Radio Ads</li>
              <li>Corporate Events</li>
              <li>Metro Advertising</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-300 font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 flex-shrink-0 text-primary-400" />
                <span className="text-sm text-white">T-HUB 2.0, Vittal Rao Nagar, Hyderabad, Telangana 500081</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-400" />
                <a href="tel:+919390809997" className="text-sm text-white hover:text-primary-400 transition-colors">
                  +91-9390809997
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-400" />
                <a href="mailto:info@katyanimedia.com" className="text-sm text-white hover:text-primary-400 transition-colors">
                  info@katyanimedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-sm text-white">
          <p>&copy; {currentYear} Katyani Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

