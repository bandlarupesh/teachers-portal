import React from "react";
import "./ImageCarousel.css";
import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

function ImageCarousel() {
  return (
    <div>
      <span className="online-teacher">Online Teacher's</span>
      <div className="image-carousel">
        <div className="gallery">
          <img
            src={image1}
            alt="image1"
            style={{ width: "260px", height: "300px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Anna</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="online">Online</div>
          <p className="para">
            <button className="btn-private">Go Private</button>
          </p>
        </div>
        <div className="gallery">
          <img
            src={image4}
            alt="image4"
            style={{ width: "260px", height: "300px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Crist</p>
            <p style={{ color: "#f0a500" }}>2 Tokens</p>
          </div>
          <div className="online">Online</div>
          <p className="para">
            <button className="btn-private">Go Private</button>
          </p>
        </div>
        <div className="gallery">
          <img
            src={image3}
            alt="image3"
            style={{ width: "260px", height: "300px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Alex</p>
            <p style={{ color: "#f0a500" }}>3 Tokens</p>
          </div>
          <div className="online">Online</div>
          <p className="para">
            <button className="btn-private">Go Private</button>
          </p>
        </div>
        <div className="gallery">
          <img
            src={image5}
            alt="image5"
            style={{ width: "260px", height: "300px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Liya</p>
            <p style={{ color: "#f0a500" }}>6 Tokens</p>
          </div>
          <div className="online">Online</div>
          <p className="para">
            <button className="btn-private">Go Private</button>
          </p>
        </div>
        <div className="gallery">
          <img
            src={image6}
            alt="image6"
            style={{ width: "260px", height: "300px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Jessica</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="online">Online</div>
          <p className="para">
            <button className="btn-private">Go Private</button>
          </p>
        </div>
        <div className="gallery">
          <img
            src={image7}
            alt="image7"
            style={{ width: "260px", height: "300px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Lonut</p>
            <p style={{ color: "#f0a500" }}>3 Tokens</p>
          </div>
          <div className="online">Online</div>
          <p className="para">
            <button className="btn-private">Go Private</button>
          </p>
        </div>
        <div className="gallery">
          <img
            src={image8}
            alt="image8"
            style={{ width: "260px", height: "300px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Anna</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="online">Online</div>
          <p className="para">
            <button className="btn-private">Go Private</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
