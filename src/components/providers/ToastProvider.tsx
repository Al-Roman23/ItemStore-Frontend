// Toast Provider Component - Wraps App With React Hot Toast Provider

"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Default Options For All Toasts
        duration: 4000,
        style: {
          background: "#fff",
          color: "#374151",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.75rem",
          padding: "1rem",
        },
        // Success Toast Styles
        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#fff",
          },
        },
        // Error Toast Styles
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
    />
  );
}
