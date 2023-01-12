import React from "react";
import styled from "styled-components";

const WrapSection = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:2;
    padding: 2rem;
    align-items: center;
`
const Page = styled.div`
    background-color: #f5f5f5;
    padding: 3rem;
`

const SectionPage = ({ name, image }) => {
  return (
    <WrapSection>
      <Page>
      <div>
        <img src={image} alt={image} />
      </div>
      <div>{name}</div>
      </Page>
      
    </WrapSection>
  );
};

export default SectionPage;
