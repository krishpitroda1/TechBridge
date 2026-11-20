export const products = [
  {
    id: "clinicall",
    name: "CliniCAll",
    tagline: "Connect to Care Instantly",
    category: "Healthcare SaaS",
    badge: "Live SaaS Platform",
    target: "Doctors, polyclinics, private practices, and small healthcare providers",
    description: "Clinic management SaaS engineered for doctors, receptionists, and healthcare teams. Streamlines patient appointments, digital EMR, smart prescriptions, queue management, and automated WhatsApp patient notifications.",
    websiteUrl: "https://clinicall.techbridge.website",
    metrics: [
      { label: "Patient Consults", value: "50,000+" },
      { label: "No-Show Drop", value: "-42%" },
      { label: "Rx Generation", value: "< 45 sec" }
    ],
    highlights: [
      "Smart Appointment Scheduling & Queue Management",
      "Digital EMR & Longitudinal Patient Medical History",
      "1-Click WhatsApp Reminders & Digital Prescriptions",
      "Billing, Payments & Diagnostic Lab Integrations",
      "Multi-Doctor & Multi-Clinic Tele-consultation Support"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "HIPAA-ready Encryption"],
    demoType: "clinic",
    color: "#0284c7",
    colorLight: "#e0f2fe",
    accentColor: "sky"
  },
  {
    id: "chitra-bharat",
    name: "Chitra Bharat",
    tagline: "Free Indian Images, Videos & Music",
    category: "Media & Creative Assets",
    badge: "Active Platform",
    target: "Creators, graphic designers, marketing agencies, publishers, educators, and businesses",
    description: "An authentic, India-first media stock and creative platform celebrating regional culture, festivals, traditions, and everyday Indian life. Offering thousands of high-resolution photographs, 4K video clips, and royalty-free traditional and contemporary music.",
    websiteUrl: "https://chitrabharat.techbridge.website",
    metrics: [
      { label: "Curated Indian Assets", value: "35,000+" },
      { label: "Regional Categories", value: "28 States" },
      { label: "Commercial License", value: "100% Free" }
    ],
    highlights: [
      "Curated High-Res Photography Across 28+ Indian States",
      "4K Ultra-HD Video B-Rolls, Drone Shots & Festival Reels",
      "Authentic Indian Folk, Classical & Ambient Audio Library",
      "Commercial Use Clearance for Global Brands & Designers",
      "Community Contributor Portal with Creator Royalties"
    ],
    techStack: ["React", "FastAPI", "AWS S3 / CloudFront", "AI Image Tagging", "ElasticSearch"],
    demoType: "media",
    color: "#ea580c",
    colorLight: "#ffedd5",
    accentColor: "orange"
  },
  {
    id: "data-sandook",
    name: "Data Sandook",
    tagline: "Modern B2B CRM cum Lead Generation Platform",
    category: "B2B SaaS & CRM",
    badge: "Enterprise SaaS",
    target: "B2B sales teams, growth agencies, founders, enterprise sales reps, and outreach specialists",
    description: "Modern B2B sales intelligence CRM and automated prospecting engine. Combines verified decision-maker discovery with visual sales pipelines, enriched firmographic data, and multi-channel outreach cadences to accelerate revenue generation.",
    websiteUrl: "https://datasandook.techbridge.website",
    metrics: [
      { label: "Verified B2B Leads", value: "10M+" },
      { label: "Data Accuracy", value: "98.4%" },
      { label: "Pipeline Velocity", value: "3.2x" }
    ],
    highlights: [
      "Verified B2B Decision-Maker Database & Email Verification",
      "Visual Kanban Sales Pipeline with Custom Deal Stages",
      "Automated Multi-Touch Email & WhatsApp Sequences",
      "Company Firmographics, Tech Stack & Hiring Intent Data",
      "Chrome Extension for 1-Click LinkedIn Prospecting"
    ],
    techStack: ["Next.js", "Python", "MongoDB", "Email Deliverability Engine", "Redis"],
    demoType: "crm",
    color: "#2563eb",
    colorLight: "#dbeafe",
    accentColor: "blue"
  },
  {
    id: "digital-play",
    name: "Digital Play",
    tagline: "Omni-Channel Marketing & CPaaS Integration Suite",
    category: "MarTech & CPaaS",
    badge: "CPaaS Platform",
    target: "SMEs, digital marketing agencies, D2C brands, and enterprise marketing teams",
    description: "Omni-channel marketing platform combining multi-channel social media publishing with carrier-grade CPaaS capabilities — Google RCS, WhatsApp Business API, SMS, Voice broadcasting, and Email campaigns from a single unified workspace.",
    websiteUrl: "https://digitalplay.techbridge.website",
    metrics: [
      { label: "Monthly CPaaS Volume", value: "25M+" },
      { label: "Delivery Uptime", value: "99.98%" },
      { label: "Open Rate via RCS", value: "78%" }
    ],
    highlights: [
      "Interactive Google RCS Messaging with Rich Action Cards & Carousels",
      "Official WhatsApp Business Cloud API & Smart Bot Flows",
      "Multi-carrier A2P Bulk SMS with Intelligent Fallback Routing",
      "Unified Social Media Scheduler & Content Calendar",
      "End-to-End Campaign Attribution & Conversion Funnel Analytics"
    ],
    techStack: ["Node.js Microservices", "Google RCS API", "Meta Graph API", "Apache Kafka", "ClickHouse"],
    demoType: "cpaas",
    color: "#dc2626",
    colorLight: "#fee2e2",
    accentColor: "red"
  },
  {
    id: "khatavahi",
    name: "Khatavahi",
    tagline: "Simple Accounting & Digital Ledger for Bharat's MSMEs",
    category: "FinTech & MSME",
    badge: "MSME FinTech",
    target: "Kirana stores, retailers, small traders, service businesses, distributors, and MSMEs",
    description: "Zero-friction digital ledger and smart accounting tool engineered for Bharat's small business owners. Replaces physical bahi-khata books with automated credit tracking, WhatsApp payment links, UPI reconciliation, and instant GST invoices.",
    websiteUrl: "https://khatavahi.techbridge.website",
    metrics: [
      { label: "Udhar Recovered", value: "₹18 Cr+" },
      { label: "Payment Speedup", value: "3x Faster" },
      { label: "Active Merchants", value: "15,000+" }
    ],
    highlights: [
      "1-Tap Customer & Supplier Credit (Udhar / Jama) Tracking",
      "Automated WhatsApp Payment Reminders with Free UPI Links",
      "Quick GST & Non-GST Thermal Invoicing and Print Receipts",
      "Multi-Lingual UI (Hindi, Gujarati, Marathi, Tamil, English)",
      "Daily Cashbook, Profit/Loss Statements & Stock Inventory"
    ],
    techStack: ["React Native", "Next.js", "SQLite Offline-first", "UPI Gateway", "AWS Lambdas"],
    demoType: "ledger",
    color: "#059669",
    colorLight: "#d1fae5",
    accentColor: "emerald"
  },
  {
    id: "gympulse",
    name: "GymPulse",
    tagline: "The Ultimate Companion for Every Gym Buff & Fitness Journey",
    category: "Fitness & Wellness",
    badge: "Mobile & Web App",
    target: "All going to Gym, bodybuilding enthusiasts, personal trainers, or working out at home",
    description: "High-performance training log and workout companion. Features progressive overload tracking, customizable home/gym workout splits, calorie and macro nutrient calculator, 3D muscle engagement heat maps, and personal record progression.",
    websiteUrl: "https://gympulse.techbridge.website",
    metrics: [
      { label: "Exercises Catalog", value: "450+" },
      { label: "Workouts Tracked", value: "120,000+" },
      { label: "PR Tracking", value: "100% Accurate" }
    ],
    highlights: [
      "Intelligent Set, Rep & Weight Progressive Overload Logger",
      "Pre-built PPL, Upper/Lower, Bro-Splits & Home Bodyweight Routines",
      "3D Interactive Muscle Engagement & Fatigue Recovery Heat Map",
      "Macro & Calorie Diet Logger with Indian Food Database",
      "Rest Timer, 1-Rep Max Calculator & Strength Milestones"
    ],
    techStack: ["Flutter / React Native", "Next.js", "Firebase", "WebSockets", "Supabase"],
    demoType: "fitness",
    color: "#7c3aed",
    colorLight: "#ede9fe",
    accentColor: "violet"
  },
  {
    id: "turfspot",
    name: "TurfSpot",
    tagline: "Instant Ground Booking & Sports Community Networking",
    category: "Sports Tech & Community",
    badge: "Sports Network",
    target: "Students, amateur athletes, working professionals, and sports enthusiasts in Metros",
    description: "All-in-one sports turf discovery, booking, and player networking platform. Book box cricket turfs, football pitches, and badminton courts in 15 seconds, split the bill with friends, and discover local players to organize competitive pickup matches.",
    websiteUrl: "https://turfspot.techbridge.website",
    metrics: [
      { label: "Partner Venues", value: "250+ Turfs" },
      { label: "Matches Hosted", value: "18,000+" },
      { label: "Instant Booking", value: "15 Seconds" }
    ],
    highlights: [
      "Real-Time Slot Availability & Instant Turf Ground Booking",
      "Box Cricket, 5-a-side Football, Badminton & Tennis Venues",
      "'Find a Player' Matchmaking — Never Cancel a Game for Low Headcount",
      "Automated Split-the-Bill Payment Gateway for Teams",
      "Tournament Management, Live Scoreboards & Player Leaderboards"
    ],
    techStack: ["Next.js", "React Native", "PostGIS / Mapbox", "Razorpay Split API", "WebSockets"],
    demoType: "sports",
    color: "#16a34a",
    colorLight: "#dcfce7",
    accentColor: "green"
  },
  {
    id: "astroai",
    name: "AstroAI",
    tagline: "AI-Powered Vedic Astrology & Personalized Predictions",
    category: "AI & Consumer Tech",
    badge: "AI Platform",
    target: "Everyone seeking astrological guidance, daily horoscopes, Kundali analysis, and future predictions",
    description: "Next-generation astrology platform combining rigorous Vedic mathematical ephemeris with modern conversational AI. Generates instant Janam Kundali (birth charts), planetary transit forecasts, relationship compatibility, and provides a 24/7 conversational AI Vedic Astrologer.",
    websiteUrl: "https://astroai.techbridge.website",
    metrics: [
      { label: "Kundalis Generated", value: "250,000+" },
      { label: "Ephemeris Accuracy", value: "99.99%" },
      { label: "AI Consultations", value: "24/7 Live" }
    ],
    highlights: [
      "High-Precision Vedic Kundali Calculation (Lagna, Navamsha, D9, D10)",
      "24/7 Conversational 'Pandit AI' Astrologer in 10+ Languages",
      "Comprehensive Kundali Milan (Gun Milan & Ashtakoot Matching)",
      "Daily, Monthly & Yearly Planetary Transit & Dasha Predictions",
      "Personalized Gemstone, Mantra & Astrological Remedial Solutions"
    ],
    techStack: ["Next.js", "Swiss Ephemeris Core", "Gemini 1.5 Flash AI", "Tailwind CSS", "Redis"],
    demoType: "astro",
    color: "#c026d3",
    colorLight: "#fae8ff",
    accentColor: "fuchsia"
  }
];
