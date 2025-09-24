# Changelog

All notable changes to the NXS Dashboard project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2024-09-24

### Added
- **Clerk Authentication Integration**: Complete user authentication system with secure login/logout
- **Landing Page Redesign**: Modern welcome page with authentication-aware routing and sign-in flow
- **Authenticated Dashboard**: Personalized dashboard page with user greeting and widget previews
- **CSS Module Architecture**: Migration from inline styles to maintainable CSS modules
- **Widget Preview Cards**: Visual previews for Linear, Slack, and GitHub integrations
- **Responsive Design**: Mobile-friendly layouts with gradient backgrounds and hover animations
- **User Redirection Logic**: Automatic routing between public landing and protected dashboard

### Changed
- Updated landing page (`/`) to show sign-in button for unauthenticated users
- Enhanced dashboard page (`/dashboard`) with proper authentication guards
- Improved user experience with loading states and smooth transitions
- Migrated styling system from inline styles to CSS modules for better maintainability

### Technical Details
- Integrated `@clerk/nextjs` for authentication management
- Implemented `SignedIn`/`SignedOut` components for conditional rendering
- Added `UserButton` component for user profile management
- Created automatic redirection between landing and dashboard pages
- Built foundation for future widget integration development

## [0.4.0] - 2024-01-24

### Added
- LEAN methodology integration into development process
- Build-Measure-Learn cycle framework for widget development
- Hypothesis-driven development approach with validation metrics
- MVP-first development strategy with 1-2 week time-boxed experiments

## [0.3.0] - 2024-01-24

### Added
- Business mission alignment as Dashboard Widget Integration Platform
- Agent role realignment for integration-focused development
- Strategic focus on API integrations and third-party app connections

## [0.2.0] - 2024-01-24

### Added
- Comprehensive C-suite agent roles framework
- 6 executive agent roles with clear hierarchy and responsibilities
- Agent integration with development workflow and release process

## [0.1.0] - 2024-01-24

### Added
- Initial Nx monorepo setup with Next.js 15 and React 19
- Main application: `apps/nexus` with TypeScript and modern tooling
- End-to-end testing setup with Playwright: `apps/nexus-e2e`
- Development environment configuration with ESLint, Jest, and SWC
- Nx Cloud integration for distributed caching and CI optimization
- Comprehensive development documentation in WARP.md