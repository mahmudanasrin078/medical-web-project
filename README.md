# Siella Medical - Healthcare E-commerce Platform

A comprehensive medical products e-commerce platform built with Next.js 16, featuring authentication, product management, and responsive design.

## Setup & Installation Instructions

1. Live Link: https://medical-website-2.vercel.app
  
 Git Repository:https://github.com/mahmudanasrin078/medical-web-project
  
 

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Route Summary

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing page with 7+ sections |
| `/about` | Public | About page |
| `/contact` | Public | Contact page |
| `/AllProducts` | Public | Product listing page |
| `/AllProducts/[id]` | Public | Individual product details |
| `/login` | Public | Login page |
| `/dashboard/add-product` | Protected | Add new product page |
| `/dashboard/profile` | Protected | User profile page |

## Implemented Features

### Core Features
- **Landing Page**: 7+ sections including hero, featured products, services, about us, testimonials, call to action, and stats
- **Authentication System**: Mock login with email/password (admin@example.com / password123)
- **Protected Routes**: Add product page restricted to authenticated users
- **Product Management**: List and detail views for medical products
- **Responsive Design**: Works on desktop, laptop, tablet, and mobile devices

### Technical Features
- **Next.js 16**: App Router architecture
- **React 19**: Modern component-based UI
- **Tailwind CSS**: Responsive styling framework
- **Client-Side State Management**: Using React hooks
- **API Routes**: Built-in Next.js API endpoints
- **Mock Data**: Simulated backend for demonstration

### Navigation & Layout
- **Navbar**: Fixed header with logo, navigation links, and authentication status
- **Mobile-Friendly**: Responsive hamburger menu for small screens
- **Footer**: Comprehensive footer with site information

### Security Features
- **Session Management**: Cookie-based authentication
- **Route Protection**: Middleware to protect sensitive pages
- **Input Validation**: Form validation for product creation

## Brief Explanation of Features

### Landing Page
The landing page includes seven distinct sections: Hero section with call-to-action buttons, Featured Products showcase, Services offered by the platform, About Us information, Customer Testimonials, a secondary Call-to-Action section, and Statistics showing business metrics.

### Authentication
The application implements a mock authentication system with hardcoded credentials (admin@example.com / password123). Upon successful login, users gain access to protected features like the add product page.

### Product Management
Users can browse all products on the All Products page and view detailed information on individual product pages. Authenticated users can add new products through a dedicated form.

### Responsive Design
The application is fully responsive and adapts to different screen sizes using Tailwind CSS responsive utilities (sm, md, lg, xl). The navigation transforms from a horizontal menu on large screens to a hamburger menu on mobile devices.

### API Integration
The application includes API routes for user authentication and product management. These endpoints handle login, user information retrieval, product listing, and product creation.

## Technologies Used

- **Next.js 16**: Framework for React applications with App Router
- **React 19**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Programming language (not TypeScript)
- **Next.js API Routes**: Server-side API endpoints
- **Client-side Storage**: LocalStorage for mock authentication
- **react-hot-toast**: Notification system for user feedback

## Mock Credentials

For testing the authentication system, use:
- Email: `admin@example.com`
- Password: `password123`

## How to Run Tests

Currently, this application does not include automated tests. To verify functionality:
1. Navigate through all pages to ensure proper routing
2. Test the login functionality with the mock credentials
3. Verify that protected routes redirect unauthenticated users
4. Test the product addition form when logged in
5. Confirm responsive behavior on different screen sizes
