import React, { useState, useEffect, useCallback } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let timer = null;
  const onStartHandler = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (seconds < 60) {
      if (isActive) {
        timer = setTimeout(() => {
          setSeconds(seconds + 1);
        }, 1000);
      } else {
        clearTimeout(timer);
      }
    } else {
      clearTimeout(timer);
      setMinutes(minutes + 1);
      setSeconds(0);
    }
  }, [isActive, seconds]);

  const onStopHandler = () => {
    setIsActive(false);
  };

  const onResetHandler = () => {
    clearTimeout(timer);
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  };

  //convert numbets to minutes and seconds
  let mm, ss;
  mm = minutes < 10 ? '0' + minutes : minutes;
  ss = seconds < 10 ? '0' + seconds : seconds;

  return (
    <React.Fragment>
      <div>{mm + ' : ' + ss}</div>
      <div>
        <input type="button" value="Start" onClick={onStartHandler} />
        <input type="button" value="Stop" onClick={onStopHandler} />
        <input type="button" value="Reset" onClick={onResetHandler} />
      </div>
    </React.Fragment>
  );
};

export default Timer;
