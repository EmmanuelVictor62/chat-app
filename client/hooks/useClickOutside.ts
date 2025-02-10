import React, { useEffect } from "react";

const useClickOutside = (
  containerRef: React.MutableRefObject<HTMLDivElement>,
  setToggleState: React.Dispatch<React.SetStateAction<boolean>>,
  toggleState: boolean
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (containerRef?.current === event.target) {
        setToggleState(toggleState);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("click", listener);
    };
  }, [containerRef, setToggleState, toggleState]);
};

export default useClickOutside;
