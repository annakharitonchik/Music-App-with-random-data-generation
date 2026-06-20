import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faTableList } from "@fortawesome/free-solid-svg-icons";
const ViewTypeField = ({ viewType, setViewType }) => {
  return (
    <div className="flex-grow-1">
      <div className="d-flex justify-content-end">
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${viewType === "pages" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setViewType("pages")}
          >
            <FontAwesomeIcon icon={faTable} size="lg" />
          </button>

          <button
            type="button"
            className={`btn ${viewType === "scroll" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setViewType("scroll")}
          >
            <FontAwesomeIcon icon={faTableList} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ViewTypeField;
