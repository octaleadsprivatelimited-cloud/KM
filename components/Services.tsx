'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiTruck, FiActivity, FiRadio, FiFileText, FiCalendar, FiLayers, FiTv, FiNavigation, FiUser, FiUsers } from 'react-icons/fi'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  image: string
}

const services: Service[] = [
  {
    icon: <FiTruck size={32} />,
    title: 'Bus Advertising',
    description: 'Effective bus advertising solutions to reach a wide audience and maximize brand visibility across urban routes.',
    href: '/services/bus-advertising',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=800&q=80',
  },
  {
    icon: <FiActivity size={32} />,
    title: 'Cycle Advertising',
    description: 'Eco-friendly cycle advertising solutions for targeted local marketing campaigns and mobile brand promotion.',
    href: '/services/cycle-advertising',
    image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c4a?w=800&q=80',
  },
  {
    icon: <FiRadio size={32} />,
    title: 'Radio Ads',
    description: 'Professional radio advertising services to reach your target audience through compelling audio marketing campaigns.',
    href: '/services/radio-ads',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
  },
  {
    icon: <FiFileText size={32} />,
    title: 'Pamphlet Distribution',
    description: 'Professional pamphlet distribution services for targeted local marketing campaigns and direct customer engagement.',
    href: '/services/pamphlet-distribution',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    icon: <FiCalendar size={32} />,
    title: 'Corporate Events',
    description: 'Complete corporate event management and marketing services for successful business gatherings and brand promotion.',
    href: '/services/corporate-events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    icon: <FiLayers size={32} />,
    title: 'Gate Board',
    description: 'Professional gate board advertising solutions for high-visibility brand promotion at strategic entry and exit points.',
    href: '/services/gate-board',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    icon: <FiTv size={32} />,
    title: 'Television Ads',
    description: 'Professional television advertising services for maximum brand reach and impact across local and regional markets.',
    href: '/services/television-ads',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
  },
  {
    icon: <FiNavigation size={32} />,
    title: 'Metro Advertising',
    description: 'Strategic metro advertising solutions to reach commuters and urban audiences during their daily transit.',
    href: '/services/metro-advertising',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  },
  {
    icon: <FiUser size={32} />,
    title: 'Look Walker',
    description: 'Human billboard and look walker advertising services for maximum brand visibility and memorable brand interactions.',
    href: '/services/look-walker',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
  },
  {
    icon: <FiUsers size={32} />,
    title: 'RWA Activities',
    description: 'Resident Welfare Association (RWA) marketing and engagement activities for local brand promotion and community connection.',
    href: '/services/rwa-activities',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
  },
  {
    icon: <FiUsers size={32} />,
    title: 'Political Campaign',
    description: 'Comprehensive political campaign management and marketing services for effective voter outreach and electoral success.',
    href: '/services/political-campaign',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a78e?w=800&q=80',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-300 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Comprehensive offline marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="relative bg-black border border-primary-800 rounded-lg overflow-hidden hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-2 block group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
                <div className="absolute top-4 left-4 text-primary-400 group-hover:text-primary-300 transition-colors">
                  {service.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-primary-300 mb-2 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-primary-400 font-medium text-sm group-hover:text-primary-300 transition-colors">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

