import React, { useEffect, useState } from "react";

const Resize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoints = [360, 480, 720, 1080];
  const [reloadRequired, setReloadRequired] = useState(false);
  const [reloadCount, setReloadCount] = useState(() => {
    return parseInt(localStorage.getItem("reloadCount")) || 1;
  });

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleWidthChange = debounce(() => {
      setWidth(window.innerWidth);
      setReloadRequired(true);
    }, 300);

    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  useEffect(() => {
    if (reloadRequired) {
      for (let bp of breakpoints) {
        if (width <= bp) {
          window.location.reload();
          //   reloadCountRef.current += 1
          setReloadCount((prevCount) => prevCount + 1);
          break;
        }
      }
    }

    setReloadRequired(false);
  }, [width, reloadRequired, breakpoints]);

  useEffect(() => {
    localStorage.setItem("reloadCount", reloadCount);
  }, [reloadCount]);

  return <main>I like Re-loading! I've re-loaded {reloadCount} times...</main>;
};

export default Resize;
