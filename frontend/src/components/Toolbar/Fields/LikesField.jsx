const LikesField = ({ likes, setLikes }) => {
  return (
    <div className="flex-grow-1">
      <label className="small text-muted d-block mb-0 fw-lg">Likes</label>
      <div className="position-relative">
        <div
          className="position-absolute text-muted d-flex justify-content-between w-100 text-muted m-0"
          style={{ pointerEvents: "none", userSelect: "none", bottom: "43%" }}
        >
          {Array.from({ length: 11 }, (_, i) => (
            <span key={i}>'</span>
          ))}
        </div>
        <input
          id="likesRange"
          className="form-range m-0"
          value={likes}
          type="range"
          min="0"
          max="10"
          step="0.1"
          onChange={(event) => setLikes(Number(event.target.value))}
        />
      </div>
    </div>
  );
};
export default LikesField;
