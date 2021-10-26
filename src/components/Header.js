import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(true);

  return (
    <Container>
      <Logo src="/shared/logo.svg"></Logo>
      <Nav open={open}>
        <ul>
          <li>
            <Link onClick={() => setOpen(!open)} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} to="/destination">
              DESTINATION
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} to="/crew">
              CREW
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} to="/technology">
              TECHNOLOGY
            </Link>
          </li>
        </ul>
      </Nav>
      <Humberger
        onClick={() => setOpen(!open)}
        src={open ? "/shared/icon-close.svg" : "/shared/icon-hamburger.svg"}
      ></Humberger>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: absolute;
  width: 95%;
  top: 40px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    top: 0;
  }
  @media (max-width: 426px) {
    top: 40px;
  }
`;

const Logo = styled.img`
  @media (max-width: 426px) {
    width: 40px;
    height: 40px;
  }
`;

const Nav = styled.nav`
  position: relative;
  font-family: "Barlow Condensed", sans-serif;
  background-color: rgba(151, 151, 151, 0.1);
  height: 90px;
  width: 830px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(1rem);
  @media (max-width: 768px) {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 426px) {
    z-index: 100;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 65%;
    height: 100vh;
    padding-top: 120px;
    align-items: flex-start;
    transition: all 300ms ease;
  }

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 64%;
    border-bottom: 1px solid #979797;
    left: -60%;
    @media (max-width: 768px) {
      display: none;
    }
  }
  ul {
    display: flex;
    margin-left: 50px;
    @media (max-width: 768px) {
      margin-left: 16px;
    }
    @media (max-width: 426px) {
      flex-wrap: wrap;
      flex-direction: column;
      margin: 0;
      padding-left: 0;
    }

    li {
      list-style: none;
      margin-right: 50px;
      @media (max-width: 768px) {
        margin-right: 40px;
      }

      @media (max-width: 426px) {
        margin-right: 0;
        padding-bottom: 40px;
      }

      &:hover {
        a:after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
      &:nth-child(1):before {
        content: "00 ";
        color: #fff;
        letter-spacing: 2.7px;
        @media (max-width: 768px) {
          display: none;
        }
      }

      &:nth-child(2):before {
        content: "01 ";
        color: #fff;
        letter-spacing: 2.7px;
        @media (max-width: 768px) {
          display: none;
        }
      }

      &:nth-child(3):before {
        content: "03 ";
        color: #fff;
        letter-spacing: 2.7px;
        @media (max-width: 768px) {
          display: none;
        }
      }

      &:nth-child(4):before {
        content: "04 ";
        color: #fff;
        letter-spacing: 2.7px;
        @media (max-width: 768px) {
          display: none;
        }
      }

      a {
        position: relative;
        text-decoration: none;
        letter-spacing: 2.7px;
        color: #fff;

        &:after {
          position: absolute;
          bottom: -35px;
          left: 0;
          content: "";
          width: 100%;
          border-bottom: 3px solid #fff;
          opacity: 0;
          transform: scaleX(0);
          transition: all 250ms ease;
        }

        @media (max-width: 768px) {
          font-size: 14px;
        }

        @media (max-width: 426px) {
          font-size: 16px;
          &:after {
            display: none;
          }
        }
      }
    }
  }
`;

const Humberger = styled.img`
  display: none;
  @media (max-width: 426px) {
    display: flex;
    z-index: 101;
    margin-right: 20px;
    transition: all 250ms ease;
`;
