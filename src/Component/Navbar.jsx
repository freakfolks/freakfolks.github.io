import React from "react";
import { Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import styled from "styled-components";

const DuLink = styled(Link)`
text-decoration: none;
`;

const YuLink = styled(Link)`
text-decoration: none;
`;


const Nav = styled.div`
  margin: 0 auto;
  background-color: #0e0e0e;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  height: 7vh; 
  padding: 0.4rem 6rem;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
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
            <li><DuLink className="Link" to='/'>Home</DuLink></li>
            <li><DuLink to='/about'>About</DuLink></li>
            <li><DuLink to='/talks'>Talks +</DuLink>
                <ul>
                    <li><YuLink to="/Youth">Youth</YuLink></li>
                    <li><YuLink to="/Lifestyle">Lifestyle</YuLink></li>
                    <li><YuLink to="/Education">Education</YuLink></li>
                    <li><YuLink to="/Technology">Technology</YuLink></li>
                    <li><YuLink to="/Healthcare">Healthcare</YuLink></li>                    
                    <li><YuLink to="/Entrepreneurship">Entrepreneurship</YuLink></li>
                    <li><YuLink to="/Women">Women In Leadership</YuLink></li>
                    <li><YuLink to="/Business">Business & Leadership</YuLink></li>
                </ul>
            </li>
            <li><DuLink to="/pages">Pages +</DuLink>
                <ul>
                    <li><YuLink to="/Speakers">Our Speakers</YuLink></li>
                    <li><YuLink to="/Blog">Blogs</YuLink></li>
                </ul>
            </li>
            <li><DuLink to="/contact">Contact</DuLink></li>
        </ul>
    </nav>
    </header>
    </Nav>
  );
};

export default Navbar;
