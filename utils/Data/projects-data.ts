export const projectsData = [
  {
    id: 1,
    name: "Day Care Center Management System",
    description:
      "A local-first management system for a barangay day care center, built to replace paper-based records with protected student, attendance, and report workflows.",
    details:
      "Built for Barangay San Antonio de Padua I Day Care Center to support staff workflows where record retrieval previously depended on paper files and borrowed computers. It combines a public information website with a protected staff app for student records, attendance tracking, report exports, authentication, and role-based access. The system uses an offline-capable architecture with encrypted IndexedDB storage and Cloudflare D1 sync so staff can keep working through weak or intermittent connectivity.",
    tools: [
      "React.js",
      "TypeScript",
      "TanStack Start",
      "Tailwind CSS",
      "IndexedDB",
      "Cloudflare D1",
      "PDF/XLSX Export",
    ],
    role: "Full-Stack Developer",
    code: "https://github.com/johnreybillones/San-Antonio-De-Padua-1-DCCMS",
    demo: "https://sadp1-daycare.me",
    date: "2026",
    images: ["/projects/DCCMS.jpg"],
    videos: [""],
    highlights: [
      "Designed a full-stack management system for a barangay day care center targeting 10+ personnel and 50+ enrolled students.",
      "Engineered a local-first sync architecture using IndexedDB and Cloudflare D1 to keep attendance and records functional under unreliable connectivity.",
      "Automated PDF and XLSX report generation for CSWD submissions, reducing manual report encoding for daycare staff.",
    ],
    challenges: [
      "Protecting staff-only data while keeping public daycare information accessible.",
      "Designing offline-first workflows that remain understandable for non-technical daycare personnel.",
    ],
  },
  {
    id: 2,
    name: "TECHGAP: Curriculum Gap Analysis",
    description:
      "A full-stack curriculum analysis platform that compares academic program skills against job-market demand and surfaces data-backed improvement insights.",
    details:
      "Built for academic institutions, curriculum designers, and educators who need evidence-based insight into curriculum-to-industry alignment. It processes curriculum and job-market data to show alignment scores, coverage metrics, matched skills, missing skills, and AI-assisted recommendations. The platform uses a FastAPI backend with a React analytics interface so reviewers can inspect skill gaps across academic tracks through interactive charts.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "FastAPI",
      "Supabase",
      "Recharts",
      "Scikit-learn",
      "Google Gemini",
    ],
    role: "Full-Stack Developer",
    code: "https://github.com/johnreybillones/TechGap-Curriculum-Gap-Analyzer",
    demo: "http://techgap.vercel.app",
    date: "2025",
    images: ["/projects/TechGap.jpg"],
    videos: [""],
    highlights: [
      "Built and presented a full-stack curriculum analysis system to faculty, advancing it into an active thesis addressing skill misalignment across four academic tracks.",
      "Engineered an NLP pipeline processing 10,000+ job listing records to extract industry skills and expose curriculum-to-industry skill gaps.",
      "Delivered a Recharts-powered analytics dashboard that gives curriculum reviewers a data-backed view of gaps between graduate output and industry demand.",
    ],
    challenges: [
      "Turning large job-listing datasets into structured skill signals useful for curriculum review.",
      "Presenting technical alignment metrics in a way academic stakeholders can quickly interpret.",
    ],
  },
  {
    id: 3,
    name: "AGRAIN: Alamin ang Tamang Presyo",
    description:
      "An offline-first PWA that helps smallholder farmers log costs, calculate break-even prices, and negotiate crop rates without relying on internet access.",
    details:
      "Created during ACSS-UPLB's Innovation Lab hackathon as a financial empowerment tool for smallholder farmers facing pricing transparency and negotiation challenges. It replaces mental arithmetic with visual feedback by letting farmers log expenses, review total seasonal investment, and check whether an offer is below or above break-even. The app is designed as an installable PWA with IndexedDB-backed storage so expense tracking and price checks continue in rural, low-connectivity environments.",
    tools: ["React.js", "Tailwind CSS", "PWA", "IndexedDB", "Vite"],
    role: "Frontend Developer",
    code: "https://github.com/johnreybillones/Agrain",
    demo: "http://agrain.vercel.app",
    date: "2026",
    images: ["/projects/Agrain.jpg"],
    videos: [""],
    highlights: [
      "Shipped a working PWA prototype from zero to deployment within a one-week competitive sprint, finishing as a Top 10 finalist against 20 teams.",
      "Engineered IndexedDB-backed local storage to enable full offline functionality for farmers in areas with unreliable internet access.",
      "Designed a real-time price calculation interface with conditional state feedback so farmers can verify fair crop rates during live field negotiations.",
    ],
    challenges: [
      "Designing reliable local-first behavior for offline expense and receipt workflows.",
      "Reducing cognitive load during negotiations through clear red/green price feedback.",
    ],
  },
  {
    id: 4,
    name: "Automata Visualizer",
    description:
      "A frontend-only learning tool for inspecting deterministic finite automata through animated graph transitions, trace views, and string validation.",
    details:
      "Built for students, instructors, and reviewers who need to understand automata behavior without backend services or static diagrams. It lets users select supplied DFA examples, test input strings, and inspect each transition through an animated graph, input tape, status panel, and trace view. The tool includes step-by-step and automatic playback, active-state highlighting, visited-state tracking, accepted and rejected examples, and CFG and PDA reference material.",
    tools: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Vitest",
      "React Testing Library",
    ],
    role: "Frontend Developer",
    code: "https://github.com/johnreybillones/Automata-Visualizer",
    demo: "https://dfa-visualizer-ochre.vercel.app",
    date: "2026",
    images: ["/projects/Automata Visualizer.jpg"],
    videos: [""],
    highlights: [
      "Built an interactive DFA visualization experience with graph animation, input tape playback, transition tracing, and final accept/reject feedback.",
      "Added step-by-step and automatic playback modes with adjustable speed to support both guided instruction and independent review.",
      "Kept the architecture frontend-only so the tool can be used locally or deployed statically without backend dependencies.",
    ],
    challenges: [
      "Making formal automata transitions clear without overwhelming learners with implementation details.",
      "Keeping visualization state, playback controls, and validation feedback synchronized.",
    ],
  },
  {
    id: 5,
    name: "Digital Daily Time Record (DTR) Tracker",
    description:
      "A Google Sheets automation used by student assistants to track, compute, and verify duty hours with fewer manual corrections.",
    details:
      "Created as a practical timekeeping supplement for 200+ scholars and student assistants who needed a clearer way to manage duty-hour records. It uses spreadsheet formulas, input validation, and Google Apps Script automation to compute shifts and catch entry issues before admin review. The tracker keeps the workflow familiar by staying inside Google Sheets while reducing repetitive calculation and verification work.",
    tools: ["Google Sheets", "Google Apps Script"],
    role: "Automation Builder",
    code: "",
    demo: "https://docs.google.com/spreadsheets/d/1Zs_KvcTe85bJoxMW5xRIGHkNmhteyWwSeI7fsem4WoI/edit?gid=376232159#gid=376232159",
    date: "2025",
    images: ["/branding/logo.png"],
    videos: [""],
    highlights: [
      "Built a tracking supplement for 200+ scholars with input validation and auto-computed shift edge cases.",
      "Caught manual entry errors before they reached admin review, reducing correction requests and verification overhead.",
      "Balanced automation with a familiar spreadsheet interface so non-technical users could still review their own records.",
    ],
    challenges: [
      "Handling edge-case shift logic while keeping formulas understandable for non-technical users.",
      "Balancing automation with easy manual verification for end users.",
    ],
  },
];
