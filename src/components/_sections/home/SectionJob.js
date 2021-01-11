import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, media } from '../../../style-utils'
import Section from '../../styles/Section'

import Sponsors from '../../../assets/sponsors.svg'
import SponsorTitle from '../../../assets/sponsortitle.svg'

const OuterSection = styled.div`
  background-color: ${colors.customWhite};
  padding: unset;
  margin-bottom: unset;
`

const JobSection = styled.div`
  background-color: ${colors.customWhite};
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  ${media.desktop`
    padding: 1rem 4rem;
  `};
`

const TitleSection = styled.div`
  background-color: ${colors.customWhite};
  padding-top: unset;
  margin-top: unset;
  margin-bottom: unset;
  padding-bottom: unset;
`

const Title = styled.h1`
  height: 10rem;
  margin-top: 2rem;
  padding-left: 2rem;
  margin: unset;
`
const TitleSponsor = styled(Title)`
  color: #532b7e;
  font-family: ${fonts.Montserrat};
  font-weight: 800;
  font-size: 3rem;
  line-height: 3rem;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ba4366;
  width: 100%;
  height: 20rem;
`

const SubTitle = styled.h2`
  font-weight: 700;
  color: ${colors.main};
  font-size: 1.1rem;
  text-align: left;
  margin-top: 0;
`

const SubTitle2 = styled(SubTitle)`
  font-weight: 700;
  font-family: ${fonts.bebas};
  font-size: 1.6rem;
  color: ${colors.lightGrey};
  ${media.tablet`
    text-align: left;
  `};
`

const Paragraph = styled.p`
  color: ${colors.lightGrey};
  font-weight: lighter;
  font-size: 0.8rem;
  font-family: ${fonts.helvetica};
  ${media.tablet`
    text-align: left;
    font-size: 0.9rem;
  `};
`

const ApplyButton = styled(Link)`
  font-family: ${fonts.bebas};
  font-size: 1.3rem;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  border: solid 3px ${colors.main};
  color: ${colors.lightGrey};
  background-color: ${colors.customWhite};
  padding: 1rem 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  &:hover * {
    color: ${colors.main};
  }
  &:hover,
  &:active {
    border: solid 3px ${colors.main};
    color: ${colors.main};
  }
  img {
    display: inline-block;
    max-width: 100%;
    margin-left: 20px;
  }
  ${media.tablet`
    padding: 1.5rem 2rem;
    font-size: 1.6rem;
  `};
  ${media.desktop`
    margin-left: 0;
  `};
`
const LinkText = styled.span`
  display: flex;
`

const LinkMore = styled.span`
  font-family: ${fonts.bebas};
  font-size: 1.2rem;
  color: ${colors.lightGrey};
  outline: none;
`
const SvgSponsor = styled.img`
  width: 30rem;
  height: 10rem;
  ${media.tablet`
    width: 40rem;
    height: 10rem;
  `};
`
const SvgSponsorTitle = styled.img`
  width: 15rem;
  height: 10rem;
`

const letter = '  </>'

const SectionJob = () => (
  <>
    <OuterSection id="jobs">
      <TitleSection>
        <Title>
          <SvgSponsorTitle src={SponsorTitle} />
        </Title>
        <Box>
          <SvgSponsor src={Sponsors} />
        </Box>
      </TitleSection>
    </OuterSection>
  </>
)

export default SectionJob
