import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
const SeedField = ({ seed, setSeed }) => {
  return (
    <div className="flex-grow-1">
      <div className="border px-2 rounded bg-white d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
          <label className="small text-muted d-block mb-0">Seed</label>

          <input
            className="form-control border-0 shadow-none p-0 pb-1"
            value={seed}
            onChange={(event) =>
              setSeed(Number(event.target.value.slice(0, 8)) || 0)
            }
          />
        </div>
        <button
          className="btn btn-sm border-0"
          onClick={() => setSeed(Math.floor(Math.random() * 100000000))}
        >
          <FontAwesomeIcon icon={faShuffle} size="lg" />
        </button>
      </div>
    </div>
  );
};
export default SeedField;
