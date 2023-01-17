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
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 2rem;
  display: flex;
  gap: 2;
  align-items: center;
  object-fit: cover;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <FaMicrophone style={{ color: "#Fa1b7d" }} />
        Honest Talks
      </Logo>

    <div id="menu-btn" class="fas fa-bars"></div>

    <header class="header">
    <nav class="navbar">
        <ul class="list">
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/talks'>Talks +</Link>
                <ul>
                    <li><Link to="/Youth">Youth</Link></li>
                    <li><Link to="/Lifestyle">Lifestyle</Link></li>
                    <li><Link to="/Education">Education</Link></li>
                    <li><Link to="/Technology">Technology</Link></li>
                    <li><Link to="/Healthcare">Healthcare</Link></li>                    
                    <li><Link to="/Entrepreneurship">Entrepreneurship</Link></li>
                    <li><Link to="/Women">Women In Leadership</Link></li>
                    <li><Link to="/Business">Business & Leadership</Link></li>
                </ul>
            </li>
            <li><Link to="/pages">pages +</Link>
                <ul>
                    <li><Link to="/Speakers">our speakers</Link></li>
                    <li><Link to="/Blog">blogs</Link></li>
                </ul>
            </li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
    </nav>
    </header>
    </Nav>
  );
};

export default Navbar;
