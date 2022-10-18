import React from 'react'
import { Icon } from '@iconify/react'
import githubIcon from '@iconify/icons-fa-brands/github'
import linkedinIn from '@iconify/icons-fa-brands/linkedin-in'
import twitterIcon from '@iconify/icons-fa-brands/twitter'
import mediumM from '@iconify/icons-fa-brands/medium-m'
import { IconContainer, IconSpan } from './social-links.style'

interface SocialLinksProps {
  flexEnd?: boolean
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  flexEnd = false,
}) => {
  return (
    <IconContainer flexEnd={flexEnd}>
      <IconSpan>
        <a
          href="https://github.com/andrewthamcc"
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
        >
          <Icon aria-label="Go to GitHub" icon={githubIcon} />
        </a>
      </IconSpan>
      <IconSpan>
        <a
          href="https://linkedin.com/in/andrewthamcc"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          <Icon aria-label="Go to LinkedIn" icon={linkedinIn} />
        </a>
      </IconSpan>
      <IconSpan>
        <a
          href="https://twitter.com/andrew_tham"
          rel="noopener noreferrer"
          target="_blank"
          title="Twitter"
        >
          <Icon aria-label="Go to Twitter" icon={twitterIcon} />
        </a>
      </IconSpan>
      <IconSpan>
        <a
          href="https://medium.com/@andrew.tham.cc"
          rel="noopener noreferrer"
          target="_blank"
          title="Medium"
        >
          <Icon aria-label="Go to Medium" icon={mediumM} />
        </a>
      </IconSpan>
    </IconContainer>
  )
}
