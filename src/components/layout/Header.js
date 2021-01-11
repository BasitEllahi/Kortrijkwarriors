import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Bottom from './Bottom'
import Logo from './Logo'
import { colors, media } from '../../style-utils'
import BaseSection from '../styles/Section'
import BaseOuterSection from '../styles/OuterSection'

import Facebook from '../../assets/fb.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'

const OuterSection = styled(BaseOuterSection)`
  background-color: transparent;
  ${media.desktop`
    background-color: transparent;
  `};
`

const Section = styled(BaseSection)`
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.desktop`
    text-align: left;
    padding-top: 3rem;
  `};
`

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  & > * {
    vertical-align: middle;
  }
`

const Socials = styled.div`
  display: flex;
  ${media.desktop`
    line-height: 1;
    text-align: left;
    display: flex;
    flex-direction: row;
    margin-left:60px;
  `};
`

const SiteLogo = styled(Logo)`
  display: flex;
`

const SocialLink = styled.a`
  margin-left: 14px;
  width: 1.5rem;
  height: 1.5rem;
  &:first-child {
    margin-left: 0;
  }
`

const SectionHeader = ({ links }) => (
  <OuterSection>
    <Section>
      <SiteLogo />
      <MenuContainer>
        <Bottom />
        <Socials>
          <SocialLink href={links.facebook} target="_blank">
            <img src={Facebook} alt="Facebook" />
          </SocialLink>
          <SocialLink href={links.linkedIn} target="_blank">
            <img src={Instagram} alt="LinkedIn" />
          </SocialLink>
        </Socials>
      </MenuContainer>
    </Section>
  </OuterSection>
)

SectionHeader.propTypes = {
  links: PropTypes.shape({
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    contact: PropTypes.string,
  }).isRequired,
}

export default SectionHeader
