import About from '@/components/About'

export const metadata = {
  title: 'About Us - Katyani Media',
  description: 'Learn about Katyani Media - Your trusted offline marketing partner with over 15 years of experience',
}

export default function AboutPage() {
  return (
    <div className="w-full pt-20">
      {/* Hero Image Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              About Katyani Media
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Your Trusted Partner in Offline Marketing Excellence
            </p>
          </div>
        </div>
      </section>
      <About />
    </div>
  )
}

