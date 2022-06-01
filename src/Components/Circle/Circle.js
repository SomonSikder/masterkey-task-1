import React from "react";
import "./Circle.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Circle = () => {
  return (
    <div className="circle-section p-3">
      <div className="text-center text-light">
        <h2>Title 1</h2>
      </div>
      <div className="d-flex justify-content-around align-items-center mt-5">
        <div
          className="circle1 shadow-sm"
          data-aos="zoom-out-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>1 BN+</h1>
          <p>Daily Impressions</p>
        </div>
        <div
          className="circle2 shadow-sm text-center"
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>$500K+</h1>
          <p>Paid</p>
        </div>
        <div
          className="circle3 shadow-sm"
          data-aos="zoom-out-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>8K+</h1>
          <p>Global Publishers</p>
        </div>
      </div>
    </div>
  );
};

export default Circle;
