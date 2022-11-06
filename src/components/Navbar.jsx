import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/shared/logo.svg";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { laptop, tablet } from "../utils";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  .logo {
    margin-left: 40px;
    width: 40px;
  }
  .links {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding-left: 100px;
    padding-right: 150px;
    display: flex;
    gap: 40px;
    .link {
      color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 1px;
      padding: 40px 0;
      border-bottom: 2px solid transparent;
      &.active {
        border-color: #fff;
      }
    }
    .close {
      display: none;
    }
  }
  .open {
    display: none;
    color: #fff;
    font-size: 23px;
    margin-right: 20px;
    cursor: pointer;
    @media (max-width: 420px) {
      display: block;
    }
  }
  @media (max-width: 992px) {
    .links {
      padding-left: 50px;
      padding-right: 50px;
      .link {
        padding: 30px 0;
      }
    }
  }
  @media (max-width: 768px) {
    padding-top: 0;
    .links {
      gap: 20px;
      padding-left: 20px;
      padding-right: 20px;
      .link {
        font-size: 12px;
        letter-spacing: 0;
      }
    }
    .logo {
      width: 30px;
      margin-left: 20px;
    }
  }
  @media (max-width: 420px) {
    padding-top: 20px;
    .links {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 250px;
      flex-direction: column;
      left: ${(props) => (props.nav ? "calc(100vw - 250px)" : "100vh")};
      padding: 100px 0 0 0;
      gap: 20px;
      .link {
        border-right: 2px solid transparent;
        border-bottom: none;
        padding: 0 20px;
        font-size: 16px;
        letter-spacing: 1px;
      }
      .close {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
        color: #fff;
        font-size: 30px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
`;

function Navbar() {
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  const openNav = () => {
    setNav(true);
  };

  return (
    <NavbarContainer nav={nav}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="links">
        <button className="close" type="button" onClick={closeNav}>
          <IoMdClose />
        </button>
        <NavLink to="/" className="link" onClick={closeNav}>
          00 home
        </NavLink>
        <NavLink to="/destination" className="link" onClick={closeNav}>
          01 destination
        </NavLink>
        <NavLink to="/crew" className="link" onClick={closeNav}>
          02 crew
        </NavLink>
        <NavLink to="/technology" className="link" onClick={closeNav}>
          03 technology
        </NavLink>
      </nav>
      <div className="open" type="button" onClick={openNav}>
        <FaBars />
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
