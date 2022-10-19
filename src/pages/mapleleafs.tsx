import React from 'react'
import { HeadFC, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Layout } from '../layout'
import {
  Container,
  TextContainer,
  SectionHeading,
  PortfolioLinkContainer,
  PortfolioLink,
  Text,
  TechIcons,
  ExternalLink,
  SEO,
} from '../components'

const MapleLeafsDroughtSection = styled.section`
  padding: 2rem 0;
`

const MapleLeafsDrought = () => {
  const data = useStaticQuery(graphql`
    query {
      mld: file(
        relativePath: { eq: "mapleleafsdrought/mapleleafsdrought.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      timeline: file(relativePath: { eq: "mapleleafsdrought/timeline.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {/* <SEO title="Maple Leafs Drought" /> */}
      <MapleLeafsDroughtSection>
        <TextContainer>
          <SectionHeading>Maple Leafs Drought</SectionHeading>
          <Text>
            Maple Leafs Drought was created in response to the Maple Leafs 2021
            playoff loss. Wanting to channel my disappointment and fustration I
            created this project to cope with the disappointing loss.
          </Text>
          <PortfolioLinkContainer>
            <PortfolioLink
              href="https://mapleleafsdrought.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Live
            </PortfolioLink>
          </PortfolioLinkContainer>
        </TextContainer>
        <Container>
          <Img
            fluid={data.mld.childImageSharp.fluid}
            imgStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            style={{
              maxHeight: '100%',
              boxShadow: '0 16px 32px 0 rgba(55,58,75,.12)',
              margin: '4rem 0',
            }}
          />
        </Container>
        <TextContainer>
          <Text>
            After leading the playoff series 3 - 1 the Maple Leafs proceeded to
            lose four games in a row to the Montreal Canadiens, a feat only
            performed 29 times prior since 1942. The Canadiens would then go on
            to the Stanley Cup Finals.
          </Text>
          <Text>
            The timeline is heavily inspired by Josh Worth&apos;s work,{' '}
            <ExternalLink
              href="https://mapleleafsdrought.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              If the Moon were only 1 Pixel
            </ExternalLink>
            . The timeline scale is programmatically calculated and updates
            every passing day to present an accurate representation of the time
            passed.
          </Text>

          <TechIcons technologies={['Gatsby', 'TypeScript', 'SASS']} />
        </TextContainer>
        <Container>
          <Img
            fluid={data.timeline.childImageSharp.fluid}
            imgStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            style={{
              maxHeight: '100%',
              boxShadow: '0 16px 32px 0 rgba(55,58,75,.12)',
              margin: '4rem 0',
            }}
          />
        </Container>
        <TextContainer>
          <Text>
            I still believe in the team and will forever be a fan. I hope to be
            able to add a win to the timeline soon.
          </Text>
        </TextContainer>
      </MapleLeafsDroughtSection>
    </Layout>
  )
}

export default MapleLeafsDrought

export const Head: HeadFC = () => <SEO title="AT | Maple Leafs Drought" />
