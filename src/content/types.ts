export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  availability: string;
  title: string;
  subtitle: string;
  message: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface AboutContent {
  title: string;
  headingPrimary: string;
  headingSecondary: string;
  paragraphs: string[];
  cards: Array<{
    title: string;
    subtitle: string;
    icon: "backend" | "database" | "globe" | "shield";
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
  highlights: string[];
  technologies: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PhilosophyPrinciple {
  icon: "domain" | "code" | "shield" | "scale" | "resilience" | "global";
  title: string;
  description: string;
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
    about: string;
    stack: string;
    projects: string;
    experience: string;
    process: string;
    philosophy: string;
    contact: string;
  };
  hero: HeroContent;
  about: AboutContent;
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
  process: {
    title: string;
    headingPrimary: string;
    headingSecondary: string;
    intro: string;
    steps: ProcessStep[];
  };
  philosophy: {
    title: string;
    headingPrimary: string;
    headingSecondary: string;
    intro: string;
    principles: PhilosophyPrinciple[];
  };
  contact: {
    title: string;
    headlineTop: string;
    headlineBottom: string;
    subtitle: string;
    supportTitle: string;
    supportText: string;
    links: ContactLink[];
    availability: string;
  };
  footer: {
    copyright: string;
    githubUrl: string;
    linkedinUrl: string;
  };
}
