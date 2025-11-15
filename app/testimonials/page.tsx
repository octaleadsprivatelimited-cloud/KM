import Image from 'next/image'
import { FiStar } from 'react-icons/fi'

export const metadata = {
  title: 'Testimonials - Katyani Media',
  description: 'Read what our clients say about Katyani Media and our exceptional marketing services',
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Tech Solutions Pvt Ltd',
      position: 'CEO',
      content: 'Katyani Media transformed our brand visibility with their innovative bus advertising campaign. Our customer inquiries increased by 40% within the first month.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Fashion Forward',
      position: 'Marketing Director',
      content: 'The metro advertising campaign executed by Katyani Media exceeded our expectations. Professional service, creative designs, and measurable results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Green Energy Solutions',
      position: 'Founder',
      content: 'Working with Katyani Media has been a game-changer. Their cycle advertising campaign perfectly aligned with our eco-friendly brand values.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      company: 'Local Restaurant Chain',
      position: 'Operations Manager',
      content: 'The pamphlet distribution service helped us reach our target audience effectively. Great coordination and excellent results in our local market.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      company: 'Real Estate Developers',
      position: 'Sales Head',
      content: 'Katyani Media\'s gate board advertising gave us maximum visibility in prime locations. Our property inquiries saw a significant boost.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    },
    {
      id: 6,
      name: 'Anjali Mehta',
      company: 'Healthcare Services',
      position: 'Marketing Manager',
      content: 'The corporate event management was flawless. Professional team, attention to detail, and our brand launch was a huge success.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    },
  ]

  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          alt="Testimonials - Client Reviews"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              Testimonials
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              What Our Clients Say About Us
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-300 mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Our clients' success stories speak volumes about our commitment to excellence and results-driven marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black border border-primary-800 rounded-lg p-6 hover:border-primary-600 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-primary-400 fill-primary-400" size={20} />
                ))}
              </div>
              <p className="text-white mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-primary-300 font-semibold">{testimonial.name}</h4>
                  <p className="text-white text-sm">{testimonial.position}</p>
                  <p className="text-primary-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
