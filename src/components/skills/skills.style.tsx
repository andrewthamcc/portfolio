import styled from 'styled-components'
import { MediaWidths } from '../common'

export const SkillsContainer = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #080808;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1rem;

  @media (max-width: ${MediaWidths.tabletL}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const SkillsList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`

export const SkillsListItem = styled.li`
  margin: 1.5rem 0 0 1rem;
  list-style: circle;

  @media (max-width: ${MediaWidths.tabletL}) {
    margin-left: 1rem;
  }
`
