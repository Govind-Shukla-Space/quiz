import React, { useState, useEffect } from 'react';
import './time.css';


const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setActive] = useState(false);

    var time;
    useEffect(() => {
        if (isActive === true) {
            time = setInterval(() => {
                setSeconds(seconds + 1);
                if (seconds === 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }
            }, 1000)
            return () => clearInterval(time)
        }
    });
    const start = () => {
        setActive(true);
    }
    const restart = () => {
        setMinutes(0);
        setSeconds(0);
        setActive(false);
    }
    const stop = () => {
        clearInterval(time);
    }
    return (
        <div className='timer_container'>
            <h1>Timer</h1><br />
            <h1>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h1><br />
            <button className='start' onClick={start}>Start</button>{'\t'}
            <button className='restart' onClick={restart}>Restart</button>{'\t'}
            <button className='stop' onClick={stop}>Stop</button>
        </div>
    )
}
export default Timer;