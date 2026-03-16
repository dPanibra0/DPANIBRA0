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
      "Ingeniero de software enfocado en análisis de dominio y arquitectura backend, desarrollando sistemas completos desde la interacción del usuario hasta la lógica de negocio y persistencia de datos.",
    message:
      "Especialización en arquitecturas backend resilientes con Java y microservicios, diseñadas para entornos corporativos donde la confiabilidad, la consistencia de datos y la evolución del sistema son críticas.",
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
      "Ingeniero de software enfocado en comprender el dominio del negocio y traducir sus procesos, reglas y operaciones en sistemas de software claros y mantenibles.",
      "Trabajo diseñando soluciones end-to-end, desde la interacción del usuario con el producto hasta la arquitectura backend, la lógica de negocio y la persistencia de datos.",
      "Mi especialización está en backend empresarial con Java y microservicios, desarrollando servicios resilientes, integraciones entre sistemas y modelos de datos que reflejen correctamente la lógica del negocio.",
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
          "Análisis del dominio logístico y definición de la integración entre sistemas para el registro y sincronización de personas, paquetes, guías y transacciones.",
          "Diseño y desarrollo desde cero de dos microservicios en Java 21 bajo arquitectura hexagonal para integrar la plataforma logística externa con el sistema CORE de Olva.",
          "Coordinación técnica con los equipos responsables de ambas plataformas para definir flujos de datos, contratos de integración y validar el comportamiento del sistema antes de producción.",
          "Diseño y evolución del modelo de datos, incluyendo creación de nuevas tablas y ajustes a procedimientos almacenados en Oracle para soportar la nueva integración.",
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
          "Inicio como desarrollador fullstack construyendo componentes web y servicios backend para plataformas corporativas.",
          "Evolución a liderazgo técnico frontend en el proyecto Cepsa, coordinando el desarrollo de widgets en React integrados en la plataforma OpenText de la compañía.",
          "Diseño e implementación de APIs BFF en Java y Spring Boot para exponer información proveniente de sistemas corporativos SAP hacia el frontend.",
          "Desarrollo de microservicios backend para el sistema de gestión de pensiones de Habitat AFP, incluyendo módulos de procesamiento batch para archivos financieros de alto volumen enviados por entidades gubernamentales.",
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
        context:
          "Participación en el desarrollo de la nueva landing page corporativa.",
        highlights: [
          "Implementación de componentes visuales y animaciones web para la nueva página institucional.",
          "Desarrollo de secciones interactivas para mejorar la experiencia de usuario.",
          "Colaboración con el equipo de diseño para implementar interfaces modernas y responsivas.",
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
        context:
          "Desarrollo de soluciones de comercio electrónico durante el contexto de la pandemia, orientadas a la digitalización de tiendas.",
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
    headingPrimary: "Del análisis al sistema",
    headingSecondary: "en producción",
    intro:
      "Metodología estructurada que garantiza calidad, predictibilidad y resultados medibles en cada proyecto.",
    steps: [
      {
        step: "Paso 1",
        title: "Análisis técnico y dominio",
        description:
          "Comprensión del negocio, riesgos operativos y objetivos funcionales antes de definir soluciones.",
      },
      {
        step: "Paso 2",
        title: "Diseño arquitectónico corporativo",
        description:
          "Diseño alineado a estandares empresariales, escalabilidad y gobernanza técnica.",
      },
      {
        step: "Paso 3",
        title: "Implementación con calidad",
        description:
          "Desarrollo con pruebas, documentación y criterios de mantenibilidad desde el inicio.",
      },
      {
        step: "Paso 4",
        title: "Optimización y mejora continua",
        description:
          "Monitoreo, ajuste de rendimiento y evolución controlada para sostener estabilidad.",
      },
    ],
  },
  philosophy: {
    title: "Filosofia Técnica",
    headingPrimary: "Principios que guian",
    headingSecondary: "cada linea de arquitectura",
    intro:
      "No son solo buenas practicas. Son compromisos que definen la calidad de cada sistema entregado.",
    principles: [
      {
        icon: "domain",
        title: "Arquitectura Orientada al Dominio",
        description:
          "Sistemas que reflejan el negocio. Cada decisión técnica esta alineada con el modelo de dominio, facilitando evolución y mantenibilidad.",
      },
      {
        icon: "code",
        title: "Código Limpio y Mantenible",
        description:
          "Código legible, bien estructurado y documentado. Reduce deuda técnica y facilita la colaboración en equipos distribuidos.",
      },
      {
        icon: "shield",
        title: "Estabilidad y Consistencia",
        description:
          "Integridad de datos como prioridad absoluta. Transacciones robustas y prevención de estados inconsistentes en sistemas críticos.",
      },
      {
        icon: "scale",
        title: "Sistemas Escalables",
        description:
          "Arquitecturas preparadas para crecer con el negocio. Diseño que soporta incrementos de carga sin rediseño estructural.",
      },
      {
        icon: "resilience",
        title: "Resiliencia y Prevención",
        description:
          "Diseño anticipando fallos. Mecanismos de recuperación, reintentos inteligentes y degradación elegante ante errores.",
      },
      {
        icon: "global",
        title: "Estandares Internacionales",
        description:
          "Adherencia a mejores practicas globales. Experiencia con estandares corporativos como SOX, auditorias y compliance.",
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
