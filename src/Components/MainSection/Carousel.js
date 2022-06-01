import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div nDragStart={handleDragStart} role="presentation">
    <div className="carousal-card">
      <div className="card-info">
        <div className="card-img">
          <img
            className="img-fuild "
            src="https://thumbs.dreamstime.com/b/beautiful-sexy-girl-trendy-glowing-makeup-metallic-silver-lips-high-fashion-model-woman-colorful-bright-neon-lights-posing-135510784.jpg"
            alt="...."
          ></img>
        </div>
        <div className="card-details">
          <h4>Title 1</h4>
          <p>Hello, Here will be a text</p>
        </div>
      </div>
    </div>
  </div>,
  <div nDragStart={handleDragStart} role="presentation">
    <div className="carousal-card">
      <div className="card-info">
        <div className="card-img">
          <img
            className="img-fuild "
            src="https://thumbs.dreamstime.com/b/beautiful-sexy-girl-trendy-glowing-makeup-metallic-silver-lips-high-fashion-model-woman-colorful-bright-neon-lights-posing-135510784.jpg"
            alt="...."
          ></img>
        </div>
        <div className="card-details">
          <h4>Title 2</h4>
          <p>Hello, Here will be a text</p>
        </div>
      </div>
    </div>
  </div>,
  <div nDragStart={handleDragStart} role="presentation">
    <div className="carousal-card">
      <div className="card-info">
        <div className="card-img">
          <img
            className="img-fuild "
            src="https://thumbs.dreamstime.com/b/beautiful-sexy-girl-trendy-glowing-makeup-metallic-silver-lips-high-fashion-model-woman-colorful-bright-neon-lights-posing-135510784.jpg"
            alt="...."
          ></img>
        </div>
        <div className="card-details">
          <h4>Title 3</h4>
          <p>Hello, Here will be a text</p>
        </div>
      </div>
    </div>
  </div>,
];

const Gallery = () => {
  return (
    <div className="d-flex justify-content-center align-items-center carousule-section">
      <div
        className="carousule-main my-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <AliceCarousel mouseTracking items={items} />
      </div>
    </div>
  );
};
export default Gallery;
