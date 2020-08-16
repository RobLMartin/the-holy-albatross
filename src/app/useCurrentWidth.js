import { useState, useEffect } from "react";

const getWidth = (id) =>
  document.getElementById(id) &&
  document.getElementById(id).getBoundingClientRect().width;

function useCurrentWidth(id) {
  // save current window width in the state object
  let [width, setWidth] = useState("");

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth(id));
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, [id]);

  return width;
}

export default useCurrentWidth;
