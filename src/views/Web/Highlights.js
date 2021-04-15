import React from 'react'
import styled from 'styled-components';

import DarkTemp from "./images/darkTemp.png"
import CleanupImage from "./images/clean-up-temp.png"

const Cointainer = styled.div`
  min-height:100vh;
  padding: 80px 0; 
  box-sizing:border-box;

`

const Title = styled.div`
  font-size:var(--titleFont);
  color: var(--green);
  font-weight: 800;
  text-align: center;
  
`
const Section = styled.div`
  min-height:60vh;
  padding: 40px 0;

`
const SectionTitle = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding: 40px 0;


`

const SectionDesc = styled.div`
  display: grid;
  column-gap: 40px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }

`
const Highlights = () => {

  return (
    <Cointainer>
      <Title>Highlights</Title>
      <Section>
        <SectionTitle>
          Dark Mode
        </SectionTitle>
        <SectionDesc>
          <div style={{ maxWidth: "480px", fontSize: "20px" }}>
            The Dark Mode is one of the coolest features to have.
            We Have Finally rolled out our own dark mode ❤️
          </div>
          <div>
            <img src={DarkTemp} alt="Dark Mode" />
          </div>
        </SectionDesc>
      </Section>
      <Section>
        <SectionTitle>
          Clean Up and Guidlines
        </SectionTitle>
        <SectionDesc>
          <div>
            <img src={CleanupImage} width="100%" alt="Dark Mode" />
          </div>
          <div style={{ maxWidth: "480px", fontSize: "20px" }}>
            With web we have been pushing a lot of changes fast.
            That has lead to some tech debt and various in consitency.
            We decided to enforce some styling guidlines through eslint as well as we
            moved on to a typed system through Typescript.
          </div>
        </SectionDesc>
      </Section>
    </Cointainer>
  )

}

export default Highlights;
