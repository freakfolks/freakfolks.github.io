import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowRight, AiFillYoutube } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaQuora } from "react-icons/fa";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { BsPinterest } from "react-icons/bs";


const Explore = styled.div`
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11rem;
  margin: 0;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
`;
const Container = styled.div`
  background-color: #f5f5f5;
`;
const FooterLink = styled(Link)`
  text-decoration: none;
`;

const EndPage = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <Section>
        <Explore>
          <h2>Explore</h2>
          <FooterLink to="./">
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Home
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            About
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Speaker
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Blog
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Contact
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Our Partners
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Media Coverage
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Newsletter
          </FooterLink>
        </Explore>
        <Explore>
          <h2>Categories</h2>
          <FooterLink to="./">
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Youth
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Lifestyle
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Education
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Technology
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Healthcare
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Entrepreneurship
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Women in Leadership
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Business & Leadership
          </FooterLink>
        </Explore>
        <Explore>
          <h2>Quick FooterLinks</h2>
          <FooterLink to="./">
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Become A Speaker
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Jobs & Careers
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Feedback
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Help Center
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Certificates
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Sponsorship
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Campus Ambassador
          </FooterLink>
          <FooterLink>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Freak Folks
          </FooterLink>
        </Explore>
      </Section>
      <Page>
        <h2>Follow Us</h2>
        <div><AiFillYoutube style={{ color: "#Fa1b7d" }}/><FooterLink>Youtube</FooterLink></div>
        <div><BsSpotify style={{ color: "#Fa1b7d" }}/><FooterLink>Spotify</FooterLink></div>
        <div><FaFacebookF style={{ color: "#Fa1b7d" }}/><FooterLink>Facebook</FooterLink></div>
        <div><IoLogoTwitter style={{ color: "#Fa1b7d" }} /><FooterLink>Twitter</FooterLink></div>
        <div><IoLogoLinkedin style={{ color: "#Fa1b7d" }} /><FooterLink>Linkedin</FooterLink></div>
        <div><FaInstagram style={{ color: "#Fa1b7d" }}/><FooterLink>Instagram</FooterLink></div>
        <div><BsPinterest style={{ color: "#Fa1b7d" }}/><FooterLink>Pinterest</FooterLink></div>
        <div><FaQuora style={{ color: "#Fa1b7d" }}/><FooterLink>Quora</FooterLink></div>
      </Page>
      <EndPage>
        Developed By <span style={{ color: "#Fa1b7d" }}>Freak Folks</span> | All
        Rights Reserved!
      </EndPage>
    </Container>
  );
};

export default Footer;
