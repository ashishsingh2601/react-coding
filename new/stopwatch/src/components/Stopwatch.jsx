import React, {useState, useRef} from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
const timeRef = useRef(null);
const [isRunning, setIsRunning] = useState(false);
    
 
    
  const handleStart = () => {
    if(isRunning) return;

    setIsRunning(true);
    timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
    }, 10)
  }

  const handleStop = () => {
    if(!isRunning) return;

    setIsRunning(false);

    clearInterval(timeRef.current);
    setTime(0);
  }

  const handlePause = () => {
    if(!isRunning) return;

    setIsRunning(false);

    clearInterval(timeRef.current);
  }

  const formatTime = (time) => {
    const miliseconds = time % 1000;
    const totalSeconds = Math.floor(time / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return {miliseconds, seconds, minutes, hours};
  }


  const {hours, minutes, seconds, miliseconds} = formatTime(time);

  return (
    <section>
      <div>
        {hours.toFixed().toString().padStart(2, "0")} :{" "}
        {minutes.toFixed().toString().padStart(2, "0")} :{" "}
        {seconds.toFixed().toString().padStart(2, "0")} :{" "}
        {miliseconds.toFixed().toString().padStart(3, "0")}
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </section>
  );
};

export default Stopwatch;
