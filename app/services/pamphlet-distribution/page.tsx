import SideContactForm from '@/components/SideContactForm'
import { FiFileText } from 'react-icons/fi'

export const metadata = {
  title: 'Pamphlet Distribution - Katyani Media',
  description: 'Professional pamphlet distribution services for targeted local marketing campaigns',
}

export default function PamphletDistributionPage() {
  return (
    <div className="w-full pt-24 pb-16 bg-black">
      {/* Hero Image Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiFileText className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-300">Pamphlet Distribution</h1>
            </div>
            <p className="text-lg text-primary-200">Targeted Local Marketing Campaigns</p>
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
                    <FiFileText className="text-primary-400" size={120} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-200 text-sm font-medium">Pamphlet Distribution Services</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-primary-200 mb-6">
                  Pamphlet distribution is a time-tested and highly effective method for reaching local customers. Our professional pamphlet distribution services ensure your marketing materials are delivered to the right locations at the right time, maximizing your campaign's impact.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Pamphlet Distribution?</h2>
                <ul className="list-disc list-inside space-y-2 text-primary-200 mb-6">
                  <li>Direct and personal marketing approach</li>
                  <li>Targeted distribution to specific areas</li>
                  <li>Cost-effective for local businesses</li>
                  <li>Tangible marketing material customers can keep</li>
                  <li>High visibility in residential and commercial areas</li>
                  <li>Flexible distribution schedules</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Pamphlet Distribution Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Door-to-Door Distribution</h3>
                    <p className="text-sm text-primary-200">Systematic distribution to residential and commercial properties</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Distribution</h3>
                    <p className="text-sm text-primary-200">Targeted distribution at events, festivals, and gatherings</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">High-Traffic Areas</h3>
                    <p className="text-sm text-primary-200">Distribution in shopping malls, markets, and busy streets</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Corporate Distribution</h3>
                    <p className="text-sm text-primary-200">B2B pamphlet distribution to offices and business centers</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Precise targeting of specific neighborhoods and demographics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Affordable marketing solution for local businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Professional distribution team ensuring quality delivery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Coverage reports and distribution analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Flexible campaign sizes and frequencies</span>
                    </li>
                  </ul>
                </div>

                <p className="text-primary-200">
                  Reach out to us for professional pamphlet distribution services tailored to your marketing needs.
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

