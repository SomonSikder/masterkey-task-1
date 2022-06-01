import React from "react";

const Banner = () => {
  return (
    <div className="container" style={{ height: "600px" }}>
      <div class="row h-100 mt-5">
        <div class="col-sm-6 col-md-8">
          <div className="w-50">
            <h2 style={{ color: "#644f9c" }}>Beautiful natural environment</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div class="col-6 col-md-4 h-50">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/abstract-tree-art-original-painting-rainbow-colors-beautiful-artwork-megan-duncanson-megan-duncanson.jpg"
            alt="img"
            className="img-fluid h-100 rounded"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
