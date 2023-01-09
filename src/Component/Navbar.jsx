import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #0e0e0e;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  height: 10vh;
`;

const HeadLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>Logo</div>
      <div>
        <HeadLink to="/">Home</HeadLink>
      </div>
      <div>
        <HeadLink to="/about">About</HeadLink>
      </div>
      <div>
        <HeadLink to="/talks">Talks</HeadLink>
      </div>
      <div>
        <HeadLink to="/pages">Pages</HeadLink>
      </div>
      <div>
        <HeadLink to="Contact">Contact</HeadLink>
      </div>
    </Nav>
  );
};

export default Navbar;
