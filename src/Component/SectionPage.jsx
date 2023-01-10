import React from "react";
import styled from "styled-components";

const WrapSection = styled.div`
    height: 30vh;
    width: 30vw;
    background-color: #f5f5f5;
    padding: 2rem;
`

const SectionPage = ({ name, image }) => {
  return (
    <WrapSection>
      <div>
        <img src={image} alt={image} />
      </div>
      <div>{name}</div>
    </WrapSection>
  );
};

export default SectionPage;
