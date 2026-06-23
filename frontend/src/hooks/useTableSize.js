import { useState, useRef, useEffect } from "react";

let heightForScroll;
const useTableSize = () => {
  const toolbarRef = useRef(null);
  const headerRef = useRef(null);
  const paginationRef = useRef(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const calculateRows = () => {
      const songDescription = 196;
      const toolbar = toolbarRef.current?.getBoundingClientRect().height;

      const header = headerRef.current?.getBoundingClientRect().height;

      const pagination = paginationRef.current?.getBoundingClientRect().height;

      const row = 41.2;
      let heightForTable =
        window.innerHeight - toolbar - pagination - header - songDescription;
      heightForScroll = window.innerHeight - toolbar - header;
      setQuantity(Math.floor(heightForTable / row));
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
