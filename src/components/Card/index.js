import React from "react";

import "./card.css";

const Card = ({song}) => {
    const {img,title,artist} =song;
  return (
    <div className="card">
      <div
        className="cardImg"
        style={{
          background:
            `url(${img})`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="cardDesc">
        <span className="cardTitle">{title}</span>
        <br />
        <span className="cardAlbum">{artist}</span>
      </div>
    </div>
  );
};

export default Card;
