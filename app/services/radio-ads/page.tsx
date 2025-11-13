import SideContactForm from '@/components/SideContactForm'
import { FiRadio } from 'react-icons/fi'

export const metadata = {
  title: 'Radio Ads - Katyani Media',
  description: 'Professional radio advertising services to reach your target audience through audio marketing',
}

export default function RadioAdsPage() {
  return (
    <div className="w-full pt-24 pb-16 bg-black">
      {/* Hero Image Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiRadio className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-300">Radio Ads</h1>
            </div>
            <p className="text-lg text-primary-200">Reach Listeners Through Audio</p>
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
                    <FiRadio className="text-primary-400" size={120} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary-200 text-sm font-medium">Radio Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-primary-200 mb-6">
                  Radio advertising remains one of the most powerful mediums to reach a broad audience. Our radio advertising services help you create compelling audio campaigns that connect with listeners during their daily routines, from morning commutes to evening drives.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Radio Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-primary-200 mb-6">
                  <li>Wide reach across diverse demographics</li>
                  <li>Cost-effective compared to television</li>
                  <li>Targeted time slots for specific audiences</li>
                  <li>High frequency and repetition options</li>
                  <li>Local and regional market coverage</li>
                  <li>Immediate call-to-action effectiveness</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Radio Advertising Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Script Writing</h3>
                    <p className="text-sm text-primary-200">Professional script development for engaging radio spots</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Voice Talent</h3>
                    <p className="text-sm text-primary-200">Access to professional voice artists and narrators</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Audio Production</h3>
                    <p className="text-sm text-primary-200">High-quality audio editing and sound design</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Media Buying</h3>
                    <p className="text-sm text-primary-200">Strategic placement across multiple radio stations</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-primary-200">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Reach listeners during peak engagement times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Target specific demographics and interests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Flexible campaign duration and frequency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Measurable results and audience analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Local market penetration and brand awareness</span>
                    </li>
                  </ul>
                </div>

                <p className="text-primary-200">
                  Contact us to create a radio advertising campaign that resonates with your target audience and drives results.
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

