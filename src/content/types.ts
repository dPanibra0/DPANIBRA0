export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  availability: string;
  title: string;
  subtitle: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface StackCategory {
  category: string;
  icon: "code" | "db" | "gear" | "shield";
  items: Array<{
    name: string;
    hint: string;
  }>;
}

export interface ProjectContent {
  title: string;
  problem: string;
  architecture: string;
  stack: string;
  challenges: string;
  solution: string;
  impact: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  workMode: string;
  context: string;
  cover: {
    src: string;
    alt: string;
  };
  highlights: string[];
  technologies: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  sublabel: string;
}

export interface PortfolioContent {
  locale: "es" | "en";
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  overlines: {
    microservices: string;
    hexagonal: string;
    stack: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: HeroContent;
  microservices: {
    headingPrimary: string;
    headingSecondary: string;
    intro: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  hexagonal: {
    headingPrimary: string;
    headingSecondary: string;
    intro: string;
    points: string[];
  };
  stack: {
    title: string;
    headingPrimary: string;
    headingSecondary: string;
    intro: string;
    categories: StackCategory[];
  };
  projects: {
    title: string;
    intro: string;
    items: ProjectContent[];
  };
  experience: {
    title: string;
    headingPrimary: string;
    headingSecondary: string;
    items: ExperienceItem[];
  };
  contact: {
    headlineTop: string;
    headlineBottom: string;
    subtitle: string;
    links: ContactLink[];
    availability: string;
  };
  footer: {
    copyright: string;
    githubUrl: string;
    linkedinUrl: string;
  };
}

export type Language = "es" | "en";

export interface PortfolioUiTranslations {
  navbar: {
    menuLabel: string;
    logoAlt: string;
  };
  experience: {
    detailsLabel: string;
  };
  projects: {
    headingTop: string;
    headingBottom: string;
    sectionTags: [string, string];
    fallbackProject: {
      title: string;
      impact: string;
      stack: string;
    };
    detailsLabel: string;
  };
  contact: {
    formAriaLabel: string;
    projectInputLabel: string;
    placeholders: [string, string, string];
    submitLabel: string;
    emailSubject: string;
    emailBodyTemplate: string;
  };
  floatingActions: {
    ariaLabel: string;
    linkedin: string;
    github: string;
    email: string;
    contact: string;
    scrollTop: string;
  };
  techCarousel: {
    ariaLabel: string;
  };
  detalles: {
    tabsAriaLabel: string;
    tabPanelsAriaLabel: string;
    tabs: {
      experiencia: string;
      proyectos: string;
      blog: string;
    };
    backLabel: string;
    backToTopLabel: string;
    pageTitle: string;
    pageDescription: string;
    projectsOverline: string;
    projectsTitle: string;
    projectsIntro: string;
    projectLabels: {
      problem: string;
      architecture: string;
      challenges: string;
      solution: string;
      impact: string;
      stack: string;
    };
    blogOverline: string;
    blogTitle: string;
    blogIntro: string;
    blogPosts: Array<{
      title: string;
      excerpt: string;
      href: string;
      tag: string;
      status: string;
    }>;
  };
}

export interface PortfolioTranslations {
  content: PortfolioContent;
  ui: PortfolioUiTranslations;
}
