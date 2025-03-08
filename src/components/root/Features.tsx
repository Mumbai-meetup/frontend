import React from 'react'
import {
  FaCalendar,
  FaUsers,
  FaLaptopCode,
  FaMicrophone,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Join Mumbai Meetup?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring together the best tech communities in Mumbai to create a
            vibrant ecosystem for learning and networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaCalendar className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curated Events</h3>
            <p className="text-gray-600">
              Discover the best tech events happening across Mumbai, all in one
              place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaUsers className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Diverse Community</h3>
            <p className="text-gray-600">
              Connect with developers, designers, product managers, and tech
              enthusiasts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaLaptopCode className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
            <p className="text-gray-600">
              Learn new technologies and enhance your skills through workshops
              and talks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FaMicrophone className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Speaking Opportunities
            </h3>
            <p className="text-gray-600">
              Share your knowledge and experience with the community as a
              speaker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features