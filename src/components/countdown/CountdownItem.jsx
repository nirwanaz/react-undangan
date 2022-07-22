import React from "react";
import { CountdownDateTime } from "./CountdownDateTime";

export const CountdownItem = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="countdown-item">
            <CountdownDateTime value={days} type={'Days'} />
            <CountdownDateTime value={hours} type={'Hours'} />
            <CountdownDateTime value={minutes} type={'Minutes'} />
            <CountdownDateTime value={seconds} type={'Seconds'} />
        </div>
    )
}