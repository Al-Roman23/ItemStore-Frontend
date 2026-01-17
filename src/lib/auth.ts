// NextAuth Configuration - Authentication Setup With Credentials And Google Providers

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { config } from "./config";

export const authOptions: NextAuthOptions = {
  // Configure Authentication Providers
  providers: [
    // Credentials Provider For Email/Password Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "mizukiokada@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validate Credentials Against Mock User
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please Enter Email And Password");
        }

        // Check Against Mock User (In Production, Check Against Database)
        if (
          credentials.email === config.mockUser.email &&
          credentials.password === config.mockUser.password
        ) {
          // Return User Object On Successful Authentication
          return {
            id: "1",
            email: config.mockUser.email,
            name: config.mockUser.name,
          };
        }

        // Return Null If Authentication Fails
        throw new Error("Invalid Email Or Password");
      },
    }),

    // Google Provider For OAuth Login (Optional)
    ...(config.googleClientId && config.googleClientSecret
      ? [
          GoogleProvider({
            clientId: config.googleClientId,
            clientSecret: config.googleClientSecret,
          }),
        ]
      : []),
  ],

  // Custom Pages
  pages: {
    signIn: "/login",
    error: "/login",
  },

  // Session Configuration
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },

  // JWT Configuration
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },

  // Callbacks For Customizing Session And JWT
  callbacks: {
    async jwt({ token, user }) {
      // Add User Data To Token On Sign In
      if (user) {
        token.id = user.id;
        token.email = user.email as string;
        token.name = user.name as string;
      }
      return token;
    },

    async session({ session, token }) {
      // Add Token Data To Session
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },

  // Secret For Encrypting JWT
  secret: config.nextAuthSecret,

  // Enable Debug Mode In Development
  debug: process.env.NODE_ENV === "development",
};
