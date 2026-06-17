# Deployment Instructions

This portfolio is built with Next.js 15+ (App Router), TypeScript, and Tailwind CSS 4. It is optimized for performance, accessibility, and SEO.

## Prerequisites

- Node.js 18.x or later
- npm or yarn

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

## Deployment on Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and configure the build settings.
4. Click **Deploy**.

## Content Customization

All portfolio content is stored in:
`src/data/portfolio.ts`

To update your information, projects, or experience, simply modify this file. The UI will update automatically.

## Visual Customization

The theme colors and global styles are defined in:
`src/app/globals.css`

The Tailwind configuration (v4) is handled directly in the CSS file using the `@theme` block.
