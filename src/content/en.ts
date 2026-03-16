import type { PortfolioContent } from "./types";

export const enContent: PortfolioContent = {
  locale: "en",
  meta: {
    title: "David Panibra | Software Engineer",
    description:
      "Ingeniero de software especializado en backend y arquitectura de microservicios. Diseño sistemas empresariales end-to-end a partir del análisis del dominio del negocio, desde la interacción del usuario hasta la persistencia de datos.",
  },
  nav: [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Stack", href: "#stack" },
    //{ label: "Proyectos", href: "#proyectos" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proceso", href: "#proceso" },
    { label: "Filosofia", href: "#filosofia" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Ingeniería de software orientada al dominio",
    availability: "Disponible para proyectos - Remote",
    title: "Diseño de Sistemas Empresariales Escalables",
    subtitle:
      "Ingeniero de software enfocado en análisis de dominio y arquitectura backend, desarrollando sistemas completos desde la interacción del usuario hasta la lógica de negocio y persistencia de datos.",
    message:
      "Especialización en arquitecturas backend resilientes con Java y microservicios, diseñadas para entornos corporativos donde la confiabilidad, la consistencia de datos y la evolución del sistema son críticas.",
    ctaPrimary: "Contactar",
    ctaSecondary: "Descargar CV",
    stats: [
      { value: "5+", label: "Años desarrollando software empresarial" },
      { value: "4", label: "Empresas tecnológicas" },
      { value: "3", label: "Sectores industriales (logística, energía, pensiones)" },
      { value: "2", label: "Sistemas empresariales internacionales" },
    ],
  },
  about: {
    title: "Sobre mí",
    headingPrimary: "Ingeniería de software para",
    headingSecondary: "sistemas empresariales complejos",
    paragraphs: [
      "Ingeniero de software enfocado en comprender el dominio del negocio y traducir sus procesos, reglas y operaciones en sistemas de software claros y mantenibles.",
      "Trabajo diseñando soluciones end-to-end, desde la interacción del usuario con el producto hasta la arquitectura backend, la lógica de negocio y la persistencia de datos.",
      "Mi especialización está en backend empresarial con Java y microservicios, desarrollando servicios resilientes, integraciones entre sistemas y modelos de datos que reflejen correctamente la lógica del negocio."
    ],

    cards: [
      {
        title: "Análisis de Dominio",
        subtitle: "Procesos · Reglas · Modelado",
        icon: "globe"
      },
      {
        title: "Arquitectura de Sistemas",
        subtitle: "Microservices · APIs · Integración",
        icon: "database"
      },
      {
        title: "Backend Resiliente",
        subtitle: "Java · Spring Boot · Oracle",
        icon: "backend"
      },
      {
        title: "Sistemas Empresariales",
        subtitle: "Consistencia · Escalabilidad · Mantenibilidad",
        icon: "shield"
      }
    ],
  },
  stack: {
    title: "Stack Técnico",
    categories: [
      {
        category: "Backend",
        items: ["Java 8/21", "Spring Boot", "JPA/Hibernate", "APIs REST", "Spring Batch"],
      },
      {
        category: "Bases de datos",
        items: ["Oracle", "SQL avanzado", "Modelado relacional", "Optimización de consultas"],
      },
      {
        category: "DevOps e Infraestructura",
        items: ["Docker", "Git", "Jenkins", "CI/CD"],
      },
      {
        category: "Testing y calidad",
        items: ["JUnit", "Spock", "Pruebas unitarias", "Pruebas de integracion"],
      },
    ],
  },
  projects: {
    title: "Proyectos Destacados",
    intro:
      "Cada proyecto refleja decisiones técnicas orientadas a continuidad operativa, control de riesgo y resultados medibles para el negocio.",
    items: [
      {
        title: "Plataforma de tracking logistico corporativo",
        problem:
          "El negocio necesitaba trazabilidad confiable de eventos logísticos entre multiples actores y sistemas externos con estados asíncronos.",
        architecture:
          "Arquitectura modular basada en servicios Spring Boot, persistencia Oracle y orquestación de flujos transaccionales con confirmaciones por etapa.",
        stack: "Java 21, Spring Boot, JPA/Hibernate, Oracle, APIs REST, Docker",
        challenges:
          "Consistencia entre eventos distribuidos, idempotencia de operaciones y tolerancia a fallos de integraciones externas.",
        solution:
          "Se implementaron políticas de reintentos con backoff, registros de correlación y mecanismos de confirmación para evitar duplicidad y perdida de eventos.",
        impact:
          "Aumento de estabilidad operativa y reducción de incidencias en seguimiento logístico en ciclos de alta demanda.",
      },
      {
        title: "Sistema batch financiero de alto volumen",
        problem:
          "La operacion financiera requeria procesar grandes volumenes nocturnos dentro de ventanas de tiempo estrictas.",
        architecture:
          "Pipeline batch con Spring Batch, particionamiento por lotes, control transaccional robusto y trazabilidad de ejecución por job/step.",
        stack: "Java 17, Spring Batch, Oracle, SQL avanzado, Linux, CI/CD",
        challenges:
          "Control de integridad en re-procesos, manejo de errores por lote y cuellos de botella en consultas de alto costo.",
        solution:
          "Se optimizaron queries críticas, se mejoraron estrategias de commit/rollback y se incorporo validación de consistencia previa/post proceso.",
        impact:
          "Mejora en tiempos de ejecución y disminución de errores operativos en cierres financieros recurrentes.",
      },
    ],
  },
  experience: {
    title: "Experiencia Profesional",
    items: [
      {
        role: "Senior Backend Engineer",
        company: "LATAMTECH",
        period: "2025 - 2026",
        context: "Sistema logístico para Olva Courier",
        highlights: [
          "Desarrollo de APIs para actualización y consulta de estados de envíos en sistemas de tracking.",
          "Implementación de integraciones entre plataformas externas y sistemas logísticos internos.",
          "Trabajo con sistemas de mensajería, colas y persistencia para asegurar confiabilidad en actualizaciones de estado.",
        ],
        technologies: ["Java", "Spring Boot", "Oracle", "REST APIs"],
      },
      {
        role: "Backend Developer",
        company: "NTT DATA",
        period: "2021 - 2025",
        context: "Participación en múltiples proyectos empresariales para clientes internacionales, desarrollando soluciones backend y sistemas corporativos.",
        highlights: [
          "Desarrollo de servicios backend para sistemas corporativos.",
          "Implementacion de procesos batch para conciliaciones y cargas masivas con mayor confiabilidad.",
          "Implementación de procesos de negocio relacionados con gestión de datos y servicios internos.",
        ],
        technologies: ["Java", "Spring Batch", "Oracle", "React", "Jenkins"],
      },
      {
        role: "Frontend Developer",
        company: "MULTIPLICA",
        period: "2020",
        context: "Participación en el desarrollo de la nueva landing page corporativa.",
        highlights: [
          "Implementación de componentes visuales y animaciones web para la nueva página institucional.",
          "Desarrollo de secciones interactivas para mejorar la experiencia de usuario.",
          "Colaboración con el equipo de diseño para implementar interfaces modernas y responsivas.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Vue", "Animation Libraries"],
      },
      {
        role: "Full Stack Developer",
        company: "ALMA SOFTWARE",
        period: "2019 - 2020",
        context: "Desarrollo de soluciones de comercio electrónico durante el contexto de la pandemia, orientadas a la digitalización de tiendas.",
        highlights: [
          "Desarrollo de tiendas online para negocios que necesitaban migrar al comercio digital.",
          "Implementación de funcionalidades de catálogo, pedidos y gestión básica de productos.",
          "Adaptación rápida de soluciones para permitir la continuidad de negocios durante el confinamiento.",
        ],
        technologies: ["Laravel", "Angular", "MySQL", "Bootstrap"],
      },
    ],
  },
  process: {
    title: "Proceso de Trabajo",
    steps: [
      {
        step: "Paso 1",
        title: "Análisis técnico y dominio",
        description: "Comprensión del negocio, riesgos operativos y objetivos funcionales antes de definir soluciones.",
      },
      {
        step: "Paso 2",
        title: "Diseño arquitectónico corporativo",
        description: "Diseño alineado a estandares empresariales, escalabilidad y gobernanza técnica.",
      },
      { 
        step: "Paso 3",
        title: "Implementación con calidad",
        description: "Desarrollo con pruebas, documentación y criterios de mantenibilidad desde el inicio.",
      },
      {
        step: "Paso 4",
        title: "Optimización y mejora continua",
        description: "Monitoreo, ajuste de rendimiento y evolución controlada para sostener estabilidad.",
      },
    ],
  },
  philosophy: {
    title: "Filosofia Técnica",
    points: [
      "Arquitectura orientada al dominio y al impacto de negocio.",
      "Código limpio, legible y sostenible en el tiempo.",
      "Prioridad en estabilidad y consistencia de datos.",
      "Sistemas diseñados para escalar en entornos empresariales.",
      "Resiliencia operativa y prevención activa de fallos.",
    ],
  },
  contact: {
    title: "Contacto",
    subtitle: "Colaboraciones corporativas, oportunidades internacionales y trabajo remoto.",
    links: [
      { label: "Email", value: "dpanibra0@gmail.com", href: "mailto:dpanibra0@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/david-panibra", href: "https://www.linkedin.com/in/david-panibra-1bb87a1a4/" },
      { label: "GitHub", value: "github.com/dPanibra0", href: "https://github.com/dPanibra0" },
    ],
    availability: "Disponible para proyectos - Remote",
  },
  footer: {
    copyright: "2026 Backend Portfolio. All rights reserved.",
    githubUrl: "https://github.com/dPanibra0",
    linkedinUrl: "https://linkedin.com",
  },
};
