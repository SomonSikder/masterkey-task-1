import React, { useState } from "react";
import SingleAd from "./SingleAd";

const VersatileAd = () => {
  const [data, setData] = useState({
    title: "POP-UNDER",
    img: "https://img.freepik.com/free-photo/mid-adult-businessman-toasting-with-glass-wine-while-having-video-call-laptop-office_637285-9573.jpg?t=st=1654028608~exp=1654029208~hmac=f6a9913edecd556ec39923bdc4f00e1bfd2a6f46eeb960610ae3755e8126a0c0&w=740",
    description:
      "This is one of the most popular ads. After user’s click, this ad opens landing page in behind. So, the user experience is not hampered much.",
  });

  const [activeStyle, setActive] = useState(false);

  const adDescription = {
    popUnder: {
      title: "POP-UNDER",
      img: "https://img.freepik.com/free-photo/mid-adult-businessman-toasting-with-glass-wine-while-having-video-call-laptop-office_637285-9573.jpg?t=st=1654028608~exp=1654029208~hmac=f6a9913edecd556ec39923bdc4f00e1bfd2a6f46eeb960610ae3755e8126a0c0&w=740",
      description:
        "This is one of the most popular ads. After user’s click, this ad opens landing page in behind. So, the user experience is not hampered much.",
    },
    bannerAd: {
      title: "BANNER AD",
      img: "https://img.freepik.com/free-photo/dim-pork-nationality-city-meal-background_1417-959.jpg?w=740&t=st=1654034110~exp=1654034710~hmac=6f35b21bb9b5d55c5c0474047f5a0aaba4210d2e1cb7b6969fb52b27f5945779",
      description:
        "Choose between the available banner formats. Highly effective ad for visibility",
    },
    native: {
      title: "NATIVE",
      img: "https://img.freepik.com/free-psd/plastic-cosmetic-jar-mockup_358694-3415.jpg?t=st=1654062730~exp=1654063330~hmac=98b47c207e6504003c7e725c3c2c8fa229cd7040165673036a76050470ef4ef0&w=740",
      description:
        "Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.",
    },
    skim: {
      title: "SKIM",
      img: "https://img.freepik.com/free-psd/amber-glass-cosmetic-jar-mockup_358694-4328.jpg?t=st=1654057634~exp=1654058234~hmac=e00386aa5194c71876eabe2d549b1b02f29ae9dbed3387e5ade3192853fdb616&w=740",
      description:
        "SKIM is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers..",
    },
  };
  const handleAdChange = (btnName) => {
    if (btnName === "popUnder") {
      setData(adDescription.popUnder);
      setActive(true);
    } else if (btnName === "banner") {
      setData(adDescription.bannerAd);
      setActive(true);
    } else if (btnName === "native") {
      setData(adDescription.native);
      setActive(true);
    } else if (btnName === "skim") {
      setData(adDescription.skim);
      setActive(true);
    }
  };

  return (
    <div className="mt-5 main-section">
      <div className="main-section-head" data-aos="flip-left">
        <div className="main-section-title">
          <h2 style={{ color: "#644f9c" }}>VERSATILE AD FORMATS</h2>
        </div>
      </div>
      <div className="varsatileAb d-flex justify-content-center align-items-center">
        <button
          className={
            activeStyle
              ? "btn shadow-sm rounded-pill active"
              : "btn shadow-sm rounded-pill"
          }
          onClick={() => handleAdChange("popUnder")}
        >
          POP-UNDER
        </button>
        <button
          className={
            activeStyle
              ? "btn shadow-sm rounded-pill active"
              : "btn shadow-sm rounded-pill"
          }
          onClick={() => handleAdChange("banner")}
        >
          BANNER AD
        </button>
        <button
          className={
            activeStyle
              ? "btn shadow-sm rounded-pill active"
              : "btn shadow-sm rounded-pill"
          }
          onClick={() => handleAdChange("native")}
        >
          NATIVE
        </button>
        <button
          className={
            activeStyle
              ? "btn shadow-sm rounded-pill active"
              : "btn shadow-sm rounded-pill"
          }
          onClick={() => handleAdChange("skim")}
        >
          SKIM
        </button>
      </div>
      <SingleAd data={data}></SingleAd>
    </div>
  );
};

export default VersatileAd;
