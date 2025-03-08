import React from 'react'

const Community = () => {
  return (
    <section
      id="community"
      className="py-16 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Tech Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mumbai Meetup brings together diverse tech communities across the
            city.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {/* Community logos would go here */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center"
            >
              <img
                src={`/placeholder.svg?height=80&width=80&text=Community ${i}`}
                alt={`Community ${i}`}
                className="h-16"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
}

export default Community