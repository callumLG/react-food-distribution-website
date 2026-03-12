import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "Restaurant Owner",
    company: "The Green Table",
    content:
      "FreshHarvest Foods has been our reliable partner for over 5 years. Their quality and consistency are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Nkosi",
    position: "Procurement Manager",
    company: "Sunset Hotel Group",
    content:
      "Exceptional service and competitive pricing. Their delivery is always on time, which is crucial for our operations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Linda van der Berg",
    position: "Owner",
    company: "Corner Café Chain",
    content:
      "From fresh produce to pantry staples, FreshHarvest provides everything we need with outstanding customer support.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from businesses we serve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="border-t pt-4">
                <div className="text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.position}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
