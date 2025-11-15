import Portfolio from '@/components/Portfolio'
import Image from 'next/image'

export const metadata = {
  title: 'Portfolio - Katyani Media',
  description: 'Explore our successful marketing campaigns and client projects',
}

export default function PortfolioPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          alt="Our Portfolio - Marketing Campaigns"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Successful Marketing Campaigns & Client Projects
            </p>
          </div>
        </div>
      </section>
      <Portfolio />
    </div>
  )
}

