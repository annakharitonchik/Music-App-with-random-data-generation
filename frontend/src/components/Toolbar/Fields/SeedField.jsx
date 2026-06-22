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
            onChange={(event) => {
              const value = event.target.value
                .replace(/\D/g, "")
                .replace(/^0+/, "");

              const max = (1n << 64n) - 1n;

              if (value === "") {
                setSeed("0");
              } else if (BigInt(value) <= max) {
                setSeed(value);
              }
            }}
          />
        </div>
        <button
          className="btn btn-sm border-0"
          onClick={() => {
            const bytes = new Uint8Array(8);
            crypto.getRandomValues(bytes);

            let seed = 0n;

            for (const byte of bytes) {
              seed = (seed << 8n) | BigInt(byte);
            }

            setSeed(seed.toString());
          }}
        >
          <FontAwesomeIcon icon={faShuffle} size="lg" />
        </button>
      </div>
    </div>
  );
};
export default SeedField;
