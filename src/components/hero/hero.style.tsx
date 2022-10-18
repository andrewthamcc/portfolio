import styled from 'styled-components'
import { MediaWidths, SectionImage } from '../common'

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 3.5rem 0;

  @media (max-width: ${MediaWidths.tabletL}) {
    height: auto;
  }
`

export const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  color: #080808;
  text-align: right;
  text-transform: uppercase;
  margin-top: 3rem;

  @media (max-width: ${MediaWidths.tabletL}) {
    font-size: 3rem;
  }

  @media (max-width: ${MediaWidths.tabletS}) {
    font-size: 2rem;
  }

  @media (max-width: ${MediaWidths.mobileL}) {
    font-size: 1.75rem;
  }
`

export const HeroImage = styled(SectionImage)`
  margin-top: 2rem;
`
