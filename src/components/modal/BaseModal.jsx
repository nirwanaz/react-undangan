import React from "react";
import { useState } from "react";

import "./BaseModal.css";

export const BaseModal = ({ show = true, img }) => {
  const [isShowing, setIsShowing] = useState(show);

  const toggle = () => {
    setIsShowing(!isShowing)
  }

  return (
    <div className={isShowing ? 'modal-wrapper d-block': 'modal-wrapper d-none'} role="dialog">
      <img 
        src={`${img}&auto=format&fit=crop&w=500&q=60`}
        alt="opener"
      />
      <div className="modal">
        <div className="modal-body">
          <h1>save the date</h1>
          <h2>Romeo&nbsp;&amp;&nbsp;Juliette</h2>
          <p>Kepada Yth.<span></span></p>
          <button className="modal-close-button" onClick={toggle}>open</button>
        </div>
      </div>
    </div>
  )
}