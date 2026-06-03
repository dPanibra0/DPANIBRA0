import type { PortfolioContent, PortfolioUiTranslations } from "../types";

export const esContent: PortfolioContent = {
  locale: "es",
  meta: {
    title: "David Panibra | Backend Java Microservices Engineer",
    description:
      "Backend Java orientado a microservicios e integraciones empresariales. Construyo servicios con Spring Boot, reglas de negocio claras y consistencia de datos para operaciones criticas en produccion.",
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
    projects: "04//CASOS_REALES_EN_PRODUCCION",
    stack: "05//STACK_TÉCNICO",
    contact: "06//CONTACTO",
  },
  hero: {
    eyebrow: "Backend Java Microservices Engineer",
    availability: "Disponible para proyectos - Remote",
    title: "Backend Java y microservicios para sistemas empresariales",
    subtitle:
      "Construyo servicios en Java y Spring Boot para integraciones, procesamiento de datos y flujos criticos donde importan la consistencia operativa, las reglas de negocio y la estabilidad en produccion.",
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
      "Trabajo con microservicios cuando ayudan a separar reglas de negocio, integrar plataformas y sostener operaciones criticas sin perder trazabilidad ni consistencia de datos.",
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
      "La uso cuando conviene separar con claridad que parte del sistema resuelve negocio y que parte solo conecta con tecnologia, para poder cambiar integraciones sin romper reglas criticas.",
    points: [
      "Dominio: aqui viven las reglas del negocio, validaciones y decisiones que el sistema debe respetar siempre.",
      "Aplicacion: aqui se orquestan los casos de uso paso a paso, sin mezclar la logica del negocio con detalles tecnicos.",
      "Infraestructura: aqui se conectan Oracle, APIs, colas, schedulers y servicios externos para ejecutar el flujo real.",
    ],
  },
  stack: {
    title: "Stack principal",
    headingPrimary: "Tecnologias aplicadas a",
    headingSecondary: "backend Java en produccion",
    intro:
      "Stack orientado a servicios backend, integraciones corporativas, procesamiento batch y calidad sobre flujos de negocio con datos criticos.",
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
          { name: "APIs REST", hint: "Contratos e integracion", icon: "lucide:waypoints" },
          { name: "Oracle", hint: "Persistencia transaccional", icon: "simple-icons:oracle" },
          { name: "SQL avanzado", hint: "Consultas y validacion", icon: "lucide:database" },
          { name: "Apache Kafka", hint: "Eventos distribuidos", icon: "simple-icons:apachekafka" },
          { name: "RabbitMQ", hint: "Mensajeria confiable", icon: "simple-icons:rabbitmq" },
          { name: "SAP Integration", hint: "Integracion con sistemas enterprise", icon: "lucide:plug-zap" },
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
          { name: "Pruebas de integracion", hint: "Cobertura de escenarios criticos", icon: "lucide:test-tube-diagonal" },
          { name: "SonarQube", hint: "Control de calidad", icon: "simple-icons:sonarqube" },
        ],
      },
      {
        category: "Entrega y operacion",
        icon: "lucide:rocket",
        items: [
          { name: "Docker", hint: "Contenedores para despliegue", icon: "simple-icons:docker" },
          { name: "Kubernetes", hint: "Orquestacion y escalado", icon: "simple-icons:kubernetes" },
          { name: "Jenkins", hint: "Pipelines de integracion", icon: "simple-icons:jenkins" },
          { name: "Azure", hint: "Entornos cloud corporativos", icon: "simple-icons:microsoftazure" },
        ],
      },
      {
        category: "Soporte frontend",
        icon: "lucide:monitor-smartphone",
        items: [
          { name: "React", hint: "Consumo de APIs y BFF", icon: "simple-icons:react" },
          { name: "TypeScript", hint: "Interfaces tipadas", icon: "simple-icons:typescript" },
          { name: "Astro", hint: "Sitios rapidos de presentacion", icon: "simple-icons:astro" },
          { name: "Vue", hint: "Implementacion de interfaces", icon: "simple-icons:vuedotjs" },
          { name: "Angular", hint: "Frontends corporativos", icon: "simple-icons:angular" },
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos Destacados",
    intro:
      "Casos donde el foco estuvo en traducir procesos de negocio complejos a servicios backend mantenibles, integraciones claras y datos consistentes en produccion.",
    items: [
      {
        title: "Integración logistica internacional entre dos plataformas",
        summary:
          "Integración de la plataforma de Olva Courier con un sistema externo de recepcion de envios en EE.UU.",
        problem:
          "La operacion necesitaba registrar eventos logisticos y sincronizar informacion entre la plataforma de Olva Courier y un sistema externo de recepcion de envios en EE.UU. sin depender de controles manuales.",
        architecture:
          "Dos microservicios en Java 21 con Spring Boot y arquitectura hexagonal para separar reglas de negocio, contratos de integracion y persistencia sobre Oracle.",
        stack: "Java 21, Spring Boot, Arquitectura hexagonal, Oracle, APIs REST, Spock",
        challenges:
          "Mantener consistencia entre personas, envios, guias y transacciones, evitando duplicidades y validando contratos entre dos plataformas con estados asincronicos.",
        solution:
          "Se definieron flujos de integracion con confirmaciones por etapa, evolucion del modelo de datos en Oracle y pruebas sobre escenarios de negocio para validar el comportamiento antes de produccion.",
        impact:
          "La integracion quedo preparada para registrar y sincronizar informacion critica del negocio con mayor trazabilidad y menos dependencia de validaciones manuales.",
      },
      {
        title: "Desarrollo del sistema de pago de pensiones a gran escala",
        summary:
          "Microservicios y Spring Batch para procesar archivos masivos con reglas de negocio distintas segun tipo de operacion.",
        problem:
          "El sistema de pago de pensiones requeria procesar archivos masivos con reglas distintas por tipo de operacion dentro de ventanas operativas exigentes.",
        architecture:
          "Microservicios backend en Java y procesos Spring Batch conectados a Oracle para separar validacion, procesamiento y persistencia segun el flujo financiero.",
        stack: "Java 17, Spring Batch, Oracle, SQL avanzado, Linux, CI/CD",
        challenges:
          "Controlar errores por lote, sostener re-procesos confiables y aplicar reglas de negocio distintas para bonos, descuentos y haberes.",
        solution:
          "Se trabajaron microservicios especializados por operacion, consultas SQL orientadas al volumen y validaciones de consistencia para reducir fallas en ejecuciones recurrentes.",
        impact:
          "El flujo quedo mas ordenado para procesar informacion financiera de alto volumen con mejor control operativo y mayor confianza en re-procesos.",
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
        workMode: "Full-time · Hibrido",
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
      "Si estas construyendo o modernizando una plataforma empresarial, puedo aportar en servicios Java, integraciones entre sistemas y flujos de datos que necesitan llegar a produccion con confianza.",
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
    pageTitle: "Detalles de backend Java | David Panibra",
    pageDescription:
      "Detalle de experiencia, proyectos y notas tecnicas sobre backend Java, microservicios e integraciones empresariales.",
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
        title: "Pruebas de integracion para flujos de negocio en microservicios",
        context:
          "Como enfocar pruebas cuando el riesgo real esta en validaciones, ramas de negocio y sincronizacion entre servicios.",
        content:
          "En integraciones empresariales, probar solo el caso feliz no alcanza. El riesgo suele aparecer en validaciones por tipo de operacion, datos incompletos, orden de eventos o respuestas parciales entre plataformas. Por eso conviene modelar pruebas alrededor del flujo de negocio: que entra, que decision toma el servicio, que se persiste y que salida se publica o devuelve. Herramientas como Spock ayudan a expresar escenarios y ramas con claridad, especialmente cuando hay que cubrir combinaciones de reglas mas que algoritmos aislados. Conclusion: la prueba aporta mas valor cuando verifica decisiones criticas del negocio y no solo la respuesta HTTP.",
        tag: "Testing backend",
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
