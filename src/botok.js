import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import axios from "axios";

import "./App.css";
import img1 from "./Assets/aavlogo.png";
import img2 from "./Assets/logoleft.png";
import img3 from "./Assets/logoright.png";
import img4 from "./Assets/ai.png";
import img5 from "./Assets/eyeflash.png";
import img6 from "./Assets/redtitle.png";
import img7 from "./Assets/Subtract.png";
import chat from "./Assets/Group126.png";
import sendbtn from "./Assets/send.png";

import { MdAddCircleOutline } from "react-icons/md";

function App() {
  // State to manage the response

  const [response, setResponse] = useState(""); // State to manage the response
  const [responseVisible, setResponseVisible] = useState(false);

  const submitHandle = () => {
    // Simulating a response from the chatbot
    const fakeResponse = "This is a sample response.";
    setResponse(fakeResponse);
    setResponseVisible(true); // Show the response
  };

  const deleteResponse = () => {
    setResponseVisible(false); // Hide the response with fade-out effect
  };

  // const swipeConfig = {
  //   onSwipedLeft: deleteResponse,
  //   preventDefaultTouchmoveEvent: true,
  //   trackMouse: true,
  // };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: deleteResponse,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo-container">
          <h1 className="clogo">AAVINNOVATION LAB</h1>
          <div className="image-container">
            <img src={img2} alt="Cropped Image" />
          </div>
        </div>
        <div className="user-info">
          <h1>
            Welcome, <span>Vishwa</span>
          </h1>
          <img src={img3} alt="Logo 3" className="logo" />
        </div>
      </nav>
      <div className="main-container">
        <div className="redtitle">
          <img src={img6} alt="" />
          <h1>An Ai based Assistant</h1>
        </div>
        <div className="partonea">
          <img src={img5} alt="" />
        </div>
        <div className="partone">
          <img src={img4} alt="" />
        </div>
      </div>

      <div className="chatsection">
        <div className="response-section">
          {responseVisible && (
            <div className="response-popup" {...swipeHandlers}>
              <p>{response}</p>
            </div>
          )}
        </div>
        <div className="addoicon">
          <h1>
            <MdAddCircleOutline />
          </h1>
        </div>
        <div className="chatbtn">
          <img src={chat} alt="" />
        </div>
        <div className="inputsection">
          <p>Hi, I am dalas</p>
          <input placeholder="Type your message here " type="text" />
        </div>
        <img src={img7} alt="" />
        <img
          onClick={submitHandle}
          style={{ marginBottom: "15px" }}
          src={sendbtn}
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
