// Newsletter Section Component - Email Subscription Form

"use client";

import { useState } from "react";
import { Send, Mail } from "lucide-react";
import toast from "react-hot-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please Enter Your Email Address");
      return;
    }

    setIsLoading(true);

    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank You For Subscribing!");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated With Our Newsletter
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe To Our Newsletter And Be The First To Know About New
            Products, Exclusive Deals, And Special Offers.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="flex-grow relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-custom"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-custom flex items-center justify-center disabled:opacity-50"
            >
              {isLoading ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-gray-500 text-sm mt-4">
            We Respect Your Privacy. Unsubscribe At Any Time.
          </p>
        </div>
      </div>
    </section>
  );
}
