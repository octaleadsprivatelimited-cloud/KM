'use client'

import Link from 'next/link'
import { FiTruck, FiActivity, FiRadio, FiFileText, FiCalendar, FiLayers, FiTv, FiNavigation, FiUser, FiUsers } from 'react-icons/fi'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const services: Service[] = [
  {
    icon: <FiTruck size={32} />,
    title: 'Bus Advertising',
    description: 'Effective bus advertising solutions to reach a wide audience and maximize brand visibility across urban routes.',
    href: '/services/bus-advertising',
  },
  {
    icon: <FiActivity size={32} />,
    title: 'Cycle Advertising',
    description: 'Eco-friendly cycle advertising solutions for targeted local marketing campaigns and mobile brand promotion.',
    href: '/services/cycle-advertising',
  },
  {
    icon: <FiRadio size={32} />,
    title: 'Radio Ads',
    description: 'Professional radio advertising services to reach your target audience through compelling audio marketing campaigns.',
    href: '/services/radio-ads',
  },
  {
    icon: <FiFileText size={32} />,
    title: 'Pamphlet Distribution',
    description: 'Professional pamphlet distribution services for targeted local marketing campaigns and direct customer engagement.',
    href: '/services/pamphlet-distribution',
  },
  {
    icon: <FiCalendar size={32} />,
    title: 'Corporate Events',
    description: 'Complete corporate event management and marketing services for successful business gatherings and brand promotion.',
    href: '/services/corporate-events',
  },
  {
    icon: <FiLayers size={32} />,
    title: 'Gate Board',
    description: 'Professional gate board advertising solutions for high-visibility brand promotion at strategic entry and exit points.',
    href: '/services/gate-board',
  },
  {
    icon: <FiTv size={32} />,
    title: 'Television Ads',
    description: 'Professional television advertising services for maximum brand reach and impact across local and regional markets.',
    href: '/services/television-ads',
  },
  {
    icon: <FiNavigation size={32} />,
    title: 'Metro Advertising',
    description: 'Strategic metro advertising solutions to reach commuters and urban audiences during their daily transit.',
    href: '/services/metro-advertising',
  },
  {
    icon: <FiUser size={32} />,
    title: 'Look Walker',
    description: 'Human billboard and look walker advertising services for maximum brand visibility and memorable brand interactions.',
    href: '/services/look-walker',
  },
  {
    icon: <FiUsers size={32} />,
    title: 'RWA Activities',
    description: 'Resident Welfare Association (RWA) marketing and engagement activities for local brand promotion and community connection.',
    href: '/services/rwa-activities',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-black border border-primary-800 p-8 rounded-lg hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-2 block"
            >
              <div className="text-primary-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary-300 mb-3">
                {service.title}
              </h3>
              <p className="text-primary-200 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 text-primary-400 font-medium text-sm">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

