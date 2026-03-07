import type { PortfolioContent } from "./types";

export const esContent: PortfolioContent = {
  locale: "es",
  meta: {
    title: "Portafolio Backend Enterprise | Arquitectura Escalable",
    description:
      "Portafolio profesional orientado a empresas internacionales: backend enterprise con Java, Spring Boot, Oracle y arquitectura resiliente para sistemas críticos.",
  },
  nav: [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Stack", href: "#stack" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proceso", href: "#proceso" },
    { label: "Filosofia", href: "#filosofia" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Ingenieria backend para operaciones críticas",
    availability: "Disponible para proyectos - Remote",
    title: "Arquitectura Backend Empresarial para Sistemas Escalables",
    subtitle:
      "Diseño y desarrollo plataformas backend para entornos corporativos internacionales con estabilidad, rendimiento y resiliencia operativa.",
    message:
      "Enfoque técnico orientado a confiabilidad, arquitectura limpia y sistemas listos para crecer sin comprometer consistencia de datos.",
    ctaPrimary: "Contactar",
    ctaSecondary: "Descargar CV",
    stats: [
      { value: "5+", label: "Años de experiencia" },
      { value: "2M+", label: "Transacciones/día procesadas" },
      { value: "99%", label: "Uptime en producción" },
      { value: "99%", label: "Estabilidad operativa" },
    ],
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Ingeniero backend enfocado en ecosistemas corporativos donde la disponibilidad, la trazabilidad y la precisión transaccional son requerimientos de negocio.",
      "Especializado en Java, Spring Boot y Oracle en ambientes productivos de alta exigencia, con experiencia en integraciones críticas y procesamiento batch.",
      "Trabajo con arquitectura escalable, consistencia de datos y mantenibilidad a largo plazo, colaborando con equipos distribuidos bajo estandares internacionales.",
    ],
  },
  stack: {
    title: "Stack Técnico",
    categories: [
      {
        category: "Backend",
        items: ["Java 17/21", "Spring Boot", "JPA/Hibernate", "APIs REST", "Spring Batch"],
      },
      {
        category: "Bases de datos",
        items: ["Oracle", "SQL avanzado", "Modelado relacional", "Optimización de consultas"],
      },
      {
        category: "DevOps e Infraestructura",
        items: ["Docker", "Git", "Linux", "CI/CD"],
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
        company: "NTT Data - Plataforma de Servicios Financieros",
        period: "2021 - Actualidad",
        context: "Rediseño de plataforma transaccional para operaciones financieras críticas en entorno corporativo internacional.",
        highlights: [
          "Reducción de tiempos de respuesta en servicios críticos mediante optimizacion de capas de acceso a datos.",
          "Refactorización arquitectonica para mejorar mantenibilidad y escalabilidad en módulos de negocio.",
          "Integración de sistemas externos con politicas de resiliencia y control de errores.",
        ],
        technologies: ["Java", "Spring Boot", "Oracle", "REST APIs"],
      },
      {
        role: "Backend Developer",
        company: "Plataforma Transaccional Regional",
        period: "2019 - 2022",
        context: "Implementación y evolución de procesos batch de alto volumen para conciliación y procesamiento diario.",
        highlights: [
          "Mejora de rendimiento en base de datos Oracle a traves de optimizacion de SQL y ajustes de modelo relacional.",
          "Implementacion de procesos batch para conciliaciones y cargas masivas con mayor confiabilidad.",
          "Trabajo bajo estandares corporativos, revisiones tecnicas y buenas prácticas de desarrollo.",
        ],
        technologies: ["Java", "Spring Batch", "Oracle", "Linux"],
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
      { label: "LinkedIn", value: "linkedin.com/in/tu-perfil", href: "https://linkedin.com" },
      { label: "GitHub", value: "github.com/tu-usuario", href: "https://github.com" },
    ],
    availability: "Disponible para proyectos - Remote",
  },
  footer: {
    copyright: "2026 Backend Portfolio. All rights reserved.",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
};
