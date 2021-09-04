import React from "react";
import classnames from "classnames";
import alpha from "./images/Alpha.png";
import "./card.scss";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={alpha} alt="alpha" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.src} alt="alpha" />
      </div>
    </div>
  );
};

export default Card;
