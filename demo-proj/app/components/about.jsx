import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <Image
              src="/about.jpeg"
              alt="Food logistics and delivery"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              width={500}
              height={384}
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
              About FreshHarvest Foods
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              For over 15 years, FreshHarvest Foods has been South Africa&apos;s
              leading food distribution partner for restaurants, retailers, and
              hospitality businesses.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We pride ourselves on sourcing the highest quality products from
              trusted suppliers and delivering them fresh to your doorstep. Our
              commitment to reliability, quality, and customer service has made
              us the preferred choice for businesses across the region.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With a vast network of suppliers and a state-of-the-art cold chain
              logistics system, we ensure your products arrive fresh, on time,
              every time.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl text-green-700 mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-green-700 mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl text-green-700 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
