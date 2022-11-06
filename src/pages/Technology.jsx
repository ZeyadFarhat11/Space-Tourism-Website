import React, { useState } from "react";
import styled from "styled-components";
import { Title, fadeleft, faderight } from "../utils";
import { app } from "../data";
import bg from "../assets/technology/background-technology-desktop.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";
import { useEffect } from "react";

const TechnologyContainer = styled.div`
  padding: 0 0 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    margin-top: 30px;
    padding-left: 15px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .text-wrapper {
    display: flex;
    width: 50%;
  }
  .img {
    img {
      height: 500px;
      animation: ${fadeleft} 0.5s;
    }
  }
  .navigation-bar {
    display: flex;
    flex-direction: column;
    gap: 30px;
    button {
      color: #fff;
      background-color: transparent;
      border: 1px solid #fff;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      cursor: pointer;
      &.active {
        color: #000;
        background-color: #fff;
      }
    }
  }
  .text {
    padding-left: 30px;
    height: 350px;
    h5 {
      font-size: 16px;
      color: ${(props) => props.theme.gray};
    }
    .name {
      font-size: 56px;
      margin: 20px 0;
    }
    .description {
      color: ${(props) => props.theme.gray};
      line-height: 2;
      max-width: 500px;
    }
    > * {
      animation: ${faderight} 0.5s;
    }
  }
  @media (max-width: 992px) {
    padding: 0 0 50px 50px;
    .img img {
      height: 400px;
    }
    .text {
      .name {
        font-size: 35px;
      }
      .description {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-start;
    .wrapper {
      flex-direction: column-reverse;
    }
    .img img {
      height: 400px;
      height: auto;
      width: 100%;
    }
    .text-wrapper {
      flex-direction: column;
      width: 100%;
    }
    .navigation-bar {
      flex-direction: row;
      justify-content: center;
      button {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
    }
    .text {
      text-align: center;
      padding: 20px 15px 0 15px;
      .name {
        font-size: 40px;
        margin: 10px 0;
      }
      .description {
        font-size: 14px;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 420px) {
    .text {
      .name {
        font-size: 24px;
      }
      .description {
        font-size: 15px;
        line-height: 1.7;
      }
    }
  }
`;

function Technology() {
  const [currentTech, setCurrentTech] = useState(app.technology[0]);

  useEffect(() => {
    window.document.body.style.setProperty("--img", `url(${bg})`);
    window.document.body.style.setProperty("--img-tablet", `url(${bgTablet})`);
    window.document.body.style.setProperty("--img-mobile", `url(${bgMobile})`);
  }, []);

  return (
    <TechnologyContainer>
      <Title className="title">
        <span>03</span>space launch 101
      </Title>
      <div className="wrapper">
        <div className="text-wrapper">
          <div className="navigation-bar">
            {app.technology.map((tech, idx) => (
              <button
                key={tech.name}
                type="button"
                onClick={() => setCurrentTech(tech)}
                className={currentTech.name === tech.name ? "active" : ""}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div className="text">
            <h5 className="label" key={Math.random()}>
              the terminology...
            </h5>
            <h1 className="name" key={Math.random()}>
              {currentTech.name}
            </h1>
            <p className="description" key={Math.random()}>
              {currentTech.description}
            </p>
          </div>
        </div>
        <div className="img">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={currentTech.images.portrait}
            />
            <img key={Math.random()} src={currentTech.images.landscape} />
          </picture>
        </div>
      </div>
    </TechnologyContainer>
  );
}

export default Technology;
