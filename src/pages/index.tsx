import * as React from 'react'
import type { HeadFC } from 'gatsby'
import styled from 'styled-components'
import { Layout } from '../layout'
import {
  ExternalLink,
  Hero,
  SectionHeading,
  Skills,
  SocialLinks,
  Text,
  TextContainer,
  Work,
} from '../components'

const Section = styled.section`
  margin: 4rem 0;
`

const IndexPage = () => {
  return (
    <Layout none>
      <Hero />
      <Section>
        <TextContainer>
          <Text>
            I&apos;m a developer based in Toronto, Canada. I graduated from The
            University of Toronto with a degree in Physics after which I trained
            and worked as a Chef. I&apos;ve opened a national test kitchen for
            Sobeys Inc., cooked in fine dining restaurants in Melbourne,
            Australia, headed kitchens in Toronto, and have been a part of food
            focused technology startups.
          </Text>
          <Text>
            I&apos;m an adept problem solver, have a strong background of
            working in teams, and enjoy challenges. I&apos;m passionate about
            technology and using code to solve problems and to create and bring
            websites and web applications to life.
          </Text>
        </TextContainer>
      </Section>

      <Section>
        <Skills />
      </Section>

      <Section>
        <Work />
      </Section>

      <Section>
        <TextContainer>
          <SectionHeading>Contact Me</SectionHeading>
          <Text>
            Reach out if you&apos;re looking for a developer, have a question,
            or would like to connect.
          </Text>
          <ExternalLink
            href="mailto: hello@andrewtham.cc"
            title="hello@andrewtham.cc"
          >
            hello@andrewtham.cc
          </ExternalLink>
          <SocialLinks />
        </TextContainer>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
