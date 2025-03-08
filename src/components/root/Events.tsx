import React from 'react'

const Events = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Meetups
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join these exciting tech events happening in Mumbai this month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="React Mumbai Meetup"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-indigo-600 font-semibold mb-2">
                Mar 15, 2025 • 6:00 PM
              </div>
              <h3 className="text-xl font-bold mb-2">React Mumbai Meetup</h3>
              <p className="text-gray-600 mb-4">
                Join us for an evening of React talks, networking, and pizza!
                Learn about the latest in React ecosystem.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Lower Parel, Mumbai
                </span>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Register →
                </a>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="AI/ML Workshop"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-indigo-600 font-semibold mb-2">
                Mar 20, 2025 • 10:00 AM
              </div>
              <h3 className="text-xl font-bold mb-2">AI/ML Workshop</h3>
              <p className="text-gray-600 mb-4">
                Hands-on workshop on building ML models. Bring your laptop and
                curiosity!
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">BKC, Mumbai</span>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Register →
                </a>
              </div>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="DevOps Meetup"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-indigo-600 font-semibold mb-2">
                Mar 25, 2025 • 5:30 PM
              </div>
              <h3 className="text-xl font-bold mb-2">DevOps Meetup</h3>
              <p className="text-gray-600 mb-4">
                Learn about containerization, CI/CD pipelines, and cloud
                infrastructure from industry experts.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Powai, Mumbai</span>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Register →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}

export default Events