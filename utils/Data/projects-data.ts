export const projectsData = [
  {
    id: 1,
    name: "TECHGAP: Curriculum Gap Analysis",
    description:
      "A full-stack decision-support platform for curriculum gap analysis, built with a FastAPI backend and React frontend, deployed on a cloud-native stack using Vercel, Render, and Supabase.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "FastAPI",
      "Supabase",
      "Recharts",
      "Vercel",
      "Render",
    ],
    role: "Full-Stack Developer",
    code: "",
    demo: "http://techgap.vercel.app",
    date: "",
    images: ["/logo.png"],
    videos: [""],
    highlights: [
      "Architected and deployed a full-stack decision-support system using a FastAPI backend and React frontend, managed via a cloud-native stack of Vercel, Render, and Supabase.",
      "Developed a recurring data pipeline to handle 10,000+ industry records, optimizing the integration between a relational database and a responsive Tailwind CSS dashboard.",
      "Built an interactive analytics interface using Recharts to visualize complex dataset relationships, allowing stakeholders to identify specific skill misalignments across four academic tracks.",
    ],
    challenges: [
      "Processing and structuring large external datasets for recurring updates.",
      "Keeping data synchronization stable across frontend analytics and backend services.",
    ],
  },
  {
    id: 2,
    name: "AGRAIN: Alamin ang Tamang Presyo",
    description:
      "An offline-first Progressive Web App built in a one-week sprint to help farmers track expenses, digitize receipts, and support crop price negotiations in low-connectivity environments.",
    tools: ["React.js", "Tailwind CSS", "PWA", "IndexedDB"],
    role: "Frontend Developer",
    code: "",
    demo: "http://agrain.vercel.app",
    date: "",
    images: ["/logo.png"],
    videos: [""],
    highlights: [
      "Developed an offline-first Progressive Web App (PWA) in a 1-week sprint, implementing IndexedDB for persistent local data storage in zero-connectivity environments.",
      "Engineered a local persistence layer to manage expense logs and digitize receipts, enabling farmers to maintain accurate financial records without needing a stable internet connection.",
      "Built a dynamic UI with conditional CSS state management to provide real-time visual feedback based on price calculations, reducing cognitive load during crop negotiations.",
    ],
    challenges: [
      "Designing reliable local-first behavior for offline workflows.",
      "Providing clear visual cues for users during real-time price calculations.",
    ],
  },
  {
    id: 3,
    name: "Digital Daily Time Record (DTR) Tracker",
    description:
      "A personalized Google Sheets-based time tracking system adopted by student assistants to manage, compute, and verify duty hours with less manual effort.",
    tools: ["Google Sheets", "Google Apps Script"],
    role: "Automation Builder",
    code: "",
    demo: "https://docs.google.com/spreadsheets/d/1Zs_KvcTe85bJoxMW5xRIGHkNmhteyWwSeI7fsem4WoI/edit?gid=376232159#gid=376232159",
    date: "",
    images: ["/logo.png"],
    videos: [""],
    highlights: [
      "Developed a personalized time-tracking system in Google Sheets adopted by 200+ student assistants to independently manage, calculate, and verify their duty hours with precision.",
      "Engineered custom Google Apps Script and complex formulas to automate shift calculations and handle edge-case logic for precise timekeeping, eliminating manual data entry overhead.",
    ],
    challenges: [
      "Handling edge-case shift logic while keeping formulas understandable for non-technical users.",
      "Balancing automation with easy manual verification for end users.",
    ],
  },
];
