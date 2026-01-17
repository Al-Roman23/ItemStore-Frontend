// Features Section Component - Highlights Key Features Of The Platform

import {
  Zap,
  Shield,
  Truck,
  Clock,
  CreditCard,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience Blazing Fast Performance With Our Optimized Platform Built For Speed.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "Your Transactions Are Protected With Bank-Level Encryption And Security.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Enjoy Free Shipping On All Orders Over $50 With Fast Delivery Options.",
  },
  {
    icon: Clock,
    title: "Easy Returns",
    description:
      "30-Day Hassle-Free Return Policy On All Products No Questions Asked.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description:
      "Multiple Payment Options Including Credit Cards, PayPal, And Installments.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our Dedicated Support Team Is Available Around The Clock To Assist You.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Features That Set Us Apart
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We Are Committed To Providing The Best Shopping Experience With
            Industry-Leading Features And Customer Service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-custom"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-custom">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
