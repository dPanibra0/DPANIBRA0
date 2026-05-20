export const techIconMap: Record<string, string> = {
  java: "simple-icons:openjdk",
  "java 17": "simple-icons:openjdk",
  "java 21": "simple-icons:openjdk",
  spring: "simple-icons:spring",
  "spring boot": "simple-icons:springboot",
  "spring batch": "simple-icons:spring",
  hibernate: "simple-icons:hibernate",
  "jpa/hibernate": "simple-icons:hibernate",
  oracle: "simple-icons:oracle",
  mysql: "simple-icons:mysql",
  sql: "simple-icons:mysql",
  linux: "simple-icons:linux",
  docker: "simple-icons:docker",
  kubernetes: "simple-icons:kubernetes",
  git: "simple-icons:git",
  "ci/cd": "simple-icons:jenkins",
  azure: "simple-icons:microsoftazure",
  "rest apis": "simple-icons:fastapi",
};

export const resolveTechIcon = (tech: string) => {
  const normalized = tech.toLowerCase().replace(/\s+/g, " ").trim();
  return techIconMap[normalized] ?? "lucide:cpu";
};

export const projectCovers = [
  {
    src: "/images/proyecto-01.png",
    alt: "Dashboard logistico corporativo con trazabilidad operativa",
  },
  {
    src: "/images/proyecto-02.jpg",
    alt: "Panel corporativo con metricas y estado de procesos",
  },
  {
    src: "/images/proyecto-03.jpg",
    alt: "Visual de plataforma corporativa con modulos de negocio",
  },
] as const;

export const resolveProjectCover = (index: number) =>
  projectCovers[index] ?? projectCovers[index % projectCovers.length];

export const blogCovers = [
  {
    src: "/images/proyecto-01.png",
    alt: "Imagen editorial de arquitectura de sistemas empresariales",
  },
  {
    src: "/images/proyecto-02.jpg",
    alt: "Imagen editorial de procesos y observabilidad operativa",
  },
  {
    src: "/images/proyecto-03.jpg",
    alt: "Imagen editorial de automatizacion y plataforma corporativa",
  },
] as const;

export const resolveBlogCover = (index: number) =>
  blogCovers[index] ?? blogCovers[index % blogCovers.length];
