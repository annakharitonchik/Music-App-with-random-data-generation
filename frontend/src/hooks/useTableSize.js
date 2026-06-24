import { useState, useRef, useEffect } from "react";

let heightForScroll;
const useTableSize = () => {
  const toolbarRef = useRef(null);
  const headerRef = useRef(null);
  const paginationRef = useRef(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const calculateRows = () => {
      const SONG_DESCRIPTION = 230;
      const toolbar = toolbarRef.current?.getBoundingClientRect().height;

      const header = headerRef.current?.getBoundingClientRect().height;

      const pagination = paginationRef.current?.getBoundingClientRect().height;

      const ROW = 41.2;
      let heightForTable =
        window.innerHeight - toolbar - pagination - header - SONG_DESCRIPTION;
      heightForScroll = window.innerHeight - toolbar - header;
      setQuantity(Math.floor(heightForTable / ROW));
    };

    calculateRows();

    window.addEventListener("resize", calculateRows);
    return () => {
      window.removeEventListener("resize", calculateRows);
    };
  }, []);

  return {
    toolbarRef,
    headerRef,
    paginationRef,
    quantity,
    heightForScroll,
  };
};

export default useTableSize;
