import LanguageField from "./Fields/LanguageField.jsx";
import SeedField from "./Fields/SeedField.jsx";
import LikesField from "./Fields/LikesField.jsx";
import ViewTypeField from "./Fields/ViewTypeField.jsx";
const Toolbar = ({
  language,
  setLanguage,
  likes,
  setLikes,
  seed,
  setSeed,
  viewType,
  setViewType,
}) => {
  return (
    <div className="navbar navbar-light  bg-light m-2">
      <div className="container-fluid">
        <div className="d-flex w-100 gap-3 gap-lg-5 flex-wrap align-items-center align-items-center">
          <LanguageField language={language} setLanguage={setLanguage} />
          <SeedField seed={seed} setSeed={setSeed} />
          <LikesField likes={likes} setLikes={setLikes} />
          <ViewTypeField viewType={viewType} setViewType={setViewType} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
