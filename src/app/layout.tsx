// Root Layout - Main Layout Wrapper For The Entire Application

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar, Footer } from "@/components/layout";
import { AuthProvider, ToastProvider } from "@/components/providers";

// Load Inter Font
const inter = Inter({ subsets: ["latin"] });

// SEO Metadata
export const metadata: Metadata = {
  title: "ItemStore - Your One-Stop Tech Shop",
  description:
    "Discover Amazing Tech Products At Unbeatable Prices. Browse Our Collection Of Electronics, Wearables, And Accessories.",
  keywords: ["tech", "electronics", "gadgets", "shop", "store"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <AuthProvider>
          <ToastProvider />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
