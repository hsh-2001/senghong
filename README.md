# Hang Senghong - Portfolio Website

A modern, responsive portfolio website built with Nuxt and TypeScript, showcasing professional experience, projects, and technical skills.

## Overview

This is a personal portfolio website for Hang Senghong, a Software Engineer currently developing a banking application system with Next.js, Spring Boot, and Oracle Database. It also showcases previous full-stack work and experience with .NET, Vue.js, and modern web technologies.

## Features

- **Responsive Design** - Optimized for all device sizes
- **Animated Background** - Dynamic visual effects for enhanced user experience
- **Interactive Navigation** - Smooth scrolling to different sections
- **Tech Stack Showcase** - Visual representation of technical skills with proficiency levels
- **Project Gallery** - Detailed project cards with live demos and GitHub links
- **Experience Timeline** - Professional work history and responsibilities
- **Education Background** - Academic achievements and qualifications
- **Contact Section** - Social media links and contact information

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue 3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Cloudflare Pages
- **Build Tool**: Vite

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Build for Cloudflare Pages:

```bash
npm run build:prod
```

Deploy to Cloudflare Pages:

```bash
npm run deploy:prod
```

Locally preview production build:

```bash
npm run preview
```

## Project Structure

```
senghong/
├── app/
│   ├── assets/          # Images and static assets
│   ├── components/      # Vue components
│   │   └── portfolio/   # Portfolio-specific components
│   ├── pages/           # Page components
│   └── app.vue          # Root component
├── public/              # Public static files
├── nuxt.config.ts       # Nuxt configuration
└── package.json         # Project dependencies
```

## Components

- **AnimatedBackground** - Dynamic background animations
- **Navigation** - Main navigation bar
- **HeroSection** - Landing section with introduction
- **StatsCounter** - Animated statistics counter
- **TechStack** - Technical skills visualization
- **ProjectsSection** - Featured projects showcase
- **ExperienceTimeline** - Work experience timeline
- **StudyBackground** - Educational background
- **ContactSection** - Contact information and social links
- **TheFooter** - Footer component

## Configuration

The portfolio content can be customized by editing the data in [app/pages/index.vue](app/pages/index.vue):

- Developer information
- Social media links
- Navigation links
- Tech stack
- Projects
- Experience
- Education

## Deployment

This project is configured for deployment on Cloudflare Pages with automatic builds and deployments.

## Learn More

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about the framework.
