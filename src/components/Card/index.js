import React from "react";

import "./card.css";

const Card = ({song}) => {
    const { img,name, pod} =song;
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
        <span className="cardTitle">{name}</span>
        <br />
        <span className="cardAlbum">{pod}</span>
      </div>
    </div>
  );
};

export default Card;
