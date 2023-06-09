import React from "react";
import MainImage from "/mainImage.png";
import Block from "../../assets/block";
import MainImageAnimator from "../hooks/animator";
import MultipleAnimator from "../hooks/animator2";
const Hero = () => {
  MultipleAnimator()
  return (
    // <div>Hero</div>
    <>
      <div className="stack maxWidth ">
        <div
          style={{ maxWidth: "45rem" }}
          className="stack HideDesktop widthRestric defaultPadding"
        >
          <p style={{ maxWidth: "35rem" }} className="mainText widthRestric slideDown group">
            Put your money to work.
          </p>

          <h6
            style={{ maxWidth: "35rem" }}
            className="smallMainText widthRestric slideDown group"
          >
            Invest wisely. Grow wealth.
          </h6>
          <div className="gridImail1 hidePhone slideDown group">
            <div className="center HideMobile">
              <input className="inputField" placeholder="your name..." />
            </div>

            <div className="center">
              <button className="mainBtn ">sign up for free</button>
            </div>
          </div>
          <div className="flex slideDown group">
            <div className="HideDesktopAndTab">
              {" "}
              <img className="appStoreBox " src="/appStore.svg" alt="" />
            </div>
            <div className="HideDesktopAndTab">
              <img className="appStoreBox" src="/dowloadBadge.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="grid defaultPadding">
          <div className="">
            <div className="relative">
             
              <div className="imageBox zLower">
                <img style={{marginLeft:"3rem", marginTop:"2rem"}} className="responsive elevate" src={MainImage} alt="" />
              </div>
              <div className="WhiteBox relativeBox  ">
                <div className="stack">
                  <p className="smallText">
                    I've become more conscious of how I spend my money and also
                    about investing. Now, I feel comfortable spending knowing my
                    Cowrywise account is there.
                  </p>
                  <div className="flexBox">
                    <p className="smallNormalText">Wuraolo F</p>
                    <p className="smallSpecialText">@Wuraolo F</p>
                  </div>
                </div>
                {/* <img className="responsive" src={MainImage} alt="" /> */}
              </div>
            </div>
          </div>

          <div>
            <div className="stack shiftTop2 ShowDeskTop ">
              {/* <p className="mainText"> </p> */}
              <p className="mainText slideDown group">Put your money to work.</p>

              <h6 className="smallMainText slideDown group">Invest wisely. Grow wealth.</h6>
              <div className="gridImail1 slideDown group">
                <div className="center">
                  <input className="inputField" placeholder="your name..." />
                </div>

                <div className="center">
                  <button className="mainBtn ">sign up for free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
