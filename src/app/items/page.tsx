// Items List Page - Public Page To Display All Items From API

import { Suspense } from "react";
import { getAllItems } from "@/lib/api";
import { ItemCard, LoadingSpinner } from "@/components/ui";
import { Package, Search } from "lucide-react";

export const dynamic = "force-dynamic";

// Fetch Items Component
async function ItemsList() {
  try {
    const items = await getAllItems();

    if (!items || items.length === 0) {
      return (
        <div className="text-center py-20">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Items Found
          </h3>
          <p className="text-gray-500">Check Back Later For New Products.</p>
        </div>
      );
    }

    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    );
  } catch {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Failed To Load Items
        </h3>
        <p className="text-gray-500">
          Please Make Sure The Server Is Running And Try Again.
        </p>
      </div>
    );
  }
}

// Loading Component
function ItemsLoading() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
        >
          <div className="h-48 bg-gray-200" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 bg-gray-200 rounded w-20" />
              <div className="h-10 w-10 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ItemsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Discover Our Wide Range Of Premium Tech Products. From Electronics
            To Accessories, We Have Everything You Need.
          </p>
        </div>

        {/* Search And Filter Bar (Visual Only) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-custom"
            />
          </div>

          <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-custom">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="wearables">Wearables</option>
            <option value="accessories">Accessories</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>

        {/* Items Grid With Suspense */}
        <Suspense fallback={<ItemsLoading />}>
          <ItemsList />
        </Suspense>
      </div>
    </div>
  );
}
