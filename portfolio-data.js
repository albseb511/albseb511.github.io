export const projects = [
  {
    number: "01",
    title: "Voicebound",
    type: "Interactive fiction · AI-native game",
    year: "2026",
    status: "Hackathon build",
    layout: "wide",
    visual: "image",
    visualClass: "voicebound",
    image: "assets/projects/voicebound.jpg",
    alt: "A generated science-fiction starship title card from Voicebound",
    description:
      "A voice-first story that listens back and paints itself around the player. A live narrator, interruptible speech, multi-character voices, and a high-throughput image pipeline turn every playthrough into its own world.",
    tags: ["Gemini Live", "Generative image", "Next.js", "Postgres", "WebSocket"],
    links: [
      { label: "Play Voicebound", url: "https://web-production-f59b2.up.railway.app" }
    ]
  },
  {
    number: "02",
    title: "Mod OS",
    type: "Personal research · Android systems",
    year: "2026",
    status: "Active research",
    layout: "narrow",
    visual: "modos",
    description:
      "An agent-controllable Android stack: observe the accessibility tree, reason locally, and act through a structured daemon and CLI. Verified end to end on an emulator, with an on-device Gemma loop and a path toward a custom ROM.",
    tags: ["Android", "Kotlin", "Gemma", "JSON-RPC", "Accessibility"],
    links: []
  },
  {
    number: "03",
    title: "Setu",
    type: "Desktop AI · Indic workflows",
    year: "2026",
    status: "Working prototype",
    layout: "narrow",
    visual: "setu",
    description:
      "An Indic AI desktop studio for the documents Indians actually work with. It reads scanned legal files, detects language, runs OCR and translation, and lets an agent orchestrate the workflow without pretending a demo is live.",
    tags: ["Tauri", "React", "Sarvam AI", "Agent tools", "Playwright"],
    links: []
  },
  {
    number: "04",
    title: "Love Made Edible",
    type: "Commerce platform · Bakery business",
    year: "2026",
    status: "In production",
    layout: "wide",
    visual: "image",
    visualClass: "lme",
    image: "assets/projects/lme.jpg",
    alt: "Love Made Edible interactive cake menu showing a red velvet cake",
    description:
      "A digital operating surface for a Bengaluru bakery: interactive menus, ordering journeys, consulting, learning content, analytics, and search-led discovery brought together as one evolving business system.",
    tags: ["Next.js", "Sanity", "Commerce", "Analytics", "SEO"],
    links: [{ label: "Visit Love Made Edible", url: "https://lovemadeedible.in" }]
  },
  {
    number: "05",
    title: "Cake Studio",
    type: "3D creative SaaS · Bakery operations",
    year: "2026",
    status: "Active build",
    layout: "wide",
    visual: "cake",
    description:
      "A browser-based 3D cake design studio for working bakers. Build multi-tier cakes, shape coatings, place decorations, create piping motifs, save versions, undo changes, and turn a visual design into an operational quote.",
    tags: ["React Three Fiber", "Next.js", "Three.js", "Postgres", "Better Auth"],
    links: []
  },
  {
    number: "06",
    title: "GoodWatch",
    type: "Recommendation system · Consumer product",
    year: "2026",
    status: "Pre-launch",
    layout: "narrow",
    visual: "goodwatch",
    description:
      "A movie recommendation system that starts with taste, mood, and streaming availability — not a popularity list. The engine combines intent classification, semantic retrieval, explainable lenses, and first-party preference signals.",
    tags: ["FastAPI", "pgvector", "Gemini", "BGE-M3", "OpenTelemetry"],
    links: []
  },
  {
    number: "07",
    title: "Ray",
    type: "Desktop assistant · Local workspace",
    year: "2026",
    status: "v0.3",
    layout: "narrow",
    visual: "image",
    visualClass: "ray",
    image: "assets/projects/ray.jpg",
    alt: "Ray desktop command center with telemetry, radar, tasks, weather, and activity panels",
    description:
      "A JARVIS-inspired desktop command center where chat, tasks, plans, weather, system telemetry, and Google tools live together. Widgets move freely and releases update through a signed channel.",
    tags: ["Tauri", "React", "TypeScript", "Local-first", "Tool use"],
    links: []
  },
  {
    number: "08",
    title: "ChaloChallan",
    type: "Civic technology · Public experiment",
    year: "2026",
    status: "Field experiment",
    layout: "narrow",
    visual: "image",
    visualClass: "chalochallan",
    image: "assets/projects/chalochallan.jpg",
    alt: "ChaloChallan launch graphic reading Report, Verify, Reward",
    description:
      "A citizen reporting experiment for traffic violations in Bengaluru. Evidence is checked, outcomes are tracked, reporters stay private, and rewards are tied to confirmed action rather than uploads.",
    tags: ["Next.js", "Verification", "Civic tech", "Privacy", "E2E tests"],
    links: [{ label: "Visit the experiment", url: "https://chalochallan.com" }]
  },
  {
    number: "09",
    title: "Pathways",
    type: "Developer infrastructure · Observability",
    year: "2026",
    status: "Prototype",
    layout: "full",
    visual: "image",
    visualClass: "pathways",
    image: "assets/projects/pathways.jpg",
    alt: "Pathways graph explorer tracing generated and edited images through a lineage graph",
    description:
      "Image lineage observability for generative systems. It records generation, edit, and variation flows as a searchable graph, with ingestion SDKs, asynchronous processing, OpenTelemetry support, and an operations UI.",
    tags: ["FastAPI", "Next.js", "React Flow", "Postgres", "OpenTelemetry"],
    links: [{ label: "Open Pathways demo", url: "https://pathways-web-production.up.railway.app" }]
  }
];

export const buildLog = [
  {
    year: "2026",
    title: "Personal Finance Agent",
    description: "A local-first finance assistant over Actual Budget, available through web, Telegram, and voice notes.",
    status: "Private build"
  },
  {
    year: "2026",
    title: "StoreChef",
    description: "Multi-tenant inventory and kitchen-store operations for hospitals, with a Go API and Postgres source of truth.",
    status: "Phase 1"
  },
  {
    year: "2026",
    title: "Mint",
    description: "AI recruiting platform for job workflows, candidate matching, interviews, invitations, and reporting.",
    status: "Product build"
  },
  {
    year: "2026",
    title: "Kite Trading Agent",
    description: "File-based market research and signal agent with explicit risk gates, journaling, and live execution disabled by default.",
    status: "Research"
  },
  {
    year: "2026",
    title: "Route Weather Planner",
    description: "Driving-route planning with hourly Open-Meteo forecasts mapped to the journey.",
    status: "Prototype"
  },
  {
    year: "2026",
    title: "Bakery Calculator",
    description: "Operational dashboards and calculators for the Love Made Edible business stack.",
    status: "Internal tool"
  },
  {
    year: "2026",
    title: "Hermes Agent",
    description: "Open-source contribution preventing email loops by rejecting non-allowlisted senders before dispatch.",
    status: "OSS contribution"
  }
];
