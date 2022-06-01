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
      img: "https://img.freepik.com/free-vector/american-indians-illustration-design-concept_1284-23633.jpg?t=st=1654034328~exp=1654034928~hmac=c9aec5158e0ea8fcafad47b7b01771e28100b947b90e1b50f2cfd59504d6ed33&w=740",
      description:
        "Ad format with the image and the title, that perfectly fits into the content of the site. Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.",
    },
    skim: {
      title: "SKIM",
      img: "https://img.freepik.com/free-photo/berries-snacks-champagne-stairs-decorated-with-lanterns-wedding-banquet_501050-538.jpg?t=st=1654034383~exp=1654034983~hmac=2b181c4b6ae9f45f22278bb088ec4c1cc84de62607df0d2bff7475165067f4fd&w=360",
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
  console.log(data);
  return (
    <div className="mt-5 main-section">
      <div className="main-section-head">
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
