import Contact from '@/components/Contact'
import Image from 'next/image'

export const metadata = {
  title: 'Contact Us - Katyani Media',
  description: 'Get in touch with Katyani Media to discuss your marketing needs',
}

export default function ContactPage() {
  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          alt="Contact Us - Get in Touch"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Let's Discuss Your Marketing Needs
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}

