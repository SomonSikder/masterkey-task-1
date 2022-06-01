import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="m-4">
      <div className="d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-dark fw-bolder fs-1" href="#">
          Masterkey
        </a>
        <div className="px-5">
          <button className="text-success">Bn</button>
          <span className="mx-1">/</span>
          <button>En</button>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  ADVERTISERS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  PUBLISHERS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  INFLUENCERS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  AD FORMATS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
            <div className="login-bar bg-light shadow-sm fw-bold py-2 px-2">
              <button className="login">LOGIN</button>
              <button className="sign-up">SIGN UP</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
