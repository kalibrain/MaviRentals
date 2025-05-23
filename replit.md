# Mavi Rentals LLC - Property Management Platform

## Overview

This is a full-stack web application for Mavi Rentals LLC, a short-term rental management company in Ann Arbor, Michigan. The application serves as a marketing website showcasing their property management services with a focus on quarterly rent payments and zero vacancy risk for property owners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and esbuild for server bundling

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Font Awesome and Lucide React

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for development server with hot reload
- **Production**: Compiled to JavaScript using esbuild

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon Database serverless)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Centralized in `shared/schema.ts` for type safety across client/server

### Storage Strategy
- **Development**: In-memory storage implementation (`MemStorage` class)
- **Production**: Database storage through Drizzle ORM
- **Interface**: `IStorage` interface allows switching between implementations

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle business logic and data operations
3. **Data Access**: Storage layer abstracts database operations
4. **Response**: JSON responses sent back to client with proper error handling

### Authentication Flow
- Basic user schema defined with username/password fields
- Zod validation schemas for type safety
- Session management ready for implementation

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component ecosystem
- **Styling**: Tailwind CSS with PostCSS processing
- **Date Handling**: date-fns for date manipulation
- **Form Handling**: React Hook Form with Hookform resolvers
- **Validation**: Zod for schema validation

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Development Tools**: tsx for TypeScript execution

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint configuration implied by shadcn setup

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Server Build**: esbuild compiles TypeScript server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- **Development**: Uses tsx for hot reload on port 5000
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database**: Requires DATABASE_URL environment variable

### Hosting Platform
- **Target**: Replit with autoscale deployment
- **Services**: Node.js 20, PostgreSQL 16, web hosting
- **Ports**: Internal port 5000 mapped to external port 80

### Database Strategy
- **Development**: May use in-memory storage or local PostgreSQL
- **Production**: Neon Database serverless PostgreSQL
- **Migrations**: Schema managed through Drizzle migrations in `./migrations`

### Monitoring & Logging
- **Request Logging**: Express middleware logs API requests with timing
- **Error Handling**: Global error handler with proper HTTP status codes
- **Development**: Vite plugin for runtime error overlays

### Security Considerations
- **CORS**: Not explicitly configured (may need addition)
- **Session Security**: Ready for secure session implementation
- **Input Validation**: Zod schemas provide runtime validation
- **Environment Variables**: Database credentials via environment variables

The application is designed to be a professional marketing website that can evolve into a full property management platform with booking, payment processing, and tenant management features.