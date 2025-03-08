import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community members about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="User"
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Priya Sharma</h4>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Mumbai Meetup has been instrumental in my growth as a developer.
              I've made amazing connections and learned so much from the
              community."
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="User"
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Rahul Desai</h4>
                <p className="text-sm text-gray-500">Data Scientist</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The AI/ML meetups organized through this platform are top-notch.
              The speakers are industry experts and the networking opportunities
              are invaluable."
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="/placeholder.svg?height=50&width=50"
                alt="User"
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Aisha Patel</h4>
                <p className="text-sm text-gray-500">Product Manager</p>
              </div>
            </div>
            <p className="text-gray-600">
              "As someone new to Mumbai, these meetups helped me connect with
              the tech community quickly. The events are well-organized and
              diverse."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials