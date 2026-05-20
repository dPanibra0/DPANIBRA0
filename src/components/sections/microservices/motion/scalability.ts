export const initScalabilityAnimation = () => {
  const configNode = document.querySelector('[data-anim-card="scalability"][data-motion-config]');
  if (!(configNode instanceof HTMLElement)) {
    return;
  }

  let config;
  try {
    config = JSON.parse(configNode.dataset.motionConfig ?? "{}");
  } catch {
    return;
  }

  const figure = configNode.querySelector('[data-anim-svg="scalability"]');
  if (!(figure instanceof SVGElement)) {
    return;
  }
  figure.setAttribute("tabindex", "-1");
  figure.setAttribute("focusable", "false");

  const parts = new Map();
  figure.querySelectorAll("[data-anim-part]").forEach((node) => {
    const key = node.getAttribute("data-anim-part");
    if (!key) return;
    parts.set(key, node);
    if (node instanceof SVGGraphicsElement) {
      node.style.transformBox = "fill-box";
      node.style.transformOrigin = "center";
    }
  });

  const userGroupMembers = {
    grupo_superior: ["core", "clone_f", "clone_g", "clone_j"],
    grupo_inferior: ["clone_c", "clone_k", "clone_i", "clone_h"],
    grupo_izquierda: ["clone_a", "clone_d", "clone_l"],
    grupo_derecha: ["clone_b", "clone_e", "clone_m"]
  };

  const groupSupportParts = {
    grupo_superior: ["route_r1", "route_r2"],
    grupo_inferior: ["route_r3", "route_r4"],
    grupo_izquierda: ["route_r1", "route_r3"],
    grupo_derecha: ["route_r2", "route_r4"]
  };

  const triggerPartToGroup = new Map();
  Object.entries(userGroupMembers).forEach(([groupId, members]) => {
    members.forEach((partName) => {
      triggerPartToGroup.set(partName, groupId);
    });
  });

  const triggerPartNames = Array.from(triggerPartToGroup.keys());
  if (!triggerPartNames.every((partName) => parts.has(partName))) {
    return;
  }

  const groupAriaLabel: Record<string, string> = {
    grupo_superior: "Activar grupo superior",
    grupo_inferior: "Activar grupo inferior",
    grupo_izquierda: "Activar grupo izquierdo",
    grupo_derecha: "Activar grupo derecho"
  };

  const triggerNodes: SVGGraphicsElement[] = [];
  triggerPartNames.forEach((partName) => {
    const node = parts.get(partName);
    if (!(node instanceof SVGGraphicsElement)) return;
    const groupId = triggerPartToGroup.get(partName);
    if (!groupId) return;
    node.setAttribute("data-trigger-id", partName);
    node.setAttribute("tabindex", "0");
    node.setAttribute("role", "button");
    node.setAttribute("aria-pressed", "false");
    node.setAttribute("aria-label", groupAriaLabel[groupId] ?? "Activar grupo");
    node.setAttribute("focusable", "false");
    node.style.cursor = "pointer";
    node.style.pointerEvents = "all";
    node.style.outline = "none";
    node.style.boxShadow = "none";
    triggerNodes.push(node);
  });

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const shouldReduce = reduceMotionQuery.matches;
  const baseDuration = config?.motion?.durationMs ?? { quick: 160, medium: 280 };
  const durationScale = shouldReduce ? (config?.reducedMotion?.scaleDownDurationsBy ?? 0.5) : 1;
  const durationMs = {
    quick: Math.max(0, Math.round((baseDuration.quick ?? 160) * durationScale)),
    medium: Math.max(0, Math.round((baseDuration.medium ?? 280) * durationScale))
  };

  const easing = config?.motion?.easing ?? {};
  const enterEasing = easing.enter ?? "cubic-bezier(0.22, 1, 0.36, 1)";
  const moveEasing = easing.move ?? "cubic-bezier(0.25, 1, 0.5, 1)";
  const fsm = {
    current: "idle",
    timeoutId: null as number | null,
    hoveredTrigger: null as string | null,
    focusedTrigger: null as string | null,
    lockedGroupId: null as string | null,
    lastAppliedStateKey: null as string | null,
    hasRevealed: false
  };

  const allTriggerIds = new Set(triggerPartNames);

  const getTriggerFromEvent = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return null;
    const triggerNode = target.closest("[data-trigger-id]");
    if (!(triggerNode instanceof Element)) return null;
    const triggerId = triggerNode.getAttribute("data-trigger-id");
    if (!triggerId || !allTriggerIds.has(triggerId)) return null;
    return triggerId;
  };

  const getGroupIdFromTrigger = (triggerId: string | null) => {
    if (!triggerId) return null;
    return triggerPartToGroup.get(triggerId) ?? null;
  };

  const getActiveParts = (triggerId: string) => {
    const groupId = triggerPartToGroup.get(triggerId);
    if (!groupId) return null;
    const members = userGroupMembers[groupId as keyof typeof userGroupMembers] ?? [];
    const supportParts = groupSupportParts[groupId as keyof typeof groupSupportParts] ?? [];
    return new Set([...members, ...supportParts]);
  };

  const syncTriggerAriaState = (activeTrigger: string | null) => {
    const activeGroupId = activeTrigger ? triggerPartToGroup.get(activeTrigger) : null;
    triggerNodes.forEach((node) => {
      if (!(node instanceof Element)) return;
      const triggerId = node.getAttribute("data-trigger-id");
      const triggerGroupId = triggerId ? triggerPartToGroup.get(triggerId) : null;
      node.setAttribute("aria-pressed", activeGroupId && triggerGroupId === activeGroupId ? "true" : "false");
    });
  };

  const applyState = (stateName: string, triggerId: string | null = null) => {
    const targets = config?.targets?.[stateName];
    const idleTargets = config?.targets?.idle;
    const activeParts = triggerId ? getActiveParts(triggerId) : null;
    if (!targets) return;

    const stateKey = `${stateName}:${triggerPartToGroup.get(triggerId ?? "") ?? "none"}`;
    if (fsm.lastAppliedStateKey === stateKey) {
      return;
    }
    fsm.lastAppliedStateKey = stateKey;

    const duration = stateName === "reset_transition" ? durationMs.quick : stateName === "hover" ? Math.max(durationMs.quick, 210) : durationMs.medium;
    const ease = stateName === "reset_transition" ? moveEasing : enterEasing;

    Object.keys(targets).forEach((partName) => {
      const node = parts.get(partName) as SVGGraphicsElement | undefined;
      let styleTarget = targets[partName];
      const idleTarget = idleTargets?.[partName];
      if (activeParts && idleTargets?.[partName]) {
        styleTarget = activeParts.has(partName) ? targets[partName] : idleTargets[partName];
      }
      if (!node || !styleTarget) return;

      node.style.transitionProperty = "transform, opacity";
      node.style.transitionDuration = `${duration}ms`;
      node.style.transitionTimingFunction = ease;

      if (typeof styleTarget.opacity === "number") {
        let nextOpacity = styleTarget.opacity;
        if (activeParts && !activeParts.has(partName) && typeof idleTarget?.opacity === "number") {
          const dimFactor = stateName === "active_locked" ? 0.42 : 0.58;
          nextOpacity = Math.max(0.04, idleTarget.opacity * dimFactor);
        }
        node.style.opacity = String(nextOpacity);
      }
      if (typeof styleTarget.transform === "string") {
        node.style.transform = styleTarget.transform;
      }
    });
  };

  const clearResetTimer = () => {
    if (fsm.timeoutId !== null) {
      window.clearTimeout(fsm.timeoutId);
      fsm.timeoutId = null;
    }
  };

  const transitionTo = (next: string, triggerId: string | null = null) => {
    clearResetTimer();
    fsm.current = next;
    applyState(next, triggerId);

    if (next === "reset_transition") {
      fsm.timeoutId = window.setTimeout(() => {
        fsm.current = "idle";
        fsm.lockedGroupId = null;
        fsm.hoveredTrigger = null;
        fsm.lastAppliedStateKey = null;
        syncTriggerAriaState(null);
        applyState("idle");
        fsm.timeoutId = null;
      }, durationMs.quick);
    }
  };

  const resolveVisualState = () => {
    const hoveredPreview = fsm.hoveredTrigger;
    if (hoveredPreview && allTriggerIds.has(hoveredPreview)) {
      const hoveredGroupId = getGroupIdFromTrigger(hoveredPreview);
      if (fsm.lockedGroupId && hoveredGroupId === fsm.lockedGroupId) {
        transitionTo("active_locked", hoveredPreview);
        return;
      }
      transitionTo("hover", hoveredPreview);
      return;
    }

    if (fsm.lockedGroupId) {
      const lockedTrigger = triggerPartNames.find((triggerId) => getGroupIdFromTrigger(triggerId) === fsm.lockedGroupId) ?? null;
      if (lockedTrigger) {
        transitionTo("active_locked", lockedTrigger);
        return;
      }
    }

    const previewTrigger = fsm.focusedTrigger;
    if (previewTrigger && allTriggerIds.has(previewTrigger)) {
      transitionTo("hover", previewTrigger);
      return;
    }

    transitionTo(fsm.hasRevealed ? "idle" : "pre_reveal");
  };

  transitionTo("pre_reveal");

  const revealPartNames = [
    "clone_d",
    "clone_e",
    "clone_f",
    "clone_g",
    "clone_h",
    "clone_i",
    "clone_j",
    "clone_k",
    "clone_l",
    "clone_m",
    "edges_glow"
  ];

  const revealRemainingParts = () => {
    if (fsm.hasRevealed) return;
    fsm.hasRevealed = true;

    const revealDuration = shouldReduce ? Math.max(50, durationMs.quick) : durationMs.medium;
    const staggerStep = shouldReduce ? 0 : 24;
    revealPartNames.forEach((partName, index) => {
      const node = parts.get(partName) as SVGGraphicsElement | undefined;
      const idleTarget = config?.targets?.idle?.[partName];
      if (!node || !idleTarget) return;

      node.style.transitionProperty = "transform, opacity";
      node.style.transitionDuration = `${revealDuration}ms`;
      node.style.transitionTimingFunction = enterEasing;
      node.style.transitionDelay = `${index * staggerStep}ms`;

      if (typeof idleTarget.opacity === "number") {
        node.style.opacity = String(idleTarget.opacity);
      }
      if (typeof idleTarget.transform === "string") {
        node.style.transform = idleTarget.transform;
      }
    });

    window.setTimeout(() => {
      revealPartNames.forEach((partName) => {
        const node = parts.get(partName) as SVGGraphicsElement | undefined;
        if (!node) return;
        node.style.transitionDelay = "0ms";
      });
      fsm.lastAppliedStateKey = null;
      resolveVisualState();
    }, revealDuration + staggerStep * Math.max(0, revealPartNames.length - 1));
  };

  configNode.addEventListener("pointerenter", revealRemainingParts, { once: true });

  const lock = (triggerId: string | null) => {
    const groupId = getGroupIdFromTrigger(triggerId);
    if (!triggerId || !groupId || !allTriggerIds.has(triggerId)) return;
    fsm.lockedGroupId = groupId;
    syncTriggerAriaState(triggerId);
    resolveVisualState();
  };
  const unlock = () => {
    fsm.lockedGroupId = null;
    syncTriggerAriaState(null);
    resolveVisualState();
  };

  figure.addEventListener("pointerenter", (event) => {
    const triggerId = getTriggerFromEvent(event.target);
    if (!triggerId) return;
    fsm.hoveredTrigger = triggerId;
    resolveVisualState();
  });

  figure.addEventListener("pointerover", (event) => {
    const triggerId = getTriggerFromEvent(event.target);
    if (!triggerId || triggerId === fsm.hoveredTrigger) return;
    fsm.hoveredTrigger = triggerId;
    resolveVisualState();
  });

  figure.addEventListener("pointerleave", () => {
    fsm.hoveredTrigger = null;
    resolveVisualState();
  });

  const toggleLockForTrigger = (triggerId: string | null) => {
    const groupId = getGroupIdFromTrigger(triggerId);
    if (!triggerId || !groupId) return;
    if (fsm.lockedGroupId === groupId) {
      unlock();
      return;
    }
    lock(triggerId);
  };

  figure.addEventListener("click", (event) => {
    const triggerId = getTriggerFromEvent(event.target);
    toggleLockForTrigger(triggerId);
  });

  figure.addEventListener("pointerdown", (event) => {
    const triggerId = getTriggerFromEvent(event.target);
    if (!triggerId) return;
    event.preventDefault();
  });

  figure.addEventListener("focusin", (event) => {
    const triggerId = getTriggerFromEvent(event.target);
    if (!triggerId) return;
    fsm.focusedTrigger = triggerId;
    resolveVisualState();
  });

  figure.addEventListener("focusout", (event) => {
    const nextTriggerId = getTriggerFromEvent(event.relatedTarget);
    fsm.focusedTrigger = nextTriggerId;
    resolveVisualState();
  });

  figure.addEventListener("keydown", (event) => {
    const triggerId = getTriggerFromEvent(event.target);
    if (!triggerId) return;
    const key = event.key;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      toggleLockForTrigger(triggerId);
    }
    if (key === "Escape" && fsm.lockedGroupId) {
      event.preventDefault();
      unlock();
    }
  });
};
