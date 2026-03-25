import type { PortfolioContent } from "./types";

export const esContent: PortfolioContent = {
  locale: "es",
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
  overlines: {
    about: "SOBRE MI",
    stack: "STACK TÉCNICO",
    projects: "PROYECTOS DESTACADOS",
    experience: "EXPERIENCIA PROFESIONAL",
    process: "PROCESO DE TRABAJO",
    philosophy: "FILOSOFÍA DE INGENIERÍA",
    contact: "CONTACTO",
  },
  hero: {
    eyebrow: "Ingeniería de software orientada al dominio",
    availability: "Disponible para proyectos - Remote",
    title: "Diseño de Sistemas Empresariales Escalables",
    subtitle:
      "Ingeniero de software enfocado en analizar el negocio y diseñar sistemas completos, desde la experiencia del usuario hasta la lógica que procesa la información y la almacena de forma consistente.",
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
  about: {
    title: "Sobre mí",
    headingPrimary: "Ingeniería de software para",
    headingSecondary: "sistemas empresariales complejos",
    paragraphs: [
      "Ingeniero de software enfocado en comprender cómo funciona el negocio, sus procesos y reglas, para traducirlos en sistemas que resuelvan problemas reales de forma clara y mantenible.",
      "Diseño soluciones de extremo a extremo, considerando todo el flujo del sistema: desde la interacción del usuario con la aplicación hasta la forma en que los datos son procesados y almacenados.",
      "Mi especialización está en backend con Java y microservicios, construyendo servicios que procesan información crítica, se integran con otros sistemas y mantienen la consistencia de los datos en entornos empresariales.",
    ],

    cards: [
      {
        title: "Análisis de Dominio",
        subtitle: "Procesos · Reglas · Modelado",
        icon: "globe",
      },
      {
        title: "Arquitectura de Sistemas",
        subtitle: "Microservices · APIs · Integración",
        icon: "database",
      },
      {
        title: "Backend Resiliente",
        subtitle: "Java · Spring Boot · Oracle",
        icon: "shield",
      },
      {
        title: "Sistemas Empresariales",
        subtitle: "Consistencia · Escalabilidad · Mantenibilidad",
        icon: "backend",
      },
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
  process: {
    title: "Proceso de Trabajo",
    headingPrimary: "Del análisis al sistema",
    headingSecondary: "en producción",
    intro:
      "Forma de trabajo enfocada en entender el negocio, diseñar soluciones coherentes y llevarlas a producción de forma controlada y mantenible.",
    steps: [
      {
        step: "Paso 1",
        title: "Comprensión del dominio",
        description:
          "Análisis de cómo funciona el negocio, sus procesos, actores y reglas, para entender qué problema se debe resolver antes de proponer una solución técnica.",
      },
      {
        step: "Paso 2",
        title: "Diseño del sistema",
        description:
          "Definición de la arquitectura considerando todo el flujo: interacción del usuario, servicios backend, integraciones y modelo de datos.",
      },
      {
        step: "Paso 3",
        title: "Implementación del sistema",
        description:
          "Desarrollo de servicios y componentes con foco en claridad, pruebas y mantenibilidad, asegurando que la solución refleje correctamente la lógica del negocio.",
      },
      {
        step: "Paso 4",
        title: "Evolución en producción",
        description:
          "Monitoreo y mejora continua del sistema, ajustando rendimiento, corrigiendo problemas y permitiendo su evolución sin afectar la estabilidad.",
      },
    ],
  },
  philosophy: {
    title: "Filosofía de Ingeniería",
    headingPrimary: "Principios para diseñar",
    headingSecondary: "sistemas empresariales",
    intro:
      "Principios que guían cómo analizo, diseño e implemento sistemas que deben ser confiables, mantenibles y alineados al negocio.",
    principles: [
      {
        icon: "domain",
        title: "El sistema refleja el negocio",
        description:
          "El software debe representar correctamente los procesos y reglas del negocio. Un mal modelo de dominio genera complejidad y errores a largo plazo.",
      },
      {
        icon: "global",
        title: "Pensar en el sistema completo",
        description:
          "Cada decisión considera todo el flujo: usuario, servicios, integraciones y datos. No se diseñan piezas aisladas, sino soluciones completas.",
      },
      {
        icon: "code",
        title: "Claridad sobre complejidad",
        description:
          "El código debe ser entendible y mantenible. La simplicidad bien aplicada reduce errores y facilita la evolución del sistema.",
      },
      {
        icon: "shield",
        title: "Consistencia de datos como prioridad",
        description:
          "En sistemas empresariales, los datos deben ser correctos y confiables. Se prioriza la integridad sobre soluciones rápidas o incompletas.",
      },
      {
        icon: "resilience",
        title: "Diseñar para fallos",
        description:
          "Los sistemas deben seguir funcionando incluso cuando algo falla. Se consideran errores, reintentos y recuperación desde el diseño.",
      },
      {
        icon: "scale",
        title: "Preparado para crecer",
        description:
          "Las soluciones se diseñan para evolucionar con el negocio, evitando rediseños completos cuando aumentan la carga o la complejidad.",
      },
    ],
  },
  contact: {
    title: "Contacto",
    headlineTop: "Hablemos sobre",
    headlineBottom: "tu próximo proyecto",
    subtitle:
      "Colaboraciones corporativas, oportunidades internacionales y trabajo remoto.",
    supportTitle: "Trabajo Remoto Internacional",
    supportText:
      "Experiencia con equipos distribuidos en multiples zonas horarias. Adaptabilidad a culturas corporativas y metodologías globales.",
    links: [
      {
        label: "Email",
        value: "dpanibra0@gmail.com",
        href: "mailto:dpanibra0@gmail.com",
        sublabel: "Respuesta en menos de 24h",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/david-panibra",
        href: "https://www.linkedin.com/in/david-panibra-1bb87a1a4/",
        sublabel: "Perfil profesional completo",
      },
      {
        label: "GitHub",
        value: "github.com/dPanibra0",
        href: "https://github.com/dPanibra0",
        sublabel: "Proyectos y contribuciones",
      },
    ],
    availability: "Disponible para proyectos - Remote",
  },
  footer: {
    copyright: "2026 Backend Portfolio. All rights reserved.",
    githubUrl: "https://github.com/dPanibra0",
    linkedinUrl: "https://linkedin.com",
  },
};
