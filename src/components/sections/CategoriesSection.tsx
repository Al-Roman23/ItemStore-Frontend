// Categories Section Component - Display Product Categories

import {
  Monitor,
  Watch,
  Headphones,
  Keyboard,
  Camera,
  Smartphone,
} from "lucide-react";

const categories = [
  {
    icon: Monitor,
    name: "Electronics",
    count: 120,
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Watch,
    name: "Wearables",
    count: 85,
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Headphones,
    name: "Audio",
    count: 64,
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Keyboard,
    name: "Gaming",
    count: 92,
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Camera,
    name: "Cameras",
    count: 48,
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Smartphone,
    name: "Accessories",
    count: 156,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Browse By Category
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Shop Popular Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Our Wide Range Of Categories And Find Exactly What You Are
            Looking For.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-custom cursor-pointer text-center"
            >
              <div
                className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-custom`}
              >
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.count} Items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
