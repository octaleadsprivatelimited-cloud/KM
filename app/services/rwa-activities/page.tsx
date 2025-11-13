import SideContactForm from '@/components/SideContactForm'
import { FiUsers } from 'react-icons/fi'

export const metadata = {
  title: 'RWA Activities - Katyani Media',
  description: 'Resident Welfare Association (RWA) marketing and engagement activities for local brand promotion',
}

export default function RWAActivitiesPage() {
  return (
    <div className="w-full pt-24 pb-16 bg-black">
      {/* Hero Image Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiUsers className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-300">RWA Activities</h1>
            </div>
            <p className="text-lg text-primary-200">Community Engagement & Local Marketing</p>
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
                    <FiUsers className="text-primary-400" size={120} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-200 text-sm font-medium">RWA Activities & Marketing</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-primary-200 mb-6">
                  Resident Welfare Association (RWA) activities provide an excellent platform for brands to connect with local communities. Our RWA marketing services help you engage with residents through community events, activities, and targeted campaigns, building trust and brand loyalty at the grassroots level.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose RWA Activities Marketing?</h2>
                <ul className="list-disc list-inside space-y-2 text-primary-200 mb-6">
                  <li>Direct engagement with local communities</li>
                  <li>Trust-building through community involvement</li>
                  <li>Targeted reach to specific residential areas</li>
                  <li>Cost-effective local market penetration</li>
                  <li>Long-term brand relationship building</li>
                  <li>Word-of-mouth marketing amplification</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our RWA Activity Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Community Events</h3>
                    <p className="text-sm text-primary-200">Sponsorship and participation in RWA-organized events</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Brand Awareness Campaigns</h3>
                    <p className="text-sm text-primary-200">Targeted marketing activities within residential complexes</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Product Demonstrations</h3>
                    <p className="text-sm text-primary-200">On-site product showcases and sampling activities</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Community Engagement</h3>
                    <p className="text-sm text-primary-200">Building relationships through community service initiatives</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Activity Types</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Festival celebrations and cultural events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Health camps and wellness programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Sports events and competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Educational workshops and seminars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Environmental awareness campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Community service and CSR initiatives</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Build trust and credibility within local communities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Targeted reach to specific residential demographics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Cost-effective local market penetration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Long-term brand relationship building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Positive brand association through community involvement</span>
                    </li>
                  </ul>
                </div>

                <p className="text-primary-200">
                  Partner with us to create meaningful RWA activities that connect your brand with local communities and drive engagement.
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

