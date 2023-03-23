import { createContext } from "react";

type LanguageContext = {
  lang: string;
  setLang: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContext>({
  lang: "en",
  setLang: () => {},
});
