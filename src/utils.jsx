import styled, { keyframes } from "styled-components";

export const tablet = (content) => {
  return `@media screen and (max-width: 768px) {${content}}`;
};
export const laptop = (content) => {
  return `@media screen and (max-width: 992px) {${content}}`;
};
export const mobile = (content) => {
  return `@media screen and (max-width: 420px) {${content}}`;
};

export const theme = {
  gray: "#D0D6F9",
  dark: "#0B0D17",
};

export const Title = styled.p`
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 40px;
  letter-spacing: 2px;
  span {
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.25);
    font-weight: bold;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }
  @media (max-width: 420px) {
    text-align: center;
    font-size: 18px;
    margin: 20px 0;
    letter-spacing: 0px;
  }
`;

export const faderight = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    
    opacity: 1;
  }
`;
export const fadeleft = keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;

  }
`;
