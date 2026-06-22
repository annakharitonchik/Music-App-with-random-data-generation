import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex-grow-1">
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`px-2 btn btn-outline-primary border-2 border-left-white `}
            style={{ borderColor: "#c4c4c4" }}
            disabled={page === 1}
            onClick={() => setPage(1)}
          >
            <FontAwesomeIcon icon={faAnglesLeft} size="sm" />
          </button>
          {page > 1 && (
            <button
              type="button"
              disabled={page === 2}
              className={`btn btn--outline-primary border-2  border-start-0 `}
              style={{ borderColor: "#c4c4c4" }}
              onClick={() => setPage((prev) => prev - 1)}
            >
              {page - 1}
            </button>
          )}
          <button
            type="button"
            className={`btn btn-primary border-2 border-end-0 `}
          >
            {page}
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary border-2  `}
            style={{ borderColor: "#c4c4c4" }}
            onClick={() => setPage((prev) => prev + 1)}
          >
            {page + 1}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
