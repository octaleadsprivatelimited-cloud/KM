import SideContactForm from '@/components/SideContactForm'
import { FiUser } from 'react-icons/fi'

export const metadata = {
  title: 'Look Walker - Katyani Media',
  description: 'Human billboard and look walker advertising services for maximum brand visibility',
}

export default function LookWalkerPage() {
  return (
    <div className="w-full pt-24 pb-16 bg-black">
      {/* Hero Image Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiUser className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-300">Look Walker</h1>
            </div>
            <p className="text-lg text-primary-200">Human Billboard Advertising</p>
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
                    <FiUser className="text-primary-400" size={120} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-200 text-sm font-medium">Look Walker Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-primary-200 mb-6">
                  Look walker advertising, also known as human billboards, is an innovative and highly visible form of outdoor advertising. Our look walker services use professional brand ambassadors who carry your message through high-traffic areas, events, and strategic locations, creating memorable brand interactions and maximum visibility.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Look Walker Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-primary-200 mb-6">
                  <li>Highly visible and attention-grabbing</li>
                  <li>Mobile advertising that goes where the audience is</li>
                  <li>Personal interaction and engagement opportunities</li>
                  <li>Perfect for events, launches, and promotions</li>
                  <li>Cost-effective alternative to static billboards</li>
                  <li>Flexible scheduling and route planning</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Look Walker Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Human Billboards</h3>
                    <p className="text-sm text-primary-200">Professional brand ambassadors with custom signage</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Walkers</h3>
                    <p className="text-sm text-primary-200">Look walkers for events, festivals, and gatherings</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Route-Based Campaigns</h3>
                    <p className="text-sm text-primary-200">Strategic walking routes through high-traffic commercial areas</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Brand Ambassadors</h3>
                    <p className="text-sm text-primary-200">Trained professionals representing your brand</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Maximum visibility in crowded areas and events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Personal engagement and brand interaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Flexible and mobile advertising solution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Cost-effective for targeted local campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Professional brand ambassadors ensuring quality representation</span>
                    </li>
                  </ul>
                </div>

                <p className="text-primary-200">
                  Contact us to learn how look walker advertising can create memorable brand experiences and drive engagement.
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

