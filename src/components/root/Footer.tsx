import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import Logo from "@/assets/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 gap-2">
              <img src={Logo} alt="logo" className="size-12 rounded-xl" />
              <span className="font-bold text-xl">Mumbai Meetup</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting Mumbai's tech community through engaging meetups and
              events.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/mumbai_meetup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mumbaimeetup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Mumbai-meetup"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="h-5 w-5" />
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
  );
}

export default Footer