'use client'

import Image from 'next/image'

const clients = [
  { name: 'Amazon', logo: '/clients/amazon.png' },
  { name: 'Apollo', logo: '/clients/appollo.jpg' },
  { name: 'Flipkart', logo: '/clients/flipkart.png' },
  { name: 'IKEA', logo: '/clients/ikea.png' },
  { name: 'Client', logo: '/clients/images.jpg' },
  { name: 'Client', logo: '/clients/images-2.png' },
  { name: 'Rapido', logo: '/clients/rapido.png' },
  { name: 'Swiggy', logo: '/clients/swiggy.png' },
  { name: 'Zepto', logo: '/clients/zepto.jpeg' },
  { name: 'Zomato', logo: '/clients/zomato.jpeg' },
]

export default function Clients() {
  return (
    <section className="py-16 bg-black border-t border-primary-800 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-300 mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Trusted by leading brands across industries
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide" style={{ width: 'fit-content' }}>
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[80px] sm:h-[100px] md:h-[120px] mx-1.5 sm:mx-4 md:mx-6 lg:mx-8"
              >
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 rounded-lg border border-primary-800/50 p-2 sm:p-3 md:p-4 bg-black/30 overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain rounded-lg"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 140px, (max-width: 1024px) 180px, 200px"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] h-[80px] sm:h-[100px] md:h-[120px] mx-1.5 sm:mx-4 md:mx-6 lg:mx-8"
              >
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 rounded-lg border border-primary-800/50 p-2 sm:p-3 md:p-4 bg-black/30 overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain rounded-lg"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 140px, (max-width: 1024px) 180px, 200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

