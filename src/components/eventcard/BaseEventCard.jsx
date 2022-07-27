import React from "react";
import { EventCardDetail } from "./EventCardDetail";
import { EventCardGmap } from "./EventCardGmap";

import "./BaseEventCard.css";

export const BaseEventCard = ({ title, dateStart, dateEnd = "", timeStart, timeEnd = "", location, gmapLink, gmapSrc }) => {
  return (
    <div className="eventcard">
      <div className="eventcard-header">
        <h4>{title}</h4>
      </div>
      <div className="eventcard-body">
        <EventCardDetail
          dateStart={dateStart}
          dateEnd={dateEnd}
          timeStart={timeStart}
          timeEnd={timeEnd}
          location={location}
        />
        <EventCardGmap gmapLink={gmapLink} gmapSrc={gmapSrc}/>
      </div>
    </div>
  )
}