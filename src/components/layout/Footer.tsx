// Footer Component - Site Footer With Links And Copyright

import Link from "next/link";
import { ShoppingBag, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Footer Link Groups
  const footerLinks = {
    product: [
      { href: "/items", label: "Browse Items" },
      { href: "/items/add", label: "Add Item" },
    ],
    company: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Contact" },
      { href: "#", label: "Careers" },
    ],
    legal: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ],
  };

  // Social Links
  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:contact@itemstore.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}

          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">ItemStore</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-sm">
              Your One-Stop Shop For All Things Tech. Discover Amazing Products
              At Unbeatable Prices With Fast Shipping And Excellent Customer
              Service.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-custom"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-custom"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-custom"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-custom"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} ItemStore. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Made With ❤️ Using Next.js & Express.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
