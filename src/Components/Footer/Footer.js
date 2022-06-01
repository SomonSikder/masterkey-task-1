import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="d-flex justify-content-around footer-section">
      <div>
        <h4 style={{ color: "#644f9c" }}>We are social</h4>
        <h4>FOLLOW US</h4>
        <div>
          <a href="">
            <img
              src="https://img.icons8.com/fluency/48/undefined/instagram-new.png"
              alt="img"
            />
          </a>
          <a href="">
            <img
              src="https://img.icons8.com/fluency/48/undefined/facebook-new.png"
              alt="img"
            />
          </a>
          <a href="">
            <img
              src="https://img.icons8.com/fluency/48/undefined/youtube-play.png"
              alt="img"
            />
          </a>
        </div>
        <a className="navbar-brand text-dark fw-bolder fs-1" href="#">
          Masterkey
        </a>
      </div>
      <div className="links-items">
        <ul>
          <li>
            <h4 style={{ color: "#644f9c" }}>Links</h4>
          </li>
          <li>
            <a href=" nav-link">ADVERTISERS</a>
          </li>
          <li>
            <a href="">PUBLISHERS</a>
          </li>
          <li>
            <a href="">INFLUENCERS</a>
          </li>
          <li>
            <a href="">AD FORMATS </a>
          </li>
        </ul>
      </div>

      <div className="links-items">
        <ul>
          <li>
            <h4 style={{ color: "#644f9c" }}>Documentation</h4>
          </li>
          <li>
            <a href=" nav-link">TERMS & CONDITIONS</a>
          </li>
          <li>
            <a href="">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="">CANCELLATION POLICY</a>
          </li>
          <li>
            <a href="">BLOG </a>
          </li>
        </ul>
      </div>
      <div className="links-items">
        <ul>
          <li>
            <h4 style={{ color: "#644f9c" }}>Support</h4>
          </li>
          <li>
            <a href=" nav-link">FAQ</a>
          </li>
          <li>
            <a href="">MEDIA KIT</a>
          </li>
          <li>
            <a href="">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
