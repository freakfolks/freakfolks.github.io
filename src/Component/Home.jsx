import React from "react";
import HomePic from "../images/home-img.png";
import styled from "styled-components";
import Section from "./Section";

const HomeImg = styled.img`
  height: 40vh;
  width: 40vw;
  margin-top: 3rem;
`;
const HomeSection = styled.div`
  padding: 3rem 5rem;
  display: flex;
  margin: 0 auto;
  background-color: #ffffff;
`
const Content = styled.div`
margin-left: 4rem;
`
const P = styled.p`
  font-Size: 14px;
  font-weight: 400;
  line-height: 35px;
  color:Rgb(102, 102, 102);
`
const HomeDetails = styled.h2`
  color: #302851;
  font-size: 50px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0;
`;
const Button = styled.h2`
  background-color: #e9edfb;
  color: #224d8d;
  font-size:17px;
  font-weight: 400;
  line-height: Normal;
  padding: 1em;
  height: 2vh;
  width: 8vw;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;


const Home = () => {
  return (
    <>
      <HomeSection>
        <div>
          <HomeImg src={HomePic} alt="HomePic" />
        </div>
        <Content>
          <HomeDetails>Freak Folks Honest </HomeDetails>
          <HomeDetails style={{marginTop:"0"}}>Talk </HomeDetails>
          <P>Have A Lets Share With The World And Smile.</P>
          <Button>Get Started</Button>
        </Content>
      </HomeSection>
      <Section />
    </>
  );
};

export default Home;
