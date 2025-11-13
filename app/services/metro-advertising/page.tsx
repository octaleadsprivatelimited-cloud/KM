import SideContactForm from '@/components/SideContactForm'
import { FiNavigation } from 'react-icons/fi'

export const metadata = {
  title: 'Metro Advertising - Katyani Media',
  description: 'Strategic metro advertising solutions to reach commuters and urban audiences',
}

export default function MetroAdvertisingPage() {
  return (
    <div className="w-full pt-24 pb-16 bg-black">
      {/* Hero Image Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiNavigation className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-300">Metro Advertising</h1>
            </div>
            <p className="text-lg text-primary-200">Reach Urban Commuters Daily</p>
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
                    <FiNavigation className="text-primary-400" size={120} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-200 text-sm font-medium">Metro Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-primary-200 mb-6">
                  Metro advertising offers unparalleled reach to urban commuters who use public transportation daily. Our metro advertising solutions help your brand connect with a captive audience during their daily commute, ensuring high visibility and engagement in one of the most effective transit advertising mediums.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Metro Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-primary-200 mb-6">
                  <li>Massive daily commuter reach</li>
                  <li>Captive audience during travel time</li>
                  <li>High-frequency exposure opportunities</li>
                  <li>Strategic station and train placements</li>
                  <li>Targeted urban demographic reach</li>
                  <li>Cost-effective mass transit advertising</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Metro Advertising Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Station Advertising</h3>
                    <p className="text-sm text-primary-200">Platform displays, escalator ads, and station branding</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Train Advertising</h3>
                    <p className="text-sm text-primary-200">Interior and exterior train wrap advertising</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Digital Displays</h3>
                    <p className="text-sm text-primary-200">LED screens and digital boards at metro stations</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Strategic Placement</h3>
                    <p className="text-sm text-primary-200">High-traffic station selection for maximum visibility</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Reach thousands of daily commuters consistently</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Captive audience with extended exposure time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Target high-traffic stations and routes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Professional installation and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Measurable footfall and engagement metrics</span>
                    </li>
                  </ul>
                </div>

                <p className="text-primary-200">
                  Get in touch to explore metro advertising opportunities and reach urban commuters effectively.
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

