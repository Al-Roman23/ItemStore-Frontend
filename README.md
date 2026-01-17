# ItemStore - Next.js Full-Stack Application

A simple full-stack e-commerce application built with Next.js 16 (App Router) and Express.js, featuring authentication and product management.

## Features

- **Landing Page**: 7 sections including hero, features, categories, stats, testimonials, CTA, and newsletter
- **Authentication**: Mock login with hardcoded credentials, protected routes
- **Item List**: Public page displaying products from API
- **Item Details**: Public page showing full product information
- **Add Item**: Protected page for creating new products with toast notifications

## Tech Stack

- Next.js 16 (App Router)
- Express.js API
- TypeScript
- Tailwind CSS
- NextAuth.js

## Project Structure

```
next-items-app/
├── client/          # Next.js frontend
└── server/          # Express.js backend
```

## Route Summary

### Public Routes

- `/` - Landing page
- `/items` - Browse all products
- `/items/[id]` - View item details
- `/login` - Authentication page

### Protected Routes

- `/items/add` - Add new item (login required)

### API Endpoints

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item

## Setup & Installation

### Prerequisites

- Node.js 18+
- npm

### Server Setup

```bash
cd server
npm install
npm run dev
```

### Client Setup

```bash
cd client
npm install
npm run dev
```

## Login Credentials

Email: `mizukiokada@gmail.com`
Password: `A12345a@`
