export const techIconMap: Record<string, string> = {
  astro: "simple-icons:astro",
  java: "simple-icons:openjdk",
  "java 17": "simple-icons:openjdk",
  "java 21": "simple-icons:openjdk",
  spring: "simple-icons:spring",
  "spring boot": "simple-icons:springboot",
  "spring batch": "simple-icons:spring",
  quarkus: "simple-icons:quarkus",
  microservices: "lucide:blocks",
  "hexagonal architecture": "lucide:hexagon",
  hibernate: "simple-icons:hibernate",
  "jpa/hibernate": "simple-icons:hibernate",
  oracle: "simple-icons:oracle",
  groovy: "simple-icons:apachegroovy",
  spock: "lucide:flask-conical",
  mysql: "simple-icons:mysql",
  sql: "lucide:database",
  linux: "simple-icons:linux",
  docker: "simple-icons:docker",
  kubernetes: "simple-icons:kubernetes",
  git: "simple-icons:git",
  "ci/cd": "simple-icons:jenkins",
  azure: "simple-icons:microsoftazure",
  react: "simple-icons:react",
  vue: "simple-icons:vuedotjs",
  angular: "simple-icons:angular",
  "tailwind css": "simple-icons:tailwindcss",
  tailwind: "simple-icons:tailwindcss",
  "decap cms": "simple-icons:decapcms",
  laravel: "simple-icons:laravel",
  bootstrap: "simple-icons:bootstrap",
  html: "simple-icons:html5",
  css: "simple-icons:css",
  javascript: "simple-icons:javascript",
  "animation libraries": "lucide:sparkles",
  "sap integration": "lucide:plug-zap",
  "rest apis": "lucide:waypoints",
};

export const resolveTechIcon = (tech: string) => {
  const normalized = tech.toLowerCase().replace(/\s+/g, " ").trim();
  return techIconMap[normalized] ?? "lucide:cpu";
};

export const projectCovers = [
  {
    src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/proyectos/proyecto-01.png",
    alt: "Dashboard logistico corporativo con trazabilidad operativa",
  },
  {
    src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/proyectos/proyecto-02.jpg",
    alt: "Panel corporativo con metricas y estado de procesos",
  },
  {
    src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/proyectos/proyecto03-pastoralunsa.png",
    alt: "Landing institucional de Pastoral Universitaria UNSA con agenda, actividades y comunidad estudiantil",
  },
] as const;

export const resolveProjectCover = (index: number) =>
  projectCovers[index] ?? projectCovers[index % projectCovers.length];

export const blogCovers = [
  {
    src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-latamtech.png",
    alt: "Imagen editorial de arquitectura de sistemas empresariales",
  },
  {
    src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-nttdata.png",
    alt: "Imagen editorial de procesos y observabilidad operativa",
  },
  {
    src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-multiplica.png",
    alt: "Imagen editorial de automatizacion y plataforma corporativa",
  },
] as const;

export const resolveBlogCover = (index: number) =>
  blogCovers[index] ?? blogCovers[index % blogCovers.length];
