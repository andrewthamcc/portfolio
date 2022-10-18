import React from 'react'
import { Icon, IconifyIcon } from '@iconify/react'
import auth0Icon from '@iconify/icons-logos/auth0'
import apollostackIcon from '@iconify/icons-logos/apollostack'
import dockerIcon from '@iconify/icons-logos/docker-icon'
import expoIcon from '@iconify/icons-logos/expo'
import expressIcon from '@iconify/icons-logos/express'
import firebaseIcon from '@iconify/icons-logos/firebase'
import gatsbyIcon from '@iconify/icons-logos/gatsby'
import gitIcon from '@iconify/icons-logos/git-icon'
import graphqlIcon from '@iconify/icons-logos/graphql'
import herokuIcon from '@iconify/icons-logos/heroku-icon'
import html5 from '@iconify/icons-logos/html-5'
import javascriptIcon from '@iconify/icons-logos/javascript'
import jestIcon from '@iconify/icons-logos/jest'
import jqueryIcon from '@iconify/icons-logos/jquery'
import materialUi from '@iconify/icons-logos/material-ui'
import mongodbIcon from '@iconify/icons-logos/mongodb'
import nodejsIcon from '@iconify/icons-logos/nodejs-icon'
import postgresqlIcon from '@iconify/icons-logos/postgresql'
import prismaIcon from '@iconify/icons-logos/prisma'
import reactIcon from '@iconify/icons-logos/react'
import reduxIcon from '@iconify/icons-logos/redux'
import sassIcon from '@iconify/icons-logos/sass'
import storybookIcon from '@iconify/icons-logos/storybook-icon'
import typeScriptIcon from '@iconify/icons-logos/typescript-icon'
import { TechList, TechListItem } from './tech-icons.style'

export const technology = [
  'Auth0',
  'Apollo Client',
  'Docker',
  'Expo',
  'Express',
  'Firebase',
  'Gatsby',
  'Git',
  'GraphQL',
  'Heroku',
  'HTML',
  'JavaScript',
  'Jest',
  'jQuery',
  'material UI',
  'MongoDB',
  'Node JS',
  'PostgreSQL',
  'Prisma',
  'React',
  'Redux',
  'SASS',
  'Storybook',
  'TypeScript',
] as const
type TechnologyVariant = typeof technology[number]

interface IconData {
  icon: IconifyIcon
  ariaLabel: string
}

const TechnologyIconData: Record<TechnologyVariant, IconData> = {
  Auth0: {
    icon: auth0Icon,
    ariaLabel: 'Auth0',
  },
  'Apollo Client': {
    icon: apollostackIcon,
    ariaLabel: 'Apollo Client',
  },
  Docker: {
    icon: dockerIcon,
    ariaLabel: 'Docker',
  },
  Expo: {
    icon: expoIcon,
    ariaLabel: 'Expo',
  },
  Express: {
    icon: expressIcon,
    ariaLabel: 'Express',
  },
  Firebase: {
    icon: firebaseIcon,
    ariaLabel: 'Firebase',
  },
  Gatsby: {
    icon: gatsbyIcon,
    ariaLabel: 'Gatsby',
  },
  Git: {
    icon: gitIcon,
    ariaLabel: 'Git',
  },
  GraphQL: {
    icon: graphqlIcon,
    ariaLabel: 'GraphQL',
  },
  Heroku: {
    icon: herokuIcon,
    ariaLabel: 'Heroku',
  },
  HTML: {
    icon: html5,
    ariaLabel: 'HTML',
  },
  JavaScript: {
    icon: javascriptIcon,
    ariaLabel: 'JavaScript',
  },
  Jest: {
    icon: jestIcon,
    ariaLabel: 'Jest',
  },
  jQuery: {
    icon: jqueryIcon,
    ariaLabel: 'jQuery',
  },
  'material UI': {
    icon: materialUi,
    ariaLabel: 'Material UI',
  },
  MongoDB: {
    icon: mongodbIcon,
    ariaLabel: 'Mongo DB',
  },
  'Node JS': {
    icon: nodejsIcon,
    ariaLabel: 'Node JS',
  },
  PostgreSQL: {
    icon: postgresqlIcon,
    ariaLabel: 'PostgreSQL',
  },
  Prisma: {
    icon: prismaIcon,
    ariaLabel: 'Prisma',
  },
  React: {
    icon: reactIcon,
    ariaLabel: 'React',
  },
  Redux: {
    icon: reduxIcon,
    ariaLabel: 'Redux',
  },
  SASS: {
    icon: sassIcon,
    ariaLabel: 'SASS',
  },
  Storybook: {
    icon: storybookIcon,
    ariaLabel: 'Storybook',
  },
  TypeScript: {
    icon: typeScriptIcon,
    ariaLabel: 'TypeScript',
  },
}

interface TechIconsProps {
  technologies: TechnologyVariant[]
}

export const TechIcons: React.FC<TechIconsProps> = ({ technologies }) => {
  return (
    <TechList length={technologies.length}>
      {technologies.map((icon) => (
        <TechListItem key={icon}>
          <Icon
            aria-label={TechnologyIconData[icon].ariaLabel}
            icon={TechnologyIconData[icon].icon}
          />
        </TechListItem>
      ))}
    </TechList>
  )
}
