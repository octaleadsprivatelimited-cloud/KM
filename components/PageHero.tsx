interface PageHeroProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
}

export default function PageHero({ title, subtitle, icon }: PageHeroProps) {
  return (
    <section className="relative h-96 bg-gradient-to-r from-primary-900 to-primary-800 mb-12">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
        <div className="text-center">
          {icon && (
            <div className="flex justify-center mb-4">
              {icon}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

