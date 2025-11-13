import SideContactForm from '@/components/SideContactForm'
import { FiLayers } from 'react-icons/fi'

export const metadata = {
  title: 'Gate Board - Katyani Media',
  description: 'Professional gate board advertising solutions for high-visibility brand promotion',
}

export default function GateBoardPage() {
  return (
    <div className="w-full pt-24 pb-16 bg-black">
      {/* Hero Image Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiLayers className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-300">Gate Board</h1>
            </div>
            <p className="text-lg text-primary-200">High-Visibility Entry Point Advertising</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-black border border-primary-800 rounded-lg shadow-md p-8">
              {/* Service Image */}
              <div className="mb-8">
                <div className="relative w-full h-64 bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-800 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiLayers className="text-primary-400" size={120} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-200 text-sm font-medium">Gate Board Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-primary-200 mb-6">
                  Gate board advertising provides exceptional visibility at entry and exit points of residential complexes, commercial buildings, and public spaces. Our gate board solutions ensure your brand message is seen by thousands of people daily, creating lasting impressions and driving brand recall.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Gate Board Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-primary-200 mb-6">
                  <li>High visibility at strategic entry/exit points</li>
                  <li>Targeted local market reach</li>
                  <li>Long-term brand exposure</li>
                  <li>Cost-effective advertising solution</li>
                  <li>Professional design and installation</li>
                  <li>Weather-resistant and durable materials</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Gate Board Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Residential Gate Boards</h3>
                    <p className="text-sm text-primary-200">Strategic placement at housing societies and residential complexes</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Commercial Gate Boards</h3>
                    <p className="text-sm text-primary-200">High-traffic commercial building entrances and exits</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Custom Design</h3>
                    <p className="text-sm text-primary-200">Tailored designs matching your brand identity</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Premium Materials</h3>
                    <p className="text-sm text-primary-200">Durable, weather-resistant boards for long-lasting impact</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>24/7 brand visibility at strategic locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Targeted reach to specific residential and commercial areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Professional installation and maintenance services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Cost-effective long-term advertising solution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>High recall value and brand recognition</span>
                    </li>
                  </ul>
                </div>

                <p className="text-primary-200">
                  Contact us to discuss gate board advertising opportunities and get your brand noticed at key entry points.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <SideContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

