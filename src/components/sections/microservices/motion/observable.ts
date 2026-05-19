export const initObservableAnimation = () => {
  const configNode = document.querySelector('[data-anim-card="observable"][data-motion-config]');
  if (!(configNode instanceof HTMLElement)) return;

  let config;
  try {
    config = JSON.parse(configNode.dataset.motionConfig ?? "{}");
  } catch {
    return;
  }

  const figure = configNode.querySelector('[data-anim-svg="observable"]');
  if (!(figure instanceof SVGElement)) return;

  const centerHex = figure.querySelector('[data-observable-center="hex"]');
  if (!(centerHex instanceof SVGGraphicsElement)) return;

  const innerHexA = figure.querySelector('[data-observable-inner="inner_a"]');
  const innerHexB = figure.querySelector('[data-observable-inner="inner_b"]');
  const rings = Array.from(figure.querySelectorAll("[data-observable-ring]"));
  const spokes = Array.from(figure.querySelectorAll("[data-observable-spoke]"));

  if (!(innerHexA instanceof SVGGraphicsElement) || !(innerHexB instanceof SVGGraphicsElement) || !rings.length) {
    return;
  }

  centerHex.style.transformBox = "fill-box";
  centerHex.style.transformOrigin = "center";
  centerHex.style.cursor = "pointer";
  centerHex.style.pointerEvents = "all";
  centerHex.style.outline = "none";
  centerHex.style.boxShadow = "none";
  innerHexA.style.transformBox = "fill-box";
  innerHexA.style.transformOrigin = "center";
  innerHexB.style.transformBox = "fill-box";
  innerHexB.style.transformOrigin = "center";
  rings.forEach((ring) => {
    if (!(ring instanceof SVGGraphicsElement)) return;
    ring.style.transformBox = "fill-box";
    ring.style.transformOrigin = "center";
  });

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const shouldReduce = reduceMotionQuery.matches;
  const baseDuration = config?.motion?.durationMs ?? {};
  const durationScale = shouldReduce ? (config?.reducedMotion?.durationScale ?? 0.65) : 1;
  const durations = {
    hover: Math.round((baseDuration.hover ?? 190) * durationScale),
    pulse: Math.round((baseDuration.pulse ?? 520) * durationScale),
    stabilize: Math.round((baseDuration.stabilize ?? 220) * durationScale)
  };

  const easing = config?.motion?.easing ?? {};
  const moveEasing = easing.move ?? "cubic-bezier(0.25, 1, 0.5, 1)";

  const fsm = {
    hoverActive: false,
    activeRipples: [] as Array<{ startedAt: number }>,
    rafId: null as number | null,
    lastFrameTs: null as number | null
  };

  const setTransition = (node: SVGGraphicsElement, duration: number, delay: number, ease: string) => {
    node.style.transitionProperty = "transform, opacity, stroke-opacity, stroke-width";
    node.style.transitionDuration = `${duration}ms`;
    node.style.transitionDelay = `${delay}ms`;
    node.style.transitionTimingFunction = ease;
  };

  const ringBaseStroke = rings.map((ring) => Number.parseFloat(ring.getAttribute("stroke-width") ?? "1") || 1);
  const maxConcurrentRipples = Math.max(1, Math.min(3, Number(config?.motion?.maxConcurrentRipples ?? 3)));

  const smoothstep = (value: number) => {
    const t = Math.min(1, Math.max(0, value));
    return t * t * (3 - 2 * t);
  };

  const render = (now: number) => {
    if (fsm.lastFrameTs === null) {
      fsm.lastFrameTs = now;
    }

    const pulseDuration = Math.max(260, durations.pulse);
    fsm.activeRipples = fsm.activeRipples.filter((ripple) => now - ripple.startedAt <= pulseDuration);
    const rippleCount = fsm.activeRipples.length;
    const isWaving = rippleCount > 0;

    figure.setAttribute("aria-busy", isWaving ? "true" : "false");
    centerHex.setAttribute("aria-pressed", isWaving ? "true" : "false");

    centerHex.style.transitionProperty = "none";
    innerHexA.style.transitionProperty = "none";
    innerHexB.style.transitionProperty = "none";
    rings.forEach((ring) => {
      if (!(ring instanceof SVGGraphicsElement)) return;
      ring.style.transitionProperty = "none";
    });
    spokes.forEach((spoke) => {
      if (!(spoke instanceof SVGGraphicsElement)) return;
      spoke.style.transitionProperty = "none";
    });

    const hoverBoost = fsm.hoverActive ? (shouldReduce ? 0.006 : 0.016) : 0;
    let centerPulse = 0;
    let innerWave = 0;
    let spokeWave = 0;
    const ringWave = rings.map(() => 0);

    fsm.activeRipples.forEach((ripple) => {
      const age = now - ripple.startedAt;
      const progress = Math.min(1, Math.max(0, age / pulseDuration));
      const fade = 1 - smoothstep(progress);
      centerPulse += fade * 0.62;
      innerWave += fade * 0.76;
      spokeWave += fade * 0.56;

      ringWave.forEach((_, index) => {
        const offset = index * 0.13;
        const local = (progress - offset) / 0.82;
        const ringStrength = Math.max(0, Math.min(1, local));
        const hierarchy = Math.max(0.52, 1 - index * 0.24);
        ringWave[index] += smoothstep(ringStrength) * fade * 1.24 * hierarchy;
      });
    });

    const centerScale = 1 + hoverBoost + centerPulse * (shouldReduce ? 0.02 : 0.056);
    centerHex.style.opacity = "1";
    centerHex.style.transform = `scale(${centerScale.toFixed(4)})`;

    const innerABaseOpacity = shouldReduce ? 0.3 : 0.28;
    const innerBBaseOpacity = shouldReduce ? 0.24 : 0.22;
    const innerAOpacity = fsm.hoverActive
      ? 1
      : Math.min(0.76, innerABaseOpacity + innerWave * 0.5);
    const innerBOpacity = fsm.hoverActive
      ? 1
      : Math.min(0.7, innerBBaseOpacity + innerWave * 0.44);
    innerHexA.style.opacity = innerAOpacity.toFixed(3);
    innerHexA.style.strokeOpacity = Math.min(1, 0.68 + innerWave * 0.38).toFixed(3);
    innerHexA.style.transform = `scale(${(1 + innerWave * (shouldReduce ? 0.016 : 0.038)).toFixed(4)})`;
    innerHexB.style.opacity = innerBOpacity.toFixed(3);
    innerHexB.style.strokeOpacity = Math.min(0.96, 0.64 + innerWave * 0.34).toFixed(3);
    innerHexB.style.transform = `scale(${(0.996 + innerWave * (shouldReduce ? 0.012 : 0.03)).toFixed(4)})`;

    rings.forEach((ring, index) => {
      if (!(ring instanceof SVGGraphicsElement)) return;
      const wave = Math.min(1.34, ringWave[index]);
      const tier = Math.max(0.58, 1 - index * 0.2);
      const baseOpacity = 0.9;
      const opacity = fsm.hoverActive ? 1 : Math.min(1, baseOpacity + wave * tier * (shouldReduce ? 0.16 : 0.28));
      const strokeOpacity = Math.min(1, 0.9 + wave * tier * (shouldReduce ? 0.14 : 0.24));
      const scale = 1 + wave * tier * (shouldReduce ? 0.024 : 0.064 + index * 0.014);
      const strokeWidth = ringBaseStroke[index] + wave * tier * (shouldReduce ? 0.12 : 0.28 - index * 0.024);
      ring.style.opacity = opacity.toFixed(3);
      ring.style.strokeOpacity = strokeOpacity.toFixed(3);
      ring.style.strokeWidth = strokeWidth.toFixed(3);
      ring.style.transform = `scale(${scale.toFixed(4)})`;
    });

    spokes.forEach((spoke) => {
      if (!(spoke instanceof SVGGraphicsElement)) return;
      const opacity = fsm.hoverActive ? 1 : Math.min(1, 0.78 + spokeWave * (shouldReduce ? 0.16 : 0.28));
      spoke.style.opacity = opacity.toFixed(3);
    });

    if (isWaving || fsm.hoverActive) {
      fsm.rafId = window.requestAnimationFrame(render);
    } else {
      fsm.rafId = null;
      fsm.lastFrameTs = null;
    }
  };

  const ensureRenderLoop = () => {
    if (fsm.rafId !== null) return;
    fsm.rafId = window.requestAnimationFrame(render);
  };

  const triggerWave = () => {
    const startedAt = window.performance.now();
    if (fsm.activeRipples.length >= maxConcurrentRipples) {
      fsm.activeRipples.shift();
    }
    fsm.activeRipples.push({ startedAt });
    ensureRenderLoop();
  };

  figure.addEventListener("pointerenter", () => {
    fsm.hoverActive = true;
    ensureRenderLoop();
  });

  figure.addEventListener("pointerleave", () => {
    fsm.hoverActive = false;
    ensureRenderLoop();
  });

  centerHex.addEventListener("focus", () => {
    fsm.hoverActive = true;
    ensureRenderLoop();
  });

  centerHex.addEventListener("blur", () => {
    fsm.hoverActive = false;
    ensureRenderLoop();
  });

  centerHex.addEventListener("click", () => {
    triggerWave();
  });

  centerHex.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      triggerWave();
    }
  });

  setTransition(centerHex, durations.stabilize, 0, moveEasing);
  setTransition(innerHexA, durations.stabilize, 0, moveEasing);
  setTransition(innerHexB, durations.stabilize, 0, moveEasing);
  rings.forEach((ring) => {
    if (!(ring instanceof SVGGraphicsElement)) return;
    setTransition(ring, durations.stabilize, 0, moveEasing);
  });
  spokes.forEach((spoke) => {
    if (!(spoke instanceof SVGGraphicsElement)) return;
    setTransition(spoke, durations.stabilize, 0, moveEasing);
  });
  ensureRenderLoop();
};
