import React from "react";

export const BaseVideoPlayer = ({ width = "100%", height = "100%", src, type }) => {
  return (
    <div className="videoPlayer">
      <video
        width={width}
        height={height}
        controls
      >
        <source
          src={src}
          type={type}
        />
        Your browser does not support the video tag
      </video>
    </div>
    
  )
}