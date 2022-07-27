import React from "react";

export const EventCardGmap = ({ gmapLink, gmapSrc }) => (
  <div className="eventcard-gmap">
    <iframe
      title="location"
      src={gmapSrc}
      width="600"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <a href={gmapLink}>Lihat gmap</a>
  </div>
)