export const scalabilityMotionTokens = {
  card: {
    selector: '[data-anim-card="scalability"]',
    focusSelector: "[data-anim-focus-target]"
  },
  states: {
    idle: "idle",
    hover: "hover",
    focus: "focus",
    pulse: "pulse"
  },
  motion: {
    durationMs: {
      quick: 160,
      medium: 280,
      loop: 1800
    },
    easing: {
      enter: "cubic-bezier(0.22, 1, 0.36, 1)",
      move: "cubic-bezier(0.25, 1, 0.5, 1)",
      linear: "linear"
    }
  },
  events: {
    hoverIn: "pointerenter",
    hoverOut: "pointerleave",
    focusIn: "focusin",
    focusOut: "focusout"
  },
  reducedMotion: {
    disableLoops: true,
    keepOpacityTransitions: true,
    scaleDownDurationsBy: 0.5
  },
  targets: {
    idle: {
      core: { opacity: 1, transform: "scale(1)" },
      edges_glow: { opacity: 1, transform: "scale(1)" },
      clone_a: { opacity: 1, transform: "scale(1)" },
      clone_b: { opacity: 1, transform: "scale(1)" },
      clone_c: { opacity: 1, transform: "scale(1)" },
      clone_d: { opacity: 0.1, transform: "scale(0.99)" },
      clone_e: { opacity: 0.1, transform: "scale(0.99)" },
      clone_f: { opacity: 0.1, transform: "scale(0.99)" },
      clone_g: { opacity: 0.1, transform: "scale(0.99)" },
      clone_h: { opacity: 0.1, transform: "scale(0.99)" },
      clone_i: { opacity: 0.1, transform: "scale(0.99)" },
      clone_j: { opacity: 0.1, transform: "scale(0.99)" },
      clone_k: { opacity: 0.1, transform: "scale(0.99)" },
      clone_l: { opacity: 0.1, transform: "scale(0.99)" },
      clone_m: { opacity: 0.1, transform: "scale(0.99)" },
      route_r1: { opacity: 0 },
      route_r2: { opacity: 0 },
      route_r3: { opacity: 0 },
      route_r4: { opacity: 0 }
    },
    pre_reveal: {
      core: { opacity: 1, transform: "scale(1)" },
      edges_glow: { opacity: 0, transform: "scale(1)" },
      clone_a: { opacity: 1, transform: "scale(1)" },
      clone_b: { opacity: 1, transform: "scale(1)" },
      clone_c: { opacity: 1, transform: "scale(1)" },
      clone_d: { opacity: 0, transform: "scale(0.99)" },
      clone_e: { opacity: 0, transform: "scale(0.99)" },
      clone_f: { opacity: 0, transform: "scale(0.99)" },
      clone_g: { opacity: 0, transform: "scale(0.99)" },
      clone_h: { opacity: 0, transform: "scale(0.99)" },
      clone_i: { opacity: 0, transform: "scale(0.99)" },
      clone_j: { opacity: 0, transform: "scale(0.99)" },
      clone_k: { opacity: 0, transform: "scale(0.99)" },
      clone_l: { opacity: 0, transform: "scale(0.99)" },
      clone_m: { opacity: 0, transform: "scale(0.99)" },
      route_r1: { opacity: 0 },
      route_r2: { opacity: 0 },
      route_r3: { opacity: 0 },
      route_r4: { opacity: 0 }
    },
    hover: {
      core: { opacity: 1, transform: "scale(1.03)" },
      edges_glow: { opacity: 1, transform: "scale(1.02)" },
      clone_a: { opacity: 1, transform: "scale(1.02)" },
      clone_b: { opacity: 1, transform: "scale(1.02)" },
      clone_c: { opacity: 1, transform: "scale(1.02)" },
      clone_d: { opacity: 0.5, transform: "scale(1.01)" },
      clone_e: { opacity: 0.5, transform: "scale(1.01)" },
      clone_f: { opacity: 0.5, transform: "scale(1.01)" },
      clone_g: { opacity: 0.5, transform: "scale(1.01)" },
      clone_h: { opacity: 0.5, transform: "scale(1.01)" },
      clone_i: { opacity: 0.5, transform: "scale(1.01)" },
      clone_j: { opacity: 0.5, transform: "scale(1.01)" },
      clone_k: { opacity: 0.5, transform: "scale(1.01)" },
      clone_l: { opacity: 0.5, transform: "scale(1.01)" },
      clone_m: { opacity: 0.5, transform: "scale(1.01)" },
      route_r1: { opacity: 0.46 },
      route_r2: { opacity: 0.46 },
      route_r3: { opacity: 0.4 },
      route_r4: { opacity: 0.4 }
    },
    active_locked: {
      core: { opacity: 1, transform: "scale(1.03)" },
      edges_glow: { opacity: 1, transform: "scale(1.02)" },
      clone_a: { opacity: 1, transform: "scale(1.02)" },
      clone_b: { opacity: 1, transform: "scale(1.02)" },
      clone_c: { opacity: 1, transform: "scale(1.02)" },
      clone_d: { opacity: 1, transform: "scale(1.01)" },
      clone_e: { opacity: 1, transform: "scale(1.01)" },
      clone_f: { opacity: 1, transform: "scale(1.01)" },
      clone_g: { opacity: 1, transform: "scale(1.01)" },
      clone_h: { opacity: 1, transform: "scale(1.01)" },
      clone_i: { opacity: 1, transform: "scale(1.01)" },
      clone_j: { opacity: 1, transform: "scale(1.01)" },
      clone_k: { opacity: 1, transform: "scale(1.01)" },
      clone_l: { opacity: 1, transform: "scale(1.01)" },
      clone_m: { opacity: 1, transform: "scale(1.01)" },
      route_r1: { opacity: 1 },
      route_r2: { opacity: 1 },
      route_r3: { opacity: 1 },
      route_r4: { opacity: 1 }
    },
    reset_transition: {
      core: { opacity: 0.8, transform: "scale(1.01)" },
      edges_glow: { opacity: 0.7, transform: "scale(1.01)" },
      clone_a: { opacity: 0.8, transform: "scale(1.01)" },
      clone_b: { opacity: 0.8, transform: "scale(1.01)" },
      clone_c: { opacity: 0.8, transform: "scale(1.01)" },
      clone_d: { opacity: 0.4, transform: "scale(1)" },
      clone_e: { opacity: 0.4, transform: "scale(1)" },
      clone_f: { opacity: 0.4, transform: "scale(1)" },
      clone_g: { opacity: 0.4, transform: "scale(1)" },
      clone_h: { opacity: 0.4, transform: "scale(1)" },
      clone_i: { opacity: 0.4, transform: "scale(1)" },
      clone_j: { opacity: 0.4, transform: "scale(1)" },
      clone_k: { opacity: 0.4, transform: "scale(1)" },
      route_r1: { opacity: 0.12 },
      route_r2: { opacity: 0.12 },
      route_r3: { opacity: 0.08 },
      route_r4: { opacity: 0.08 }
    }
  }
} as const;

export const resilientMotionTokens = {
  card: {
    selector: '[data-anim-card="resilient"]'
  },
  states: {
    idle: "idle",
    hover: "hover",
    fail: "fail",
    redistribute: "redistribute",
    respawn: "respawn",
    reconnect: "reconnect",
    stabilize: "stabilize"
  },
  motion: {
    durationMs: {
      hover: 170,
      fail: 220,
      redistribute: 240,
      respawn: 340,
      reconnect: 320,
      stabilize: 200
    },
    easing: {
      enter: "cubic-bezier(0.22, 1, 0.36, 1)",
      move: "cubic-bezier(0.25, 1, 0.5, 1)",
      linear: "linear"
    }
  },
  reducedMotion: {
    durationScale: 0.6,
    disableStagger: true
  }
} as const;

export const observableMotionTokens = {
  card: {
    selector: '[data-anim-card="observable"]'
  },
  states: {
    idle: "idle",
    hover_scan: "hover_scan",
    pulse_outbound: "pulse_outbound",
    stabilize: "stabilize"
  },
  motion: {
    durationMs: {
      hover: 190,
      pulse: 760,
      stabilize: 300
    },
    easing: {
      enter: "cubic-bezier(0.22, 1, 0.36, 1)",
      move: "cubic-bezier(0.16, 1, 0.3, 1)",
      linear: "linear"
    },
    maxConcurrentRipples: 3
  },
  reducedMotion: {
    durationScale: 0.65,
    disableStagger: false
  }
} as const;
