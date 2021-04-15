import React from "react";
import Highlights from "./Highlights";
import Team from './Team';

const Web = () => {
  return (
    <div className="App appCointainer">
      <div className="banner">
        {" "}
        Groww
        <div style={{ color: "#1db954", marginTop: "6px" }}> Web Masters</div>
      </div>
      <Team />
      <Highlights />
    </div>
  );
}

export default Web;
