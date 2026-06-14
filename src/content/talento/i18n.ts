import type { Language, PortfolioTranslations } from "../types";
import { esContent, esUi } from "./es";

export const defaultLanguage: Language = "es";

const translations: Record<Language, PortfolioTranslations> = {
  es: {
    content: esContent,
    ui: esUi,
  },
  en: {
    content: {
      ...esContent,
      locale: "en",
    },
    ui: esUi,
  },
};

export const getTranslations = (lang: Language = defaultLanguage): PortfolioTranslations => {
  return translations[lang] ?? translations[defaultLanguage];
};
