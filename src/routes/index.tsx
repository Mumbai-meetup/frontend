import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  FaCalendar,
  FaUsers,
  FaLaptopCode,
  FaMicrophone,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you for subscribing with ${email}! We'll keep you updated on upcoming meetups.`
    );
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-indigo-600 text-white p-2 rounded-lg mr-2">
              <FaUsers className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl text-indigo-600">
              Mumbai Meetup
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#events"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Events
            </a>
            <a
              href="#community"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Community
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <a
            href="#join"
            className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <a
              href="#home"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#events"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              Events
            </a>
            <a
              href="#community"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              Community
            </a>
            <a
              href="#about"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
            <a
              href="#join"
              className="block py-2 px-4 text-indigo-600 font-medium hover:bg-gray-100"
            >
              Join Us
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
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
              Connecting developers, designers, and tech enthusiasts across
              Mumbai through engaging meetups and events.
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

      {/* Stats Section */}
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

      {/* Features Section */}
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
                Discover the best tech events happening across Mumbai, all in
                one place.
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

      {/* Upcoming Events Section */}
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

      {/* Community Section */}
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

      {/* Testimonials */}
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
                "Mumbai Meetup has been instrumental in my growth as a
                developer. I've made amazing connections and learned so much
                from the community."
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
                "The AI/ML meetups organized through this platform are
                top-notch. The speakers are industry experts and the networking
                opportunities are invaluable."
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

      {/* Newsletter Section */}
      <section id="join" className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter to get weekly updates on upcoming
              meetups and tech events in Mumbai.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow py-3 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm mt-4 text-indigo-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white text-indigo-600 p-2 rounded-lg mr-2">
                  <FaUsers className="h-6 w-6" />
                </div>
                <span className="font-bold text-xl">Mumbai Meetup</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting Mumbai's tech community through engaging meetups and
                events.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaDiscord className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#community"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Communities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Venues
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Organize a Meetup
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Become a Speaker
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sponsor an Event
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Mumbai, Maharashtra, India</li>
                <li>info@mumbaimeetup.com</li>
                <li>+91 9876543210</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Mumbai Meetup. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
