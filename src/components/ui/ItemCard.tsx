// Item Card Component - Displays Item Information In A Card Layout

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Item } from "@/types";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/items/${item.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
        {/* Image Container */}
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium text-white bg-primary-600 rounded-full">
            {item.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {item.description}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 ml-1">
              {item.rating}
            </span>
            <span className="text-sm text-gray-400 ml-2">
              ({item.stock} In Stock)
            </span>
          </div>

          {/* Price And Action */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary-600">
              ${item.price.toFixed(2)}
            </span>
            <button className="p-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 transition-custom">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
