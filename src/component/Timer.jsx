import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({timeEnded}) => {
    
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(5);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    alert("timeOut");
                    timeEnded();
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {           
           clearInterval(myInterval);
          };
    });

    return (
        <div>
        <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        
        </div>
    )
}

export default Timer;