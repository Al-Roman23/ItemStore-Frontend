// Environment Configuration - Centralized Config For Environment Variables

export const config = {
  // API Base URL For Express Server
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",

  // NextAuth Secret For JWT Encryption
  nextAuthSecret: process.env.NEXTAUTH_SECRET || "",

  // NextAuth URL
  nextAuthUrl: process.env.NEXTAUTH_URL || "http://localhost:3000",

  // Google OAuth Credentials (Optional)
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

  // Mock User Credentials For Development
  mockUser: {
    email: "mizukiokada@gmail.com",
    password: "A12345a@",
    name: "Mizuki Okada",
  },
} as const;
