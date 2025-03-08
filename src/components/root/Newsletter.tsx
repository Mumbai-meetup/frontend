import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you for subscribing with ${email}! We'll keep you updated on upcoming meetups.`
    );
    setEmail("");
  };

  return (
    <section id="join" className="py-16 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
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
              className="flex-grow py-3 px-4 text-white rounded-lg focus:outline-none placeholder:text-white focus:ring-2 focus:ring-indigo-300"
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
  );
};

export default Newsletter;
