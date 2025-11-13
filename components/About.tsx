export default function About() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-300 mb-6">
              About Katyani Media
            </h2>
            <p className="text-lg text-primary-200 mb-4 leading-relaxed">
              With over 15 years of experience in the offline marketing industry, Katyani Media has established itself as a trusted partner for businesses seeking to expand their reach and connect with customers through traditional marketing channels.
            </p>
            <p className="text-lg text-primary-200 mb-4 leading-relaxed">
              We specialize in creating impactful marketing campaigns that combine creativity with strategic thinking. Our team of experienced professionals understands the nuances of offline marketing and how to maximize ROI for our clients.
            </p>
            <p className="text-lg text-primary-200 mb-6 leading-relaxed">
              From brand promotion to event marketing, we offer end-to-end solutions that help businesses achieve their marketing goals and drive sustainable growth.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-primary-400 mb-2">15+</h4>
                <p className="text-primary-200">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary-400 mb-2">500+</h4>
                <p className="text-primary-200">Satisfied Clients</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary-400 mb-2">1000+</h4>
                <p className="text-primary-200">Projects Done</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary-400 mb-2">50+</h4>
                <p className="text-primary-200">Team Members</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-primary-800 rounded-lg p-8 h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-black text-4xl font-bold">KM</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-300 mb-2">Katyani Media</h3>
                <p className="text-primary-200">Your Marketing Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

