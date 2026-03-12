export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto">
          Reliable Food Distribution for Businesses Across South Africa
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Your trusted partner for quality food supply. From farm to table, we
          deliver excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors text-lg"
          >
            View Products
          </a>
          <a
            href="#contact"
            className="bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
