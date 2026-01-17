// Stats Section Component - Display Key Statistics And Numbers

import { Users, Package, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Customers",
    description: "Satisfied Customers Worldwide",
  },
  {
    icon: Package,
    value: "500+",
    label: "Products",
    description: "Quality Items In Stock",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "Based On Customer Reviews",
  },
  {
    icon: Award,
    value: "50+",
    label: "Awards Won",
    description: "Industry Recognition",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary-600">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <p className="text-primary-200 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
