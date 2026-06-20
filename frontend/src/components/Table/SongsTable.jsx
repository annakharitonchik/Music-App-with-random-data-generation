import Songs from "./Songs.jsx";
import Header from "./Header.jsx";
const SongsTable = ({ songs }) => {
  return (
    <div className="px-2">
      <table className="table" style={{ tableLayout: "fixed" }}>
        <thead
          className="border-dark"
          style={{ borderBottom: "2px solid black" }}
        >
          <Header />
        </thead>
        <tbody>
          <Songs songs={songs} />
        </tbody>
      </table>
    </div>
  );
};
export default SongsTable;
