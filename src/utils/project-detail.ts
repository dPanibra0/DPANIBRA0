import type { ProjectContent } from "../content/types";

const normalizeProjectSlug = (value: string) => {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const getProjectDetailId = (
  project: Pick<ProjectContent, "title">,
  index: number,
) => {
  const slug = normalizeProjectSlug(project.title);
  return slug ? `proyecto-${index + 1}-${slug}` : `proyecto-${index + 1}`;
};

export const getProjectDetailHref = (
  project: Pick<ProjectContent, "title">,
  index: number,
) => {
  return `/detalles#${getProjectDetailId(project, index)}`;
};
