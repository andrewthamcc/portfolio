import * as React from 'react'
import styled from 'styled-components'
import { HeadFC } from 'gatsby'
import { Layout } from '../layout'
import { Text } from '../components'

const NotFondTitle = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #080808;
`

const FullHeightContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  height: calc(100vh - 5rem - 28px);

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NotFoundPage = () => {
  return (
    <Layout>
      <FullHeightContainer>
        <NotFondTitle>404 Page Not Found</NotFondTitle>
        <Text>Uh Oh! That route that doesn&#39;t exist...</Text>
      </FullHeightContainer>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
