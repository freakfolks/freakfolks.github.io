import React from "react";
import { Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import styled from "styled-components";

const Nav = styled.div`
  margin: 0 auto;
  background-color: #0e0e0e;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  height: 8vh;
  padding: 1rem 2.0rem;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 2rem;
`;
const HomeStyle = styled.div`
  margin-left: 35rem;
  margin-Top: 0.5rem;
`;
const Div = styled.div`
  margin-Top: 0.5rem;
`;

const HeadLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <FaMicrophone style={{ color: "#Fa1b7d" }} />
        Honest Talks
      </Logo>
      <HomeStyle>
        <HeadLink to="/">Home</HeadLink>
      </HomeStyle>
      <Div>
        <HeadLink to="/about">About</HeadLink>
      </Div>
      <Div>
        <HeadLink to="/talks">Talks+</HeadLink>
      </Div>
      <Div>
        <HeadLink to="/pages">Pages+</HeadLink>
      </Div>
      <Div>
        <HeadLink to="Contact">Contact</HeadLink>
      </Div>
    </Nav>
  );
};

export default Navbar;
