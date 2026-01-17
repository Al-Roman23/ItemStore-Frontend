// Item Details Page - Public Page To Display Single Item Details

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getItemById } from "@/lib/api";
import { Button, LoadingSpinner } from "@/components/ui";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Package,
} from "lucide-react";

export const dynamic = "force-dynamic";

// Generate Metadata For SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const item = await getItemById(id);
    return {
      title: `${item.name} - ItemStore`,
      description: item.description,
    };
  } catch {
    return {
      title: "Item Not Found - ItemStore",
      description: "The Requested Item Could Not Be Found.",
    };
  }
}

// Item Details Component
async function ItemDetails({ id }: { id: string }) {
  try {
    const item = await getItemById(id);

    if (!item) {
      notFound();
    }

    return (
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Category Badge */}
            <span className="absolute top-4 left-4 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-full">
              {item.category}
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/items" className="hover:text-primary-600">
              Items
            </Link>
            <span>/</span>
            <span className="text-gray-900">{item.name}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {item.name}
          </h1>

          {/* Rating And Stock */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold text-gray-900">{item.rating}</span>
              <span className="text-gray-500">(128 Reviews)</span>
            </div>
            <span className="text-gray-300">|</span>
            <span
              className={`font-medium ${
                item.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.stock > 0 ? `${item.stock} In Stock` : "Out Of Stock"}
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-primary-600">
              ${item.price.toFixed(2)}
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add To Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Wishlist
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-xl">
            <div className="text-center">
              <Truck className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">Free Shipping</p>
              <p className="text-xs text-gray-500">On Orders $50+</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">
                2 Year Warranty
              </p>
              <p className="text-xs text-gray-500">Full Coverage</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">
                30-Day Returns
              </p>
              <p className="text-xs text-gray-500">Hassle-Free</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Item Not Found
        </h3>
        <p className="text-gray-500 mb-6">
          The Item You Are Looking For Does Not Exist Or Has Been Removed.
        </p>
        <Link href="/items">
          <Button>Back To Items</Button>
        </Link>
      </div>
    );
  }
}

// Loading Component
function ItemLoading() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 animate-pulse">
      <div className="aspect-square bg-gray-200 rounded-2xl" />
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <div className="h-10 bg-gray-200 rounded w-3/4" />
        <div className="h-6 bg-gray-200 rounded w-1/2" />
        <div className="h-10 bg-gray-200 rounded w-1/3" />
        <div className="space-y-2 pt-4">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
        <div className="flex gap-4 pt-4">
          <div className="h-12 bg-gray-200 rounded-lg flex-1" />
          <div className="h-12 bg-gray-200 rounded-lg w-32" />
        </div>
      </div>
    </div>
  );
}

export default async function ItemDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container-custom">
        {/* Back Link */}
        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 transition-custom"
        >
          <ArrowLeft className="w-5 h-5" />
          Back To Items
        </Link>

        {/* Item Details With Suspense */}
        <Suspense fallback={<ItemLoading />}>
          <ItemDetails id={id} />
        </Suspense>
      </div>
    </div>
  );
}
