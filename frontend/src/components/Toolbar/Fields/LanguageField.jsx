import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useLanguageSelect from "../../../hooks/useLanguageSelect.js";
const LanguageField = ({ language, setLanguage }) => {
  const { open, languages, selectedLanguage, selectLanguage, toggleOpen } =
    useLanguageSelect(language, setLanguage);
  return (
    <div className="flex-grow-1">
      <div className="border px-2 rounded bg-white d-flex flex-row justify-content-between">
        <div
          className="d-flex flex-column flex-shrink-0"
          style={{ width: "120px" }}
        >
          <label className="small text-muted d-block mb-0">Language</label>
          <div className="text-nowrap pb-1">{selectedLanguage.country}</div>
        </div>
        <button
          className="btn btn-sm border-0 flex-shrink-0"
          onClick={() => toggleOpen()}
        >
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        </button>
      </div>
      {open && (
        <div className="dropdown position-absolute bg-white border rounded mt-1 ">
          <div className="dropdown-menu show w-100 p-2">
            {languages.map((language) => (
              <div
                key={language.value}
                className=" dropdown-item"
                role="button"
                onClick={() => {
                  selectLanguage(language.value);
                }}
              >
                {language.country}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default LanguageField;
