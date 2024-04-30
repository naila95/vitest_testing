import { useEffect } from "react";
import { useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({ width: "", height: "" });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
};

export default useWindowSize;
