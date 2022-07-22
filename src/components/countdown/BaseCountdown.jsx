import React from "react";
import { useState, useEffect } from "react"
import { CountdownItem  } from "./CountdownItem";
import { CountdownExpired } from "./CountdownExpired";

import "./BaseCountdown.css"

export const BaseCountdown = ({ eventDay }) => {
    const theDay = new Date(eventDay).getTime()

    const [countdown, setCountdown] = useState(
        theDay - new Date().getTime()
    )
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(theDay - new Date().getTime())
        }, 1000)

        return () => clearInterval(interval)
    }, [theDay])

    const getReturnValues = (countdown) => {
        const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
        const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((countdown % (1000 * 60)) / (1000))

        return {days, hours, minutes, seconds}
    }

    // const [days, hours, minutes, seconds] = getReturnValues(countdown)
    
    return (
        <div className="countdown">
            <div className="countdown-inner">
                {countdown <= 0 ? <CountdownItem {...getReturnValues(countdown)}/> : <CountdownExpired />}
            </div>
        </div>
    )
}