import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, TextContainer } from '../common'
import { SocialLinks } from '../social-links'
import { HeroHeading, HeroImage, HeroSection } from './hero.style'

const HERO_IMAGE = graphql`
  query {
    hero: file(relativePath: { eq: "home/hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export const Hero = () => {
  React.useEffect(() => {
    console.log(`
          #     #                                      
          #     #  #####  #     #      #####
          #     #  #      #     #      #   #
          #######  ###    #     #      #   #     
          #     #  #      #     #      #   #          
          #     #  #      #     #      #   #        
          #     #  #####  ####  #####  #####`)
    console.log('Built by Andrew Tham')
  }, [])

  const { hero } = useStaticQuery(HERO_IMAGE)
  const imageData = hero.childImageSharp.fluid

  return (
    <HeroSection>
      <TextContainer>
        <HeroHeading>Andrew Tham</HeroHeading>
        <SocialLinks flexEnd />
      </TextContainer>

      <Container>
        <HeroImage fluid={imageData} y={60} />
      </Container>
    </HeroSection>
  )
}
