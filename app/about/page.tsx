import About from '@/components/About'
import Image from 'next/image'

export const metadata = {
  title: 'About Us - Katyani Media',
  description: 'Katyani Media is a trusted offline marketing partner based in Hyderabad, delivering impactful street, society, and local campaigns across Telangana.',
}

export default function AboutPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="About Katyani Media - Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              About Katyani Media
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We are a dynamic team of creative people of innovation & marketing
            </p>
          </div>
        </div>
      </section>
      <About />
    </div>
  )
}

