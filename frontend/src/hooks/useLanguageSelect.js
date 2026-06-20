import { useState } from "react";

const useLanguageSelect = (language, setLanguage) => {
  const [open, setOpen] = useState(false);
  const languages = [
    { value: "en-US", country: "English (US)" },
    { value: "ru-RU", country: "Russian (RU)" },
  ];
  const selectedLanguage = languages.find(
    (element) => element.value === language,
  );

  const selectLanguage = (language) => {
    setLanguage(language);
    setOpen(false);
  };
  const toggleOpen = () => {
    setOpen((open) => !open);
  };
  return {
    open,
    languages,
    selectedLanguage,
    selectLanguage,
    toggleOpen,
  };
};
export default useLanguageSelect;
