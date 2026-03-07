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
  paragraphs: string[];
}

export interface StackCategory {
  category: string;
  items: string[];
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
  context: string;
  highlights: string[];
  technologies: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface PortfolioContent {
  locale: "es" | "en";
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  stack: {
    title: string;
    categories: StackCategory[];
  };
  projects: {
    title: string;
    intro: string;
    items: ProjectContent[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  philosophy: {
    title: string;
    points: string[];
  };
  contact: {
    title: string;
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
