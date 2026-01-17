// Hero Section Component - Main Banner With CTA

import Link from "next/link";
import { ArrowRight, ShoppingBag, Truck, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              🎉 New Arrivals - Up To 40% Off
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover The Future Of{" "}
              <span className="text-primary-200">Technology</span>
            </h1>
            <p className="text-lg text-primary-100 mb-8 max-w-lg">
              Your One-Stop Shop For Premium Tech Products. From Cutting-Edge
              Electronics To Essential Accessories, We Have Everything You Need.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/items"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-custom"
              >
                Browse Items
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-custom"
              >
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-primary-200 text-sm">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-primary-200 text-sm">Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-primary-200 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-custom">
                <ShoppingBag className="w-10 h-10 text-primary-200 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Wide Selection</h3>
                <p className="text-primary-200 text-sm">
                  Browse Through Our Extensive Catalog Of Premium Products.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-custom mt-8">
                <Truck className="w-10 h-10 text-primary-200 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-primary-200 text-sm">
                  Get Your Orders Delivered Within 2-3 Business Days.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-custom">
                <Shield className="w-10 h-10 text-primary-200 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Secure Shopping</h3>
                <p className="text-primary-200 text-sm">
                  Your Data And Payments Are Always Protected.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-custom mt-8">
                <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg mb-4">
                  24
                </div>
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-primary-200 text-sm">
                  Our Team Is Always Here To Help You.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
