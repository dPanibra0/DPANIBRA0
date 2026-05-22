const tabIds = ["experiencia", "proyectos", "blog"] as const;

type DetailsTabId = (typeof tabIds)[number];
type DetailsWindow = Window & { __detailsTabsInit?: boolean };
type NavigationDirection = "forward" | "backward";

const PANEL_TRANSITION_MS = 320;

export function initDetailsTabs(): void {
  const detailsWindow = window as DetailsWindow;
  if (detailsWindow.__detailsTabsInit) {
    return;
  }

  detailsWindow.__detailsTabsInit = true;

  const hashAliases: Record<string, DetailsTabId> = {
    "#experiencia": "experiencia",
    "#experiencia-detalle": "experiencia",
    "#proyectos": "proyectos",
    "#proyectos-detalle": "proyectos",
    "#blog": "blog",
  };

  const tabs = Array.from(document.querySelectorAll<HTMLElement>("[role='tab'][data-tab]"));
  const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-tab-panel]"));
  const tabsById = new Map(tabs.map((tab) => [tab.dataset.tab ?? "", tab]));
  const panelsById = new Map(panels.map((panel) => [panel.dataset.tabPanel ?? "", panel]));
  const panelIndexById = new Map(tabIds.map((id, index) => [id, index]));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let activeTabId: DetailsTabId = "experiencia";
  let transitionToken = 0;
  let refreshViewportActiveState = () => {};
  let refreshParallaxState = () => {};

  const toTabId = (value: string | null | undefined): DetailsTabId => {
    const candidate = value ? hashAliases[value.toLowerCase()] : undefined;
    return candidate ?? "experiencia";
  };

  const clearPanelTransitionState = (panel: HTMLElement) => {
    panel.removeAttribute("data-panel-transition");
  };

  const setPanelState = (panel: HTMLElement, isActive: boolean) => {
    panel.hidden = !isActive;
    panel.setAttribute("data-panel-state", isActive ? "active" : "inactive");
    panel.setAttribute("aria-hidden", isActive ? "false" : "true");
    clearPanelTransitionState(panel);
  };

  const hideAllExcept = (panelToKeep: HTMLElement) => {
    for (const panel of panels) {
      if (panel === panelToKeep) {
        panel.hidden = false;
        panel.setAttribute("data-panel-state", "active");
        panel.setAttribute("aria-hidden", "false");
      } else {
        panel.hidden = true;
        panel.setAttribute("data-panel-state", "inactive");
        panel.setAttribute("aria-hidden", "true");
      }

      clearPanelTransitionState(panel);
    }
  };

  const getDirection = (currentId: DetailsTabId, targetId: DetailsTabId): NavigationDirection => {
    const currentIndex = panelIndexById.get(currentId) ?? 0;
    const targetIndex = panelIndexById.get(targetId) ?? 0;
    return targetIndex >= currentIndex ? "forward" : "backward";
  };

  const setActiveTab = (targetId: DetailsTabId, options?: { focus?: boolean; updateHash?: boolean }) => {
    const nextTab = tabsById.get(targetId);
    const nextPanel = panelsById.get(targetId);
    if (!nextTab || !nextPanel) {
      return;
    }

    for (const tab of tabs) {
      const selected = tab === nextTab;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.tabIndex = selected ? 0 : -1;
    }

    const currentPanel = panelsById.get(activeTabId);
    const shouldAnimate =
      currentPanel &&
      currentPanel !== nextPanel &&
      !prefersReducedMotion.matches;
    const deferStateRefresh = Boolean(shouldAnimate);

    transitionToken += 1;
    const currentTransitionToken = transitionToken;

    if (!currentPanel || currentPanel === nextPanel) {
      hideAllExcept(nextPanel);
    } else if (!shouldAnimate) {
      setPanelState(currentPanel, false);
      setPanelState(nextPanel, true);
    } else {
      const direction = getDirection(activeTabId, targetId);

      hideAllExcept(currentPanel);

      nextPanel.hidden = false;
      nextPanel.setAttribute("data-panel-state", "active");
      nextPanel.setAttribute("aria-hidden", "false");
      nextPanel.setAttribute("data-panel-transition", `in-${direction}`);

      currentPanel.hidden = false;
      currentPanel.setAttribute("data-panel-state", "inactive");
      currentPanel.setAttribute("aria-hidden", "true");
      currentPanel.setAttribute("data-panel-transition", `out-${direction}`);

      window.setTimeout(() => {
        if (transitionToken !== currentTransitionToken) {
          return;
        }

        setPanelState(currentPanel, false);
        clearPanelTransitionState(nextPanel);
        refreshViewportActiveState();
        refreshParallaxState();
      }, PANEL_TRANSITION_MS);
    }

    activeTabId = targetId;

    if (options?.focus) {
      nextTab.focus();
    }

    if (options?.updateHash) {
      history.replaceState(null, "", `#${targetId}`);
    }

    if (!deferStateRefresh) {
      refreshViewportActiveState();
      refreshParallaxState();
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = toTabId(`#${tab.dataset.tab ?? ""}`);
      setActiveTab(tabId, { updateHash: true });
    });
  });

  const tablist = document.querySelector<HTMLElement>("[role='tablist']");
  tablist?.addEventListener("keydown", (event) => {
    const activeIndex = tabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true");
    if (activeIndex < 0) {
      return;
    }

    let nextIndex = activeIndex;
    if (event.key === "ArrowRight") {
      nextIndex = (activeIndex + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (activeIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else if (event.key === "Enter" || event.key === " ") {
      const activeTab = tabs[activeIndex];
      const activeTabId = toTabId(`#${activeTab.dataset.tab ?? ""}`);
      setActiveTab(activeTabId, { updateHash: true });
      event.preventDefault();
      return;
    } else {
      return;
    }

    const nextTab = tabs[nextIndex];
    const nextTabId = toTabId(`#${nextTab.dataset.tab ?? ""}`);
    setActiveTab(nextTabId, { focus: true, updateHash: true });
    event.preventDefault();
  });

  activeTabId = toTabId(window.location.hash);
  setActiveTab(activeTabId, { updateHash: true });

  type FocusGroup = {
    panelId: DetailsTabId;
    selector: string;
  };

  const focusGroups: FocusGroup[] = [
    { panelId: "experiencia", selector: "[data-exp-item]" },
    { panelId: "proyectos", selector: "[data-project-item]" },
  ];

  const panelFocusItems = focusGroups
    .map(({ panelId, selector }) => ({ panelId, items: Array.from(document.querySelectorAll<HTMLElement>(selector)) }))
    .filter((group) => group.items.length > 0);

  if (panelFocusItems.length) {
    let ticking = false;

    const updateGroupActiveItem = (items: HTMLElement[]) => {
      const triggerY = window.innerWidth < 768 ? window.innerHeight * 0.62 : window.innerHeight * 0.45;
      let activeItem: HTMLElement | null = null;
      let nearest = Number.POSITIVE_INFINITY;

      for (const item of items) {
        const rect = item.getBoundingClientRect();
        const containsTrigger = rect.top <= triggerY && rect.bottom >= triggerY;

        if (containsTrigger) {
          activeItem = item;
          break;
        }

        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - triggerY);
        if (distance < nearest) {
          nearest = distance;
          activeItem = item;
        }
      }

      items.forEach((item) => item.classList.toggle("is-active", item === activeItem));
    };

    const updateActiveItem = () => {
      panelFocusItems.forEach(({ panelId, items }) => {
        const panel = panelsById.get(panelId);
        if (!panel || panel.hidden) {
          items.forEach((item) => item.classList.remove("is-active"));
          return;
        }

        updateGroupActiveItem(items);
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveItem);
        ticking = true;
      }
    };

    const scheduleActiveItemUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveItem);
        ticking = true;
      }
    };

    refreshViewportActiveState = scheduleActiveItemUpdate;

    updateActiveItem();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  if (!prefersReducedMotion.matches) {
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-exp-item] .exp-cover-media"));

    if (parallaxItems.length) {
      const parallaxTargetByMedia = new WeakMap<HTMLElement, number>();
      const parallaxCurrentByMedia = new WeakMap<HTMLElement, number>();
      let parallaxRaf = 0;

      const resetParallax = () => {
        for (const media of parallaxItems) {
          media.style.setProperty("--exp-parallax-y", "0px");
          parallaxTargetByMedia.set(media, 0);
          parallaxCurrentByMedia.set(media, 0);
        }
      };

      const updateParallaxTargets = () => {
        const experienciaPanel = panelsById.get("experiencia");
        const panelIsVisible = Boolean(experienciaPanel && !experienciaPanel.hidden);

        if (!panelIsVisible) {
          resetParallax();
          return false;
        }

        parallaxItems.forEach((media) => {
          const rect = media.getBoundingClientRect();
          const viewportCenter = window.innerHeight * 0.5;
          const itemCenter = rect.top + rect.height * 0.5;
          const rawProgress = (itemCenter - viewportCenter) / window.innerHeight;
          const clampedProgress = Math.max(-1, Math.min(1, rawProgress));
          const depth = window.innerWidth < 768 ? 16 : 22;
          const translateY = clampedProgress * -depth;

          parallaxTargetByMedia.set(media, translateY);
          if (parallaxCurrentByMedia.get(media) === undefined) {
            parallaxCurrentByMedia.set(media, translateY);
          }
        });

        return true;
      };

      const renderParallax = () => {
        const experienciaPanel = panelsById.get("experiencia");
        const panelIsVisible = Boolean(experienciaPanel && !experienciaPanel.hidden);

        if (!panelIsVisible) {
          resetParallax();
          parallaxRaf = 0;
          return;
        }

        let shouldContinue = false;

        for (const media of parallaxItems) {
          const target = parallaxTargetByMedia.get(media) ?? 0;
          const current = parallaxCurrentByMedia.get(media) ?? 0;
          const next = current + (target - current) * 0.16;

          media.style.setProperty("--exp-parallax-y", `${next.toFixed(2)}px`);
          parallaxCurrentByMedia.set(media, next);

          if (Math.abs(target - next) > 0.06) {
            shouldContinue = true;
          }
        }

        if (shouldContinue) {
          parallaxRaf = window.requestAnimationFrame(renderParallax);
          return;
        }

        parallaxRaf = 0;
      };

      const scheduleParallaxUpdate = () => {
        if (!updateParallaxTargets()) {
          if (parallaxRaf) {
            window.cancelAnimationFrame(parallaxRaf);
            parallaxRaf = 0;
          }
          return;
        }

        if (!parallaxRaf) {
          parallaxRaf = window.requestAnimationFrame(renderParallax);
        }
      };

      const onParallaxScroll = () => scheduleParallaxUpdate();

      refreshParallaxState = scheduleParallaxUpdate;

      scheduleParallaxUpdate();
      window.addEventListener("scroll", onParallaxScroll, { passive: true });
      window.addEventListener("resize", onParallaxScroll);
    }
  }
}
