import styled from 'styled-components'
import { MediaWidths } from '../common'

export const TechList = styled.ul<{ length: number }>`
  display: flex;
  justify-content: ${({ length }) => (length > 3 ? 'space-around' : 'center')};
  align-items: center;
  flex-wrap: wrap;
  margin: 4rem 0;
  font-size: 2rem;

  li {
    margin: ${({ length }) => (length <= 4 ? '0 1rem' : '1rem')};
  }

  @media (max-width: ${MediaWidths.tabletS}) {
    font-size: 1.5rem;
    flex-wrap: wrap;
    justify-content: space-evenly;

    li {
      margin: 1rem 0;
    }
  }
`
export const TechListItem = styled.li`
  display: flex;
  align-items: center;
  border: 50%;
  padding: 1rem;
  box-shadow: 0 16px 32px 0 rgba(55, 58, 75, 0.12);
`
