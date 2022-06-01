import React from "react";
import Circle from "../Circle/Circle";
import Gallery from "./Carousel";
import MainHead from "./MainHead";
import VersatileAd from "./VersatileAd";

const MainSection = () => {
  return (
    <div>
      <MainHead></MainHead>
      <VersatileAd></VersatileAd>
      <Circle></Circle>
      <Gallery></Gallery>
    </div>
  );
};

export default MainSection;
