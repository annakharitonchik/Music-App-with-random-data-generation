import { useState, useRef, useEffect } from "react";
const useTableSize = () => {
  const toolbarRef = useRef(null);
  const headerRef = useRef(null);
  const paginationRef = useRef(null);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const calculateRows = () => {
      const toolbar = toolbarRef.current?.getBoundingClientRect().height;

      const header = headerRef.current?.getBoundingClientRect().height;

      const pagination = paginationRef.current?.getBoundingClientRect().height;

      const row = 41.2;

      const availableHeight =
        window.innerHeight - toolbar - pagination - header - 40;

      if (row > 0 && availableHeight > 0) {
        setQuantity(Math.floor(availableHeight / row));
      }
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
  };
};

export default useTableSize;
