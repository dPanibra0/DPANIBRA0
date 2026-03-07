import type { PortfolioContent } from "./types";

export const enContent: PortfolioContent = {
  locale: "en",
  meta: {
    title: "Enterprise Backend Portfolio | Scalable Architecture",
    description:
      "Professional portfolio for international corporations: enterprise backend architecture with Java, Spring Boot, Oracle and resilient systems.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Process", href: "#process" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Backend engineering for mission-critical operations",
    availability: "Open to international opportunities",
    title: "Enterprise-Grade Backend Architecture for Scalable Systems",
    subtitle:
      "I design and build backend platforms for international corporate environments focused on stability, performance and operational resilience.",
    message:
      "Technical execution centered on reliability, clean architecture and systems prepared to scale without compromising data consistency.",
    ctaPrimary: "Contact",
    ctaSecondary: "Download Resume",
    stats: [
      { value: "99.95%", label: "Operational stability" },
      { value: "-38%", label: "Critical process incidents" },
      { value: "x2.4", label: "Batch throughput improvement" },
    ],
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Backend engineer focused on corporate ecosystems where availability, traceability and transactional accuracy are business-critical requirements.",
      "Specialized in Java, Spring Boot and Oracle in production-grade environments, including critical integrations and batch processing.",
      "I work with scalable architecture, data consistency and long-term maintainability while collaborating with distributed teams under international standards.",
    ],
  },
  stack: {
    title: "Technical Stack",
    categories: [
      {
        category: "Backend",
        items: ["Java 17/21", "Spring Boot", "JPA/Hibernate", "REST APIs", "Spring Batch"],
      },
      {
        category: "Databases",
        items: ["Oracle", "Advanced SQL", "Relational modeling", "Query optimization"],
      },
      {
        category: "DevOps & Infrastructure",
        items: ["Docker", "Git", "Linux", "CI/CD"],
      },
      {
        category: "Testing & Quality",
        items: ["JUnit", "Spock", "Unit testing", "Integration testing"],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    intro:
      "Each project highlights technical decisions designed to protect continuity, reduce risk and deliver measurable business outcomes.",
    items: [
      {
        title: "Corporate logistics tracking platform",
        problem:
          "The business required reliable event traceability across multiple logistics actors and external systems with asynchronous state transitions.",
        architecture:
          "Modular architecture based on Spring Boot services, Oracle persistence and transactional workflow orchestration with step-level confirmations.",
        stack: "Java 21, Spring Boot, JPA/Hibernate, Oracle, REST APIs, Docker",
        challenges:
          "Consistency across distributed events, operation idempotency and external integration fault tolerance.",
        solution:
          "Retry policies with backoff, correlation logging and confirmation mechanisms were implemented to prevent duplication and event loss.",
        impact:
          "Improved operational stability and reduced logistics tracking incidents during high-demand periods.",
      },
      {
        title: "High-volume financial batch system",
        problem:
          "Financial operations needed to process large nightly volumes within strict processing windows.",
        architecture:
          "Batch pipeline with Spring Batch, partitioned workloads, strong transaction controls and execution traceability per job/step.",
        stack: "Java 17, Spring Batch, Oracle, Advanced SQL, Linux, CI/CD",
        challenges:
          "Integrity controls in reprocessing scenarios, batch-level error handling and query bottlenecks under heavy load.",
        solution:
          "Critical queries were optimized, commit/rollback strategies were improved and pre/post consistency validations were added.",
        impact:
          "Better execution times and fewer operational errors in recurring financial closing cycles.",
      },
    ],
  },
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Senior Backend Engineer",
        company: "International Corporate Company",
        period: "2022 - Present",
        context: "Architecture modernization of transaction-critical services for international corporate operations.",
        highlights: [
          "Reduced response times in critical services through data access optimization.",
          "Led architectural refactors that improved maintainability and horizontal scalability.",
          "Integrated external systems with resilient error handling and stability controls.",
        ],
        technologies: ["Java", "Spring Boot", "Oracle", "REST APIs"],
      },
      {
        role: "Backend Developer",
        company: "Regional Transactional Platform",
        period: "2019 - 2022",
        context: "Development of high-volume batch workflows for reconciliation and daily business processing windows.",
        highlights: [
          "Improved Oracle database performance through SQL optimization and relational modeling adjustments.",
          "Implemented reliable batch processes for reconciliations and high-volume data loads.",
          "Worked under corporate standards, technical reviews and established engineering practices.",
        ],
        technologies: ["Java", "Spring Batch", "Oracle", "Linux"],
      },
    ],
  },
  process: {
    title: "Working Process",
    steps: [
      {
        step: "Step 1",
        title: "Technical analysis and domain understanding",
        description: "Understand business context, operational risks and core objectives before defining solutions.",
      },
      {
        step: "Step 2",
        title: "Corporate-aligned architecture design",
        description: "Design for enterprise standards, scalability, maintainability and technical governance.",
      },
      {
        step: "Step 3",
        title: "Quality-driven implementation",
        description: "Build with testing, documentation and maintainability criteria from day one.",
      },
      {
        step: "Step 4",
        title: "Optimization and continuous improvement",
        description: "Monitor, tune performance and evolve systems safely over time.",
      },
    ],
  },
  philosophy: {
    title: "Technical Philosophy",
    points: [
      "Architecture driven by domain needs and business impact.",
      "Clean, maintainable code as a long-term asset.",
      "Stability and data consistency are non-negotiable.",
      "Systems designed to scale in enterprise environments.",
      "Resilience and proactive failure prevention by design.",
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Corporate collaborations, international opportunities and remote work.",
    links: [
      { label: "Email", value: "email@company.com", href: "mailto:email@company.com" },
      { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: "https://linkedin.com" },
      { label: "GitHub", value: "github.com/your-handle", href: "https://github.com" },
    ],
    availability: "Available for international opportunities and remote collaboration with distributed teams.",
  },
  footer: {
    copyright: "2026 Backend Portfolio. All rights reserved.",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
};
