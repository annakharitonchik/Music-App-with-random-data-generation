import { useState } from "react";

const useLanguageSelect = (language) => {
  const [open, setOpen] = useState(false);
  const languages = [
    { value: "en-US", country: "English (US)" },
    { value: "de", country: "German (DE)" },
    { value: "fr", country: "French (FR)" },
  ];
  const selectedLanguage = languages.find(
    (element) => element.value === language,
  );

  const toggleOpen = () => {
    setOpen((open) => !open);
  };
  return {
    open,
    languages,
    selectedLanguage,
    toggleOpen,
  };
};
export default useLanguageSelect;
