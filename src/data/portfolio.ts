export type ProjectFilter =
  | "Full Stack"
  | "AI / ML"
  | "Cybersecurity"
  | "Real-Time Systems"
  | "Graphics";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Note {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  filters: ProjectFilter[];
  year?: string;
  shortDescription: string;
  thesis: string;
  technologies: string[];
  featured: boolean;
  priority: 1 | 2 | 3;
  subtitle?: string;
  /** Short mono labels for the typographic visual when no real media exists. */
  specs: string[];
  overview?: string;
  problem?: string;
  features?: Note[];
  /** Components and how they relate. */
  architecture?: { name: string; role: string }[];
  highlights?: string[];
  techGroups?: { label: string; items: string[] }[];
  challenges?: Note[];
  outcomes?: string[];
  /** Honest scope limits shown on the detail page. */
  notes?: string;
  links?: {
    github?: string;
    live?: string;
  };
  media?: {
    hero?: ProjectImage;
    screenshots?: ProjectImage[];
    diagram?: ProjectImage;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: "Work" | "Education" | "Internship" | "Milestone";
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level?: string }[];
}

export const portfolioData = {
  name: "Aniket De",
  firstName: "Aniket",
  lastName: "De",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI/Product Engineering",
  ],
  location: "Mangalore, India",
  status: "Available for new opportunities",
  headline: "SOFTWARE ENGINEER / AI",
  seoDescription:
    "Aniket De is a software engineer in Mangalore, India, building full-stack, AI and real-time systems.",
  about:
    "I build software where product interfaces, backend systems and AI capabilities have to work as one system.",
  email: "aniketde66@gmail.com",
  socials: {
    github: "https://github.com/aniprogramer",
    linkedin: "https://www.linkedin.com/in/aniket-de-2a6166293/",
    instagram: "https://www.instagram.com/aniketde66/",
    resume: "/resume.pdf",
  },
  skills: [
    {
      name: "LANGUAGES",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "SQL" },
        { name: "C" },
      ],
    },
    {
      name: "FRONTEND / WEB",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS" },
        { name: "EJS" },
      ],
    },
    {
      name: "BACKEND",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "FastAPI" },
      ],
    },
    {
      name: "DATABASES / ORM",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "Prisma ORM" },
      ],
    },
    {
      name: "DEVOPS / TOOLS",
      skills: [
        { name: "Docker" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Maven" },
        { name: "Linux" },
      ],
    },
    {
      name: "AI / SYSTEMS",
      skills: [
        { name: "Google Gemini API" },
        { name: "Ollama" },
        { name: "WASM" },
        { name: "React Three Fiber" },
        { name: "Tree-sitter" },
        { name: "REST APIs" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      slug: "wanderlust",
      number: "01",
      title: "Wanderlust",
      subtitle: "Server-rendered property listings with owner-only editing, reviews and image uploads",
      category: "TRAVEL PLATFORM",
      filters: ["Full Stack"],
      year: "2026",
      shortDescription: "Full-stack travel accommodation platform.",
      thesis:
        "Developed a full-stack travel accommodation platform following MVC architecture with authentication, authorization, and CRUD operations.",
      overview:
        "Wanderlust is an Airbnb-inspired listing site. Visitors browse properties and read reviews; registered users publish their own listings with photos, edit or delete only what they own, and review other people's listings. It is a complete server-rendered application, so every rule (who may edit, what input is valid, where images live) is enforced on the server rather than in browser code.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "Passport.js",
        "Cloudinary",
        "Joi",
        "Bootstrap",
      ],
      techGroups: [
        { label: "Backend", items: ["Node.js", "Express.js", "Multer"] },
        { label: "Views", items: ["EJS", "ejs-mate layouts", "Bootstrap", "connect-flash"] },
        { label: "Database", items: ["MongoDB", "Mongoose", "connect-mongo sessions"] },
        { label: "Auth & validation", items: ["Passport.js (local)", "express-session", "Joi"] },
        { label: "Services", items: ["Cloudinary image storage"] },
      ],
      featured: true,
      priority: 1,
      specs: ["MVC", "AUTH", "CRUD", "MEDIA UPLOADS"],
      problem:
        "A multi-user listing site has to let anyone browse while restricting edits to the people who own the data, and it has to reject malformed input before it reaches the database. Doing this per page is error-prone, so the project centralises those rules in middleware that every route passes through.",
      features: [
        { title: "Listing CRUD with ownership", body: "Logged-in users create listings with title, description, location, country, price and a photo. Edit and delete routes run an isOwner check against the listing's owner field, so other users are redirected with an error message." },
        { title: "Registration, login and sessions", body: "Passport's local strategy with passport-local-mongoose handles accounts. Sessions are stored in MongoDB through connect-mongo, and a requested page is remembered so users return to it after logging in." },
        { title: "Reviews with author-only deletion", body: "Reviews (rating 1–5 and a comment) are stored in their own collection and referenced from the listing. Posting needs a login and deleting needs the isReviewAuthor check." },
        { title: "Image upload pipeline", body: "Multer receives the file in a temporary folder, the controller uploads it to Cloudinary, stores the returned URL and public id on the listing, then deletes the temp file. Replacing or deleting a listing also removes the old Cloudinary asset." },
        { title: "Server-side validation", body: "Joi schemas validate listing and review payloads (required fields, price of at least 1, rating 1–5) in middleware, returning a 400 through the shared error handler." },
        { title: "Flash feedback and error pages", body: "connect-flash reports success and error messages across redirects. A wrapAsync helper and an ExpressError class route failures to one error template." },
      ],
      architecture: [
        { name: "Browser and EJS views", role: "Server-rendered pages built from a shared ejs-mate layout with navbar, footer and flash partials." },
        { name: "Express routers", role: "Separate listing, review and user routers. Each route chains middleware (login, ownership, validation) before its controller." },
        { name: "Controllers", role: "Hold the logic for listings, reviews and users and talk to the models and to Cloudinary." },
        { name: "Mongoose models", role: "Listing, Review and User documents. A listing references its owner and its reviews; a post-delete hook removes a listing's reviews with it." },
        { name: "MongoDB and Cloudinary", role: "MongoDB stores listings, reviews, users and sessions. Cloudinary stores the images, and the database keeps only their URLs." },
      ],
      highlights: [
        "Middleware-first design: isLoggedIn, isOwner, isReviewAuthor and the Joi validators are reusable functions, so adding a route means composing them rather than rewriting checks.",
        "Referential cleanup: deleting a listing triggers a Mongoose hook that deletes its reviews, so no orphaned review documents remain.",
        "A seed script under init/ populates sample listings for local development.",
      ],
      challenges: [
        { title: "Owner-level authorization", body: "Login alone is not enough, so ownership is checked against the stored owner id before any update or delete runs." },
        { title: "Keeping external storage consistent", body: "Cloudinary and MongoDB can drift apart, so the controllers delete the previous image when a listing is replaced or removed and clean up the local temp file after each upload." },
        { title: "Input trust", body: "Request bodies are validated by Joi before controllers see them, which keeps controller code free of defensive checks." },
      ],
      outcomes: [
        "End-to-end server-rendered app covering authentication, authorization, uploads, validation and error handling.",
        "No automated tests are included in the source.",
      ],
      notes:
        "Educational build: no payments, bookings, maps or messaging. A live demo is documented in the project README, but it did not respond when checked, so no link is shown.",
    },
    {
      slug: "sentinel-agents",
      number: "02",
      title: "Sentinel Agents",
      subtitle: "Multi-agent vulnerability analysis with AST parsing and sandboxed validation",
      category: "AI SECURITY TOOLING",
      filters: ["AI / ML", "Cybersecurity"],
      shortDescription: "Security analysis engine.",
      thesis:
        "Autonomous AI-driven security platform for repository-wide vulnerability analysis using AST parsing and sandboxing.",
      overview:
        "Sentinel Agents is an autonomous security platform that analyses a whole code repository for vulnerabilities. It parses source into syntax trees with Tree-sitter, uses LLM-assisted agents in a modular pipeline to reason about findings, validates suspected exploits inside Docker sandboxes, and reports results through a Next.js dashboard with real-time scanning.",
      technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "Docker", "Tree-sitter", "LLMs"],
      techGroups: [
        { label: "Backend", items: ["Python", "FastAPI"] },
        { label: "Frontend", items: ["Next.js", "TypeScript"] },
        { label: "Analysis", items: ["Tree-sitter AST parsing", "LLMs"] },
        { label: "Infrastructure", items: ["Docker sandboxing"] },
      ],
      featured: false,
      priority: 1,
      specs: ["TREE-SITTER AST", "DOCKER SANDBOX", "MULTI-AGENT VALIDATION"],
      features: [
        { title: "Repository-wide analysis", body: "Scans an entire repository rather than a single file, using AST parsing to understand code structure." },
        { title: "Modular multi-agent pipeline", body: "Separate stages cooperate on analysis, exploit validation and reporting." },
        { title: "Docker sandboxing", body: "Suspected exploits are validated in isolated containers." },
        { title: "Live dashboard", body: "A Next.js dashboard shows scanning progress in real time and produces security reports." },
      ],
      notes:
        "Content is limited to the verified project description. The source code was not available for this review, so architecture, API and results are not described here.",
    },
    {
      slug: "zerodha-clone",
      number: "03",
      title: "Zerodha Clone",
      subtitle: "Marketing site, trading-style dashboard and authenticated API, built for learning",
      category: "FINTECH UI / EDUCATIONAL",
      filters: ["Full Stack"],
      year: "2026",
      shortDescription:
        "Educational trading-style web app: a React marketing site, a portfolio dashboard and an authenticated API.",
      thesis:
        "Developed an educational Zerodha-inspired application with a multi-page React site, a separate trading-style dashboard, and a Node.js/Express API backed by MongoDB. Independent project, not affiliated with Zerodha.",
      overview:
        "This is a learning project that recreates the look and structure of a retail brokerage product: a multi-page public website, a separate dashboard with watchlist, holdings, positions, orders and funds views, and an Express API with MongoDB behind them. Placing an order in the dashboard updates stored holdings, which makes it a working model of portfolio bookkeeping, but nothing connects to a broker, exchange or real money.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Material UI", "Chart.js", "JWT", "Passport.js"],
      techGroups: [
        { label: "Public site", items: ["React", "React Router", "CSS"] },
        { label: "Dashboard", items: ["React", "Material UI", "Chart.js / react-chartjs-2", "Axios"] },
        { label: "Backend", items: ["Node.js", "Express.js", "cookie-parser"] },
        { label: "Database & auth", items: ["MongoDB", "Mongoose", "Passport (local)", "JWT cookie"] },
      ],
      featured: false,
      priority: 1,
      specs: ["REACT DASHBOARD", "REST API", "JWT + PASSPORT", "DEMO DATA"],
      problem:
        "Recreating a financial product's interface is a practical way to practise splitting a full-stack app into a public site, a data-heavy dashboard and an authenticated API, and to model portfolio rules such as average cost and position sizing.",
      features: [
        { title: "Multi-page public site", body: "Home, About, Products, Pricing, Support, Signup and Login pages built as a React single-page app." },
        { title: "Trading-style dashboard", body: "A separate React app with watchlist, holdings, positions, orders, funds and summary views." },
        { title: "Portfolio charts", body: "Chart.js doughnut and bar visualisations of holdings and positions." },
        { title: "Order entry that updates holdings", body: "POST /newOrder saves the order. A BUY merges into an existing holding using a weighted average price; a SELL is rejected if quantity is insufficient and removes the holding when it reaches zero." },
        { title: "Account authentication", body: "Signup and login use Passport's local strategy and issue a JWT in a cookie that expires after one day, with auth-status and logout endpoints." },
        { title: "Persistence", body: "Mongoose models for users, holdings, orders and positions, served through REST endpoints for holdings, positions and orders." },
      ],
      architecture: [
        { name: "Public site (React)", role: "Marketing and account pages. Handles signup and login against the API." },
        { name: "Dashboard (React)", role: "Separate app that fetches holdings, positions and orders from the API with Axios and renders them with Material UI and Chart.js." },
        { name: "API (Express)", role: "Auth endpoints plus holdings, positions and order routes. CORS is limited to the local frontends." },
        { name: "MongoDB (Mongoose)", role: "User, Holding, Position and Order collections." },
      ],
      highlights: [
        "Weighted-average cost: a BUY into an existing holding recomputes the average price from old and new quantity and cost.",
        "SELL guards: orders exceeding the held quantity are refused, and an emptied holding is deleted.",
        "Three separate packages (site, dashboard, backend) that build and run independently.",
      ],
      challenges: [
        { title: "Keeping orders and holdings consistent", body: "Each order writes the order record and then adjusts the holding, so the buy and sell branches carry the bookkeeping rules." },
        { title: "Splitting the frontend", body: "Public pages and dashboard are separate apps, so authentication state has to cross between them through the API and cookie." },
      ],
      outcomes: [
        "Complete order-to-holding flow against a real database.",
        "Authentication falls back to a hard-coded JWT secret when none is configured, so it is not production-hardened.",
      ],
      notes:
        "Educational clone. No brokerage connection, live prices or real trades; the watchlist and sample holdings come from local data files. Not affiliated with Zerodha.",
    },
    {
      slug: "antarsetu",
      number: "04",
      title: "Sangam Connect",
      subtitle: "Browser video meetings over peer-to-peer WebRTC with Socket.IO signaling",
      category: "REAL-TIME SYSTEMS / WEBRTC",
      filters: ["Real-Time Systems", "Full Stack"],
      shortDescription:
        "Browser video-conferencing app with WebRTC calls, screen sharing, chat and meeting history.",
      thesis:
        "A video conferencing platform focused on real-time communication and a modern meeting experience. Previously presented as AntarSetu.",
      overview:
        "Sangam Connect is a browser video-conferencing app: users register and verify their email, create or join a meeting room by code, and talk over audio and video with screen sharing, in-call chat and a participants panel. Meeting history lets them rejoin earlier rooms. The project is as much about the reliability of real-time media (device contention, reconnects, stale peers) as about features.",
      technologies: ["React", "Node.js", "Express.js", "Socket.IO", "WebRTC", "MongoDB", "WebGL"],
      techGroups: [
        { label: "Frontend", items: ["React", "React Router", "CSS Modules", "WebGL / GLSL"] },
        { label: "Real-time", items: ["WebRTC", "Socket.IO"] },
        { label: "Backend", items: ["Node.js", "Express.js", "Nodemailer"] },
        { label: "Database & auth", items: ["MongoDB", "Mongoose", "bcrypt", "JWT access and refresh tokens"] },
        { label: "Testing", items: ["Node test runner", "React Testing Library"] },
      ],
      featured: false,
      priority: 2,
      specs: ["WEBRTC MESH", "SOCKET.IO SIGNALING", "WEBGL"],
      problem:
        "A video call needs low-latency media between browsers, shared knowledge of who is in the room and what each person's camera and microphone are doing, and graceful behaviour when a device is busy, a tab closes or a peer drops. Each of those failure modes needs explicit handling.",
      features: [
        { title: "Verified accounts and token auth", body: "Registration with a six-digit email verification code, bcrypt password hashing, and JWT access and refresh tokens with hashed refresh tokens stored in MongoDB." },
        { title: "Meeting rooms", body: "Join by room code. The server tracks membership and participant metadata, and an emptied room is kept for a 15-minute grace period before it expires." },
        { title: "Audio, video and screen sharing", body: "Camera and microphone toggles, screen sharing through getDisplayMedia with track replacement, and an audio-only fallback when the webcam is unavailable." },
        { title: "Live participant state", body: "Mic, camera and screen-share state is broadcast over Socket.IO and shown in a participants panel." },
        { title: "In-call chat", body: "Messages relayed through the server with history replay for late joiners, notifications and emoji support." },
        { title: "Device settings and diagnostics", body: "Camera and microphone selection, a mic level meter, and a network badge driven by getStats() (latency, packet loss, jitter, bitrate)." },
        { title: "Meeting history", body: "Past meetings are listed with a rejoin action." },
        { title: "Theme system and WebGL scene", body: "Warm-paper light and charcoal dark themes synced across tabs, plus a custom GPU-raymarched WebGL sculpture on the landing page." },
      ],
      architecture: [
        { name: "React client", role: "Pages for landing, auth, dashboard, history and the meeting view, with AuthContext and ThemeContext providers." },
        { name: "Signaling (Socket.IO)", role: "Carries join, leave, media-state and chat events, and relays WebRTC offers, answers and ICE candidates between two named peers. It never carries audio or video." },
        { name: "Media path (WebRTC mesh)", role: "Each participant opens a direct RTCPeerConnection to every other participant, using public STUN servers. Media flows peer to peer." },
        { name: "Express API", role: "User routes for registration, verification and login, a health endpoint, and email delivery for verification codes." },
        { name: "MongoDB", role: "User, Meeting and RefreshToken models." },
      ],
      highlights: [
        "Clear split between signaling and media: Socket.IO only brokers the connection, so a server outage does not change the data path of calls already established.",
        "Reliability fixes recorded in the changelog: safe AudioContext teardown, stale peer-connection cleanup, duplicate participant prevention, camera re-enable, and support for the same account in several tabs.",
        "Automated tests cover the backend and frontend: 7 suites and 47 tests were recorded passing in the changelog for the authentication-theme release.",
      ],
      challenges: [
        { title: "Camera contention", body: "A webcam can be locked by another app or tab, so the client falls back to audio-only instead of failing to join." },
        { title: "Mesh topology limits", body: "Every extra participant adds a connection per peer. The current design suits small rooms; a LiveKit migration is documented in the repository as a possible future step and is not used by the current meeting view." },
        { title: "Layout under side panels", body: "Chat and participants panels are mutually exclusive and the local preview shifts so nothing covers the meeting grid." },
      ],
      outcomes: [
        "Complete signaling, media and account flow with documented reliability work and regression tests.",
        "Real-world call quality was not measured, and a test with several real devices was not part of this review.",
      ],
      notes:
        "Peer-to-peer mesh does not scale to large rooms, and only public STUN servers are configured (TURN setup is documented separately). A database credential was committed to the source history at one point; rotate it before publishing the repository.",
    },
    {
      slug: "scriptbridge",
      number: "05",
      title: "ScriptBridge",
      subtitle: "Machine translation for Tulu language preservation",
      category: "NLP / LANGUAGE PRESERVATION",
      filters: ["AI / ML"],
      shortDescription: "Tulu translation project.",
      thesis:
        "Applied NLP and machine translation for Tulu language preservation.",
      overview:
        "ScriptBridge applies natural language processing and machine translation to Tulu, a regional language with very little digital tooling. The goal is to support its preservation by making translation between Tulu and other languages possible through a model served behind an API.",
      technologies: ["Python", "PyTorch", "Hugging Face", "FastAPI"],
      techGroups: [
        { label: "ML", items: ["Python", "PyTorch", "Hugging Face"] },
        { label: "Serving", items: ["FastAPI"] },
      ],
      featured: false,
      priority: 2,
      specs: ["NLP", "MACHINE TRANSLATION", "TULU"],
      problem:
        "Tulu has few digital resources, so mainstream translation tools handle it poorly. A purpose-built translation model is a way to document and keep using the language.",
      notes:
        "Source code and documentation were not available for this review, so datasets, model architecture, accuracy and the translation workflow are intentionally not described. Add them once the repository is supplied.",
    },
    {
      slug: "dga-sentry",
      number: "06",
      title: "DGA Sentry",
      subtitle: "Explainable ML console for spotting algorithmically generated domains",
      category: "AI/ML / CYBERSECURITY",
      filters: ["AI / ML", "Cybersecurity"],
      shortDescription:
        "Explainable ML console that flags algorithmically generated domains, audits bulk DNS logs and monitors model drift.",
      thesis:
        "Built a full-stack tool for spotting domains produced by Domain Generation Algorithms. Lexical features feed a two-stage classifier, TreeSHAP explains each verdict, and a React console supports single lookups, bulk audits and drift monitoring.",
      overview:
        "Malware often uses a Domain Generation Algorithm to produce thousands of changing domain names, so defenders cannot just block a fixed list. DGA Sentry judges a domain from its string alone: it extracts 13 lexical and statistical features, scores them with an XGBoost classifier, attributes suspicious domains to a likely DGA family with a Random Forest, and shows the features that drove each verdict. A React and TypeScript console wraps this for a security analyst.",
      technologies: ["Python", "FastAPI", "XGBoost", "Random Forest", "SHAP", "React", "TypeScript", "Vite", "Docker"],
      techGroups: [
        { label: "ML and data", items: ["scikit-learn", "XGBoost", "Random Forest", "SHAP / TreeSHAP", "MLflow", "tldextract", "wordninja"] },
        { label: "Backend", items: ["Python 3.11", "FastAPI", "dnspython", "slowapi rate limiting"] },
        { label: "Frontend", items: ["React 19", "TypeScript", "Vite"] },
        { label: "Delivery and testing", items: ["Docker Compose", "pytest", "Vitest", "GitHub Actions"] },
      ],
      featured: true,
      priority: 2,
      specs: ["XGBOOST + RF", "TREESHAP", "DRIFT MONITOR"],
      problem:
        "Static blocklists cannot keep up with domains generated on the fly, and a bare score gives an analyst nothing to act on. The project aims for a fast signal that needs no network call, with enough explanation to justify a block or a follow-up.",
      features: [
        { title: "Domain normalisation and validation", body: "Hostnames are checked against RFC syntax rules and internationalised names are decoded from punycode before analysis." },
        { title: "13-feature lexical profile", body: "Shannon entropy, Gini index, bigram log-likelihood from an n-gram model, vowel/consonant ratio and transition rate, longest consonant run, digit and hex ratios, unique-character ratio, and dictionary-word segmentation." },
        { title: "Two-stage classification", body: "An XGBoost model gives a malicious probability. Non-safe domains go to a Random Forest that attributes one of 25 DGA families." },
        { title: "Three risk tiers", body: "Safe below 0.35, Suspicious from 0.35 to 0.75, Malicious from 0.75, with a recommended action." },
        { title: "Per-verdict explanation", body: "TreeSHAP surfaces the top three contributing features and their impact on the score." },
        { title: "Optional DNS telemetry", body: "An opt-in asynchronous lookup shows whether a domain resolves to active infrastructure or returns NXDOMAIN." },
        { title: "Bulk audit", body: "Upload CSV, TXT or DNS-style logs, analyse them in a batch and export a CSV report." },
        { title: "Metrics and drift view", body: "Model scores and a Kolmogorov–Smirnov drift check comparing a sliding window of recent traffic with the training baseline." },
      ],
      architecture: [
        { name: "React console", role: "Investigation workbench, bulk audit and metrics-and-drift screens. Calls POST /predict and /predict/batch." },
        { name: "FastAPI gateway", role: "Validates requests, applies rate limiting, and runs CPU-bound inference in a thread pool so the event loop stays free." },
        { name: "LRU prediction cache", role: "A bounded, thread-safe cache keyed by domain that short-circuits repeat lookups." },
        { name: "Feature extractor", role: "Pure in-memory computation of the 13-dimensional vector, scaled before scoring." },
        { name: "Cascade models", role: "Stage 1 XGBoost probability, then Stage 2 Random Forest family attribution for non-safe domains." },
        { name: "Enrichment", role: "TreeSHAP explanations and optional DNS resolution. The drift detector receives raw feature values on the side." },
      ],
      highlights: [
        "Cascade design: cheap benign traffic exits after stage one; the family model runs only where it adds value.",
        "Explainability is part of the response, not a separate report: each prediction carries its top feature drivers.",
        "Drift monitoring uses a two-sample Kolmogorov–Smirnov test on a 2,000-sample sliding window and flags drift when p < 0.05 and KS > 0.15 (documented thresholds).",
        "Calibrated operating thresholds, with the architecture document targeting a false-positive rate of 0.5% or less.",
        "Training, data-preparation and evaluation scripts, an architecture and evaluation write-up, Docker setup and CI are in the repository.",
      ],
      challenges: [
        { title: "Explaining a tree ensemble", body: "TreeSHAP attributes the score to features exactly, which suits the XGBoost model and keeps explanation cost low." },
        { title: "Serving CPU-bound inference", body: "Model calls are dispatched to a thread pool and cached, so slow predictions do not block the API." },
        { title: "Detecting a decaying model", body: "A statistical drift test over live traffic gives an early signal that retraining may be needed." },
      ],
      outcomes: [
        "Project-reported test-set results for XGBoost: accuracy 0.8827, precision 0.9332, recall 0.8243, F1 0.8754 (ROC-AUC 0.9454 on validation). These were not reproduced independently.",
        "Evidence of testing: pytest backend tests (API and features) and frontend tests.",
      ],
      notes:
        "Trained model files are not included in the source archive, so a fresh checkout must run the data-preparation and training scripts before it can predict. This site does not host a live predictor.",
      media: {
        hero: {
          src: "/images/projects/dga-sentry/malicious-domain-analysis.webp",
          alt: "DGA Sentry console showing a malicious verdict with TreeSHAP feature drivers and a feature breakdown chart",
          width: 1600,
          height: 1089,
        },
        screenshots: [
          {
            src: "/images/projects/dga-sentry/workbench.webp",
            alt: "DGA Sentry investigation workbench with a domain input and sample queries",
            caption: "Investigation workbench",
            width: 1600,
            height: 1089,
          },
          {
            src: "/images/projects/dga-sentry/dns-telemetry.webp",
            alt: "DGA Sentry result with live DNS telemetry",
            caption: "Optional DNS telemetry",
            width: 1600,
            height: 1089,
          },
          {
            src: "/images/projects/dga-sentry/bulk-audit.webp",
            alt: "DGA Sentry bulk audit of many domains",
            caption: "Bulk log audit",
            width: 1600,
            height: 1089,
          },
          {
            src: "/images/projects/dga-sentry/drift-dashboard.webp",
            alt: "DGA Sentry model metrics and drift dashboard",
            caption: "Model metrics and drift",
            width: 1600,
            height: 1089,
          },
        ],
        diagram: {
          src: "/images/projects/dga-sentry/architecture.webp",
          alt: "Architecture diagram: React console, FastAPI gateway with LRU cache, lexical feature extractor, XGBoost then Random Forest cascade, TreeSHAP and DNS telemetry, and a drift monitor",
          caption: "System architecture",
          width: 1800,
          height: 2096,
        },
      },
    },
    {
      slug: "saturn-escape",
      number: "07",
      title: "Saturn Escape: Warp Run",
      subtitle: "A five-minute automated space cinematic in C++ and fixed-function OpenGL",
      category: "COMPUTER GRAPHICS / C++",
      filters: ["Graphics"],
      shortDescription:
        "Five-minute timed 3D space cinematic in C++ and OpenGL.",
      thesis:
        "Created an automated 3D space cinematic in C++ with OpenGL and freeglut: Saturn and its rings, procedural starfields, particle explosions, an asteroid field, a portal and a hyperspace tunnel, driven by a 300-second timeline.",
      overview:
        "Saturn Escape: Warp Run is a graphics assignment that plays a continuous, non-interactive 300-second film rendered live in real time. A hero ship is shown over Saturn, fights an enemy, flies through the rings and an asteroid field, is damaged, escapes through a portal and hyperspace tunnel, and arrives in a new galaxy before a white fade to \"The End\". The user only controls playback.",
      technologies: ["C++", "OpenGL", "GLUT / freeglut", "GLU"],
      techGroups: [
        { label: "Language", items: ["C++ (STL vectors, structs)"] },
        { label: "Graphics", items: ["OpenGL fixed-function pipeline", "GLU"] },
        { label: "Windowing and input", items: ["freeglut"] },
      ],
      featured: false,
      priority: 3,
      specs: ["300 S TIMELINE", "FIXED-FUNCTION GL", "60 ASTEROIDS"],
      problem:
        "A learning exercise in staging a long, timed sequence with low-level graphics calls: procedural effects, camera choreography, particles and scene transitions, all without a game engine or asset files.",
      features: [
        { title: "Nine-scene timeline", body: "Top-down view of Saturn (0–25 s), fly-by (25–35 s), dogfight (35–90 s), rings and asteroid field (90–150 s), engine damage (150–210 s), portal formation (210–230 s), hyperspace tunnel (230–270 s), new galaxy (270–290 s) and a whiteout ending (290–300 s)." },
        { title: "Saturn and rings", body: "A procedurally drawn planet body and ring system built from quad strips." },
        { title: "Procedural space effects", body: "Starfield whose warp factor stretches during hyperspace, a hyperspace tunnel, a portal and a new galaxy, all generated from code." },
        { title: "Ships, lasers and faces", body: "Hero and enemy ships with roll animation, laser fire during the dogfight, and a drawn pilot face with changing emotion." },
        { title: "Particles and asteroids", body: "A pool of 300 particles for sparks and explosions, and 60 asteroids with their own rotation." },
        { title: "Playback controls", body: "Space pauses and resumes, L skips ahead 10 seconds, J goes back 10 seconds, Esc quits. It starts full screen with an on-screen timer." },
      ],
      architecture: [
        { name: "Main loop", role: "A 16 ms freeglut timer advances the clock and requests a redraw." },
        { name: "Timeline in display()", role: "Branches on the current time to pick the scene, interpolating camera and object positions with lerp helpers." },
        { name: "Physics update", role: "updatePhysics() advances particles and asteroids each frame." },
        { name: "Scene draw functions", role: "Separate routines for Saturn, ships, lasers, portal, tunnel, galaxy and starfield, drawn with glBegin/glEnd." },
      ],
      highlights: [
        "Single-file program of about 1,050 lines (main6.cpp) with no external assets.",
        "Time-based design: one clock drives everything, which is what makes pause and seek work.",
        "Immediate-mode rendering (glBegin/glEnd) in the fixed-function pipeline: no shaders or vertex buffers.",
      ],
      challenges: [
        { title: "Scene transitions", body: "Scenes hand off at fixed timestamps, with interpolated camera paths so the cut from isometric view to fly-by is seamless." },
        { title: "Seeking in a stateful scene", body: "Because effects derive from the clock, jumping 10 seconds forwards or back stays consistent with the visible scene." },
      ],
      outcomes: [
        "A complete, self-contained cinematic with no dependencies beyond OpenGL and freeglut.",
        "Frame rate and runtime accuracy were not measured.",
      ],
      notes:
        "Native desktop program, not a web app. No render or recording is published yet; add a captured frame or clip when available.",
    },
  ] as Project[],
  experience: [
    {
      company: "Datavex AI",
      role: "SOFTWARE ENGINEERING INTERN",
      period: "2026",
      type: "Internship",
      description: [
        "Developed scalable full-stack features for an AI-powered engineering platform using Next.js, FastAPI, PostgreSQL, Docker, and REST APIs.",
        "Built interactive engineering workspaces supporting real-time code streaming and parameter management.",
        "Designed secure backend services with containerized deployment, persistent data management, and reusable APIs.",
      ],
    },
    {
      company: "Sahyadri College of Engineering and Management",
      role: "B.E. COMPUTER SCIENCE AND ENGINEERING",
      period: "2023",
      type: "Education",
      description: [
        "Pursuing a Bachelor's degree in Computer Science and Engineering with specialization in AI and ML.",
        "Participated in the GDG on Campus Solution Challenge and selected for SIH 2025.",
        "Secured Top 3 positions across 4 hackathons.",
      ],
    },
  ] as Experience[],
};

/** Array order in `portfolioData.projects` is the canonical order for the listing and Previous/Next. */
export const getProjects = () => portfolioData.projects;

export const getFeaturedProjects = () => portfolioData.projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  portfolioData.projects.find((p) => p.slug === slug);

export function getAdjacentProjects(slug: string) {
  const i = portfolioData.projects.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? portfolioData.projects[i - 1] : null,
    next: i >= 0 && i < portfolioData.projects.length - 1 ? portfolioData.projects[i + 1] : null,
  };
}
