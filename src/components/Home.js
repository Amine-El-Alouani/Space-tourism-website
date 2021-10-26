import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Wrap>
        <Intro>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on
            the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </Intro>
        <ExploreBtn>EXPLORE</ExploreBtn>
      </Wrap>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  color: #fff;
  padding-top: 136px;
  padding-bottom: 136px;
  background-image: url("/home/background-home-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    background-image: url("/home/background-home-tablet.jpg");
    padding-top: 182px;
  }
  @media (max-width: 426px){
    padding-top: 130px;
    background-image: url("/home/background-home-mobile.jpg");
  }
  
`;

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  min-height: calc(100vh - 272px);
  width: calc(100% - 330px);
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
`;

const Intro = styled.div`
  width: 40%;
  span {
    color: #d0d6f9;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 4.7px;
  }
  h1 {
    font-family: "Bellefair", serif;
    font-size: 150px;
    margin: 40px 0;
  }
  p {
    color: #d0d6f9;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 18px;
    line-height: 32px;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 75%;
    text-align: center;
    margin-bottom: 80px; 
    span {
      font-size: 20px;
      letter-spacing: 3.4px;
    }

    h1{
      font-size: 150px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 426px) {
    width: 100%;
    span {
      font-size: 16px;
      letter-spacing: 3.4px;
    }

    h1{
      font-size: 80px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

const ExploreBtn = styled.button`
  z-index: 1;
  position: relative;
  cursor: pointer;
  font-family: "Bellefair", serif;
  font-size: 32px;
  width: 260px;
  height: 260px;
  border: 1px solid #979797;
  border-radius: 50%;

  &:after {
    display: none;
    content: "";
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border: 90px solid #979797;
    border-radius: 50%;
    transition: all 300ms ease-out;
  }

  &:hover {
    &:after {
      display: flex;
      opacity: 0.2;
    }
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 426px) {
    font-size: 20px;
    width: 130px;
    height: 130px;
  }
`;
