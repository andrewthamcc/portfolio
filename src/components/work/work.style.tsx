import styled from 'styled-components'
import { MediaWidths } from '../common'

export const WorkItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${MediaWidths.mobileL}) {
    flex-direction: column;
  }
`

export const WorkItem = styled.div`
  width: calc(50% - 3rem);
  margin: 2rem 3rem;

  display: flex;
  flex-direction: column;

  &:nth-child(odd) {
    margin-left: 0;
  }

  &:nth-child(even) {
    margin-right: 0;
  }

  p {
    flex-grow: 1;
  }

  @media (max-width: ${MediaWidths.tabletS}) {
    width: 100%;
    margin: 2rem 0;
  }
`

export const WorkImageContainer = styled.div`
  box-shadow: 0 16px 32px 0 rgba(55, 58, 75, 0.12);
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

export const WorkItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 1rem 0;
  padding: 0;

  @media (max-width: ${MediaWidths.tabletL}) {
    font-size: 1rem;
  }
`
