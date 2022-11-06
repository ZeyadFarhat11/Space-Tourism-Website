import React, { useEffect } from "react";
import bg from "../assets/home/background-home-desktop.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeleft, faderight } from "../utils";

const HomeContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-end;
  padding: 0 100px 100px;
  .text {
    width: 40%;
    .title {
      font-size: 30px;
      opacity: 0;
      color: ${({ theme }) => theme.gray};
      animation: ${faderight} 0.5s 0s forwards;
    }
    h1 {
      font-size: 120px;
      opacity: 0;
      margin: 20px 0;
      animation: ${faderight} 0.5s 0.2s forwards;
    }
    .p {
      line-height: 2;
      opacity: 0;
      color: ${({ theme }) => theme.gray};
      animation: ${faderight} 0.5s 0.4s forwards;
    }
  }
  .explore-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    .explore {
      background-color: #fff;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      animation: ${fadeleft} 0.5s 0s forwards;
      h2 {
        font-size: 40px;
        color: ${({ theme }) => theme.dark};
      }
      &:hover {
        box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.3);
      }
    }
  }
  @media (max-width: 992px) {
    padding: 0 50px 100px;

    .text {
      width: 60%;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;

    .text {
      width: 100%;
      text-align: center;
      padding-top: 50px;
      .title {
        font-size: 20px;
      }
      h1 {
        font-size: 130px;
        /* margin: 10px 0; */
        line-height: 1;
      }
      .p {
        font-size: 14px;
        max-width: 400px;
        margin: 0 auto;
      }
    }
    .explore-wrapper {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 420px) {
    .text {
      padding: 50px 15px 0;
      .title {
        font-size: 16px;
      }
      h1 {
        font-size: 80px;
      }
      .p {
        font-size: 12px;
      }
    }
    .explore-wrapper {
      .explore {
        width: 200px;
        height: 200px;
        h2 {
          font-size: 30px;
        }
      }
    }
  }
`;

function Home() {
  useEffect(() => {
    window.document.body.style.setProperty("--img", `url(${bg})`);
    window.document.body.style.setProperty("--img-tablet", `url(${bgTablet})`);
    window.document.body.style.setProperty("--img-mobile", `url(${bgMobile})`);
  }, []);

  return (
    <HomeContainer>
      <div className="text">
        <p className="title">SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p className="p">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore-wrapper">
        <Link className="explore" to="/destination">
          <h2>explore</h2>
        </Link>
      </div>
    </HomeContainer>
  );
}

export default Home;
