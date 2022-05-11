import React, { useState } from "react";

import RedHeart from "../../../public/img/RedHeart.svg";
import GrayHeart from "../../../public/img/GrayHeart.svg";
import "./LikeButton.css";

const LikeButton = () => {
  const [heart, setHeart] = useState(RedHeart);

  const changeHeartHandler = () => {
    if (heart == RedHeart) {
      setHeart(GrayHeart);
    } else {
      setHeart(RedHeart);
    }
  };

  return (
    <button onClick={changeHeartHandler} className="like-button">
      <img src={heart} alt="" />
    </button>
  );
};

export default LikeButton;
