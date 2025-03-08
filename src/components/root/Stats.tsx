import React from 'react'

const Stats = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-indigo-600 text-4xl font-bold mb-2">50+</div>
            <div className="text-gray-700">Monthly Meetups</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-indigo-600 text-4xl font-bold mb-2">
              5,000+
            </div>
            <div className="text-gray-700">Community Members</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-indigo-600 text-4xl font-bold mb-2">20+</div>
            <div className="text-gray-700">Tech Communities</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats