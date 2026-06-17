# Engineering Archive

A handcrafted personal portfolio and technical documentation archive built with Next.js, TypeScript, and Tailwind CSS.

---

## Overview

Engineering Archive serves as a centralized repository for the professional work, technical research, and systems engineering projects of Aniket De. Unlike conventional portfolio templates that prioritize marketing aesthetics, this project is designed as a functional archive of software craftsmanship. It serves as a living record of backend architectures, data pipelines, and full-stack solutions developed with engineering rigor.

---

## Design Philosophy

The interface adheres to a **Digital Craftsman** aesthetic, drawing inspiration from engineering notebooks, architectural blueprints, and technical documentation systems. 

*   **Warm Industrial Minimalism:** Utilizes a high-contrast dark theme (#0F0F0F) with warm parchment text and copper accents to evoke the feel of a physical workspace.
*   **Grid-First Layout:** Employs an asymmetric, engineered layout grounded in a blueprint grid system.
*   **Authenticity over Trends:** Prioritizes technical clarity and structural depth over trendy glassmorphism or AI-generated visual styles.
*   **Archive Terminology:** Navigational elements and section headers are framed as "Logs," "Archive," and "Transmissions" to reinforce the system-oriented identity.

---

## Features

*   **Engineering Archive UI:** A specialized interface inspired by technical logs and system readouts.
*   **Precision Cursor System:** A custom-engineered cursor with contextual states (Caret, Crosshair, Pointer) and high-frequency interpolation.
*   **Archive-Grade Portrait:** Multi-layered hero portrait with subtle parallax and industrial framing.
*   **Project Documentation:** Case-study focused project cards highlighting Problem, Solution, and Impact.
*   **Structured Experience Logs:** A sequential timeline inspired by kernel logs and professional milestones.
*   **Technical Proof Bar:** Real-time data visualization of core engineering metrics.
*   **Architecture-Optimized:** Built for 60fps performance and sub-second page loads.
*   **Accessibility Compliant:** Semantic HTML structure ensuring WCAG-level accessibility.

---

## Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React 19, Tailwind CSS 4, Framer Motion, Three.js |
| **Backend** | Node.js, Express.js, RESTful API Design |
| **Databases** | MySQL (Advanced), PostgreSQL, MongoDB |
| **Languages** | JavaScript (ES6+), TypeScript, Java, Python |
| **Tools** | Git, Vercel, Lucide Icons, Geist Font System |

---

## Architecture

The project follows a modular component-based architecture for scalability and maintainability:

*   `src/app/`: Core routing and global configuration (Layouts, Global Styles, SEO Metadata).
*   `src/components/`: Atomic UI elements and specialized archive sections (Hero, Projects, Logs).
*   `src/data/`: Centralized TypeScript data structures. Content is decoupled from the UI layer.
*   `src/hooks/`: Custom React hooks for specialized interactions (Magnetic physics, Scroll tracking).
*   `src/lib/`: Utility functions and helper classes.
*   `public/`: Static assets, including the engineering archive screenshots and PDF logs.

---

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aniketde/engineering-archive.git
   ```

2. Navigate to the project directory:
   ```bash
   cd engineering-archive
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Initialize the development environment:
   ```bash
   npm run dev
   ```

---

## Performance Goals

- **Lighthouse Score:** Target 95+ across Performance, Accessibility, Best Practices, and SEO.
- **Responsiveness:** Fluid grid system supporting Mobile, Desktop, and 4K displays.
- **Motion:** Intentional, low-latency animations that respect `prefers-reduced-motion` system settings.

---

## Screenshots

![Hero Section](./public/screenshots/hero.png)
*Hero Interface: Systems Architect archive initialization.*

![Projects](./public/screenshots/projects.png)
*Project Archive: Documentation of full-stack and data engineering builds.*

---

## Future Improvements

*   **Integrated Engineering Blog:** Markdown-based technical writing system.
*   **Project Deep-Dives:** Detailed case study pages with relationship diagrams.
*   **Interactive System Diagrams:** Live Three.js representations of database schemas.
*   **Command Line Interface:** A terminal-based navigation alternative for advanced users.

---

## Author

**Aniket De**  
*Software Engineer • Full Stack Developer • Data Engineer*

- **GitHub:** [https://github.com/aniketde](https://github.com/aniketde)
- **LinkedIn:** [https://linkedin.com/in/aniketde](https://linkedin.com/in/aniketde)
- **Archive:** [https://aniketde.dev](https://aniketde.dev)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
