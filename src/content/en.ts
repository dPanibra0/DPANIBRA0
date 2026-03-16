import type { PortfolioContent } from "./types";

export const enContent: PortfolioContent = {
  locale: "en",
  meta: {
    title: "David Panibra | Software Engineer",
    description:
      "Software engineer specialized in backend systems and microservices architecture. I design end-to-end enterprise platforms based on business domain analysis, from user interaction to data persistence.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    //{ label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Process", href: "#process" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ],
  overlines: {
    about: "ABOUT",
    stack: "TECHNICAL STACK",
    projects: "FEATURED PROJECTS",
    experience: "PROFESSIONAL EXPERIENCE",
    process: "WORK PROCESS",
    philosophy: "ENGINEERING PHILOSOPHY",
    contact: "CONTACT",
  },
  hero: {
    eyebrow: "Domain-driven software engineering",
    availability: "Available for projects - Remote",
    title: "Scalable Enterprise System Design",
    subtitle:
      "Software engineer focused on domain analysis and backend architecture, building complete systems from user interaction to business logic and data persistence.",
    message:
      "Specialized in resilient backend architectures with Java and microservices, designed for corporate environments where reliability, data consistency, and controlled system evolution are critical.",
    ctaPrimary: "Contact",
    ctaSecondary: "Download CV",
    stats: [
      { value: "5+", label: "Years building enterprise software" },
      { value: "4", label: "Technology companies" },
      { value: "3", label: "Industry sectors (logistics, energy, pensions)" },
      { value: "2", label: "International enterprise systems" },
    ],
  },
  about: {
    title: "About",
    headingPrimary: "Software engineering for",
    headingSecondary: "complex enterprise systems",
    paragraphs: [
      "Software engineer focused on understanding business domains and translating their processes, rules, and operations into clear and maintainable software systems.",
      "I design end-to-end solutions, from product user interaction to backend architecture, business logic, and data persistence.",
      "My specialization is enterprise backend development with Java and microservices, building resilient services, system integrations, and data models that accurately reflect business logic.",
    ],
    cards: [
      {
        title: "Domain Analysis",
        subtitle: "Processes · Rules · Modeling",
        icon: "globe",
      },
      {
        title: "Systems Architecture",
        subtitle: "Microservices · APIs · Integration",
        icon: "database",
      },
      {
        title: "Resilient Backend",
        subtitle: "Java · Spring Boot · Oracle",
        icon: "shield",
      },
      {
        title: "Enterprise Systems",
        subtitle: "Consistency · Scalability · Maintainability",
        icon: "backend",
      },
    ],
  },
  stack: {
    title: "Technical Capabilities",
    headingPrimary: "Technologies applied to",
    headingSecondary: "real enterprise systems",
    intro:
      "Tools, frameworks, and practices I use to analyze, design, and build end-to-end enterprise systems, from business logic to persistence and production operations.",
    categories: [
      {
        category: "Backend and architecture",
        icon: "code",
        items: [
          { name: "Java 8-21", hint: "Enterprise · LTS" },
          { name: "Spring Boot", hint: "Microservices · REST APIs" },
          { name: "JPA / Hibernate", hint: "Persistence · ORM" },
          { name: "REST APIs", hint: "Design · Integration" },
          { name: "Spring Batch", hint: "High-volume processing" },
        ],
      },
      {
        category: "Data and persistence",
        icon: "db",
        items: [
          { name: "Oracle", hint: "Enterprise database" },
          { name: "Advanced SQL", hint: "Queries · Performance" },
          { name: "Relational modeling", hint: "Domain-driven structures" },
          {
            name: "Query optimization",
            hint: "Indexes · Execution plans",
          },
        ],
      },
      {
        category: "Delivery and infrastructure",
        icon: "gear",
        items: [
          { name: "Docker", hint: "Containers · Deployment" },
          { name: "Git", hint: "Version control" },
          { name: "Jenkins", hint: "Pipelines · Automation" },
          { name: "CI/CD", hint: "Build · Delivery" },
          { name: "Azure", hint: "Cloud environments" },
        ],
      },
      {
        category: "Testing and quality",
        icon: "shield",
        items: [
          { name: "JUnit", hint: "Unit testing" },
          { name: "Spock", hint: "BDD · Groovy" },
          { name: "Unit testing", hint: "Validation · Coverage" },
          { name: "Integration testing", hint: "Flows · Services" },
          { name: "SonarQube", hint: "Code quality" },
        ],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    intro:
      "Each project reflects technical decisions focused on operational continuity, risk control, and measurable business outcomes.",
    items: [
      {
        title: "Corporate logistics tracking platform",
        problem:
          "The business needed reliable traceability of logistics events across multiple actors and external systems with asynchronous states.",
        architecture:
          "Modular architecture based on Spring Boot services, Oracle persistence, and transactional flow orchestration with stage-based confirmations.",
        stack: "Java 21, Spring Boot, JPA/Hibernate, Oracle, REST APIs, Docker",
        challenges:
          "Consistency across distributed events, operation idempotency, and tolerance to failures in external integrations.",
        solution:
          "Retry policies with backoff, correlation records, and confirmation mechanisms were implemented to prevent duplicate and lost events.",
        impact:
          "Improved operational stability and reduced incidents in logistics tracking during high-demand cycles.",
      },
      {
        title: "High-volume financial batch system",
        problem:
          "The financial operation required processing large nightly volumes within strict execution windows.",
        architecture:
          "Batch pipeline with Spring Batch, partitioned lots, robust transaction control, and job/step execution traceability.",
        stack: "Java 17, Spring Batch, Oracle, Advanced SQL, Linux, CI/CD",
        challenges:
          "Integrity control for reprocessing, batch-level error handling, and bottlenecks in high-cost queries.",
        solution:
          "Critical queries were optimized, commit/rollback strategies were improved, and consistency validation was added before and after processing.",
        impact:
          "Better execution times and fewer operational errors in recurring financial closing processes.",
      },
    ],
  },
  experience: {
    title: "Professional Experience",
    headingPrimary: "Track record in",
    headingSecondary: "high-impact corporate environments",
    items: [
      {
        role: "Backend Engineer",
        company: "LATAMTECH",
        period: "2025 - 2026",
        workMode: "Full-time · Remote",
        context: "International logistics integration - Olva Courier",
        highlights: [
          "Analysis of the logistics domain and definition of system integration for registration and synchronization of people, packages, waybills, and transactions.",
          "Designed and developed two Java 21 microservices from scratch using hexagonal architecture to integrate the external logistics platform with Olva's core system.",
          "Technical coordination with teams from both platforms to define data flows, integration contracts, and validate behavior before production.",
          "Designed and evolved the data model, including creation of new tables and updates to Oracle stored procedures to support the new integration.",
        ],
        technologies: [
          "Java 21",
          "Spring Boot",
          "Microservices",
          "Hexagonal Architecture",
          "REST APIs",
          "Oracle",
          "SQL",
          "Spock",
          "Groovy",
          "Azure",
        ],
      },
      {
        role: "Center Developer",
        company: "NTT DATA",
        period: "2020 - 2025",
        workMode: "Full-time · Hybrid",
        context: "International projects - Cepsa (Spain) · Habitat AFP (Chile)",
        highlights: [
          "Started as a full stack developer, building web components and backend services for enterprise platforms.",
          "Evolved to frontend technical leadership in the Cepsa project, coordinating development of React widgets integrated into the company's OpenText platform.",
          "Designed and implemented BFF APIs in Java and Spring Boot to expose information from SAP enterprise systems to the frontend.",
          "Developed backend microservices for Habitat AFP's pension management system, including batch processing modules for high-volume financial files sent by government entities.",
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Batch",
          "Microservices",
          "React",
          "REST APIs",
          "Kubernetes",
          "Oracle",
          "SQL",
          "SAP Integration",
          "Git",
        ],
      },
      {
        role: "Frontend Developer",
        company: "MULTIPLICA",
        period: "2020",
        workMode: "Full-time · Remote",
        context: "Participation in the development of the new corporate landing page.",
        highlights: [
          "Implemented visual components and web animations for the new corporate website.",
          "Developed interactive sections to improve user experience.",
          "Collaborated with the design team to implement modern and responsive interfaces.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Vue", "Animation Libraries"],
      },
      {
        role: "Full Stack Developer",
        company: "ALMA SOFTWARE",
        period: "2019 - 2020",
        workMode: "Full-time · Remote",
        context:
          "Developed e-commerce solutions during the pandemic, focused on helping stores digitize their operations.",
        highlights: [
          "Built online stores for businesses that needed to migrate to digital commerce.",
          "Implemented catalog, order, and basic product management functionalities.",
          "Quickly adapted solutions to help businesses maintain continuity during lockdown periods.",
        ],
        technologies: ["Laravel", "Angular", "MySQL", "Bootstrap"],
      },
    ],
  },
  process: {
    title: "Work Process",
    headingPrimary: "From analysis to",
    headingSecondary: "production systems",
    intro:
      "A structured methodology that ensures quality, predictability, and measurable outcomes in every engagement.",
    steps: [
      {
        step: "Step 1",
        title: "Technical and domain analysis",
        description:
          "Understanding business context, operational risks, and functional goals before defining solutions.",
      },
      {
        step: "Step 2",
        title: "Enterprise architecture design",
        description:
          "Design aligned with enterprise standards, scalability, and technical governance.",
      },
      {
        step: "Step 3",
        title: "Quality-first implementation",
        description:
          "Development with testing, documentation, and maintainability criteria from the beginning.",
      },
      {
        step: "Step 4",
        title: "Optimization and continuous improvement",
        description:
          "Monitoring, performance tuning, and controlled evolution to sustain long-term stability.",
      },
    ],
  },
  philosophy: {
    title: "Technical Philosophy",
    headingPrimary: "Principles behind",
    headingSecondary: "every architecture decision",
    intro:
      "They are not just best practices. They are commitments that define the quality of every delivered system.",
    principles: [
      {
        icon: "domain",
        title: "Domain-Driven Architecture",
        description:
          "Systems that mirror business reality. Every technical decision stays aligned with domain models to improve evolution and maintainability.",
      },
      {
        icon: "code",
        title: "Clean and Maintainable Code",
        description:
          "Readable, structured, and documented code. It reduces technical debt and improves collaboration across distributed engineering teams.",
      },
      {
        icon: "shield",
        title: "Stability and Consistency",
        description:
          "Data integrity as a non-negotiable priority. Robust transactions and active prevention of inconsistent states in critical systems.",
      },
      {
        icon: "scale",
        title: "Scalable Systems",
        description:
          "Architectures designed to grow with business demand. Capacity can increase without structural redesign.",
      },
      {
        icon: "resilience",
        title: "Resilience by Design",
        description:
          "Failure-aware engineering with recovery, retries, and graceful degradation to sustain service continuity under stress.",
      },
      {
        icon: "global",
        title: "International Standards",
        description:
          "Engineering aligned with global enterprise practices, including governance frameworks, audits, and compliance controls.",
      },
    ],
  },
  contact: {
    title: "Contact",
    headlineTop: "Let's talk about",
    headlineBottom: "your next project",
    subtitle:
      "Corporate collaborations, international opportunities, and remote work.",
    supportTitle: "International Remote Work",
    supportText:
      "Experience with distributed teams across multiple time zones, with strong adaptability to global corporate cultures and methodologies.",
    links: [
      {
        label: "Email",
        value: "dpanibra0@gmail.com",
        href: "mailto:dpanibra0@gmail.com",
        sublabel: "Reply within 24h",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/david-panibra",
        href: "https://www.linkedin.com/in/david-panibra-1bb87a1a4/",
        sublabel: "Full professional profile",
      },
      {
        label: "GitHub",
        value: "github.com/dPanibra0",
        href: "https://github.com/dPanibra0",
        sublabel: "Projects and contributions",
      },
    ],
    availability: "Available for projects - Remote",
  },
  footer: {
    copyright: "2026 Backend Portfolio. All rights reserved.",
    githubUrl: "https://github.com/dPanibra0",
    linkedinUrl: "https://linkedin.com",
  },
};
