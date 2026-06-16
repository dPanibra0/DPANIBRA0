import type { NavItem, PortfolioUiTranslations } from "../content/types";

export const detailRouteOrder = ["experiencia", "proyectos", "blog"] as const;

export type DetailRouteId = (typeof detailRouteOrder)[number];

export const detailRouteHrefById: Record<DetailRouteId, string> = {
  experiencia: "/experiencia",
  proyectos: "/proyectos",
  blog: "/blog",
};

export const getDetailHeaderNav = (): NavItem[] => {
  return [
    { label: "Inicio", href: "/" },
    { label: "Contacto", href: "#contacto" },
  ];
};

export const getDetailFooterNav = (
  tabs: PortfolioUiTranslations["detalles"]["tabs"],
): NavItem[] => {
  return [
    { label: "Inicio", href: "/" },
    { label: tabs.experiencia, href: detailRouteHrefById.experiencia },
    { label: tabs.proyectos, href: detailRouteHrefById.proyectos },
    { label: tabs.blog, href: detailRouteHrefById.blog },
    { label: "Contacto", href: "#contacto" },
  ];
};
