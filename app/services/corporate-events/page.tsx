import SideContactForm from '@/components/SideContactForm'
import { FiCalendar } from 'react-icons/fi'

export const metadata = {
  title: 'Corporate Events - Katyani Media',
  description: 'Complete corporate event management and marketing services for successful business gatherings',
}

export default function CorporateEventsPage() {
  return (
    <div className="w-full pt-24 pb-16 bg-black">
      {/* Hero Image Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiCalendar className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-300">Corporate Events</h1>
            </div>
            <p className="text-lg text-primary-200">Complete Event Management Solutions</p>
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
                    <FiCalendar className="text-primary-400" size={120} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-200 text-sm font-medium">Corporate Event Services</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-primary-200 mb-6">
                  Corporate events are powerful platforms for brand building, networking, and business growth. Our comprehensive corporate event services cover everything from planning and execution to marketing and promotion, ensuring your event achieves maximum impact and success.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Our Corporate Event Services?</h2>
                <ul className="list-disc list-inside space-y-2 text-primary-200 mb-6">
                  <li>End-to-end event management solutions</li>
                  <li>Professional planning and execution</li>
                  <li>Brand visibility and marketing integration</li>
                  <li>Networking and relationship building</li>
                  <li>Measurable ROI and event analytics</li>
                  <li>Experienced team handling all aspects</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Corporate Event Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Planning</h3>
                    <p className="text-sm text-primary-200">Comprehensive planning from concept to execution</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Venue Management</h3>
                    <p className="text-sm text-primary-200">Selection and coordination of perfect event venues</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Brand Promotion</h3>
                    <p className="text-sm text-primary-200">Integrated marketing and brand visibility at events</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Event Marketing</h3>
                    <p className="text-sm text-primary-200">Pre-event, during-event, and post-event marketing campaigns</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Logistics Management</h3>
                    <p className="text-sm text-primary-200">Complete coordination of event logistics and operations</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Post-Event Analysis</h3>
                    <p className="text-sm text-primary-200">Comprehensive reporting and ROI measurement</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Event Types We Handle</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Product launches and brand unveilings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Corporate conferences and seminars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Annual meetings and shareholder gatherings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Trade shows and exhibitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Networking events and business mixers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Award ceremonies and corporate celebrations</span>
                    </li>
                  </ul>
                </div>

                <p className="text-primary-200">
                  Let us help you create memorable corporate events that strengthen your brand and achieve your business objectives.
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

