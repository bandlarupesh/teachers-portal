import React from "react";
import "./ImageGallery.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image5.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

function ImageGallery() {
  return (
    <div className="gallery-images">
      <p className="featured">Featured</p>
      <div className="row">
        <div className="column">
          <img
            src={image1}
            alt="image1"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Anna</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image2}
            alt="image2"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Crist</p>
            <p style={{ color: "#f0a500" }}>2 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button style={{ background: "gray", color: "white" }}>
              View Profile
            </button>
          </p>
        </div>
        <div className="column">
          <img
            src={image4}
            alt="image4"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Alex</p>
            <p style={{ color: "#f0a500" }}>3 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image3}
            alt="image3"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Anna</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image6}
            alt="image6"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Liya</p>
            <p style={{ color: "#f0a500" }}>6 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button style={{ background: "black", color: "#f0a500" }}>
              Join As Spy
            </button>
          </p>
        </div>
        <div className="column">
          <img
            src={image7}
            alt="image7"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Jessica</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image8}
            alt="image8"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Lonut</p>
            <p style={{ color: "#f0a500" }}>3 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image2}
            alt="image1"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Anna</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image8}
            alt="image2"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Anna</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image4}
            alt="image4"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Anna</p>
            <p style={{ color: "#f0a500" }}>4 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image3}
            alt="image3"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Liya</p>
            <p style={{ color: "#f0a500" }}>6 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
        <div className="column">
          <img
            src={image6}
            alt="image6"
            style={{ height: "296px", width: "264px", opacity: 1 }}
          />
          <div className="tokens">
            <p style={{ color: "white" }}>Lonut</p>
            <p style={{ color: "#f0a500" }}>3 Tokens</p>
          </div>
          <div className="top-left">Online</div>
          <p className="pvt-btn">
            <button>Go Private</button>
          </p>
        </div>
      </div>
      <div className="show-more">
        <button className="show-btn">Show more</button>
      </div>
    </div>
  );
}

export default ImageGallery;
