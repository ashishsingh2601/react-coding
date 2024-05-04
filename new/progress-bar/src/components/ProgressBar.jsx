import React from "react";
import { useEffect, useState } from "react";
import { MAX } from "./constants";

const ProgressBar = ({ progress, setLoading = () => {} }) => {
  const [percent, setPercent] = useState(progress);

  useEffect(() => {
    setPercent(Math.min(Math.max(0, progress), 100));

    if (percent >= MAX) {
      setLoading();
    }
  }, [progress]);

  return (
    <div className="progess__bar">
      <span>{percent.toFixed()}%</span>

      <div style={{ width: `${percent}%` }} role="progressbar" />
    </div>
  );
};

export default ProgressBar;
