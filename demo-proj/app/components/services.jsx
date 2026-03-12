import { Truck, Package, CheckCircle2, Clock } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Package,
    title: "Wholesale Distribution",
    description:
      "Bulk orders at competitive wholesale prices for businesses of all sizes.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Temperature-controlled delivery fleet ensuring freshness and quality.",
  },
  {
    id: 3,
    icon: Clock,
    title: "Bulk Supply",
    description:
      "Consistent supply chain management for your high-volume needs.",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Quality Assurance",
    description:
      "Rigorous quality checks and certifications for food safety compliance.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive food distribution solutions tailored to your business
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
