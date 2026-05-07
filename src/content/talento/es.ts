import type { PortfolioContent } from "../types";

export const esContent: PortfolioContent = {
  locale: "es",
  meta: {
    title: "David Panibra | Software Engineer",
    description:
      "Ingeniero de software especializado en backend y arquitectura de microservicios. Diseño sistemas empresariales end-to-end a partir del análisis del dominio del negocio, desde la interacción del usuario hasta la persistencia de datos.",
  },
  nav: [
    { label: "Microservicios", href: "#microservicios" },
    { label: "Arquitectura", href: "#arquitectura" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Stack", href: "#stack" },
    { label: "Contacto", href: "#contacto" },
  ],
  overlines: {
    microservices: "01 // MICROSERVICIOS",
    hexagonal: "02 // ARQUITECTURA_HEXAGONAL",
    stack: "05 // STACK_TÉCNICO",
    projects: "04 // PROYECTOS_DESTACADOS",
    experience: "03 // EXPERIENCIA_PROFESIONAL",
    contact: "06 // CONTACTO",
  },
  hero: {
    eyebrow: "Ingeniería de software orientada al dominio",
    availability: "Disponible para proyectos - Remote",
    title: "Backend Java para Microservicios Empresariales",
    subtitle:
      "Construyo y evoluciono APIs y microservicios con Java/Spring Boot para procesos críticos, priorizando consistencia de datos, integración confiable y entregas listas para producción.",
    message:
      "Especializado en backend con Java y microservicios, construyendo sistemas confiables que procesan información crítica, se integran con otras plataformas y evolucionan sin comprometer la consistencia de los datos.",
    ctaPrimary: "Contactar",
    ctaSecondary: "Descargar CV",
    stats: [
      { value: "5+", label: "Años desarrollando software empresarial" },
      { value: "4", label: "Empresas tecnológicas" },
      {
        value: "3",
        label: "Sectores industriales (logística, energía, pensiones)",
      },
      { value: "2", label: "Sistemas empresariales internacionales" },
    ],
  },
  microservices: {
    headingPrimary: "Microservicios",
    headingSecondary: "escalables, resilientes y observables",
    intro:
      "Diseño servicios desacoplados para dominios críticos, con comunicación clara, control operacional y evolución segura en producción.",
    pillars: [
      {
        title: "Escalable",
        description: "Si crece la demanda, escalamos solo la parte que lo necesita.",
      },
      {
        title: "Resiliente",
        description: "Si algo falla, el resto sigue funcionando sin caerse todo.",
      },
      {
        title: "Observable",
        description: "Vemos qué pasa en tiempo real con métricas, logs y trazas.",
      },
    ],
  },
  hexagonal: {
    headingPrimary: "Arquitectura hexagonal",
    headingSecondary: "enfocada en dominio y mantenibilidad",
    intro:
      "Estructuro casos de uso con puertos y adaptadores para aislar reglas de negocio y facilitar pruebas e integración.",
    points: [
      "Dominio protegido del framework y de detalles de infraestructura.",
      "Adaptadores para APIs, persistencia e integraciones externas.",
      "Pruebas más directas sobre casos de uso y reglas críticas.",
    ],
  },
  stack: {
    title: "Capacidades Técnicas",
    headingPrimary: "Tecnologías aplicadas a",
    headingSecondary: "sistemas empresariales reales",
    intro:
      "Herramientas, frameworks y prácticas que utilizo para analizar, diseñar y construir sistemas empresariales end-to-end, desde la lógica de negocio hasta la persistencia y operación en producción.",
    categories: [
      {
        category: "Backend y arquitectura",
        icon: "code",
        items: [
          { name: "Java 8–21", hint: "Enterprise · LTS" },
          { name: "Spring Boot", hint: "Microservices · REST APIs" },
          { name: "JPA / Hibernate", hint: "Persistence · ORM" },
          { name: "APIs REST", hint: "Design · Integration" },
          { name: "Spring Batch", hint: "High-volume processing" },
        ],
      },
      {
        category: "Datos y persistencia",
        icon: "db",
        items: [
          { name: "Oracle", hint: "Enterprise database" },
          { name: "SQL avanzado", hint: "Queries · Performance" },
          { name: "Modelado relacional", hint: "Domain-driven structures" },
          {
            name: "Optimización de consultas",
            hint: "Indexes · Execution plans",
          },
        ],
      },
      {
        category: "Entrega e infraestructura",
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
        category: "Testing y calidad",
        icon: "shield",
        items: [
          { name: "JUnit", hint: "Unit testing" },
          { name: "Spock", hint: "BDD · Groovy" },
          { name: "Pruebas unitarias", hint: "Validation · Coverage" },
          { name: "Pruebas de integración", hint: "Flows · Services" },
          { name: "SonarQube", hint: "Code quality" },
        ],
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
    headingPrimary: "Historial en entornos",
    headingSecondary: "corporativos de alto impacto",
    items: [
      {
        role: "Backend Engineer",
        company: "LATAMTECH",
        period: "2025 - 2026",
        workMode: "Full-time · Remoto",
        context: "Integración logística internacional — Olva Courier",
        highlights: [
          "Análisis del dominio logístico para entender cómo se registran y procesan los envíos, definiendo la integración entre una plataforma externa y el sistema CORE de la empresa.",
          "Diseño y desarrollo desde cero de dos microservicios en Java 21 bajo arquitectura hexagonal para procesar eventos logísticos y sincronizar información crítica del negocio.",
          "Coordinación técnica entre equipos de ambas plataformas para definir flujos de datos, contratos de integración y validar el comportamiento del sistema antes de su paso a producción.",
          "Diseño y evolución del modelo de datos en Oracle, asegurando que la información de envíos se registre de forma consistente y alineada con la lógica del negocio.",
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
        workMode: "Full-time · Hibrido",
        context:
          "Proyectos internacionales — Cepsa (España) · Habitat AFP (Chile)",
        highlights: [
          "Inicio como desarrollador fullstack construyendo interfaces y servicios backend para plataformas corporativas utilizadas por usuarios de negocio.",
          "Evolución a liderazgo técnico frontend en el proyecto Cepsa, coordinando el desarrollo de componentes en React integrados en la plataforma corporativa de la empresa.",
          "Diseño e implementación de APIs en Java y Spring Boot para exponer información proveniente de sistemas empresariales SAP hacia aplicaciones del negocio.",
          "Desarrollo de microservicios backend para el sistema de pensiones de Habitat AFP, procesando grandes volúmenes de información financiera y aplicando reglas de negocio para su validación.",
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
        workMode: "Full-time · Remoto",
        context: "Desarrollo de landing page corporativa",
        highlights: [
          "Implementación de componentes visuales y animaciones para la página institucional, mejorando la interacción del usuario con el sitio.",
          "Desarrollo de secciones interactivas orientadas a presentar contenido de forma clara y atractiva.",
          "Colaboración con el equipo de diseño para construir interfaces modernas, responsivas y alineadas con la identidad visual de la marca.",
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue",
          "Animation Libraries",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "ALMA SOFTWARE",
        period: "2019 - 2020",
        workMode: "Full-time · Remoto",
        context: "Desarrollo de soluciones e-commerce durante la pandemia",
        highlights: [
          "Desarrollo de tiendas online para negocios que necesitaban migrar rápidamente al canal digital.",
          "Implementación de funcionalidades de catálogo, pedidos y gestión de productos para operaciones comerciales básicas.",
          "Adaptación de soluciones tecnológicas para permitir la continuidad operativa de negocios durante el confinamiento.",
        ],
        technologies: ["Laravel", "Angular", "MySQL", "Bootstrap"],
      },
    ],
  },
  contact: {
    title: "Contacto",

    headlineTop: "Conversemos sobre",
    headlineBottom: "tu próximo proyecto",

    subtitle:
      "Trabajemos juntos. Si estás construyendo o mejorando un sistema, puedo aportar en el análisis, diseño y desarrollo para llevarlo a producción de forma confiable.",
    supportTitle: "Trabajo remoto internacional",
    supportText:
      "Experiencia trabajando con equipos distribuidos y sistemas empresariales, adaptándome a distintos contextos técnicos, zonas horarias y necesidades del negocio.",

    links: [
      {
        label: "Email",
        value: "dpanibra0@gmail.com",
        href: "mailto:dpanibra0@gmail.com",
        sublabel: "Respuesta en menos de 24h",
      },
     
    ],

    availability: "Disponible para proyectos internacionales — Remote",
  },

  footer: {
    copyright: "© 2026 David Panibra — Software Engineer",
    githubUrl: "https://github.com/dPanibra0",
    linkedinUrl: "https://www.linkedin.com/in/david-panibra-1bb87a1a4/",
  },
};
