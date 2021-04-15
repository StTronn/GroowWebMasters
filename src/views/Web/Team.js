import React from "react";
import Card from "../../components/Card";

const cards = [
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U6QLDGA2V-d9385f6f3f8d-512",
    name: "Vikas Singh",
    pod: "Web Lead",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UMZJ2RSNP-d8a93f5ea3b5-512",
    name: "Shivshankar Pindoriya",
    pod: "Onboarding",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UGMMYK9ML-729d435d254a-512",
    name: "Harshit Pruthi",
    pod: "Core-FD",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UF8R6CG2K-5b12e5b02303-512",
    name: "Vyapak Khare",
    pod: "Core-Payments",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UUSKWGS4Q-2af815af2717-512",
    name: "Shivesh Raj Nigam",
    pod: "Us Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UL2NSHWP9-0792320ba0f8-512",
    name: "Bhavesh Goyal",
    pod: "Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UKEQHFPMY-59cdc257af69-512",
    name: "Dheeraj Singh",
    pod: "Core - Help & Support",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U0101RA5LRK-f824b670577d-512",
    name: "Ganesh Hegde",
    pod: "Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UHYHT96LB-41ad519a8116-512",
    name: "Nitin Sharma",
    pod: "Core Mutal Funds",
  },

  {
    img: "https://ca.slack-edge.com/T6QJPBP37-UCL6PMT45-07bf304c3528-512",
    name: "Shambhavi Gupta",
    pod: "Onboarding",
  },

  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U018FGVKHPV-bae7e8dc1393-512",
    name: "Ankit Chouhan",
    pod: "Us Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U017SJZHVHU-3e4ec5a88479-512",
    name: "Samyak Jain",
    pod: "Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U019563KGSC-dc3132f7d6df-512",
    name: "Pruthviraj M Urankar",
    pod: "Stocks",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U01CQGDNJTC-df417a0a2889-512",
    name: "Sarthak Shrivastava",
    pod: "UX",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U01DRLJ91L4-fc7698b36508-512",
    name: "Rishabh Tripathi",
    pod: "Onboarding",
  },
  {
    img: "https://ca.slack-edge.com/T6QJPBP37-U01DKFS872N-4a795729ac4f-512",
    name: "Aditya Vandan Sharma",
    pod: "",
  },
];

const Team = () => {
  return (
    <div className="cardGrid">
      {cards.map((song) => (
        <Card song={song} />
      ))}
    </div>
  );
}

export default Team;
