import { Zap, DollarSign, Award } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Same-day and next-day delivery options available across major cities.",
  },
  {
    id: 2,
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Best wholesale prices without compromising on quality or service.",
  },
  {
    id: 3,
    icon: Award,
    title: "Trusted Partner",
    description:
      "Serving 500+ restaurants, hotels, and retailers throughout South Africa.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Why Choose FreshHarvest Foods?
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            We&apos;re committed to excellence in every aspect of our service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
