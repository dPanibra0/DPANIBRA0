import type { PortfolioContent, PortfolioUiTranslations } from "../types";

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
    microservices: "01//FILOSOFIA_DE_INGENIERÍA",
    hexagonal: "02//NÚCLEO_HEXAGONAL",
    experience: "03//TRAYECTORIA_PROFESIONAL",
    projects: "04//BITACORA_DE_CONSTRUCCION",
    stack: "05//STACK_TÉCNICO",
    contact: "06//CONTACTO",
  },
  hero: {
    eyebrow: "Backend Java Microservices Developer",
    availability: "Disponible para proyectos - Remote",
    title: "Ingeniería Backend para Plataformas Empresariales",
    subtitle:
      "Transformo necesidades de negocio en servicios robustos: lógica de negocio bien definida, integraciones confiables y entregas mantenibles para entornos empresariales.",
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
    headingSecondary: "con criterios de negocio",
    intro:
      "Mi enfoque de ingeniería es simple: un sistema empresarial debe crecer sin fricción, resistir fallos sin detener la operación y ofrecer visibilidad completa para decidir rápido.",
    pillars: [
      {
        title: "Escalable",
        description:
          "Escala solo el servicio que lo necesita, sin agrandar todo el sistema.",
      },
      {
        title: "Resiliente",
        description:
          "Si un servicio falla, el resto sigue operando y el negocio no se detiene.",
      },
      {
        title: "Observable",
        description:
          "Métricas, logs y trazas para entender que pasa y resolver rápido.",
      },
    ],
  },
  hexagonal: {
    headingPrimary: "Arquitectura hexagonal",
    headingSecondary: "diseñada para evolucionar",
    intro:
      "Para lograrlo, divido la arquitectura en tres elementos que trabajan juntos: dominio, aplicación e infraestructura.",
    points: [
      "Define las reglas del negocio; que debe pasar, que no, y por que.",
      "Coordina los casos de uso: toma una necesidad del negocio y la ejecuta paso a paso con orden.",
      "Conecta el sistema con base de datos, APIs, colas y servicios externos.",
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
        category: "Frontend + mobile",
        icon: "lucide:monitor-smartphone",
        items: [
          { name: "React", hint: "Interfaces modulares · Producto", icon: "simple-icons:react" },
          { name: "Angular", hint: "Frontends enterprise · Dashboards", icon: "simple-icons:angular" },
          { name: "Vue", hint: "Experiencias ligeras · Landing UX", icon: "simple-icons:vuedotjs" },
          { name: "Astro", hint: "Landing pages · Performance", icon: "simple-icons:astro" },
          { name: "TypeScript", hint: "Typesafe UI engineering", icon: "simple-icons:typescript" },
          { name: "Tailwind CSS", hint: "Design systems · Velocity", icon: "simple-icons:tailwindcss" },
          { name: "Firebase", hint: "BaaS · Auth · Realtime flows", icon: "simple-icons:firebase" },
        ],
      },
      {
        category: "Backend",
        icon: "lucide:server",
        items: [
          {
            name: "Java 21",
            hint: "Servicios enterprise · LTS",
            icon: "simple-icons:openjdk",
          },
          { name: "Go", hint: "Servicios concurrentes · Performance", icon: "simple-icons:go" },
          { name: "PHP", hint: "Aplicaciones web · Delivery rapido", icon: "simple-icons:php" },
          { name: "Spring Boot", hint: "Microservices · REST APIs", icon: "simple-icons:springboot" },
          { name: "Quarkus", hint: "JVM cloud-native · Startup rapido", icon: "simple-icons:quarkus" },
          { name: "Laravel", hint: "Aplicaciones de negocio · MVC", icon: "simple-icons:laravel" },
          { name: "Hibernate", hint: "Persistence · ORM", icon: "simple-icons:hibernate" },
          { name: "APIs REST", hint: "Contracts · Integracion", icon: "lucide:waypoints" },
          { name: "Oracle", hint: "Core transactional storage", icon: "simple-icons:oracle" },
          { name: "PostgreSQL", hint: "Operational data · Services", icon: "simple-icons:postgresql" },
          { name: "MongoDB", hint: "Document data · Flexible schemas", icon: "simple-icons:mongodb" },
          { name: "SQL avanzado", hint: "Queries · Performance", icon: "lucide:database" },
          { name: "Redis", hint: "Cache · Throughput", icon: "simple-icons:redis" },
          { name: "Spring Batch", hint: "Procesos de alto volumen", icon: "simple-icons:spring" },
          { name: "Apache Kafka", hint: "Eventos distribuidos", icon: "simple-icons:apachekafka" },
          { name: "RabbitMQ", hint: "Mensajeria confiable", icon: "simple-icons:rabbitmq" },
          { name: "SAP Integration", hint: "Sistemas enterprise conectados", icon: "lucide:plug-zap" },
        ],
      },
      {
        category: "Testing / arquitectura",
        icon: "lucide:shield-check",
        items: [
          { name: "Arquitectura hexagonal", hint: "Puertos y adaptadores", icon: "lucide:hexagon" },
          { name: "Clean Architecture", hint: "Capas desacopladas · Evolucion", icon: "lucide:layers-3" },
          { name: "JUnit", hint: "Unit testing", icon: "simple-icons:junit5" },
          { name: "Spock", hint: "BDD · Groovy", icon: "lucide:flask-conical" },
          { name: "Pruebas de integracion", hint: "Flujos criticos · Servicios", icon: "lucide:test-tube-diagonal" },
          { name: "SonarQube", hint: "Code quality gates", icon: "simple-icons:sonarqube" },
        ],
      },
      {
        category: "Despliegue + AI",
        icon: "lucide:rocket",
        items: [
          { name: "Docker", hint: "Containers · Deployment", icon: "simple-icons:docker" },
          { name: "Kubernetes", hint: "Orchestration · Scale", icon: "simple-icons:kubernetes" },
          { name: "Jenkins", hint: "Pipelines · Automation", icon: "simple-icons:jenkins" },
          { name: "Azure", hint: "Cloud environments", icon: "simple-icons:microsoftazure" },
          { name: "OpenAI API", hint: "LLM features · Automation", icon: "simple-icons:openai" },
          { name: "Claude", hint: "Research · Content workflows", icon: "lucide:bot-message-square" },
          { name: "OpenCode", hint: "Agentic coding · CLI workflows", icon: "lucide:square-terminal" },
          { name: "Cursor", hint: "AI IDE · Pair programming", icon: "simple-icons:cursor" },
          { name: "GitHub Copilot", hint: "Pair programming asistido", icon: "simple-icons:github" },
          { name: "Prompt engineering", hint: "Workflows reproducibles", icon: "lucide:brain-circuit" },
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
    headingPrimary: "Experiencia profesional ",
    headingSecondary: "en entornos corporativos",
    items: [
      {
        role: "Backend Engineer",
        company: "LATAMTECH",
        period: "2025 - 2026",
        workMode: "Full-time · Remoto",
        context: "Integración logística internacional — Olva Courier",
        cover: {
          src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-latamtech.png",
          alt: "Vista de dashboard logístico con trazabilidad de envíos y eventos en tiempo real",
        },
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
        cover: {
          src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-nttdata.png",
          alt: "Panel corporativo con métricas de negocio e integración entre sistemas empresariales",
        },
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
        cover: {
          src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-multiplica.png",
          alt: "Composición visual de landing corporativa con módulos de contenido y llamada a la acción",
        },
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
        cover: {
          src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-alma.png",
          alt: "Ilustración isométrica de una plataforma digital para operaciones de comercio electrónico",
        },
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
    headlineTop: "Conversemos sobre",
    headlineBottom: "tu próximo proyecto",

    subtitle:
      "Si estás construyendo, modernizando o escalando una plataforma, te ayudo a definir una solución técnica clara y llevarla a producción con confianza.",
    links: [
      {
        label: "Email",
        value: "dpanibra0@gmail.com",
        href: "mailto:dpanibra0@gmail.com",
        sublabel: "Respuesta en menos de 24h",
      },
    ],

    availability: "Disponible para proyectos — Remoto",
  },

  footer: {
    copyright: "© 2026 David Panibra — Software Engineer",
    githubUrl: "https://github.com/dPanibra0",
    linkedinUrl: "https://www.linkedin.com/in/david-panibra-1bb87a1a4/",
  },
};

export const esUi: PortfolioUiTranslations = {
  navbar: {
    menuLabel: "Abrir menu",
    logoAlt: "dPanibra0 logo",
  },
  experience: {
    detailsLabel: "Ver mas detalle",
  },
  projects: {
    headingTop: "Decisiones tecnicas con",
    headingBottom: "impacto empresarial real",
    sectionTags: ["Logistica · Microservicios", "Finanzas · Batch"],
    fallbackProject: {
      title: "Ver mas proyectos empresariales",
      impact:
        "Accede a la seccion de detalle para explorar mas casos, decisiones tecnicas y resultados de proyectos.",
      stack: "Arquitectura, Resiliencia, Delivery",
    },
    detailsLabel: "VER DETALLE",
  },
  contact: {
    formAriaLabel: "Formulario de contacto por email",
    projectInputLabel: "Cuentame sobre tu proyecto",
    placeholders: [
      "Veamos tu próximo proyecto",
      "Cuentame sobre tu negocio",
      "Qué estas construyendo hoy?",
    ],
    submitLabel: "Enviar",
    emailSubject: "Nuevo proyecto desde dpanibra.com",
    emailBodyTemplate:
      "Hola David,%0D%0A%0D%0A{{projectBrief}}%0D%0A%0D%0AGracias.",
  },
  floatingActions: {
    ariaLabel: "Quick actions",
    linkedin: "Abrir perfil de LinkedIn",
    github: "Abrir perfil de GitHub",
    email: "Enviar correo",
    contact: "Ir a contacto",
    scrollTop: "Volver arriba",
  },
  techCarousel: {
    ariaLabel: "Technology icons carousel",
  },
  detalles: {
    tabsAriaLabel: "Secciones de detalle",
    tabPanelsAriaLabel: "Contenido de detalle",
    tabs: {
      experiencia: "Experiencia laboral",
      proyectos: "Proyectos",
      blog: "Blog tecnico",
    },
    backLabel: "Volver a experiencia",
    backToTopLabel: "Ir al inicio",
    pageTitle: "Detalles profesionales | David Panibra",
    pageDescription:
      "Seccion de detalle para experiencia, proyectos y blog tecnico de David Panibra.",
    projectsOverline: "PROYECTOS_EXTENDIDOS",
    projectsTitle: "Arquitectura, ejecucion e impacto",
    projectsIntro:
      "Detalle de problemas, restricciones y decisiones aplicadas para convertir requerimientos criticos en sistemas operativos confiables.",
    projectLabels: {
      problem: "Problema",
      architecture: "Arquitectura",
      challenges: "Retos",
      solution: "Solucion",
      impact: "Impacto",
      stack: "Stack aplicado",
    },
    blogOverline: "BLOG_TECNICO",
    blogTitle: "Notas sobre backend y arquitectura",
    blogIntro:
      "Espacio para compartir aprendizajes practicos sobre microservicios, integraciones y decisiones de arquitectura en produccion.",
    blogPosts: [
      {
        title: "Sistemas de diseno que escalan sin romper consistencia",
        context:
          "Practicas reales para alinear producto, UX y desarrollo con reglas operables, accesibilidad y gobierno de componentes.",
        content:
          "Un sistema de diseno solido combina tres capas: fundamentos (tipografia, color, espaciado), componentes reutilizables con API estable y documentacion de patrones de uso. En equipos grandes, el punto critico no es solo disenar botones, sino definir ownership, versionado y politicas de adopcion para evitar forks de componentes. A nivel operativo, integrar tokens de diseno al pipeline reduce divergencias entre Figma y codigo y facilita auditorias de accesibilidad (contraste, foco visible, navegacion por teclado). Conclusion: el valor real aparece cuando el sistema de diseno se gestiona como producto interno con metricas de adopcion y calidad, no como biblioteca estatica.",
        tag: "Sistemas de diseno",
        status: "Nota completa",
      },
      {
        title: "Arquitecturas evolutivas para plataformas de negocio",
        context:
          "Uso practico de arquitectura hexagonal y clean architecture, con tradeoffs reales de complejidad, testing y tiempos de entrega.",
        content:
          "La arquitectura hexagonal y clean architecture ayudan a proteger el dominio mediante puertos y adaptadores, separando reglas de negocio de frameworks, bases de datos y transporte. Esta separacion mejora pruebas unitarias y facilita reemplazar adaptadores sin reescribir el core. El tradeoff es claro: aumenta la cantidad de capas, contratos y codigo de ensamblaje, lo que puede frenar equipos pequenos o productos en fase temprana. En contextos enterprise con integraciones multiples y vida util larga, el costo inicial suele compensarse por mantenibilidad y menor acoplamiento. Conclusion: conviene aplicar el patron de forma selectiva, priorizando modulos criticos de negocio y evitando sobrearquitectura en flujos simples.",
        tag: "Arquitectura",
        status: "Nota completa",
      },
      {
        title: "Contexto real sobre Spring Framework 4 y Spring Boot",
        context:
          "Aclaracion de versionado para evitar confusiones: que aporto Spring 4 historicamente y donde estan hoy las novedades relevantes.",
        content:
          "Spring Framework 4 fue lanzado en 2013 y su soporte activo termino hace varios anos; por eso no corresponde presentarlo como novedad actual. En su momento introdujo mejoras como soporte para Java 8, refinamientos en configuracion y una base mas madura para aplicaciones empresariales. Hoy, las novedades que impactan proyectos nuevos suelen venir por Spring Framework 6 y Spring Boot 3 (alineados con Jakarta EE 9+, Java 17+, AOT y soporte para runtime nativo con GraalVM). Para equipos enterprise, la decision practica es actualizar por seguridad, compatibilidad y performance operativa, no por seguir una etiqueta de version antigua. Conclusion: si el objetivo es modernizar, la conversacion correcta es Spring 6/Boot 3; Spring 4 es contexto historico.",
        tag: "Spring",
        status: "Nota completa",
      },
      {
        title: "Spring vs Quarkus: comparacion tecnica para decidir",
        context:
          "Comparativa veridica de arranque, memoria, experiencia de desarrollo y ecosistema para elegir segun contexto.",
        content:
          "En JVM tradicional, Spring Boot ofrece un ecosistema mas amplio (Spring Data, Security, Batch, Cloud) y una curva conocida para muchos equipos. Quarkus prioriza tiempos de arranque bajos y menor huella de memoria, especialmente cuando se usa compilacion nativa con GraalVM, ventaja util en serverless y alta densidad de contenedores. Como tradeoff, build nativo puede aumentar complejidad de pipeline y tiempos de compilacion, y algunas librerias Java requieren validacion adicional en modo nativo. En DX, ambos tienen hot reload y buen soporte de testing, pero Spring suele ganar en disponibilidad de ejemplos corporativos y talento en mercado. Conclusion: Spring Boot encaja mejor para plataformas empresariales amplias y estables; Quarkus destaca cuando startup rapido y ahorro de memoria son objetivos de primer orden.",
        tag: "Spring vs Quarkus",
        status: "Nota completa",
      },
    ],
  },
};
