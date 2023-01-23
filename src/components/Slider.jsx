import { useState } from "react";
import Twitter from "../icons/twiiter";
import RightArrow from "../icons/right-arrow";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState("0");

  const onClickSlideButton = (index) => {
    setActiveSlide(index);
  };

  const onClickSlideArrow = () => {
    const index = parseInt(activeSlide) + 1;

    if (activeSlide === "2") {
      setActiveSlide("0");
    } else {
      setActiveSlide(index.toString());
    }
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <h2 className="slider-title">seguinos en twitter</h2>
        <div className="slider-icon">
          <Twitter />
        </div>
        <div>
          <p className="slider-name">Boronstudio</p>
          <p className="slider-handle">@Boronstudio</p>
        </div>
        <div>
          <div
            className={`slider-content ${
              activeSlide === "0" ? "is-active" : ""
            }`}
          >
            <p className="slider-tweet-time">2 hs</p>
            <div className="slider-tweet-content">
              📌
              <a className="slider-tweet-link" href="">
                #OportunidadLaboral
              </a>{" "}
              Llamado abierto para sumarse al equipo de{" "}
              <a className="slider-tweet-link" href="">
                @Boronstudio
              </a>{" "}
              master digital. 👩‍💻👨‍💻 <br /> Más información{" "}
              <a className="slider-tweet-link" href="">
                👉 https://bit.ly/2OobIHS
              </a>
            </div>
          </div>

          <div
            className={`slider-content ${
              activeSlide === "1" ? "is-active" : ""
            }`}
          >
            <p className="slider-tweet-time">4 hs</p>
            <div className="slider-tweet-content">
              📌
              <a className="slider-tweet-link" href="">
                #OportunidadLaboral2
              </a>{" "}
              Llamado abierto para sumarse al equipo de{" "}
              <a className="slider-tweet-link" href="">
                @Boronstudio
              </a>{" "}
              master digital. 👩‍💻👨‍💻 <br /> Más información{" "}
              <a className="slider-tweet-link" href="">
                👉 https://bit.ly/2OobIHS
              </a>
            </div>
          </div>

          <div
            className={`slider-content ${
              activeSlide === "2" ? "is-active" : ""
            }`}
          >
            <p className="slider-tweet-time">6 hs</p>
            <div className="slider-tweet-content">
              📌
              <a className="slider-tweet-link" href="">
                #OportunidadLaboral3
              </a>{" "}
              Llamado abierto para sumarse al equipo de{" "}
              <a className="slider-tweet-link" href="">
                @Boronstudio
              </a>{" "}
              master digital. 👩‍💻👨‍💻 <br /> Más información{" "}
              <a className="slider-tweet-link" href="">
                👉 https://bit.ly/2OobIHS
              </a>
            </div>
          </div>

          <div className="slider-buttons-list">
            <a
              className={`slider-button ${
                activeSlide === "0" ? "is-active" : ""
              }`}
              onClick={() => onClickSlideButton("0")}
            ></a>
            <a
              className={`slider-button ${
                activeSlide === "1" ? "is-active" : ""
              }`}
              onClick={() => onClickSlideButton("1")}
            ></a>
            <a
              className={`slider-button ${
                activeSlide === "2" ? "is-active" : ""
              }`}
              onClick={() => onClickSlideButton("2")}
            ></a>
          </div>

          <div className="slider-arrows">
            <a onClick={() => onClickSlideArrow("0")}>
              <span className="slide-item-arrow first">
                <RightArrow />
              </span>
            </a>
            <a onClick={() => onClickSlideArrow("1")}>
              <span className="slide-item-arrow">
                <RightArrow />
              </span>
            </a>
          </div>
        </div>
      </div>
      <figure className="slider-figure">
        <img src="/slider.png" className="slider-img" alt="image" />
      </figure>
    </div>
  );
}
