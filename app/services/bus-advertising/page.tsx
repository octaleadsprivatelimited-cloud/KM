import SideContactForm from '@/components/SideContactForm'
import Image from 'next/image'
import { FiTruck } from 'react-icons/fi'

export const metadata = {
  title: 'Bus Advertising - Katyani Media',
  description: 'Effective bus advertising solutions to reach a wide audience and maximize brand visibility',
}

export default function BusAdvertisingPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[500px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
          alt="Bus Advertising - Maximum Visibility on the Move"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FiTruck className="text-primary-400" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Bus Advertising</h1>
            </div>
            <p className="text-lg text-white">Maximum Visibility on the Move</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-black border border-primary-800 rounded-lg p-8">
              <div className="mb-8">
                <div className="relative w-full h-80 rounded-lg overflow-hidden border border-primary-800">
                  <Image
                    src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=1200&q=80"
                    alt="Bus Advertising Solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-lg font-semibold">Bus Advertising Solutions</p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-white mb-6">
                  Bus advertising is one of the most effective ways to reach a large and diverse audience. Our bus advertising solutions help your brand gain maximum visibility as buses travel through high-traffic areas, ensuring your message reaches thousands of potential customers daily.
                </p>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Why Choose Bus Advertising?</h2>
                <ul className="list-disc list-inside space-y-2 text-white mb-6">
                  <li>High visibility in urban and suburban areas</li>
                  <li>Cost-effective advertising solution</li>
                  <li>Reaches diverse demographics</li>
                  <li>24/7 brand exposure</li>
                  <li>Targeted route selection available</li>
                  <li>Multiple ad placement options</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Our Bus Advertising Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Full Bus Wrap</h3>
                    <p className="text-sm text-white">Complete bus wrapping for maximum impact and brand recognition</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Side Panel Advertising</h3>
                    <p className="text-sm text-white">Strategic placement on bus sides for optimal visibility</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Back Panel Advertising</h3>
                    <p className="text-sm text-white">High-impact rear advertising for following traffic</p>
                  </div>
                  <div className="bg-primary-900/30 border border-primary-800 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary-300 mb-2">Interior Bus Advertising</h3>
                    <p className="text-sm text-white">Reach passengers during their commute with interior ads</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-300 mt-8 mb-4">Benefits</h2>
                <div className="bg-primary-900/50 border border-primary-800 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-white">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Extensive reach across multiple routes and neighborhoods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Cost-effective compared to traditional media</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Flexible campaign duration options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Professional design and installation services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">✓</span>
                      <span>Route analytics and performance tracking</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white">
                  Contact us today to discuss your bus advertising needs and get a customized quote for your campaign.
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

