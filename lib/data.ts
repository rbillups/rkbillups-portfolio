export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Ask About My Work", href: "/ask" },
  { label: "Contact", href: "/#contact" },
] as const;

export const portfolioUrl = "https://rkbillups.com";
export const resumeUrl = "/resume/Reginald_KeyShawn_Billups_Resume.pdf";

export const profileLinks = {
  email: "mailto:rkbillups2@gmail.com",
  linkedin: "https://www.linkedin.com/in/rkbillups/",
  github: "https://github.com/rbillups",
  resume: resumeUrl,
} as const;

export const runitRepoUrl = "https://github.com/rbillups/runit";
export const runitCaseStudyId = "runit-case-study";

export const demibotRepoUrl = "https://github.com/rbillups/demibot";
export const demibotCaseStudyId = "demibot-case-study";
export const demibotPreviewImage = "/pictures/demibot.png";

export const docAutomationCaseStudyId = "document-automation-case-study";
export const docAutomationApproachId = "document-automation-approach";

export const facemaskCaseStudyId = "facemask-case-study";
export const facemaskOverviewImage = "/pictures/overview.png";
export const facemaskSampleGridImage = "/pictures/sample-grid.png";

export const runitScreenshots = [
  {
    src: "/pictures/runit-1.PNG",
    alt: "NextUp court discovery screen showing nearby basketball courts",
    label: "Court discovery",
  },
  {
    src: "/pictures/runit-2.PNG",
    alt: "NextUp game details screen with RSVP player list",
    label: "Game details & RSVP",
  },
  {
    src: "/pictures/runit-3.PNG",
    alt: "NextUp authentication and sign-in flow",
    label: "Auth flow",
  },
  {
    src: "/pictures/runit-4.PNG",
    alt: "NextUp user profile and court activity view",
    label: "Profile & activity",
  },
] as const;

export const projects = [
  {
    featured: true,
    isSanitized: true,
    eyebrowLabel: "Sanitized Engineering Case Study",
    subtitle: "Internal workflow concepts presented with fictional data",
    category:
      "Python Automation · Requirements Engineering · Document Generation",
    title: "Enterprise Requirements-to-Document Automation Workflow",
    description:
      "A Python-based automation workflow that transforms structured requirements data into consistent, template-driven engineering documents and repeatable validation artifacts.",
    cardDisclaimer:
      "Sanitized internal case study — not open-source, publicly deployable, or independently hosted.",
    tech: [
      "Python",
      "Object-Oriented Design",
      "PyTest",
      "Document Generation",
      "Requirements Traceability",
      "Configuration-Driven Workflows",
      "Validation Automation",
    ],
    hideGithub: true,
    caseStudyUrl: `#${docAutomationCaseStudyId}`,
    secondaryCaseStudyUrl: `#${docAutomationApproachId}`,
    caseStudyScroll: true,
    useWorkflowVisual: true,
    diagram: "docs" as const,
  },
  {
    featured: true,
    isPublicRepo: true,
    category: "Mobile Product Engineering · Location-Based Systems",
    title: "NextUp — Pickup Basketball Coordination App",
    subtitle: "React Native · Expo · Supabase",
    description:
      "A location-based React Native app that helps basketball players discover nearby courts, organize pickup games, and coordinate attendance.",
    tech: [
      "Nearby court discovery",
      "Location-based search",
      "Game creation",
      "RSVP coordination",
      "Real-time attendance updates",
      "Court activity visibility",
      "Authentication and profile workflows",
    ],
    githubUrl: runitRepoUrl,
    caseStudyUrl: `#${runitCaseStudyId}`,
    caseStudyScroll: true,
    diagram: "runit" as const,
  },
  {
    featured: true,
    isPublicRepo: true,
    eyebrowLabel: "Python Automation",
    category: "Python Automation · Event-Driven Systems",
    title: "Discord Community Engagement Automation Bot",
    description:
      "A configurable Python Discord bot that automates voice-channel activity alerts, scheduled motivation, daily challenges, and curated learning content for online communities.",
    tech: [
      "Python",
      "discord.py",
      "Scheduled Tasks",
      "JSON Content Data",
      "Environment Configuration",
      "Heroku Worker Deployment",
    ],
    githubUrl: demibotRepoUrl,
    githubLabel: "View Repository",
    caseStudyUrl: `#${demibotCaseStudyId}`,
    caseStudyScroll: true,
    diagram: "demibot" as const,
    previewImage: {
      src: demibotPreviewImage,
      alt: "Discord community engagement automation bot overview",
    },
  },
  {
    featured: true,
    featuredCompact: true,
    eyebrowLabel: "Computer Vision / ML",
    category: "Computer Vision · Machine Learning",
    title: "FaceMask Vision Classifier",
    subtitle: "Originally developed in 2022 · Modernized in 2026",
    description:
      "A TensorFlow/Keras convolutional neural network for binary face-mask image classification, combining image preprocessing, CNN training, held-out evaluation, and single-image inference.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "Computer Vision",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "PyTest",
    ],
    hideGithub: true,
    repoComingSoon: true,
    repoComingSoonLabel: "Repository Coming Soon",
    caseStudyUrl: `#${facemaskCaseStudyId}`,
    caseStudyScroll: true,
    historicalResultLabel:
      "Historical notebook result: 97.38% test accuracy",
    historicalResultDisclaimer:
      "Historical result from the original notebook; refactored evaluation should be rerun with the dataset.",
    previewImage: {
      src: facemaskOverviewImage,
      alt: "FaceMask Vision Classifier project overview",
    },
    diagram: "facemask" as const,
  },
  {
    inDevelopment: true,
    category: "DevOps",
    title: "CI/CD-Ready Python Service Template",
    description:
      "Dockerized Python backend template with tests, linting, CI pipeline examples, environment variables, and deployment-ready structure.",
    tech: ["Python", "Docker", "GitHub Actions", "pytest"],
    githubUrl: profileLinks.github,
    caseStudyUrl: "#",
    diagram: "cicd" as const,
  },
] as const;

export const runitCaseStudy = {
  opening:
    "NextUp is a mobile app designed to make pickup basketball easier to organize by helping players discover nearby courts, create games, RSVP, and see planned activity at each location.",
  problem: {
    title: "The problem",
    body: "Pickup basketball is still coordinated through group chats, last-minute texts, and guesswork. Players waste time trying to figure out which courts have games forming, who plans to attend, and whether a session is worth the trip. The core problem is coordination friction — not a lack of interest.",
  },
  solution: {
    title: "The solution",
    body: "NextUp is a React Native mobile app built to reduce that friction. Players can discover courts through foreground GPS or manual city/ZIP search, create games at a specific court, and RSVP so everyone can coordinate attendance and see planned player activity before they leave. The product goal is practical coordination — not social feed mechanics or live public launch claims.",
  },
  architecture: {
    title: "Architecture",
    points: [
      "Expo mobile client handles navigation, auth sessions, court discovery UI, game creation, and RSVP interactions.",
      "Supabase provides Auth, Postgres persistence, Row Level Security, and Realtime channels for live RSVP updates.",
      "Supabase Edge Functions proxy Google Places requests server-side so API keys never ship in the client bundle.",
      "Postgres tables model courts, games, RSVPs, and user-linked activity with RLS enforcing per-user access boundaries.",
    ],
  },
  engineering: {
    title: "Engineering decisions",
    decisions: [
      {
        label: "Foreground GPS + manual search",
        detail:
          "Court discovery supports both device location while the app is in use and explicit city/ZIP entry, giving players control without background tracking overhead.",
      },
      {
        label: "Auth-gated actions with deferred completion",
        detail:
          "Game creation and RSVP flows require authentication. If a user initiates an action before signing in, the app preserves intent and completes the action after sign-in instead of forcing a restart.",
      },
      {
        label: "Realtime RSVP updates",
        detail:
          "Supabase Realtime keeps game attendance visible as players join or drop, so coordination data stays current without manual refresh loops.",
      },
      {
        label: "Server-side Places integration",
        detail:
          "Google Places lookups run through Edge Functions, keeping third-party credentials off the client and centralizing request validation.",
      },
    ],
  },
  privacy: {
    title: "Privacy and security decisions",
    points: [
      "No background location tracking — GPS is used in the foreground during active discovery only.",
      "Manual check-in instead of geofencing, avoiding continuous location inference.",
      "Row Level Security on Supabase tables so users only read and write data they are authorized to access.",
      "API keys for Google Places stored server-side behind Edge Functions, not embedded in the mobile app.",
    ],
  },
  disclaimer:
    "NextUp is a public development repository and portfolio project. It is not listed in the App Store, not marketed as live for public users, and not presented as a fully production-deployed consumer product.",
} as const;

export const demibotCaseStudy = {
  problem: {
    title: "The problem",
    body: "Communities often rely on repeated manual reminders, moderation effort, and ad hoc updates to keep members engaged and informed. DemiBot was built to automate recurring engagement workflows while keeping the system configurable and lightweight.",
  },
  solution: {
    title: "The solution",
    body: "A configurable Discord automation service that reacts to community events and delivers scheduled motivation, challenges, voice-channel notifications, and curated learning content.",
  },
  capabilities: [
    "Detects and reports voice-channel join and leave activity",
    "Delivers scheduled motivational quotes and daily challenges",
    "Serves curated learning and motivational content",
    "Uses environment variables for bot tokens and channel configuration",
    "Rotates content through structured JSON datasets",
    "Runs as a background worker deployment rather than a traditional web application",
  ],
  engineering: {
    title: "Key engineering decisions",
    decisions: [
      {
        label: "Event-driven listeners",
        detail:
          "Voice-channel join and leave activity is handled through Discord event listeners so alerts stay tied to real community activity.",
      },
      {
        label: "Background scheduled tasks",
        detail:
          "Recurring motivational quotes, daily challenges, and curated content run on scheduled tasks without manual intervention.",
      },
      {
        label: "Environment-based configuration",
        detail:
          "Bot tokens and channel routing are loaded from environment variables so deployment settings stay separate from application logic.",
      },
      {
        label: "JSON content separation",
        detail:
          "Structured JSON datasets hold motivational and learning content so libraries can evolve without rewriting core bot logic.",
      },
      {
        label: "Worker-process deployment",
        detail:
          "A Procfile-backed worker model supports persistent bot operation rather than a traditional request-response web application.",
      },
      {
        label: "Public-safe repository structure",
        detail:
          "A .env.example template documents required configuration while local secret files remain excluded from version control.",
      },
    ],
  },
  security: {
    title: "Security and configuration",
    points: [
      "Sensitive values such as bot tokens are configured through environment variables rather than hard-coded in source files.",
      "The public repository includes a .env.example template that documents required configuration without exposing secrets.",
      "Local environment files containing real credentials are excluded from version control.",
      "Channel routing and bot behavior are driven by configuration so the same codebase can support different deployment contexts.",
    ],
  },
} as const;

export const documentAutomationCaseStudy = {
  opening:
    "A sanitized case study showing how I approach Python automation, object-oriented architecture, template-driven generation, and repeatable validation workflows for requirements-heavy engineering environments.",
  confidentiality:
    "This case study intentionally uses fictional names, examples, and workflow representations. No proprietary code, customer data, requirements data, templates, or internal artifacts are displayed.",
  problem: {
    title: "The problem",
    body: "Engineering teams often rely on manually assembling documents from structured requirements data, approved templates, and configuration-specific information. Manual workflows can create formatting inconsistencies, repetitive effort, and difficulty reproducing validation evidence across document variations.",
  },
  solution: {
    title: "The solution",
    body: "A Python automation workflow that reads structured inputs, applies configurable generation rules, populates approved document structures, and produces standardized output artifacts through reusable object-oriented components.",
  },
  architecture: {
    title: "System design",
  },
  oop: {
    title: "Object-oriented architecture",
    points: [
      "A shared base document abstraction centralizes common behavior such as loading context, validation setup, rendering, output handling, and logging.",
      "Specialized document handlers extend common behavior for different document structures and workflow needs.",
      "Helper services isolate responsibilities such as structured-data handling, table generation, configuration interpretation, and traceability support.",
      "This design reduces duplication and makes the workflow easier to extend and test.",
    ],
  },
  testing: {
    title: "Automated Validation with Targeted Manual Verification",
    body: "Designed a repeatable qualification and regression-testing workflow for document-generation automation. The approach used controlled structured inputs and automated comparison scripts to verify generated document content, while retaining targeted manual checks for output characteristics that require human review.",
    skills: [
      "PyTest",
      "Python Automation",
      "Structured Data Validation",
      "Regression Testing",
      "Test Procedure Design",
      "Qualification Support",
      "Document Generation",
      "Requirements Traceability",
    ],
    howItWorked: [
      {
        title: "Defined controlled test inputs",
        detail:
          "Created a controlled set of structured requirements data and reference exports representing the expected document content.",
      },
      {
        title: "Executed the generation workflow",
        detail:
          "Ran the Python automation workflow using approved templates and configuration inputs to produce standardized document outputs.",
      },
      {
        title: "Automated content comparison",
        detail:
          "Used Python-based validation scripts to compare authoritative structured source artifacts against tables and content produced in the generated document.",
      },
      {
        title: "Evaluated pass or mismatch conditions",
        detail:
          "The automated workflow recorded a pass when generated content aligned with expected reference data and flagged mismatches for investigation.",
      },
      {
        title: "Performed targeted manual checks",
        detail:
          "Used manual review for template replacement, visual formatting, deleted or changed content, and required output artifacts that were not appropriate for purely automated verification.",
      },
    ],
    manualReviewItems: [
      "Template placeholder replacement",
      "Output formatting and document presentation",
      "Removed or changed content verification",
      "Required generated artifact review",
    ],
    whyItMatters:
      "This approach made rollout and release-readiness more repeatable by pairing automated evidence with focused human review, rather than relying on manual document inspection alone.",
  },
  engineering: {
    title: "Engineering decisions",
    points: [
      "Configuration-driven behavior to support workflow variation without duplicating core logic",
      "Object-oriented abstractions to share common document-generation behavior",
      "Separation of input parsing, generation logic, and output validation",
      "Automated tests with PyTest to improve regression confidence",
      "Repeatable test procedures designed to support qualification and release-readiness activities",
      "Clear boundaries between reusable utility services and document-specific logic",
    ],
  },
  demonstrates: {
    title: "What this demonstrates",
    skills: [
      "Python Automation",
      "Object-Oriented Design",
      "PyTest",
      "Document Generation",
      "Requirements Traceability",
      "Configuration Management",
      "Validation Workflows",
      "Engineering Tooling",
    ],
  },
  closingConfidentiality:
    "All workflow visuals, examples, and labels in this case study are intentionally generalized and fictionalized for public portfolio use. This work is not open-source, publicly deployable, or represented as a live product offering.",
} as const;

export const facemaskCaseStudy = {
  opening:
    "A computer-vision learning project originally built in 2022 during my AI concentration and modernized in 2026 with improved evaluation logic, reusable project structure, and reproducibility-focused engineering updates.",
  history: {
    original2022: {
      title: "2022 — Original Implementation",
      points: [
        "Built the original TensorFlow/Keras notebook",
        "Loaded labeled image datasets",
        "Trained a binary CNN",
        "Used early stopping and held-out test evaluation",
        "Added confusion-matrix analysis and image inference",
      ],
    },
    modernization2026: {
      title: "2026 — Engineering Modernization",
      points: [
        "Corrected sigmoid threshold and confusion-matrix logic",
        "Reorganized notebook code into reusable Python modules",
        "Added train.py, evaluate.py, and predict.py scripts",
        "Added centralized configuration and lightweight PyTest coverage",
        "Removed Colab-specific paths from reusable code",
      ],
    },
  },
  dataset: {
    title: "Dataset and Preprocessing",
    points: [
      "Separate Train, Validation, and Test folders",
      "Two labeled classes: WithMask and WithoutMask",
      "Historical split: 10,000 train, 800 validation, 992 test images",
      "Image resizing to 256 × 256",
      "Consistent normalization and batched loading",
    ],
    sampleCaption:
      "Example labeled images from the original dataset workflow, illustrating the WithMask and WithoutMask classes.",
  },
  architecture: {
    title: "Model Architecture",
    flow: [
      "Image Input",
      "Conv2D + MaxPooling",
      "Conv2D + MaxPooling",
      "Conv2D + MaxPooling",
      "Flatten",
      "Dense(256)",
      "Sigmoid Output",
    ],
    classOrdering:
      "The sigmoid output represents the probability of the WithoutMask class under the original class ordering: 0 = WithMask, 1 = WithoutMask.",
  },
  training: {
    title: "Training and Evaluation",
    points: [
      "Adam optimizer",
      "Binary cross-entropy loss",
      "Early stopping based on validation loss",
      "Separate held-out test evaluation",
      "Historical test accuracy: 97.38%",
    ],
    note: "This metric was produced by the original notebook. The corrected threshold-based evaluation should be rerun with the original dataset to produce an updated confusion matrix and reproducible report.",
  },
  engineeringFix: {
    title: "Engineering Fix and Modernization",
    body: "The original notebook used argmax on a single sigmoid output during post-training prediction analysis. In the modernization, prediction handling was corrected to use a 0.5 probability threshold, enabling valid binary labels and confusion-matrix analysis. This was an engineering improvement discovered during refactoring — not a replacement of the original 2022 machine-learning work.",
  },
  responsibleUse: {
    title: "Responsible Use",
    body: "This is a learning and portfolio computer-vision project. Performance may vary based on image quality, lighting, image diversity, camera angle, and class balance. It is not intended for medical, surveillance, enforcement, or safety-critical decisions.",
  },
  skills: {
    title: "Skills Demonstrated",
    items: [
      "Python Automation",
      "TensorFlow",
      "Keras",
      "CNN Design",
      "Image Preprocessing",
      "Binary Classification",
      "Model Evaluation",
      "PyTest",
      "Computer Vision",
    ],
  },
} as const;

export const skillGroups = [
  {
    title: "Backend & Automation",
    skills: [
      "Python",
      "Object-Oriented Design",
      "APIs",
      "Data Processing",
      "Script Automation",
      "PyTest",
      "Requirements-Driven Workflows",
    ],
  },
  {
    title: "DevOps & Quality",
    skills: [
      "GitLab CI/CD",
      "Docker",
      "Automated Testing",
      "Git",
      "GitHub Actions",
      "Configuration Management",
      "Validation Workflows",
    ],
  },
  {
    title: "Product & Platform Engineering",
    skills: [
      "React Native",
      "Expo",
      "Supabase",
      "TypeScript",
      "PostgreSQL",
      "Event-Driven Automation",
      "TensorFlow / Keras",
    ],
  },
] as const;

export const contactLinks = [
  { label: "Email", href: profileLinks.email, icon: "mail" as const },
  { label: "LinkedIn", href: profileLinks.linkedin, icon: "linkedin" as const },
  { label: "GitHub", href: profileLinks.github, icon: "github" as const },
  {
    label: "Resume",
    href: profileLinks.resume,
    icon: "file" as const,
    external: true,
  },
] as const;
