import React from "react";
import { useRef, useState } from "react";

import "./BaseAudioPlayer.css";

export const BaseAudioPlayer = ({ src, type, isPlaying = false }) => {
  const audioPlayer = useRef()
  const [playing, setPlaying] = useState(isPlaying)

  const play = () => {
    audioPlayer.current.loop = true
    audioPlayer.current.volume = 0.6
    audioPlayer.current.play()
  }

  const pause = () => {
    audioPlayer.current.pause()
  }

  const toggle = () => {
    if (playing) {
      pause()
    } else {
      play()
    }

    setPlaying(!playing)
  }

  return (
    <div className="audioplayer">
      <audio
        ref={audioPlayer}
        src={src}
        type={type}
        hidden>
      </audio>
      <button onClick={toggle}>{playing ? 'Pause':'Play'}</button>
    </div>
  )
}