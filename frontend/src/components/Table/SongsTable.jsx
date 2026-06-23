import Songs from "./Songs.jsx";
import Header from "./Header.jsx";
import Scroll from "./Scroll.jsx";
const SongsTable = ({
  songs,
  headerRef,
  rowRef,
  viewType,
  loadMore,
  heightForScroll,
}) => {
  return (
    <div
      className="px-2"
      style={
        viewType === "scroll"
          ? {
              height: heightForScroll,
              overflowY: "auto",
              minHeight: 0,
            }
          : {}
      }
      onScroll={(event) => {
        viewType === "scroll" && Scroll({ event, loadMore });
      }}
    >
      <table className="table" style={{ tableLayout: "fixed" }}>
        <thead
          ref={headerRef}
          className="border-dark"
          style={{
            borderBottom: "2px solid black",
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "white",
          }}
        >
          <Header />
        </thead>

        <tbody>
          <Songs songs={songs} rowRef={rowRef} />
        </tbody>
      </table>
    </div>
  );
};
export default SongsTable;
