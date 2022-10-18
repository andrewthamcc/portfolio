import * as React from 'react'
import { SectionHeading, TextContainer, Text } from '../common'
import { SkillsContainer, SkillsList, SkillsListItem } from './skills.style'

export const Skills = () => {
  return (
    <TextContainer>
      <SectionHeading>Skills</SectionHeading>
      <Text>
        Some of the technologies I&apos;ve learned and worked with include:
      </Text>

      <SkillsContainer>
        <SkillsList>
          <SkillsListItem>HTML5</SkillsListItem>
          <SkillsListItem>CSS3</SkillsListItem>
          <SkillsListItem>SASS</SkillsListItem>
          <SkillsListItem>JavaScript</SkillsListItem>
        </SkillsList>
        <SkillsList>
          <SkillsListItem>TypeScript</SkillsListItem>
          <SkillsListItem>NodeJS</SkillsListItem>
          <SkillsListItem>Storybook</SkillsListItem>
          <SkillsListItem>react-testing-library</SkillsListItem>
        </SkillsList>
        <SkillsList>
          <SkillsListItem>React</SkillsListItem>
          <SkillsListItem>Redux</SkillsListItem>
          <SkillsListItem>Gatsby</SkillsListItem>
          <SkillsListItem>GraphQL/Apollo Client</SkillsListItem>
        </SkillsList>
        <SkillsList>
          <SkillsListItem>Git</SkillsListItem>
          <SkillsListItem>Express</SkillsListItem>
          <SkillsListItem>PostgreSQL</SkillsListItem>
          <SkillsListItem>Firebase</SkillsListItem>
        </SkillsList>
      </SkillsContainer>
    </TextContainer>
  )
}
