import React from "react";

const Banner = () => {
  return (
    <div className="container" style={{ height: "600px" }}>
      <div class="row mt-5">
        <div class="col-sm-6 col-md-8 d-flex justify-content-between align-items-center">
          <div className="w-75 fw-bolder" data-aos="zoom-in">
            <h2 style={{ color: "#644f9c" }} className="fw-bolder">
              Beautiful natural environment
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div class="col-6 col-md-4 h-50" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/cute-little-dog-impersonating-business-person_23-2148985939.jpg?t=st=1654055767~exp=1654056367~hmac=6dbd69834ddf92bc16f2a736d4a36f814fd401a02c11efd609d3fba3afd9cc36&w=740"
            alt="img"
            className="img-fluid h-100 rounded"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
