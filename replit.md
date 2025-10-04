# Overview

This is a comprehensive productivity tools web application called "Time & Tools Hub" featuring 30 essential online calculators and tools. The application provides a professional, calculator.net-style interface with strong SEO optimization, dark/light mode toggle, and a detailed user-friendly design built to compete with major calculator websites.

## Recent Changes (October 4, 2025)

### Latest: Individual SEO-Friendly Pages (Now)
- **Major Architecture Change**: Converted from single-page layout to individual pages for each tool
- **Individual Routes**: All 30 tools now have dedicated SEO-friendly URLs (e.g., /percentage, /currency, /bmi-calc)
- **SEO Optimization**: Each tool page has unique meta tags, Open Graph tags, and canonical URLs
- **Tool Page Layout**: Reusable ToolPageLayout component with breadcrumbs and consistent structure
- **Enhanced Navigation**: Updated to use proper links instead of smooth scrolling
  - Search bar with live filtering navigates to tool pages
  - Category dropdown links to individual tools
  - Home button visible when not on homepage
- **Home Page Redesign**: Landing page with category overview and tool cards linking to individual pages
- **Better UX**: Faster page loads (only one tool per page), shareable direct links, improved SEO indexing
- **Helmet Integration**: React Helmet Async for dynamic meta tag management across all pages

### Earlier: Advanced Features & Monetization Ready
- **Google Analytics 4**: Full GA4 integration with page view and custom event tracking
- **Cookie Consent**: GDPR-compliant banner with Accept All, Necessary Only, and customization dialog
- **Share Results**: Social media sharing (Twitter, Facebook, LinkedIn, Email) + copy link functionality
- **PWA Support**: Progressive Web App with service worker, offline support, and install prompt
- **Favorites System**: Context-based bookmarking with panel for quick access to favorite tools
- **Currency Converter**: Live exchange rates for 150+ currencies via Fawazahmed0 API
- **Unit Converter**: 9 categories with 62 units (length, weight, temperature, area, volume, speed, time, energy, data)
- **Bug Fixes**: Fixed percentage calculator validation and favorites state synchronization
- **AdSense Ready**: All features are user-triggered and non-intrusive for ad placement compatibility

### Earlier Today: Tool Expansion
- **Expanded to 30 Tools**: Grew from 8 to 30 fully functional calculators and tools
- **Category Organization**: Tools organized into 8 categories for better UX
  - Financial (7): Percentage, Loan, Mortgage, Interest, Discount, Tip, Profit
  - Converters (2): Currency, Unit
  - Health & Fitness (5): BMI, BMR, Body Fat, Calorie, Pregnancy
  - Math & Science (5): Scientific, Fraction, Ratio, Average, Random Number
  - Measurement (4): Area, Volume, Speed, Energy
  - Time & Date (6): World Clock, Age, Date, Time, Countdown, Sleep
  - Utilities (4): Website Checker, IP Lookup, QR Generator, Notepad
  - Academic & Fun (2): GPA, Love Calculator
- **Enhanced Navigation**: Added search bar with live filtering and category dropdown menu
- **Professional UI**: Maintained calculator.net-style design across all 30 tools with glass cards and gradient backgrounds
- **Component Structure**: Organized tools in `/client/src/components/tools/` directory

## Tool Components List
1. **Financial**: percentage-calculator.tsx, loan-calculator.tsx, mortgage-calculator.tsx, discount-calculator.tsx, tip-calculator.tsx, simple-tools.tsx (Interest, Profit)
2. **Converters**: unit-converter.tsx, remaining-tools.tsx (Currency)
3. **Health**: bmr-calculator.tsx, remaining-tools.tsx (Body Fat, Calorie, Pregnancy)
4. **Math**: scientific-calculator.tsx, fraction-calculator.tsx, average-calculator.tsx, random-number.tsx, simple-tools.tsx (Love)
5. **Measurement**: area-calculator.tsx, simple-tools.tsx (Speed, Volume), remaining-tools.tsx (Energy)
6. **Time**: countdown-timer.tsx, date-calculator.tsx, remaining-tools.tsx (Time Calc)
7. **Utilities**: Existing sections (status, IP, QR, notepad)
8. **Academic**: gpa-calculator.tsx

# User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Professional, detailed UI similar to calculator.net with clean layout and enhanced visual hierarchy

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with individual pages for each tool
  - Home page (/) displays tool directory
  - Each tool has dedicated route (e.g., /percentage, /currency, /bmi-calc)
  - 30+ routes defined in App.tsx for all tools
- **SEO**: React Helmet Async for dynamic meta tags, Open Graph, and canonical URLs per page
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state, React Context API for favorites system
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme Support**: Custom theme provider supporting light/dark/system themes with persistent storage
- **PWA**: Service worker for offline support, manifest for installability, install prompt component
- **Analytics**: Google Analytics 4 with cookie consent integration
- **Privacy**: GDPR-compliant cookie consent banner with granular preferences

## Navigation System
- **Desktop**: Search bar with live tool filtering + Category dropdown menu
- **Mobile**: Hamburger menu with integrated search
- **Functionality**: Link-based navigation to individual tool pages (no smooth scrolling)
- **Tool Registry**: Centralized tool list with metadata (id, name, category, path)
- **Home Button**: Visible when not on homepage, links back to tool directory
- **Breadcrumbs**: On all tool pages showing Home > Category > Tool Name

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

## Design System
- **Glass Card UI**: neomorphic design with backdrop blur and subtle shadows
- **Gradient Backgrounds**: Input sections use `from-primary/10 to-accent/10` gradients
- **Button Styling**: Consistent `h-12` height with `gradient-bg` for primary actions
- **Input Height**: Standard `h-11` for all input fields
- **Animations**: `animate-slide-up` for result displays
- **Color System**: CSS custom properties for theme colors in light/dark modes
- **Typography**: Professional hierarchy with bold headings and clear labels
