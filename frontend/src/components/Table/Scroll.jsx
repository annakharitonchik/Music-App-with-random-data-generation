const Scroll = ({ event, loadMore }) => {
  const target = event.currentTarget;
  const isBottom =
    target.scrollHeight - target.scrollTop <=
    target.clientHeight + target.clientHeight / 3;
  if (isBottom) {
    loadMore();
  }
};
export default Scroll;
