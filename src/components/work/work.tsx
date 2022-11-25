import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { SectionHeading, TextContainer, Text, InternalLink } from '../common'
import {
  WorkImageContainer,
  WorkItem,
  WorkItemContainer,
  WorkItemTitle,
} from './work.style'

export const WORK_IMAGES = graphql`
  query {
    perpetua: file(relativePath: { eq: "perpetua/perpetua.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marcherunner: file(relativePath: { eq: "marcherunner/marcherunner.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lcm: file(relativePath: { eq: "lcm/lcm.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mld: file(relativePath: { eq: "mapleleafsdrought/mapleleafsdrought.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const Work = () => {
  const data = useStaticQuery(WORK_IMAGES)

  return (
    <TextContainer>
      <SectionHeading>Work</SectionHeading>
      <Text>Selected works and past projects.</Text>

      <WorkItemContainer>
        <WorkItem>
          <Link to="/mapleleafs">
            <WorkImageContainer>
              <Img fluid={data.mld.childImageSharp.fluid} />
            </WorkImageContainer>
          </Link>
          <WorkItemTitle>Maple Leafs Drought</WorkItemTitle>
          <Text>
            Coping with disappointing performance of the Toronto Maple Leafs
            with a fun little art project.
          </Text>
          <div>
            <InternalLink to="/mapleleafs">View Project</InternalLink>
          </div>
        </WorkItem>

        <WorkItem>
          <Link to="/marcherunner">
            <WorkImageContainer>
              <Img fluid={data.marcherunner.childImageSharp.fluid} />
            </WorkImageContainer>
          </Link>
          <WorkItemTitle>MarchéRunner</WorkItemTitle>
          <Text>
            A web application to help you on your weekly shopping trips.
          </Text>
          <div>
            <InternalLink to="/marcherunner">View Project</InternalLink>
          </div>
        </WorkItem>

        <WorkItem>
          <Link to="/perpetua">
            <WorkImageContainer>
              <Img fluid={data.perpetua.childImageSharp.fluid} />
            </WorkImageContainer>
          </Link>
          <WorkItemTitle>Perpetua / Draper AI</WorkItemTitle>
          <Text>
            I had the opportunity to work as an intern at Draper AI, a start-up
            based in Toronto.
          </Text>
          <div>
            <InternalLink to="/perpetua">Read about my experience</InternalLink>
          </div>
        </WorkItem>

        <WorkItem>
          <Link to="/cafikmartincoaching">
            <WorkImageContainer>
              <Img fluid={data.lcm.childImageSharp.fluid} />
            </WorkImageContainer>
          </Link>
          <WorkItemTitle>Cafik-Martin Coaching</WorkItemTitle>
          <Text>
            Website with secure client portal designed, built, and deployed for
            Orthodontic Speaker and Coach Laura Cafik-Martin.
          </Text>
          <div>
            <InternalLink to="/cafikmartincoaching">View Project</InternalLink>
          </div>
        </WorkItem>
      </WorkItemContainer>
    </TextContainer>
  )
}
