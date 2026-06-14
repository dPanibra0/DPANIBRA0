import type { PortfolioContent, PortfolioUiTranslations } from "../types";

export const esContent: PortfolioContent = {
  locale: "es",
  meta: {
    title: "David Panibra | Backend Java Microservices Engineer",
    description:
      "Construyo servicios en Java y Spring Boot para integraciones, procesamiento masivo de datos y flujos críticos de negocio, priorizando consistencia operativa, trazabilidad y estabilidad en producción.",
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
    microservices: "01//FILOSOFÍA_DE_INGENIERÍA",
    hexagonal: "02//NÚCLEO_HEXAGONAL",
    experience: "03//TRAYECTORIA_PROFESIONAL",
    projects: "04//CASOS_REALES_EN_PRODUCCIÓN",
    stack: "05//STACK_TÉCNICO",
    contact: "06//CONTACTO",
  },
  hero: {
    eyebrow: "Backend Java Microservices Engineer",
    availability: "Disponible para proyectos - Remote",
    title: "Backend Java y microservicios para sistemas empresariales",
    subtitle:
      "Construyo servicios en Java y Spring Boot para integraciones, procesamiento masivo de datos y flujos críticos de negocio, priorizando consistencia operativa, trazabilidad y estabilidad en producción.",
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
      "Trabajo con microservicios cuando ayudan a separar reglas de negocio, integrar plataformas y sostener operaciones críticas sin perder trazabilidad ni consistencia de datos.",
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
          "Métricas, logs y trazas para entender qué pasa y resolver rápido.",
      },
    ],
  },
  hexagonal: {
    headingPrimary: "Arquitectura hexagonal",
    headingSecondary: "diseñada para evolucionar",
    intro:
      "La uso cuando conviene separar con claridad qué parte del sistema resuelve negocio y qué parte solo conecta con tecnología, para poder cambiar integraciones sin romper reglas críticas.",
    points: [
      "Dominio: aquí viven las reglas del negocio, validaciones y decisiones que el sistema debe respetar siempre.",
      "Aplicación: aquí se orquestan los casos de uso paso a paso, sin mezclar la lógica del negocio con detalles técnicos.",
      "Infraestructura: aquí se conectan Oracle, APIs, colas, schedulers y servicios externos para ejecutar el flujo real.",
    ],
  },
  stack: {
    title: "Stack principal",
    headingPrimary: "Tecnologías aplicadas a",
    headingSecondary: "backend Java en producción",
    intro:
      "Stack orientado a servicios backend, integraciones corporativas, procesamiento batch y calidad sobre flujos de negocio con datos críticos.",
    categories: [
      {
        category: "Backend Java + datos",
        icon: "lucide:server",
        items: [
          {
            name: "Java 21",
            hint: "Servicios empresariales · LTS",
            icon: "simple-icons:openjdk",
          },
          { name: "Spring Boot", hint: "Microservicios · APIs REST", icon: "simple-icons:springboot" },
          { name: "Quarkus", hint: "Backend JVM liviano", icon: "simple-icons:quarkus" },
          { name: "Spring Batch", hint: "Procesos de alto volumen", icon: "simple-icons:spring" },
          { name: "Hibernate", hint: "Persistencia ORM", icon: "simple-icons:hibernate" },
          { name: "APIs REST", hint: "Contratos e integración", icon: "lucide:waypoints" },
          { name: "Oracle", hint: "Persistencia transaccional", icon: "simple-icons:oracle" },
          { name: "SQL avanzado", hint: "Consultas y validación", icon: "lucide:database" },
          { name: "Cobol Fundamentals", hint: "Legacy backend empresarial", icon: "lucide:cpu" },
          { name: "JCL Fundamentals", hint: "Procesos batch en mainframe", icon: "lucide:workflow" },
          { name: "Apache Kafka", hint: "Eventos distribuidos", icon: "simple-icons:apachekafka" },
          { name: "RabbitMQ", hint: "Mensajería confiable", icon: "simple-icons:rabbitmq" },
          { name: "SAP Integration", hint: "Integración con sistemas enterprise", icon: "lucide:plug-zap" },
        ],
      },
      {
        category: "Arquitectura + calidad",
        icon: "lucide:shield-check",
        items: [
          { name: "Arquitectura hexagonal", hint: "Puertos y adaptadores", icon: "lucide:hexagon" },
          { name: "Clean Architecture", hint: "Capas desacopladas", icon: "lucide:layers-3" },
          { name: "JUnit", hint: "Testing unitario", icon: "simple-icons:junit5" },
          { name: "Spock", hint: "Pruebas sobre flujos de negocio", icon: "lucide:flask-conical" },
          { name: "Pruebas de integración", hint: "Cobertura de escenarios críticos", icon: "lucide:test-tube-diagonal" },
          { name: "SonarQube", hint: "Control de calidad", icon: "simple-icons:sonarqube" },
        ],
      },
      {
        category: "Entrega y operación",
        icon: "lucide:rocket",
        items: [
          { name: "Docker", hint: "Contenedores para despliegue", icon: "simple-icons:docker" },
          { name: "Kubernetes", hint: "Orquestación y escalado", icon: "simple-icons:kubernetes" },
          { name: "Jenkins", hint: "Pipelines de integración", icon: "simple-icons:jenkins" },
          { name: "Azure", hint: "Entornos cloud corporativos", icon: "simple-icons:microsoftazure" },
        ],
      },
      {
        category: "Soporte frontend",
        icon: "lucide:monitor-smartphone",
        items: [
          { name: "React", hint: "Consumo de APIs y BFF", icon: "simple-icons:react" },
          { name: "TypeScript", hint: "Interfaces tipadas", icon: "simple-icons:typescript" },
          { name: "Astro", hint: "Sitios rápidos de presentación", icon: "simple-icons:astro" },
          { name: "Vue", hint: "Implementación de interfaces", icon: "simple-icons:vuedotjs" },
          { name: "Angular", hint: "Frontends corporativos", icon: "simple-icons:angular" },
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos Destacados",
    intro:
      "Casos donde el foco estuvo en traducir procesos de negocio complejos a servicios backend mantenibles, integraciones claras y datos consistentes en producción.",
    items: [
      {
        title: "Integración logística internacional entre dos plataformas",
        summary:
          "Dos microservicios para que la operación logística no dependa de cruces manuales entre plataformas.",
        problem:
          "Había que sincronizar personas, envíos, guías y eventos entre Olva Courier y un receptor en EE.UU. sin romper la operación.",
        architecture:
          "Dos microservicios en Java 21 con Spring Boot, arquitectura hexagonal y Oracle para aislar reglas de negocio, contratos y persistencia.",
        stack: "Java 21, Spring Boot, Arquitectura hexagonal, Oracle, APIs REST, Spock",
        challenges:
          "Lo delicado estuvo en los estados asincrónicos, la deduplicación y la trazabilidad entre plataformas.",
        solution:
          "Se definieron contratos claros, confirmaciones por etapa y pruebas sobre escenarios de negocio antes del pase a producción.",
        impact:
          "La integración quedó lista para operar con más trazabilidad y menos validación manual.",
      },
      {
        title: "Desarrollo del sistema de pago de pensiones a gran escala",
        summary:
          "Procesamiento financiero masivo de pensionados mediante procesos batch especializados, aplicando reglas de negocio complejas sobre grandes volúmenes de información.",
        problem:
          "El sistema debía procesar archivos masivos de pensiones dentro de ventanas operativas exigentes y con reglas distintas según la operación.",
        architecture:
          "Microservicios en Java y procesos Spring Batch sobre Oracle para separar validación, procesamiento y persistencia.",
        stack: "Java 17, Spring Batch, Oracle, SQL avanzado, Linux, CI/CD",
        challenges:
          "El punto crítico era controlar errores por lote, sostener reprocesos confiables y no perder consistencia financiera.",
        solution:
          "Se trabajaron servicios especializados, SQL orientado al volumen y validaciones de consistencia para ejecuciones recurrentes.",
        impact:
          "El flujo quedó más estable para volumen alto, con mejor control operativo sobre reprocesos.",
      },
      {
        title: "Pastoral Universitaria UNSA",
        summary:
          "Ecosistema digital de punta a punta: landing ya publicada y producto interno definido con app operativa y backend en Quarkus.",
        liveUrl: "https://www.pastoraluniversitariaunsa.org/",
        statusBadge: {
          label: "En Producción",
          tone: "blue",
        },
        problem:
          "La Pastoral Universitaria UNSA necesitaba comunicar actividades, noticias y contacto desde un solo punto, sin separar ese frente público del sistema interno de asistencia y gestión.",
        architecture:
          "Landing en Astro con Tailwind y Decap CMS para el frente público; aplicación interna en Angular y backend en Quarkus sobre Oracle para asistencia, roles y trazabilidad operativa.",
        stack: "Astro, Tailwind CSS, Decap CMS, Angular, Quarkus, Oracle",
        challenges:
          "Lo delicado fue lanzar una experiencia pública clara y mantenible sin romper la coherencia de un producto más amplio con flujos administrativos, permisos y control de asistencia.",
        solution:
          "Se estructuró como un ecosistema de producto: landing institucional para comunicación y captación, aplicación interna para gestión y un backend en Quarkus para reglas de negocio, permisos y persistencia.",
        impact:
          "La pastoral ya cuenta con presencia digital publicada y con una base de producto coherente para evolucionar su plataforma interna sin rehacer decisiones clave.",
      },
    ],
  },
  experience: {
    title: "Experiencia Profesional",
    headingPrimary: "Experiencia profesional ",
    headingSecondary: "en entornos corporativos",
    items: [
      {
        role: "Backend Developer",
        company: "LATAMTECH",
        period: "2025 - 2026",
        workMode: "Full-time · Remoto",
        context: "Integración logística internacional — Olva Courier",
        cover: {
          src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-latamtech.png",
          alt: "Vista de dashboard logístico con trazabilidad de envíos y eventos en tiempo real",
        },
        highlights: [
          "Análisis del dominio logístico para entender cómo se registran y procesan los envíos, definiendo la **integración entre una plataforma externa y el sistema CORE** de la empresa.",
          "Diseño y desarrollo desde cero de **dos microservicios en Java 21** bajo **arquitectura hexagonal** para procesar eventos logísticos y sincronizar información crítica del negocio.",
          "**Coordinación técnica entre equipos de ambas plataformas** para definir flujos de datos, contratos de integración y validar el comportamiento del sistema antes de su paso a producción.",
          "Diseño y evolución del **modelo de datos en Oracle**, incluyendo tablas y ajustes en procedimientos almacenados para registrar la información de forma consistente con la lógica del negocio.",
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
        role: "Full Stack Developer",
        company: "NTT DATA",
        period: "2021 - 2025",
        workMode: "Full-time · Híbrido",
        context:
          "Proyectos internacionales — Cepsa (España) · Habitat AFP (Chile)",
        cover: {
          src: "https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/experiencia/exp-nttdata.png",
          alt: "Panel corporativo con métricas de negocio e integración entre sistemas empresariales",
        },
        highlights: [
          "Desarrollo de **microservicios backend en Java y Spring Boot** para Habitat AFP, procesando archivos masivos y aplicando reglas de negocio sobre información financiera en Oracle.",
          "Participación en **procesos batch con Spring Batch** para el sistema de pago de pensiones, diferenciando flujos según operaciones como bonos, descuentos y haberes.",
          "Diseño e implementación de **APIs BFF en Java y Spring Boot** para exponer información proveniente de sistemas SAP hacia aplicaciones del negocio en Cepsa.",
          "Experiencia previa fullstack y **coordinación técnica frontend en React**, útil para alinear contratos entre consumo de interfaz y servicios backend.",
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
          "Implementación de **componentes visuales y animaciones** para la página institucional, mejorando la interacción del usuario con el sitio.",
          "Desarrollo de **secciones interactivas** orientadas a presentar contenido de forma clara y atractiva.",
          "Colaboración con el equipo de diseño para construir **interfaces modernas, responsivas y alineadas con la identidad visual** de la marca.",
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
          "Desarrollo de **tiendas online** para negocios que necesitaban migrar rápidamente al canal digital.",
          "Implementación de funcionalidades de **catálogo, pedidos y gestión de productos** para operaciones comerciales básicas.",
          "Adaptación de soluciones tecnológicas para permitir la **continuidad operativa de negocios durante el confinamiento**.",
        ],
        technologies: ["Laravel", "Angular", "MySQL", "Bootstrap"],
      },
    ],
  },
  contact: {
    headlineTop: "Conversemos sobre",
    headlineBottom: "tu próximo proyecto",

    subtitle:
      "Si estás construyendo o modernizando una plataforma empresarial, puedo aportar en servicios Java, integraciones entre sistemas y flujos de datos que necesitan llegar a producción con confianza.",
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
    copyright: "© 2026 David Panibra — Backend Java Microservices",
    githubUrl: "https://github.com/dPanibra0",
    linkedinUrl: "https://www.linkedin.com/in/david-panibra-1bb87a1a4/",
  },
};

export const esUi: PortfolioUiTranslations = {
  navbar: {
    menuLabel: "Abrir menú",
    logoAlt: "dPanibra0 logo",
  },
  experience: {
    detailsLabel: "Ver más detalle",
  },
  projects: {
    headingTop: "Decisiones técnicas con",
    headingBottom: "impacto empresarial real",
    sectionTags: ["Logística · Microservicios", "Finanzas · Batch", "Comunidad · Ecosistema"],
    fallbackProject: {
      title: "Ver más proyectos empresariales",
      impact:
        "Accede a la sección de detalle para explorar más casos, decisiones técnicas y resultados de proyectos.",
      stack: "Arquitectura, Resiliencia, Delivery",
    },
    detailsLabel: "VER DETALLE",
  },
  contact: {
    formAriaLabel: "Formulario de contacto por email",
    projectInputLabel: "Cuéntame sobre tu proyecto",
    placeholders: [
      "Veamos tu próximo proyecto",
      "Cuéntame sobre tu negocio",
      "Qué estás construyendo hoy?",
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
      blog: "Blog técnico",
    },
    backLabel: "Volver a experiencia",
    backToTopLabel: "Ir al inicio",
    pageTitle: "Detalles de backend Java | David Panibra",
    pageDescription:
      "Detalle de experiencia, proyectos y notas técnicas sobre backend Java, microservicios e integraciones empresariales.",
    projectsOverline: "PROYECTOS_EXTENDIDOS",
    projectsTitle: "Casos donde el backend mueve la operación",
    projectsIntro:
      "Una lectura más corta y directa de proyectos reales: qué había en juego, cómo se resolvió y dónde estuvo la complejidad técnica.",
    projectLabels: {
      problem: "Lo que estaba en juego",
      architecture: "Base técnica",
      challenges: "Lo delicado",
      solution: "Cómo se resolvió",
      impact: "Lo que habilitó",
      stack: "Stack aplicado",
      liveSite: "Sitio activo",
    },
    blogOverline: "BLOG_TÉCNICO",
    blogTitle: "Notas sobre backend y arquitectura",
    blogIntro:
      "Notas breves sobre microservicios, integraciones y decisiones de arquitectura tomadas en contexto real.",
    blogPosts: [
      {
        title: "Pruebas de integración para flujos de negocio en microservicios",
        context:
          "Dónde poner el foco cuando el riesgo real está en validaciones, ramas de negocio y sincronización entre servicios.",
        content:
          "En integraciones empresariales, probar solo el caso feliz no alcanza. El riesgo aparece en validaciones por tipo de operación, datos incompletos, orden de eventos o respuestas parciales entre plataformas. Conviene modelar pruebas alrededor del flujo de negocio: qué entra, qué decisión toma el servicio, qué se persiste y qué salida se publica o devuelve. Herramientas como Spock ayudan a cubrir ramas con claridad. Conclusión: la prueba vale más cuando verifica decisiones críticas del negocio y no solo la respuesta HTTP.",
        tag: "Testing backend",
        status: "Nota completa",
      },
      {
        title: "Arquitecturas evolutivas para plataformas de negocio",
        context:
          "Uso práctico de arquitectura hexagonal y clean architecture, con tradeoffs reales de complejidad, testing y entrega.",
        content:
          "La arquitectura hexagonal y clean architecture protegen el dominio mediante puertos y adaptadores, separando reglas de negocio de frameworks, bases de datos y transporte. Eso mejora pruebas unitarias y facilita reemplazar adaptadores sin reescribir el core. El tradeoff es claro: suma capas, contratos y código de ensamblaje, algo que puede frenar equipos pequeños o productos tempranos. En contextos enterprise con integraciones múltiples y vida útil larga, el costo inicial suele compensarse. Conclusión: conviene aplicarla de forma selectiva, priorizando módulos críticos y evitando sobrearquitectura en flujos simples.",
        tag: "Arquitectura",
        status: "Nota completa",
      },
      {
        title: "Contexto real sobre Spring Framework 4 y Spring Boot",
        context:
          "Aclaración de versionado para evitar confusiones entre contexto histórico y stack vigente.",
        content:
          "Spring Framework 4 fue lanzado en 2013 y su soporte activo terminó hace años; por eso no corresponde presentarlo como novedad actual. En su momento aportó soporte para Java 8 y una base más madura para aplicaciones empresariales. Hoy, las novedades relevantes llegan por Spring Framework 6 y Spring Boot 3, alineados con Jakarta EE 9+, Java 17+, AOT y runtime nativo con GraalVM. Para equipos enterprise, actualizar responde a seguridad, compatibilidad y performance operativa. Conclusión: si el objetivo es modernizar, la conversación correcta es Spring 6/Boot 3; Spring 4 queda como contexto histórico.",
        tag: "Spring",
        status: "Nota completa",
      },
      {
        title: "Spring vs Quarkus: comparación técnica para decidir",
        context:
          "Comparativa de arranque, memoria, experiencia de desarrollo y ecosistema para elegir según contexto.",
        content:
          "En JVM tradicional, Spring Boot ofrece un ecosistema más amplio y una curva conocida para muchos equipos. Quarkus prioriza tiempos de arranque bajos y menor huella de memoria, sobre todo con compilación nativa en GraalVM, algo útil en serverless y alta densidad de contenedores. El tradeoff es una mayor complejidad de pipeline y validaciones extra para algunas librerías en modo nativo. Ambos tienen hot reload y buen soporte de testing, pero Spring suele ganar en ejemplos corporativos y talento disponible. Conclusión: Spring Boot encaja mejor en plataformas empresariales amplias; Quarkus destaca cuando startup rápido y ahorro de memoria pesan más.",
        tag: "Spring vs Quarkus",
        status: "Nota completa",
      },
    ],
  },
};
