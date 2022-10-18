import * as React from 'react'
import { Container } from '../components'
import {
  Layout as LayoutContainer,
  Header,
  Footer,
  HomeLink,
} from './layout.style'
import './reset.css'

interface LayoutProps {
  children: React.ReactNode
  none?: boolean
}

export const Layout: React.FC<LayoutProps> = ({ children, none = false }) => {
  return (
    <LayoutContainer>
      <Header none={none}>
        <Container>
          <HomeLink to="/">at</HomeLink>
        </Container>
      </Header>
      <main>{children}</main>
      <Footer>
        <Container>Andrew Tham © {new Date().getFullYear()}</Container>
      </Footer>
    </LayoutContainer>
  )
}
