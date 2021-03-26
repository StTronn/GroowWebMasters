import React, { useContext } from "react";
import Card from "./components/Card";
import { Store } from "./Store";
import "./App.css";

const cards = [
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U6QLDGA2V-d9385f6f3f8d-512",
    title: "Vikas Singh",
    artist: "Web Lead",
  },
  {
    img:
      "https://ca.slack-edge.com/T6QJPBP37-UMZJ2RSNP-d8a93f5ea3b5-512",
    title: "Shivshankar Pindoriya",
    artist: "Onboarding",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UGMMYK9ML-729d435d254a-512",
    title: "Harshit Pruthi",
    artist: "Core-FD",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UF8R6CG2K-5b12e5b02303-512",
    title: "Vyapak Khare",
    artist: "Core-Payments",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UUSKWGS4Q-2af815af2717-512",
    title: "Shivesh Raj Nigam",
    artist: "Us Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UL2NSHWP9-0792320ba0f8-512",
    title: "Bhavesh Goyal",
    artist: "Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UKEQHFPMY-59cdc257af69-512",
    title: "Dheeraj Singh",
    artist: "Core - Help & Support",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U0101RA5LRK-f824b670577d-512",
    title: "Ganesh Hegde",
    artist: "Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UHYHT96LB-41ad519a8116-512",
    title: "Nitin Sharma",
    artist: "Core Mutal Funds",
  },

  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UCL6PMT45-07bf304c3528-512",
    title: "Shambhavi Gupta",
    artist: "Onboarding",
  },

  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U018FGVKHPV-bae7e8dc1393-512",
    title: "Ankit Chouhan",
    artist: "Us Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U017SJZHVHU-3e4ec5a88479-512",
    title: "Samyak Jain",
    artist: "Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U019563KGSC-dc3132f7d6df-512",
    title: "Pruthviraj M Urankar",
    artist: "Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U01CQGDNJTC-df417a0a2889-512",
    title: "Sarthak Shrivastava",
    artist: "UX",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U01DRLJ91L4-fc7698b36508-512",
    title: "Rishabh Tripathi",
    artist: "Onboarding",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U01DKFS872N-4a795729ac4f-512",
    title: "Aditya Vandan Sharma",
    artist: "",
  },
];

function App() {
  return (
    <div className="App appCointainer">
      <div className="banner">
        {" "}
        Groww
        <div style={{ color: "#1db954",marginTop:"6px" }}> Web Masters</div>
      </div>
      <div className="cardGrid">
        {cards.map((song) => (
          <Card song={song} />
        ))}
      </div>
    </div>
  );
}

export default App;
