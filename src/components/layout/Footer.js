import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, media } from '../../style-utils'
import BaseSection from '../styles/Section'
import BaseOuterSection from '../styles/OuterSection'

import Facebook from '../../assets/fb.svg'
import Instagram from '../../assets/instagram.svg'
// import Linkedin from '../../assets/socials/linkedin.png'
import Twitter from '../../assets/twitter.svg'

const OuterSection = styled(BaseOuterSection)`
  color: #ffffff;
  background: ${colors.lightRedMain};
  display: flex;
  justify-content: center;
`

const Section = styled(BaseSection)`
  background: ${colors.lightRedMain};
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  ${media.tablet`
    align-items: baseline;
    flex-direction: row;
    padding-top: 0;
  `};
  ${media.lgDesktop`
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
  `};
`

const Location = styled.div`
  ${media.tablet`
    padding: 4rem 2rem 4rem 0;
    background: ${colors.lightRedMain};
  `};
`

const Contacts = styled.div`
  padding-top: 2rem;

  ${media.lgDesktop`
    flex: 1 1 0%;
    padding: 4rem 0 4rem 4rem;
    background: ${colors.lightRedMain};
  `};
`

const Title = styled.h2`
  font-weight: 700;
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  font-family: ${fonts.Montserrat};
  letter-spacing: 0.1rem;

  ${media.tablet`
    text-align: left;
  `};
  ${media.lgDesktop`
    font-size: 1.4rem;
  `};
`

const Box = styled.div`
  ${media.tablet`
    padding-right: 1rem;
    float: left;
    width: 10rem;
  `};
`

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 0.8rem;
  text-align: center;
  font-family: ${fonts.Montserrat};
  letter-spacing: 0.05rem;
  margin: 0;
  ${media.tablet`
    text-align: left;
    margin-bottom: .5em;
  `};
`

const Paragraph = styled.p`
  text-align: center;
  font-family: ${fonts.Montserrat};
  font-weight: lighter;
  font-size: 0.8rem;
  ${media.tablet`
    text-align: left;
  `};
`

const Socials = styled.div`
  margin-top: 4em;
  line-height: 1;
  text-align: center;
  ${media.tablet`
    text-align: left;
  `};
`

const SocialLink = styled.a`
  margin-right: 2px;
  width: 1rem;
  height: 1rem;
  display: flex;
`

const MailTo = styled.a`
  font-weight: lighter;
  font-family: ${fonts.Montserrat};
  font-size: 0.8rem;
  color: #ffffff;
  text-decoration: none;
  padding-left: 4px;
`

const SectionFooter = ({ links }) => (
  <OuterSection>
    <Section id="contact">
      <Location>
        <Title>Onze locatie</Title>
        <Box>
          <SubTitle>Stadium</SubTitle>
          <Paragraph>
            Bad Godesberglaan 22
            <br />
            8500 Kortrijk
          </Paragraph>
        </Box>
      </Location>

      <Contacts>
        <Title>Contacteer ons</Title>
        <SubTitle>
          Mail ons:&nbsp;
          <MailTo href={`mailto:${links.contact}`}>{links.contact}</MailTo>
        </SubTitle>
        <SubTitle>
          Telefoon:&nbsp;
          <MailTo>0470 84 52 94</MailTo>
        </SubTitle>
      </Contacts>
    </Section>
  </OuterSection>
)

SectionFooter.propTypes = {
  links: PropTypes.shape({
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    contact: PropTypes.string,
  }).isRequired,
}

export default SectionFooter
