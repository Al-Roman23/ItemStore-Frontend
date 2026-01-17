// Add Item Page - Protected Page For Creating New Items -> Requires Authentication

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowLeft, Plus, ImageIcon } from "lucide-react";
import toast from "react-hot-toast";
import { Button, Input, Textarea } from "@/components/ui";
import { createItem } from "@/lib/api";
import { CreateItemData } from "@/types";

// Category Options
const categories = [
  "Electronics",
  "Wearables",
  "Audio",
  "Gaming",
  "Accessories",
  "Furniture",
  "Uncategorized",
];

export default function AddItemPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Form State
  const [formData, setFormData] = useState<CreateItemData>({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "Electronics",
    stock: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Redirect If Not Authenticated
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock" ? parseFloat(value) || 0 : value,
    }));

    // Clear Error On Change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate Form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Item Name Is Required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description Is Required";
    } else if (formData.description.length < 20) {
      newErrors.description = "Description Must Be At Least 20 Characters";
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Price Must Be Greater Than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please Fix The Errors In The Form");
      return;
    }

    setIsLoading(true);

    try {
      const newItem = await createItem(formData);
      toast.success("Item Created Successfully!");
      router.push(`/items/${newItem.id}`);
    } catch {
      toast.error("Failed To Create Item. Please Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-3xl">
        {/* Back Link */}
        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 transition-custom"
        >
          <ArrowLeft className="w-5 h-5" />
          Back To Items
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Item
          </h1>
          <p className="text-gray-600">
            Fill In The Details Below To Add A New Item To The Store.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <Input
              label="Item Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Item Name"
              error={errors.name}
              required
            />

            {/* Description Field */}
            <Textarea
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter A Detailed Description Of The Item..."
              error={errors.description}
              rows={5}
              required
            />

            {/* Price And Stock Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                label="Price ($)"
                name="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price || ""}
                onChange={handleChange}
                placeholder="0.00"
                error={errors.price}
                required
              />

              <Input
                label="Stock Quantity"
                name="stock"
                type="number"
                min="0"
                value={formData.stock || ""}
                onChange={handleChange}
                placeholder="0"
              />
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-custom"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Image URL Field */}
            <div>
              <Input
                label="Image URL (Optional)"
                name="image"
                type="url"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                helperText="Leave Empty To Use Default Image"
              />

              {/* Image Preview */}
              {formData.image && (
                <div className="mt-3 relative w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}

              {!formData.image && (
                <div className="mt-3 w-32 h-32 rounded-lg bg-gray-100 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                fullWidth
                size="lg"
                isLoading={isLoading}
                className="flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create Item
              </Button>
            </div>
          </form>

          {/* User Info */}
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-gray-500 text-center">
              Logged In As:{" "}
              <span className="font-medium text-gray-700">
                {session?.user?.email}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
