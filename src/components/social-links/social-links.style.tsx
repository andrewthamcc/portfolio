import styled from 'styled-components'

export const IconContainer = styled.div<{ flexEnd?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ flexEnd }) => (flexEnd ? 'flex-end' : 'flex-start')};
  align-items: center;
  margin-top: 1rem;
`

export const IconSpan = styled.span`
  font-size: 1rem;
  margin: 0 0.5rem;
  display: flex;
  transition: 0.3s transform ease;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`
