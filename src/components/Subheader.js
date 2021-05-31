import React from "react";
import "./Subheader.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image5.png";
import image3 from "../assets/image6.png";
import image4 from "../assets/image4.png";

function Subheader() {
  return (
    <div className="subheader">
      <div className="left-menu">
        <span className="welcome-text">Welcome TO</span>
        <div className="teacher-text">
          <span className="char-t">T</span>
          <span className="char-e">E</span>
          <span className="char-a">A</span>
          <span className="char-c">C</span>
          <span className="char-h">H</span>
          <span className="char-e">E</span>
          <span className="char-r">R</span>
          <span className="char-s">'S</span>
        </div>
        <div className="portal">portal</div>
      </div>
      <div className="right-menu">
        <div className="row">
          <div className="container col">
            <img src={image1} alt="image1" className="img-btn" />
            <div className="exclusive">
              <span>Exclusive</span>
            </div>
            <div className="tokens-subheader">
              <p style={{ color: "white" }}>Liya</p>
              <p style={{ color: "#f0a500" }}>3 Tokens</p>
            </div>
            <div className="button">
              <button> Go Private </button>
            </div>
          </div>
          <div className="container col">
            <img src={image2} alt="image2" className="img-btn" />
            <div className="exclusive">
              <span>Exclusive</span>
            </div>

            <div className="tokens-subheader">
              <p style={{ color: "white" }}>Liya</p>
              <p style={{ color: "#f0a500" }}>6 Tokens</p>
            </div>
            <div className="button">
              <button> Go Private </button>
            </div>
          </div>
          <div className="container col">
            <img src={image3} alt="image3" className="img-btn" />
            <div className="exclusive">
              <span>Exclusive</span>
            </div>

            <div className="tokens-subheader">
              <p style={{ color: "white" }}>Liya</p>
              <p style={{ color: "#f0a500" }}>5 Tokens</p>
            </div>
            <div className="button">
              <button> Go Private </button>
            </div>
          </div>
          <div className="container col">
            <img src={image4} alt="image4" className="img-btn" />
            <div className="exclusive">
              <span>Exclusive</span>
            </div>

            <div className="tokens-subheader">
              <p style={{ color: "white" }}>Liya</p>
              <p style={{ color: "#f0a500" }}>8 Tokens</p>
            </div>
            <div className="button">
              <button> Go Private </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subheader;
