import React from "react";
import "./HomePage.css";
import img4 from "./Assets/ai.png";
import img5 from "./Assets/eyeflash.png";

function HomePage() {
  return (
    <div className="main-container">
      <div className="partone">
        <img className="flash" src={img5} alt="" />
        <img className="ai" src={img4} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
