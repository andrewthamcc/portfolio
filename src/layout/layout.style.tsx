import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

export const Layout = styled.div`
  opacity: 0;
  animation: ${FadeIn} 0.6s 0.3s ease-in forwards;
`

export const Header = styled.header<{ none: boolean }>`
  display: ${({ none }) => (none ? 'none' : 'block')};
  text-align: right;
  padding-top: 1.5rem;
`

export const HomeLink = styled(Link)`
  background-color: #080808;
  color: #ffffff;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid #080808;
  border-radius: 5px;
  transition: 0.3s ease transform;

  :hover {
    transform: scale(1.1);
  }
`

export const Footer = styled.footer`
  background-color: #080808;
  color: #ffffff;
  padding: 0.25rem 0;
  font-size: 0.7rem;
  margin-top: 2rem;
`
