import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const Explore = styled.div`
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
`;
const EndPage = styled.div`
  height: 10vh;
`;

const Footer = () => {
  return (
    <div>
      <Section>
        <Explore>
          <h2>Explore</h2>
          <Link to="./">
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Home
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            About
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Speaker
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Blog
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Contact
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Our Partners
          </Link>z
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Media Coverage
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Newsletter
          </Link>
        </Explore>
        <Explore>
          <h2>Categories</h2>
          <Link to="./">
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Youth
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Lifestyle
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Education
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Technology
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Healthcare
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Entrepreneurship
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Women in Leadership
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Business & Leadership
          </Link>
        </Explore>
        <Explore>
          <h2>Quick Links</h2>
          <Link to="./">
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Become A Speaker
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Jobs & Careers
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Feedback
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Help Center
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Certificates
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Sponsorship
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Campus Ambassador
          </Link>
          <Link>
            <AiOutlineArrowRight style={{ color: "#Fa1b7d" }} />
            Freak Folks
          </Link>
        </Explore>
      </Section>
      <Page>
        <div>Follow Us</div>
        <Link>Youtube</Link>
        <Link>Spotify</Link>
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>Linkedin</Link>
        <Link>Instagram</Link>
        <Link>Pinterest</Link>
        <Link>Quora</Link>
      </Page>
      <EndPage>
        Developed By <span style={{ color: "#Fa1b7d" }}>Freak Folks</span> | All
        Rights Reserved!
      </EndPage>
    </div>
  );
};

export default Footer;
