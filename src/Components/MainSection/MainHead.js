import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MainHead = () => {
  return (
    <div className="mb-5 main-section">
      <div className="main-section-head" data-aos="flip-left">
        <div className="main-section-title">
          <h2 style={{ color: "#644f9c" }}>AVAILABLE FOR EVERYONE</h2>
          <h5>we offer everyone whatever they need.</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card-item" data-aos="zoom-in">
          <img
            src="https://img.icons8.com/fluency/48/undefined/speaker.png"
            alt="img"
            className="rounded-circle shadow p-5"
          />
          <p className="my-3">Announcement</p>
          <button className="btn text-light rounded-pill mt-5">Go ahead</button>
        </div>
        <div className="card-item" data-aos="zoom-in">
          <img
            src="https://img.icons8.com/color/48/undefined/sent--v2.png"
            alt="img"
            className="rounded-circle shadow p-5"
          />
          <p className="my-3">Messages</p>
          <button className="btn text-light rounded-pill mt-5">Go ahead</button>
        </div>
        <div className="card-item" data-aos="zoom-in">
          <img
            src="https://img.icons8.com/fluency/48/undefined/radio-waves.png"
            alt="img"
            className="rounded-circle shadow p-5"
          />
          <p className="my-3">Speak</p>
          <button className="btn text-light rounded-pill mt-5">Go ahead</button>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
