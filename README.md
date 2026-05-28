# John Rey F. Billones Portfolio

Personal portfolio website for John Rey F. Billones, built with Next.js, TypeScript, Tailwind CSS, and PWA support. It presents profile information, experience, projects, skills, education, and a contact form.

## Live Site

https://johnreybillones.vercel.app/

## Features

- Responsive portfolio landing page
- Project listing and project detail routes
- Experience, skills, education, and contact sections
- EmailJS-powered contact form
- Progressive Web App support with generated service worker files
- SEO metadata, Open Graph data, and app manifest
- Local Geist font files and reusable UI components

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- EmailJS
- `@ducanh2912/next-pwa`
- GSAP, Lottie, Lucide React, React Icons
- Radix UI primitives and shadcn-style components

## Project Structure

```text
src/app/                 App Router pages, layout, metadata, and route components
src/app/components/      Portfolio sections and shared page components
src/components/ui/       Reusable UI primitives
src/lib/                 Shared utility helpers
src/Types/               TypeScript declarations and shared types
utils/                   Portfolio data, icons, and helper utilities
public/                  Static assets, branding, SVGs, Lottie files, and PWA files
docs/                    Project notes and maintenance documents
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp example.env .env.local
```

3. Fill in the EmailJS values in `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

4. Start the development server:

```bash
npm run dev
```

5. Open http://localhost:3000.

## Scripts

```bash
npm run dev      # Start the Next.js dev server with Turbopack
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run Next.js linting
npm run format   # Format files with Prettier
```

## Deployment

The project is configured for deployment on Vercel. Add the same EmailJS environment variables in the Vercel project settings before deploying the contact form.

## Content Updates

Portfolio content is maintained primarily in `utils/Data/`:

- `PersonalData.ts`
- `experience.ts`
- `projects-data.ts`
- `skills.ts`
- `educations.ts`

Static images, icons, and animation assets are stored in `public/`.

## Contact

- Email: bjf0073@dlsud.edu.ph
- LinkedIn: https://www.linkedin.com/in/johnreybillones
- GitHub: https://github.com/johnreybillones
- Facebook: https://www.facebook.com/jrbillonesss/
