// API Service Functions - Handles All HTTP Requests To Express Server

import { config } from "./config";
import { Item, CreateItemData, ApiResponse } from "@/types";

const API_URL = config.apiUrl;
// Item API Functions

/**
 * Fetch All Items From API
 */
export async function getAllItems(): Promise<Item[]> {
  try {
    const response = await fetch(`${API_URL}/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Always Fetch Fresh Data
    });

    if (!response.ok) {
      throw new Error("Failed To Fetch Items");
    }

    const data: ApiResponse<Item[]> = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error Fetching Items:", error);
    throw error;
  }
}

/**
 * Fetch Single Item By ID
 */
export async function getItemById(id: string): Promise<Item> {
  try {
    const response = await fetch(`${API_URL}/items/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed To Fetch Item");
    }

    const data: ApiResponse<Item> = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error Fetching Item:", error);
    throw error;
  }
}

/**
 * Create New Item
 */
export async function createItem(itemData: CreateItemData): Promise<Item> {
  try {
    const response = await fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });

    if (!response.ok) {
      throw new Error("Failed To Create Item");
    }

    const data: ApiResponse<Item> = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error Creating Item:", error);
    throw error;
  }
}

/**
 * Update Existing Item
 */
export async function updateItem(
  id: string,
  itemData: Partial<CreateItemData>
): Promise<Item> {
  try {
    const response = await fetch(`${API_URL}/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });

    if (!response.ok) {
      throw new Error("Failed To Update Item");
    }

    const data: ApiResponse<Item> = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error Updating Item:", error);
    throw error;
  }
}

/**
 * Delete Item By ID
 */
export async function deleteItem(id: string): Promise<Item> {
  try {
    const response = await fetch(`${API_URL}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed To Delete Item");
    }

    const data: ApiResponse<Item> = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error Deleting Item:", error);
    throw error;
  }
}
