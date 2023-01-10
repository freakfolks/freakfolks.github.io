import React from 'react'
import SectionPage from './SectionPage'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
`

const Section = () => {
  return (
    <Wrap>
        <SectionPage name="Computer Science" />
        <SectionPage name="Biology & Life" image />
        <SectionPage name="Business Analysis" image/>
        <SectionPage name="Social Science" image/>
        <SectionPage name="Data Analysis" image/>
    </Wrap>
  )
}

export default Section