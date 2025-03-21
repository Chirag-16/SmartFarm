import React from 'react';

const About = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Our Farm Waste Management</h1>
          <p className="mt-6 text-lg leading-8 max-w-3xl">
            Transforming agricultural waste into sustainable solutions since 2015.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded by a team of agricultural experts and environmental scientists, our company began with a simple mission: to help farmers manage waste efficiently while protecting our planet.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a local initiative has grown into a comprehensive waste management solution serving farms across the region. We believe that agricultural waste isn't just a problem to solve—it's an opportunity for innovation and sustainability.
            </p>
            <p className="text-gray-700">
              Today, we work with farms of all sizes to implement tailored waste management strategies that reduce environmental impact, comply with regulations, and even create new revenue streams through waste conversion.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.stockcake.com/public/2/a/9/2a9f99c1-ca80-48bc-b62b-d6f0abdcf559_medium/farmers-evaluating-crops-stockcake.jpg" 
              alt="Farmers in a field discussing waste management" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-green-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to environmentally responsible practices that preserve natural resources for future generations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Innovation</h3>
              <p className="text-gray-700">
                We constantly research and develop new technologies and methods to improve waste management efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Partnership</h3>
              <p className="text-gray-700">
                We believe in working closely with farmers to develop solutions that meet their specific needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

     

      {/* Call to Action */}
      <div className="bg-green-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your farm's waste management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and learn how our solutions can benefit your farm.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;