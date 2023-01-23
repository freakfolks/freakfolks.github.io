import React from "react";
import { Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import styled from "styled-components";

const DuLink = styled(Link)`
text-decoration: none;
margin-left: "1rem"
`;

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
            <li><DuLink className="Link" to='/'>Home</DuLink></li>
            <li><DuLink to='/about'>About</DuLink></li>
            <li><DuLink to='/talks'>Talks +</DuLink>
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
            <li><DuLink to="/pages">Pages +</DuLink>
                <ul>
                    <li><Link to="/Speakers">Our Speakers</Link></li>
                    <li><Link to="/Blog">Blogs</Link></li>
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
