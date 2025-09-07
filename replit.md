# Overview

This is a productivity tools web application called "Time & Tools Hub" that provides essential online utilities including an online clock with multiple timezone support, timer/stopwatch functionality, Pomodoro timer, sleep cycle calculator, and website status checker. The application is built as a modern full-stack web app with a React frontend and Express backend, designed to be fast, mobile-friendly, and SEO-optimized.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme Support**: Custom theme provider supporting light/dark/system themes with persistent storage

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for type safety across the entire stack
- **Development Server**: Custom Vite integration for development with HMR support
- **API Design**: RESTful endpoints with JSON request/response format
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom request/response logging for API endpoints

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Definition**: Shared TypeScript schema definitions with Zod validation
- **Storage Interface**: Abstracted storage interface with in-memory implementation for development
- **Database Provider**: Neon Database serverless PostgreSQL for production
- **Migrations**: Drizzle Kit for database schema migrations

## Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not implemented
- **Session Management**: PostgreSQL session store (connect-pg-simple) configured for future use
- **User Model**: Username/password schema with UUID primary keys

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Components**: Extensive Radix UI component library for accessible primitives
- **Form Handling**: React Hook Form with Hookform Resolvers for validation
- **Date Handling**: date-fns library for date manipulation and formatting
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter, JetBrains Mono) for typography
- **Development Tools**: Replit-specific plugins for development environment integration
- **Website Checking**: Native fetch API for HTTP requests to check website status
- **SEO Optimization**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data