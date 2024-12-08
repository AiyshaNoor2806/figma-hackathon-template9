import React from 'react';

const About = () => {
  return (
    <section className="flex items-center justify-between p-10">
      {/* Left Content */}
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-4">We Create the best foody product</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Learn More
        </button>
      </div>

      {/* Right Images */}
      <div className="grid grid-cols-2 gap-4">
        <img src="/path-to-image-1.jpg" alt="Food 1" className="rounded shadow" />
        <img src="/path-to-image-2.jpg" alt="Food 2" className="rounded shadow" />
      </div>
    </section>
  );
};

export default About;
