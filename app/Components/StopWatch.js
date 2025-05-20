"use client"
import React, { useState, useRef, useEffect } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current); // cleanup
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning) setIsRunning(true);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
  };

  return (
    <div className="">
      <p className="text-xl font-semibold mb-4">Deep Focused <span className="text-green-400">Work Session</span></p>

 


      <h2 className="font-bold   time text-3xl md:text-4xl tracking-widest mb-4 min-w-[250px] font-audiowide ">{formatTime(time)}</h2>
     
      <div className="btns flex justify-center gap-5 items-center text-white">
        <button
          onClick={handleStart}
          className='bg-white/20 px-4 py-2 cursor-pointer hover:bg-white/30 rounded-md transition-all'
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className='bg-[#3498bd] px-4 py-2 cursor-pointer hover:bg-[#6598aa] rounded-md transition-all'
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className='bg-[#FB6F4C] px-4 py-2 cursor-pointer hover:bg-[#db856f] rounded-md transition-all'
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
