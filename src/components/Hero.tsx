import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex items-center justify-between bg-gray-100 p-10">
      <div className="max-w-lg">
        <p className="text-sm text-gray-500">Are you Hungry?</p>
        <h1 className="text-4xl font-bold mb-4">The Art of speed food Quality</h1>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Make Reservation
        </button>
      </div>

      {/* Food Image */}
      <div className="relative w-80 h-80">
        <Image
          src="/images/food-image-1.jpg"
          alt="Delicious Food"
          layout="fill"
          objectFit="cover"
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
