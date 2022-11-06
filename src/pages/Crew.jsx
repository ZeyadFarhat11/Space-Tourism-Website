import React, { useEffect, useState } from "react";
import bg from "../assets/crew/background-crew-desktop.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgMobile from "../assets/crew/background-crew-mobile.jpg";
import styled from "styled-components";
import { fadeleft, faderight, Title } from "../utils";
import { app } from "../data";

const CrewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  padding-left: 100px;
  padding-right: 100px;
  .wrapper {
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    width: 100%;

    .text {
      width: 50%;
    }

    .role {
      color: ${({ theme }) => theme.gray};
      font-size: 32px;
      text-transform: uppercase;
      letter-spacing: 2px;
      animation: ${faderight} 0.5s;
    }
    .name {
      font-size: 56px;
      text-transform: uppercase;
      margin: 20px 0;
      animation: ${faderight} 0.5s;
    }
    .bio {
      line-height: 2;
      max-width: 400px;
      color: ${({ theme }) => theme.gray};
      animation: ${faderight} 0.5s;
    }
    .navigation-bar {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 50px;
      margin-top: 100px;
      button {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border: none;
        width: 15px;
        height: 15px;
        cursor: pointer;
        &.active {
          background-color: #fff;
        }
      }
    }
    .img {
      width: 50%;
      text-align: center;
      img {
        max-height: 500px;
        animation: ${fadeleft} 0.5s;
      }
    }
  }
  @media (max-width: 992px) {
    padding: 0 50px;
    .wrapper {
      .role {
        font-size: 25px;
      }
      .name {
        font-size: 40px;
      }
      .bio {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0 15px;
    .wrapper {
      flex-direction: column;
      .text {
        width: 100%;
        text-align: center;
      }
      .role {
        font-size: 20px;
        margin-top: 20px;
      }
      .name {
        font-size: 30px;
      }
      .bio {
        margin: 0 auto;
      }
      .navigation-bar {
        justify-content: center;
        margin: 20px;
      }
      .img {
        width: 100%;
        img {
          height: calc(622px - 256px);
        }
      }
    }
  }
`;

function Crew() {
  useEffect(() => {
    window.document.body.style.setProperty("--img", `url(${bg})`);
    window.document.body.style.setProperty("--img-tablet", `url(${bgTablet})`);
    window.document.body.style.setProperty("--img-mobile", `url(${bgMobile})`);
  }, []);

  const [worker, setWorker] = useState(app.crew[0]);

  const { name, image, role, bio } = worker;

  return (
    <CrewContainer>
      <Title className="title">
        <span>02</span> meet your crew
      </Title>
      <div className="wrapper">
        <div className="text">
          <h2 className="role" key={Math.random()}>
            {role}
          </h2>
          <h1 className="name" key={Math.random()}>
            {name}
          </h1>
          <p className="bio" key={Math.random()}>
            {bio}
          </p>
          <div className="navigation-bar">
            {app.crew.map((e) => (
              <button
                key={e.name}
                type="button"
                className={worker.name === e.name ? "active" : ""}
                onClick={() => setWorker(e)}
              ></button>
            ))}
          </div>
        </div>
        <div className="img">
          <img src={image} alt={name} key={Math.random()} />
        </div>
      </div>
    </CrewContainer>
  );
}

export default Crew;
