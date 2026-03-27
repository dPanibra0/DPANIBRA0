import type { PortfolioContent } from "./types";

export const enContent: PortfolioContent = {
  locale: "en",
  meta: {
    title: "David Panibra | Software Engineer",
    description:
      "Software engineer specialized in backend and microservices architecture. I design end-to-end enterprise systems based on business domain analysis, from user interaction to data persistence.",
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
      "Software engineer focused on analyzing business needs and designing complete systems, from user experience to the logic that processes and stores information consistently.",
    message:
      "Specialized in Java backend and microservices, building reliable systems that process critical information, integrate with other platforms, and evolve without compromising data consistency.",
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
      "Software engineer focused on understanding how the business works, including its processes and rules, and translating that into systems that solve real problems in a clear and maintainable way.",
      "I design end-to-end solutions, considering the full system flow: from user interaction with the application to how data is processed and stored.",
      "My specialization is Java backend and microservices, building services that process critical information, integrate with other systems, and maintain data consistency in enterprise environments.",
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
          "Consistency across distributed events, idempotency of operations, and tolerance to failures in external integrations.",
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
          "Batch pipeline with Spring Batch, batch partitioning, robust transaction control, and execution traceability by job/step.",
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
          "Logistics domain analysis to understand how shipments are recorded and processed, defining the integration between an external platform and the company's core system.",
          "Designed and developed two Java 21 microservices from scratch using hexagonal architecture to process logistics events and synchronize critical business information.",
          "Technical coordination with teams from both platforms to define data flows, integration contracts, and validate behavior before production.",
          "Designed and evolved the Oracle data model, ensuring shipment information is recorded consistently and aligned with business logic.",
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
          "Started as a full stack developer, building interfaces and backend services for corporate platforms used by business users.",
          "Evolved into frontend technical leadership in the Cepsa project, coordinating the development of React components integrated into the company's corporate platform.",
          "Designed and implemented APIs in Java and Spring Boot to expose information from SAP enterprise systems to business applications.",
          "Developed backend microservices for Habitat AFP's pension system, processing large volumes of financial data and applying business rules for validation.",
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
        context: "Corporate landing page development",
        highlights: [
          "Implemented visual components and animations for the corporate website, improving user interaction with the site.",
          "Developed interactive sections focused on presenting content in a clear and engaging way.",
          "Collaborated with the design team to build modern, responsive interfaces aligned with the brand's visual identity.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Vue", "Animation Libraries"],
      },
      {
        role: "Full Stack Developer",
        company: "ALMA SOFTWARE",
        period: "2019 - 2020",
        workMode: "Full-time · Remote",
        context: "Development of e-commerce solutions during the pandemic",
        highlights: [
          "Developed online stores for businesses that needed to quickly migrate to digital channels.",
          "Implemented catalog, order, and product management features for core commercial operations.",
          "Adapted technology solutions to support business continuity during lockdown periods.",
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
      "A way of working focused on understanding the business, designing coherent solutions, and taking them to production in a controlled and maintainable way.",
    steps: [
      {
        step: "Step 1",
        title: "Domain understanding",
        description:
          "Analysis of how the business works, its processes, actors, and rules, to understand what problem must be solved before proposing a technical solution.",
      },
      {
        step: "Step 2",
        title: "System design",
        description:
          "Definition of the architecture considering the full flow: user interaction, backend services, integrations, and data model.",
      },
      {
        step: "Step 3",
        title: "System implementation",
        description:
          "Development of services and components with focus on clarity, testing, and maintainability, ensuring the solution correctly reflects business logic.",
      },
      {
        step: "Step 4",
        title: "Production evolution",
        description:
          "Continuous monitoring and system improvement, adjusting performance, fixing issues, and enabling evolution without affecting stability.",
      },
    ],
  },
  philosophy: {
    title: "Engineering Philosophy",
    headingPrimary: "Principles for designing",
    headingSecondary: "enterprise systems",
    intro:
      "Principles that guide how I analyze, design, and implement systems that must be reliable, maintainable, and aligned with the business.",
    principles: [
      {
        icon: "domain",
        title: "The system reflects the business",
        description:
          "Software must accurately represent business processes and rules. A poor domain model generates complexity and long-term errors.",
      },
      {
        icon: "global",
        title: "Think about the full system",
        description:
          "Every decision considers the entire flow: user, services, integrations, and data. The goal is not isolated pieces, but complete solutions.",
      },
      {
        icon: "code",
        title: "Clarity over complexity",
        description:
          "Code must be understandable and maintainable. Well-applied simplicity reduces errors and makes system evolution easier.",
      },
      {
        icon: "shield",
        title: "Data consistency as a priority",
        description:
          "In enterprise systems, data must be correct and reliable. Integrity is prioritized over quick or incomplete solutions.",
      },
      {
        icon: "resilience",
        title: "Design for failures",
        description:
          "Systems should keep working even when something fails. Errors, retries, and recovery are considered from the design stage.",
      },
      {
        icon: "scale",
        title: "Ready to grow",
        description:
          "Solutions are designed to evolve with the business, avoiding full redesigns as load or complexity increases.",
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
      "Experience with distributed teams across multiple time zones. Adaptability to corporate cultures and global methodologies.",
    links: [
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
      {
        label: "Email",
        value: "dpanibra0@gmail.com",
        href: "mailto:dpanibra0@gmail.com",
        sublabel: "Reply within 24h",
      },
      
    ],
    availability: "Available for projects - Remote",
  },
  footer: {
    copyright: "© 2026 David Panibra — Software Engineer",
    githubUrl: "https://github.com/dPanibra0",
    linkedinUrl: "https://www.linkedin.com/in/david-panibra-1bb87a1a4/",
  },
};
