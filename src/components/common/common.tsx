import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled, { css } from 'styled-components'

const LinkStyle = css`
  font-size: 0.8rem;
  font-weight: 600;
  color: #080808;

  transition: 0.3s border ease;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  display: inline;

  &:hover,
  &:focus {
    border-bottom: 2px solid #080808;
  }
`
export const MediaWidths = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tabletS: '600px',
  tabletL: '768px',
  laptop: '1024px',
}

export const Container = styled.div`
  width: 85%;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: ${MediaWidths.tabletL}) {
    width: 90%;
  }
`

export const TextContainer = styled.div`
  width: 80%;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: ${MediaWidths.tabletL}) {
    width: 90%;
  }
`

export const SectionImage = styled(BackgroundImage)<{ y?: number }>`
  filter: grayscale();
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: ${({ y }) => `${y ? y : 0}%`};
  height: 450px;
  margin: 4rem 0;

  @media (max-width: ${MediaWidths.tabletL}) {
    height: 300px;
  }

  @media (max-width: ${MediaWidths.tabletS}) {
    height: 250px;
  }
`

export const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (max-width: ${MediaWidths.mobileL}) {
    font-size: 1.3rem;
  }
`

export const Text = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgb(105, 105, 105);

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const ExternalLink = styled.a`
  ${LinkStyle}
`

export const InternalLink = styled(Link)`
  ${LinkStyle}
`

export const PortfolioLinkContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
`

export const PortfolioLink = styled.a`
  display: block;
  margin: 0 1rem;

  &:first-of-type {
    margin-left: 0;
  }
`
