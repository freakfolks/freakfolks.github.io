import React from "react";
import styled from "styled-components";

const WrapSection = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:1;
    padding: 1rem;
    align-items: center;
    border-radius: 50px;
`
const Page = styled.div`
    background-color: #f5f5f5;
    padding: 3rem;
`

const SectionPage = ({ name, image, alt }) => {
  return (
    <WrapSection>
      <Page>
      <div>
        <img src={image} alt={alt} />
      </div>
      <div>{name}</div>
      </Page>
      
    </WrapSection>
  );
};

export default SectionPage;
