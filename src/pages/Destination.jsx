import React, { useEffect, useState } from "react";
import bg from "../assets/destination/background-destination-desktop.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import styled from "styled-components";
import { app } from "../data";
import p1 from "../assets/destination/image-moon.webp";
import p2 from "../assets/destination/image-mars.webp";
import p3 from "../assets/destination/image-europa.webp";
import p4 from "../assets/destination/image-titan.webp";
import { fadeleft, faderight, Title } from "../utils";

const planetImages = {
  moon: p1,
  mars: p2,
  europa: p3,
  titan: p4,
};

const DestinationContainer = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .wrapper {
    display: flex;
    align-items: center;
    gap: 30px;
    .img {
      width: 50%;
      text-align: center;
      animation: ${faderight} 0.7s;
    }
    .text {
      width: 50%;
      .navigation-bar {
        display: flex;
        gap: 20px;
        button {
          background-color: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          text-transform: uppercase;
          color: #fff;
          font-size: 20px;
          padding-bottom: 10px;
          cursor: pointer;
          &.active {
            border-color: #fff;
          }
        }
      }
      .name {
        text-transform: uppercase;
        font-size: 80px;
        margin: 20px 0;
        animation: ${fadeleft} 0.7s;
      }
      .description {
        line-height: 2;
        color: ${({ theme }) => theme.gray};
        animation: ${fadeleft} 0.7s;
      }
      .info {
        padding-top: 20px;
        margin-top: 40px;
        border-top: 1px solid rgb(255, 255, 255, 0.4);
        display: flex;
        gap: 80px;
        .info-wrapper {
          animation: ${fadeleft} 0.7s;
          span {
            color: ${({ theme }) => theme.gray};
            text-transform: uppercase;
            font-size: 14px;
          }
          h3 {
            text-transform: uppercase;
            font-size: 30px;
            margin-top: 10px;
          }
          white-space: nowrap;
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding-bottom: 20px;
    .wrapper {
      .text {
        .navigation-bar {
          button {
            font-size: 18px;
          }
        }
        .name {
          font-size: 60px;
        }
        .description {
          line-height: 1.6;
        }
        .info {
          gap: 30px;
          .info-wrapper {
            h3 {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
    .wrapper {
      flex-direction: column;

      .text {
        width: 100%;
        text-align: center;
        .navigation-bar {
          justify-content: center;
        }
        .info {
          justify-content: space-evenly;
          gap: 0;
          margin-top: 20px;
        }
      }
      .img {
        img {
          width: 250px;
        }
      }
    }
  }
  @media (max-width: 420px) {
    justify-content: flex-start;
    .wrapper {
      .text {
        .navigation-bar {
          button {
            font-size: 14px;
          }
        }
        .name {
          font-size: 40px;
        }
        .description {
          font-size: 14px;
        }
        .info {
          flex-direction: column;
          gap: 20px;
        }
      }
    }
  }
`;

function Destination() {
  const [currentPlanet, setCurrentPlanet] = useState(app.destinations[0]);

  useEffect(() => {
    window.document.body.style.setProperty("--img", `url(${bg})`);
    window.document.body.style.setProperty("--img-tablet", `url(${bgTablet})`);
    window.document.body.style.setProperty("--img-mobile", `url(${bgMobile})`);
  }, []);

  const { name, images, description, distance, travel } = currentPlanet;

  return (
    <DestinationContainer>
      <Title>
        <span>01</span>pick your destination
      </Title>
      <div className="wrapper">
        <div className="img" key={Math.random()}>
          <img
            src={planetImages[currentPlanet.name.toLowerCase()]}
            alt={name}
          />
        </div>
        <div className="text">
          <div className="navigation-bar">
            {app.destinations.map((planet) => (
              <button
                key={planet.name}
                className={`planet${
                  planet.name === currentPlanet.name ? " active" : ""
                }`}
                onClick={() => setCurrentPlanet(planet)}
              >
                {planet.name}
              </button>
            ))}
          </div>
          <h1 className="name" key={Math.random()}>
            {name}
          </h1>
          <p className="description" key={Math.random()}>
            {description}
          </p>
          <div className="info">
            <div className="info-wrapper" key={Math.random()}>
              <span>avg. distance</span>
              <h3>{distance}</h3>
            </div>
            <div className="info-wrapper" key={Math.random()}>
              <span>est. travel time</span>
              <h3>{travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </DestinationContainer>
  );
}

export default Destination;
