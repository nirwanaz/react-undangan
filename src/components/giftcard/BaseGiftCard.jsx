import React from "react";

import "./BaseGiftCard.css";

export const BaseGiftCard = ({ name, number, src, receiver }) => {
  const copy = (copyMe) => {
    navigator.clipboard.writeText(copyMe)
    alert("number was copied")
  }

  const formatNumber = (number) => {
    const numberArr = Array.from(number)
    const count = Math.floor(numberArr.length / 4)

    for (let i = 0; i < count; i++ ) {
      numberArr.splice(((i + 1) * 4) + i, 0, '-')
    }

    // return number.slice(0, 4) + "-" + number.slice(4 + Math.abs(0))

    return numberArr.join('')
  }
  
  return (
    <div className="giftcard">
      <div className="giftcard-header">
        <img src={src} alt={name} />
      </div>
      <div className="giftcard-body">
        <h5>{name}</h5>
        <p>
          {formatNumber(number)}&nbsp;
          <span onClick={() => copy(number)}>
            copy
          </span>
        </p>
        <p>a.n:&nbsp;{receiver}</p>
      </div>
    </div>
  )
}