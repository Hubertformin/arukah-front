import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CountDown({date}) {
    const countDate = new Date(date).getTime();

    const [count, setCount] = useState({days: 0, hours: 0, mins: 0, secs: 0, distance: 0});

    const interval = setInterval(() => {
        // Find the distance between now and the count down date
        const distance = countDate - Date.now();
        // Time calculations
        const _count = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            secs: Math.floor((distance % (1000 * 60)) / 1000),
            distance: distance
        };
        // update state
        setCount(_count);
    }, 1000);

    // useEffect(() => (() => clearInterval(interval)));

    return(
        count.distance < 0 ? 
        <>
            <p>This event has already passed</p>
        </>
        : 
        <section className="flex">
            <div className="days text-center px-4">
                <h1>{count.days}</h1>
                <small>Days</small>
            </div>
            <div className="hours text-center px-4">
                <h1>{count.hours}</h1>
                <small>Hours</small>
            </div>
            <div className="mins text-center px-4">
                <h1>{count.mins}</h1>
                <small>Minutes</small>
            </div>
            <div className="seconds text-center px-4">
                <h1>{count.secs}</h1>
                <small>Seconds</small>
            </div>
        </section>
    );
}

export default CountDown;