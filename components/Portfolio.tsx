'use client'

import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  image: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Bus Advertising Campaign',
    category: 'Outdoor Advertising',
    description: 'Comprehensive bus wrap campaign reaching 500K+ daily commuters across major routes',
    image: '',
  },
  {
    id: 2,
    title: 'Corporate Event Marketing',
    category: 'Event Marketing',
    description: 'Full-service event marketing for annual corporate conference with 2000+ attendees',
    image: '',
  },
  {
    id: 3,
    title: 'Radio Advertising Campaign',
    category: 'Media Advertising',
    description: 'Multi-channel radio advertising campaign across major stations with 95% reach',
    image: '',
  },
  {
    id: 4,
    title: 'Metro Station Campaign',
    category: 'Outdoor Advertising',
    description: 'Strategic metro station advertising placement in high-traffic areas',
    image: '',
  },
  {
    id: 5,
    title: 'Pamphlet Distribution Drive',
    category: 'Direct Marketing',
    description: 'Targeted pamphlet distribution campaign reaching 50K+ households',
    image: '',
  },
  {
    id: 6,
    title: 'Cycle Advertising Initiative',
    category: 'Outdoor Advertising',
    description: 'Eco-friendly cycle advertising campaign at major events and festivals',
    image: '',
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', 'Event Marketing', 'Media Advertising', 'Outdoor Advertising', 'Direct Marketing']

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-300 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Explore our successful marketing campaigns and client projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-black shadow-lg'
                  : 'bg-black border border-primary-800 text-primary-200 hover:border-primary-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-black border border-primary-800 rounded-lg overflow-hidden hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <span className="text-primary-200 text-2xl font-bold">{item.title.charAt(0)}</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-400 font-semibold">{item.category}</span>
                <h3 className="text-xl font-semibold text-primary-300 mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

