<div align="center">

# ENGINEERING ARCHIVE

**The personal portfolio of Aniket De, built as a living archive of engineering work.**

<br />

![Next.js](https://img.shields.io/badge/Next.js_16-0F0F0F?style=for-the-badge&logo=nextdotjs&logoColor=F2EBDD)
![React](https://img.shields.io/badge/React_19-0F0F0F?style=for-the-badge&logo=react&logoColor=C87F4F)
![TypeScript](https://img.shields.io/badge/TypeScript-0F0F0F?style=for-the-badge&logo=typescript&logoColor=F2EBDD)
![Tailwind](https://img.shields.io/badge/Tailwind_4-0F0F0F?style=for-the-badge&logo=tailwindcss&logoColor=C87F4F)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0F0F0F?style=for-the-badge&logo=framer&logoColor=F2EBDD)
![Vercel](https://img.shields.io/badge/Vercel-0F0F0F?style=for-the-badge&logo=vercel&logoColor=C87F4F)

<br />

[Resume](./public/resume.pdf) · [LinkedIn](https://www.linkedin.com/in/aniket-de-2a6166293/) · [GitHub](https://github.com/aniprogramer) · [Email](mailto:aniketde66@gmail.com)

</div>

---

## Overview

This site is a record of software built with intent: backend systems, full-stack products and AI tooling that have to work as one system.

It avoids the template look. Sections read like engineering notebooks and system logs. Every project has a thesis, a stack and an outcome.

| | |
| :--- | :--- |
| **Role** | Software Engineer, Full-Stack Developer, AI/Product Engineering |
| **Base** | Mangalore, India |
| **Focus** | Product interfaces, backend systems and AI capabilities |

---

## Design Language: Digital Craftsman

- **Warm industrial minimalism.** Dark `#0F0F0F` canvas, parchment text, copper accents.
- **Grid first.** Asymmetric layout on a blueprint grid.
- **Substance over trend.** No glassmorphism filler. Typography and structure carry the design.
- **Archive vocabulary.** Logs, archive and transmissions frame the navigation and section headers.

---

## Features

| | Feature | Detail |
| :-: | :--- | :--- |
| ◆ | **Preloader and grain overlay** | Cinematic entry with a film-grain texture over the page |
| ◆ | **Layered hero portrait** | Parallax avatar stage with colour on mobile |
| ◆ | **Project case studies** | Dynamic `/projects/[slug]` pages with problem, solution and impact |
| ◆ | **Experience log** | Sequential timeline of work and education |
| ◆ | **Skills matrix** | Six categories from languages to AI systems |
| ◆ | **Content as data** | All copy lives in one typed file, `src/data/portfolio.ts` |
| ◆ | **Hardened delivery** | CSP, HSTS, `X-Frame-Options`, `nosniff`, strict referrer and permissions policies |
| ◆ | **Image protection** | Discourages casual copying of portrait assets |

---

## Featured Work

**Featured**

| # | Project | Domain |
| :-: | :--- | :--- |
| 01 | **Wanderlust** | Travel platform |
| 05 | **DGA Sentry** | AI/ML / cybersecurity |

**More work**

| # | Project | Domain |
| :-: | :--- | :--- |
| 02 | **Sentinel Agents** | AI security tooling |
| 03 | **Zerodha Clone** | Fintech UI / educational |
| 04 | **Sangam Connect** | Real-time systems / WebRTC |
| 06 | **Saturn Escape: Warp Run** | Computer graphics / C++ |

---

## Tech Stack

| Layer | Tools |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Motion** | Framer Motion |
| **Quality** | ESLint 9 with `eslint-config-next` |
| **Hosting** | Vercel |

---

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx            # Root layout and metadata
│   ├── page.tsx              # Home page
│   ├── globals.css           # Theme tokens and global styles
│   └── projects/             # /projects directory + [slug]/ case-study route
├── components/
│   ├── sections/             # Hero, About, Experience, Expertise,
│   │                         # ProjectShowcase, ProjectsList, WorkTransition, Contact
│   └── ui/                   # AvatarStage, CircularBadge, GrainOverlay,
│                             # Navigation, Preloader, ProjectNavigation,
│                             # ProjectVisual
└── data/portfolio.ts         # Typed content: projects, skills, experience
public/                       # Portrait, resume, images/projects/dga-sentry/
```

---

## Getting Started

**Requirements:** Node.js 20.9 or later, npm.

```bash
git clone https://github.com/aniprogramer/engineering-archive.git
cd engineering-archive
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Customising

Edit `src/data/portfolio.ts`. Name, roles, socials, skills, projects and experience all load from this file. No component changes are needed for content updates.

---

## Deployment

Push to GitHub and import the repository in [Vercel](https://vercel.com/new). Security headers ship from `next.config.ts`.

---

<div align="center">

**Aniket De**
Software Engineer · Full-Stack Developer · AI/Product Engineering

[aniketde66@gmail.com](mailto:aniketde66@gmail.com)

</div>
