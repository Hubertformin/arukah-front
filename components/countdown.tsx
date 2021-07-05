import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CountDown({date, localeText={days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds'}}) {
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
                <h1 className="text-4xl px-4 py-2 m-0 shadow">{count.days > 10 ? count.days : `0${count.days}`}</h1>
                <small>{localeText.days}</small>
            </div>
            <div className="hours text-center px-4">
                <h1 className="text-4xl px-4 py-2 m-0 shadow">{count.hours > 10 ? count.hours : `0${count.hours}`}</h1>
                <small>{localeText.hours}</small>
            </div>
            <div className="mins text-center px-4">
                <h1 className="text-4xl px-4 py-2 m-0 shadow">{count.mins > 10 ? count.mins : `0${count.mins}`}</h1>
                <small>{localeText.minutes}</small>
            </div>
            <div className="seconds text-center px-4">
                <h1 className="text-4xl px-4 py-2 m-0 shadow">{count.secs > 10 ? count.secs : `0${count.secs}`}</h1>
                <small>{localeText.seconds}</small>
            </div>
        </section>
    );
}

export default CountDown;