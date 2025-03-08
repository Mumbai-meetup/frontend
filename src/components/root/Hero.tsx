import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-indigo-900 text-white">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1600')`,
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mumbai's Tech Community Meetup Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Connecting developers, designers, and tech enthusiasts across Mumbai
            through engaging meetups and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#events"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Explore Events
            </a>
            <a
              href="#join"
              className="bg-transparent hover:bg-indigo-700 border-2 border-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero