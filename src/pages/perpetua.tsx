import React from 'react'
import { HeadFC, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Layout } from '../layout'
import {
  Container,
  TextContainer,
  SectionHeading,
  Text,
  TechIcons,
  SEO,
} from '../components'

const PerpetuaSection = styled.section`
  padding: 2rem 0;
`

const Perpetua = () => {
  const data = useStaticQuery(graphql`
    query {
      perpetua: file(relativePath: { eq: "perpetua/perpetua.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      perpetuaTeam: file(relativePath: { eq: "perpetua/perpetua-team.png" }) {
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
      {/* <SEO title="Draper AI" /> */}
      <PerpetuaSection>
        <TextContainer>
          <SectionHeading>Working at Draper AI</SectionHeading>
          <Text>
            I had the opportunity to work as a Frontend Engineering Intern at
            Draper AI from October 2019 to January 2020. I was incredibly
            fortunate to have this experience and work alongside a team of
            highly intelligent, creative, and motivated engineers. I was the
            first hire from a web development bootcamp and their first hire
            without the deep experience of an Engineering or Computer Science
            background that the majority of the team possessed.
          </Text>
        </TextContainer>
        <Container>
          <Img
            fluid={data.perpetua.childImageSharp.fluid}
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
            One of my main interests in working at Draper AI was due to their
            technology stack and deepening my knowledge of React and being
            exposed to a production scale codebase of that stack.
          </Text>

          <TechIcons
            technologies={[
              'TypeScript',
              'SASS',
              'React',
              'Redux',
              'GraphQL',
              'Apollo Client',
              'Git',
            ]}
          />

          <Text>
            Working at Draper AI was one of the most challenging work
            experiences I have ever had. I was able to learn about working as a
            member in a team of engineers, understand how to navigate and work
            within a large complex codebase, and understanding how the
            development process works from ideation, to design and development,
            and then release.
          </Text>
          <Text>
            Some of my biggest takeaways were coming away with more of an
            understanding of what it means to write maintainable code for other
            developers and the future, the importance of reading and writing
            documentation of both the tools being used and built, and the
            knowledge that development is more about the process of solving
            problems, thinking of creative solutions, and building tools without
            necessarily being tied to a specific language, framework, or
            library.
          </Text>
        </TextContainer>
        <Container>
          <Img
            fluid={data.perpetuaTeam.childImageSharp.fluid}
            imgStyle={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            style={{
              maxHeight: '100%',
              margin: '4rem 0',
            }}
          />
        </Container>
        <TextContainer>
          <Text>
            I have learned tremendously from my time at Draper AI and have
            become a better developer. I am excited to keep an eye on the team
            and what the company will accomplish next.
          </Text>
        </TextContainer>
      </PerpetuaSection>
    </Layout>
  )
}

export default Perpetua

export const Head: HeadFC = () => <SEO title="AT | Perpetua" />
