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
  SEO,
} from '../components'

const MarcheRunnerSection = styled.section`
  padding: 2rem 0;
`
const MarcheRunner = () => {
  const data = useStaticQuery(
    graphql`
      query {
        marcherunner: file(
          relativePath: { eq: "marcherunner/marcherunner.png" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        marcherunnerDashboard: file(
          relativePath: { eq: "marcherunner/marcherunner-dashboard.png" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      {/* <SEO title="MarchéRunner" /> */}
      <MarcheRunnerSection>
        <TextContainer>
          <SectionHeading>MarchéRunner</SectionHeading>
          <Text>
            When going grocery shopping I was using a draft email in Gmail to
            write down my lists before heading out. I built this project out of
            desire for a better experience and to learn new technologies and
            improve on my skills.
          </Text>
          <PortfolioLinkContainer>
            <PortfolioLink
              href="https://github.com/andrewthamcc/marcherunner"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Repository
            </PortfolioLink>
            <PortfolioLink
              href="https://marcherunner.onrender.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Live
            </PortfolioLink>
          </PortfolioLinkContainer>
        </TextContainer>
        <Container>
          <Img
            fluid={data.marcherunner.childImageSharp.fluid}
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
            This the second build of MarchéRunner improving on the methods,
            structure, and other technologies and libraries used.
          </Text>

          <TechIcons
            technologies={[
              'TypeScript',
              'React',
              'SASS',
              'Storybook',
              'Node JS',
              'Apollo Client',
              'GraphQL',
              'Express',
              'Prisma',
              'PostgreSQL',
              'Expo',
              'Auth0',
              'Docker',
              'Jest',
            ]}
          />
          <Text>
            This project is a glorified To-Do List/Task application but has been
            incredibly useful to help learn new things and showcase skills I
            have picked up over time.
          </Text>
          <Img
            fluid={data.marcherunnerDashboard.childImageSharp.fluid}
            imgStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            style={{
              maxHeight: '100%',
              boxShadow: '0 16px 32px 0 rgba(55,58,75,.12)',
              margin: '4rem 0',
            }}
          />
        </TextContainer>
      </MarcheRunnerSection>
    </Layout>
  )
}
export default MarcheRunner

export const Head: HeadFC = () => <SEO title="AT | MarchéRunner" />
