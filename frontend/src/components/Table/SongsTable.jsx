import Songs from "./Songs.jsx";
import Header from "./Header.jsx";
const SongsTable = ({ songs }) => {
  return (
    <table className="table">
      <thead>
        <Header />
      </thead>
      <tbody>
        <Songs songs={songs} />
      </tbody>
    </table>
  );
};
export default SongsTable;
