import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Hero />
      <Stats />
      <Services />
      <About />
      <Portfolio />
      <CTA />
    </div>
  )
}
