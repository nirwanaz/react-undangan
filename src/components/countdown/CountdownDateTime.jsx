import React from "react";

export const CountdownDateTime = ({ value, type }) => {
    return (
        <div className="countdown-datetime">
            <p>{value}</p>
            <span>{type}</span>
        </div>
    )
}