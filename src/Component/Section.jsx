import React from 'react'
import SectionPage from './SectionPage'
import styled from 'styled-components'
import category1 from '../images/category1.png'
import category2 from '../images/category2.png';
import category3 from '../images/category3.png';
import category4 from '../images/category4.png';
import category5 from '../images/category5.png';

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 3rem;
`

const Section = () => {
  return (
    <Wrap>
        <SectionPage name="Computer Science" image={category1}/>
        <SectionPage name="Biology & Life" image={category2} />
        <SectionPage name="Business Analysis" image={category3}/>
        <SectionPage name="Social Science" image={category4}/>
        <SectionPage name="Data Analysis" image={category5}/>
    </Wrap>
  )
}

export default Section