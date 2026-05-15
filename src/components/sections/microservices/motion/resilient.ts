export const initResilientAnimation = () => {
  const configNode = document.querySelector('[data-anim-card="resilient"][data-motion-config]');
  if (!(configNode instanceof HTMLElement)) return;

  let config;
  try {
    config = JSON.parse(configNode.dataset.motionConfig ?? "{}");
  } catch {
    return;
  }

  const figure = configNode.querySelector('[data-anim-svg="resilient"]');
  if (!(figure instanceof SVGElement)) return;

  const nodes = new Map<string, SVGGraphicsElement>();
  figure.querySelectorAll("[data-resilient-node]").forEach((node) => {
    const key = node.getAttribute("data-resilient-node");
    if (!key || !(node instanceof SVGGraphicsElement)) return;
    nodes.set(key, node);
    node.style.transformBox = "fill-box";
    node.style.transformOrigin = "center";
    node.setAttribute("tabindex", "0");
    node.setAttribute("role", "button");
    node.setAttribute("focusable", "true");
    node.setAttribute("aria-pressed", "false");
    node.setAttribute("aria-label", `Provocar incidente en ${key.replace("node_", "nodo ")}`);
    node.style.cursor = "pointer";
    node.style.pointerEvents = "all";
  });

  const links = new Map<string, SVGLineElement>();
  figure.querySelectorAll("[data-resilient-link]").forEach((line) => {
    const key = line.getAttribute("data-resilient-link");
    if (!key || !(line instanceof SVGLineElement)) return;
    links.set(key, line);
    line.style.pointerEvents = "none";
  });

  const failMarks = new Map<string, SVGGraphicsElement>();
  figure.querySelectorAll("[data-resilient-fail-mark]").forEach((mark) => {
    const key = mark.getAttribute("data-resilient-fail-mark");
    if (!key || !(mark instanceof SVGGraphicsElement)) return;
    failMarks.set(key, mark);
    mark.style.transformBox = "fill-box";
    mark.style.transformOrigin = "center";
  });

  if (!nodes.size) return;

  const hoverIndicator = figure.querySelector("[data-resilient-hover-indicator]");
  const nodeOffsets: Record<string, { x: number; y: number }> = {
    node_f: { x: -32, y: -52 },
    node_g: { x: 32, y: -52 },
    node_a: { x: -64, y: 0 },
    node_b: { x: 0, y: 0 },
    node_c: { x: 64, y: 0 },
    node_d: { x: -32, y: 52 },
    node_e: { x: 32, y: 52 }
  };

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const shouldReduce = reduceMotionQuery.matches;
  const baseDuration = config?.motion?.durationMs ?? {};
  const durationScale = shouldReduce ? (config?.reducedMotion?.durationScale ?? 0.6) : 1;
  const durations = {
    hover: Math.round((baseDuration.hover ?? 170) * durationScale),
    fail: Math.round((baseDuration.fail ?? 220) * durationScale),
    redistribute: Math.round((baseDuration.redistribute ?? 240) * durationScale),
    respawn: Math.round((baseDuration.respawn ?? 340) * durationScale),
    reconnect: Math.round((baseDuration.reconnect ?? 320) * durationScale),
    stabilize: Math.round((baseDuration.stabilize ?? 200) * durationScale)
  };

  const easing = config?.motion?.easing ?? {};
  const enterEasing = easing.enter ?? "cubic-bezier(0.22, 1, 0.36, 1)";
  const moveEasing = easing.move ?? "cubic-bezier(0.25, 1, 0.5, 1)";
  const linearEasing = easing.linear ?? "linear";

  const nodeLinks: Record<string, string[]> = {
    node_f: ["link_fg", "link_fa", "link_bf"],
    node_g: ["link_fg", "link_gb", "link_gc"],
    node_a: ["link_fa", "link_ab", "link_ad"],
    node_b: ["link_ab", "link_bc", "link_bd", "link_be", "link_bf", "link_gb"],
    node_c: ["link_gc", "link_bc", "link_ce"],
    node_d: ["link_bd", "link_ad", "link_de"],
    node_e: ["link_be", "link_ce", "link_de"]
  };

  const neighbors: Record<string, string[]> = {
    node_f: ["node_g", "node_a", "node_b"],
    node_g: ["node_f", "node_b", "node_c"],
    node_a: ["node_f", "node_b", "node_d"],
    node_b: ["node_f", "node_g", "node_a", "node_c", "node_d", "node_e"],
    node_c: ["node_g", "node_b", "node_e"],
    node_d: ["node_b", "node_a", "node_e"],
    node_e: ["node_b", "node_c", "node_d"]
  };

  const fsm = {
    phase: "idle",
    activeIncident: false,
    hoveredNode: null as string | null,
    focusNode: null as string | null,
    failedNode: null as string | null,
    timeouts: [] as number[]
  };

  const clearTimers = () => {
    fsm.timeouts.forEach((id) => window.clearTimeout(id));
    fsm.timeouts = [];
  };

  const setHoverIndicatorState = (nodeId: string | null, visible: boolean) => {
    if (!(hoverIndicator instanceof SVGGraphicsElement)) return;
    const offset = nodeId ? nodeOffsets[nodeId] : null;
    if (!offset || fsm.activeIncident) {
      hoverIndicator.style.transitionProperty = "opacity";
      hoverIndicator.style.transitionDuration = `${durations.hover}ms`;
      hoverIndicator.style.transitionTimingFunction = enterEasing;
      hoverIndicator.style.opacity = "0";
      return;
    }
    hoverIndicator.style.transform = `translate(${offset.x}px, ${offset.y}px)`;
    hoverIndicator.style.transitionProperty = "transform, opacity";
    hoverIndicator.style.transitionDuration = `${durations.hover}ms`;
    hoverIndicator.style.transitionTimingFunction = enterEasing;
    hoverIndicator.style.opacity = visible ? "0.28" : "0";
  };

  const setNodeState = (node: SVGGraphicsElement, state: { opacity: number; scale: number; y?: number }, duration: number, ease: string) => {
    const { opacity, scale, y = 0 } = state;
    node.style.transitionProperty = "transform, opacity";
    node.style.transitionDuration = `${duration}ms`;
    node.style.transitionTimingFunction = ease;
    node.style.opacity = String(opacity);
    node.style.transform = `translateY(${y}px) scale(${scale})`;
  };

  const setFailMarkState = (nodeId: string, visible: boolean, duration: number) => {
    const mark = failMarks.get(nodeId);
    if (!mark) return;
    mark.style.transitionProperty = "transform, opacity";
    mark.style.transitionDuration = `${duration}ms`;
    mark.style.transitionTimingFunction = enterEasing;
    mark.style.opacity = visible ? "1" : "0";
    mark.style.transform = visible ? "scale(1)" : "scale(0.92)";
  };

  const setLinkState = (linkId: string, state: { opacity: number; dashOffset?: number }, duration: number, ease: string) => {
    const { opacity, dashOffset = 0 } = state;
    const link = links.get(linkId);
    if (!link) return;
    const length = link.getTotalLength();
    link.style.transitionProperty = "opacity, stroke-dashoffset";
    link.style.transitionDuration = `${duration}ms`;
    link.style.transitionTimingFunction = ease;
    link.style.strokeDasharray = `${length}`;
    link.style.strokeDashoffset = String(dashOffset);
    link.style.opacity = String(opacity);
  };

  const setAriaPressed = (activeNodeId: string | null) => {
    nodes.forEach((node, nodeId) => {
      node.setAttribute("aria-pressed", activeNodeId === nodeId ? "true" : "false");
    });
  };

  const resetToIdle = () => {
    fsm.phase = "idle";
    fsm.activeIncident = false;
    figure.setAttribute("aria-busy", "false");
    setAriaPressed(null);
    nodes.forEach((node) => setNodeState(node, { opacity: 1, scale: 1, y: 0 }, durations.stabilize, moveEasing));
    failMarks.forEach((_, nodeId) => setFailMarkState(nodeId, false, durations.stabilize));
    links.forEach((_, linkId) => setLinkState(linkId, { opacity: 0.65, dashOffset: 0 }, durations.stabilize, moveEasing));
    setHoverIndicatorState(fsm.focusNode ?? fsm.hoveredNode, !!(fsm.focusNode ?? fsm.hoveredNode));
  };

  const applyHoverState = (nodeId: string | null) => {
    if (!nodeId || fsm.activeIncident) return;
    fsm.phase = "hover";
    setHoverIndicatorState(nodeId, true);
    nodes.forEach((node, key) => {
      const isTarget = key === nodeId;
      setNodeState(node, { opacity: 1, scale: isTarget ? 1.05 : 1, y: 0 }, durations.hover, enterEasing);
    });
  };

  const beginIncident = (nodeId: string | null) => {
    if (!nodeId || fsm.activeIncident || !nodes.has(nodeId)) return;
    clearTimers();
    fsm.activeIncident = true;
    setHoverIndicatorState(null, false);
    fsm.failedNode = nodeId;
    figure.setAttribute("aria-busy", "true");
    setAriaPressed(nodeId);

    const linked = nodeLinks[nodeId] ?? [];
    const nearbyNodes = neighbors[nodeId] ?? [];

    fsm.phase = "fail";
    nodes.forEach((node, key) => {
      if (key === nodeId) {
        setNodeState(node, { opacity: 0.18, scale: 0.84, y: 0 }, durations.fail, enterEasing);
      } else {
        setNodeState(node, { opacity: 0.96, scale: 1, y: 0 }, durations.fail, enterEasing);
      }
    });
    setFailMarkState(nodeId, true, durations.fail);
    linked.forEach((linkId) => setLinkState(linkId, { opacity: 0.22, dashOffset: 0 }, durations.fail, moveEasing));

    fsm.timeouts.push(window.setTimeout(() => {
      fsm.phase = "redistribute";
      nearbyNodes.forEach((nearKey) => {
        const nearNode = nodes.get(nearKey);
        if (!nearNode) return;
        setNodeState(nearNode, { opacity: 1, scale: 1.05, y: shouldReduce ? 0 : -4 }, durations.redistribute, moveEasing);
      });
      linked.forEach((linkId) => setLinkState(linkId, { opacity: 0.48, dashOffset: 0 }, durations.redistribute, moveEasing));
    }, durations.fail));

    fsm.timeouts.push(window.setTimeout(() => {
      fsm.phase = "respawn";
      const failed = nodes.get(nodeId);
      if (failed) {
        const fromBelowY = shouldReduce ? 0 : 22;
        setNodeState(failed, { opacity: shouldReduce ? 0.9 : 0, scale: shouldReduce ? 0.98 : 0.88, y: fromBelowY }, 0, linearEasing);
        void failed.getBoundingClientRect();
        setNodeState(failed, { opacity: 1, scale: 1, y: 0 }, durations.respawn, enterEasing);
      }
    }, durations.fail + durations.redistribute));

    fsm.timeouts.push(window.setTimeout(() => {
      fsm.phase = "reconnect";
      linked.forEach((linkId) => {
        const line = links.get(linkId);
        if (!line) return;
        const length = line.getTotalLength();
        setLinkState(linkId, { opacity: 0.75, dashOffset: length }, 0, linearEasing);
        void line.getBoundingClientRect();
        setLinkState(linkId, { opacity: 0.75, dashOffset: 0 }, durations.reconnect, linearEasing);
      });
      setFailMarkState(nodeId, false, durations.reconnect);
    }, durations.fail + durations.redistribute + durations.respawn));

    fsm.timeouts.push(window.setTimeout(() => {
      fsm.phase = "stabilize";
      nodes.forEach((node) => setNodeState(node, { opacity: 1, scale: shouldReduce ? 1 : 1.03, y: 0 }, durations.stabilize, enterEasing));
    }, durations.fail + durations.redistribute + durations.respawn + durations.reconnect));

    fsm.timeouts.push(window.setTimeout(() => {
      resetToIdle();
    }, durations.fail + durations.redistribute + durations.respawn + durations.reconnect + durations.stabilize));
  };

  const getNodeIdFromEvent = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return null;
    const node = target.closest("[data-resilient-node]");
    if (!(node instanceof Element)) return null;
    const nodeId = node.getAttribute("data-resilient-node");
    return nodeId && nodes.has(nodeId) ? nodeId : null;
  };

  figure.addEventListener("pointerover", (event) => {
    const nodeId = getNodeIdFromEvent(event.target);
    if (!nodeId) return;
    fsm.hoveredNode = nodeId;
    applyHoverState(nodeId);
  });

  figure.addEventListener("pointerleave", () => {
    fsm.hoveredNode = null;
    if (!fsm.activeIncident) {
      if (fsm.focusNode) {
        applyHoverState(fsm.focusNode);
      } else {
        setHoverIndicatorState(null, false);
        resetToIdle();
      }
    }
  });

  figure.addEventListener("focusin", (event) => {
    const nodeId = getNodeIdFromEvent(event.target);
    if (!nodeId) return;
    fsm.focusNode = nodeId;
    applyHoverState(nodeId);
  });

  figure.addEventListener("focusout", (event) => {
    const nextNode = getNodeIdFromEvent(event.relatedTarget);
    fsm.focusNode = nextNode;
    if (!fsm.activeIncident) {
      if (nextNode) applyHoverState(nextNode);
      else {
        setHoverIndicatorState(null, false);
        resetToIdle();
      }
    }
  });

  figure.addEventListener("click", (event) => {
    const nodeId = getNodeIdFromEvent(event.target);
    if (!nodeId) return;
    beginIncident(nodeId);
  });

  figure.addEventListener("keydown", (event) => {
    const nodeId = getNodeIdFromEvent(event.target);
    if (!nodeId) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      beginIncident(nodeId);
    }
  });

  resetToIdle();
};
