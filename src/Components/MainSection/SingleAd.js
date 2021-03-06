import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SingleAd = ({ data }) => {
  const { title, img, description } = data;
  return (
    <div className="mx-5" style={{ height: "250px" }} data-aos="zoom-in">
      <div class="row gx-1">
        <div class="col-5">
          <img src={img} alt="" className="img-fluid h-75 rounded" />
        </div>
        <div class="col-6 ">
          <div className="mb-5">
            <h4 style={{ color: "#ff6f00" }}>{title ? title : "POP UNDER"}</h4>
            <p className="my-3">{description}</p>
          </div>
          <button className="mt-5" style={{ color: "#644f9c" }}>
            Learn more{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
