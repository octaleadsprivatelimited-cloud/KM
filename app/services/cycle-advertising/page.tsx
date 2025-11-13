import SideContactForm from '@/components/SideContactForm'
import { FiActivity } from 'react-icons/fi'

export const metadata = {
  title: 'Cycle Advertising - Katyani Media',
  description: 'Eco-friendly cycle advertising solutions for targeted local marketing campaigns',
}

export default function CycleAdvertisingPage() {
  return (
    <div className="w-full pt-24 pb-16 bg-black">
      {/* Hero Image Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiActivity className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-300">Cycle Advertising</h1>
            </div>
            <p className="text-lg text-primary-200">Eco-Friendly Mobile Advertising</p>
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
                    <FiActivity className="text-primary-400" size={120} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-200 text-sm font-medium">Cycle Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-primary-200 mb-6">
                  Cycle advertising is an innovative and eco-friendly way to promote your brand. Our cycle advertising services use branded bicycles to create mobile billboards that navigate through busy streets, events, and high-traffic areas, ensuring your message reaches your target audience effectively.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Cycle Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-primary-200 mb-6">
                  <li>Eco-friendly and sustainable advertising method</li>
                  <li>High visibility in crowded areas and events</li>
                  <li>Cost-effective marketing solution</li>
                  <li>Flexible and mobile advertising platform</li>
                  <li>Perfect for local and hyperlocal campaigns</li>
                  <li>Creates memorable brand impressions</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Cycle Advertising Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Branded Cycles</h3>
                    <p className="text-sm text-primary-200">Custom-designed cycles with your brand colors and messaging</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Mobile Billboards</h3>
                    <p className="text-sm text-primary-200">Attachable billboard displays on cycles for maximum visibility</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Cycle Advertising</h3>
                    <p className="text-sm text-primary-200">Targeted advertising at events, festivals, and gatherings</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Route-Based Campaigns</h3>
                    <p className="text-sm text-primary-200">Strategic cycling routes through high-traffic commercial areas</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Environmentally conscious advertising approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>High engagement in pedestrian-heavy areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Affordable pricing for small and medium businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Flexible campaign scheduling and duration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Perfect for local market penetration</span>
                    </li>
                  </ul>
                </div>

                <p className="text-primary-200">
                  Get in touch with us to learn more about our cycle advertising solutions and how they can benefit your brand.
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

