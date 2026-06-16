import { getCollection, type CollectionEntry } from "astro:content";

export type TechnicalPostEntry = CollectionEntry<"technicalPosts">;

export interface TechnicalPostSummary {
  slug: string;
  href: string;
  title: string;
  description: string;
  tag: string;
  publishDate: Date;
  updatedDate?: Date;
  cover: {
    src: string;
    alt: string;
  };
  readingTimeMinutes: number;
}

const WORDS_PER_MINUTE = 180;

const sortByNewest = (a: TechnicalPostEntry, b: TechnicalPostEntry) =>
  b.data.publishDate.getTime() - a.data.publishDate.getTime();

const countReadingTime = (content: string) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

export const getTechnicalPostSummaries = async () => {
  const posts = await getCollection("technicalPosts", ({ data }) => !data.draft);

  return posts.sort(sortByNewest).map((post) => ({
    slug: post.id,
    href: `/blog/${post.id}`,
    title: post.data.title,
    description: post.data.description,
    tag: post.data.tag,
    publishDate: post.data.publishDate,
    updatedDate: post.data.updatedDate,
    cover: post.data.cover,
    readingTimeMinutes: countReadingTime(post.body),
  }));
};

export const formatPostDate = (date: Date, locale = "es-PE") => {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};
