import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors, fonts, media } from '../../../style-utils'
import JobList from './JobList'
import Section from '../../styles/Section'
import JobListItem from './JobListItem'
import BaseOuterSection from '../../styles/OuterSection'

const OuterSection = styled(BaseOuterSection)`
  background-color: ${colors.customWhite};
  padding-bottom: unset;
`

const SectionBox = styled(Section)`
  padding-bottom: 2rem;
`

const TitleBox = styled.span`
  display: flex;
  width: 100%;
`

const Title = styled.h1`
  color: #333333;
  text-align: center;
  font-family: ${fonts.bebas};
  font-size: 1.8rem;
  padding: 0.2rem 1rem;
  border: solid 3px ${colors.main};
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
  ${media.phablet`
    font-size: 2.2rem;
  `};
  ${media.tablet`
    font-size: 3rem;
  `};
`

const Box = styled.div`
  margin-bottom: 2rem;
  ${media.desktop`
    float: left;
    width: 60%;

    &:nth-of-type(2n-1) {
      padding-right: 2rem;
    }
    &:nth-of-type(2n) {
      padding-left: 0rem;
    }
  `};
`

const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
  text-align: left;
  margin-top: 0;
  color: #333333;
  font-family: ${fonts.bebas};
  font-weight: lighter;
  letter-spacing: 0.05rem;
  ${media.tablet`
    font-size: 1.6rem;
  `};
`

const SubTitle2 = styled(SubTitle)`
  color: #333333;
  font-family: ${fonts.helvetica};
  font-weight: lighter;
  font-size: 0.9rem;
  text-align: left;
  margin-top: 0;
  ${media.tablet`
    font-size: 1.1rem;
  `};
`

const TitleJob = styled(Title)`
  font-weight: normal;
  ${media.tablet`
    text-align: left;
  `};
`
const Paragraph = styled.p`
  color: ${colors.lightGrey};
  font-weight: lighter;
  font-size: 0.9rem;
  font-family: ${fonts.helvetica};
  ${media.tablet`
    text-align: left;
    line-height: 1.6;
    font-size: 1rem;
  `};
`

const ApplyButton = styled(Link)`
  font-family: ${fonts.bebas};
  display: inline-block;
  width: 100%;
  background-color: ${colors.main};
  color: #ffffff;
  font-size: 1.6rem;
  padding: 0.8rem 4rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  outline: none;
  &:hover,
  &:active {
    background-color: ${colors.lightGrey};
  }
  ${media.tablet`
    width: auto;
  `};
  ${media.desktop`
    font-size: 1.8rem;
    margin-left: 0;
  `};
`

const letter = '  </>'

const JobInfo = () => (
  <OuterSection>
    <SectionBox className="clearfix">
      <TitleBox>
        <TitleJob>
          Frontend Developer
          {letter}
        </TitleJob>
      </TitleBox>
      <Box>
        <SubTitle2>Klaar om met ons aan de slag te gaan? Vertel ons meer.</SubTitle2>
      </Box>
      <Box>
        <SubTitle>Profiel</SubTitle>
        <Paragraph>
          Wil jij jezelf verder ontwikkelen in een gedreven team met focus op kwaliteit en
          innovatie? Wij geven jou die vrijheid. Enkele dagen in de maand krijg je van ons de tijd
          om nieuwe technologieën te ontdekken, je kennis te verbeteren en die te delen met je
          collega’s.
        </Paragraph>
      </Box>
      <Box>
        <SubTitle>Heb je interesse in of ervaring met de volgende technologieën?</SubTitle>
        <JobList>
          <JobListItem>React, Angular, VueJS</JobListItem>
          <JobListItem>ElectronJS</JobListItem>
          <JobListItem>Progressive Web App</JobListItem>
          <JobListItem>GraphQL</JobListItem>
          <JobListItem>Webpack</JobListItem>
          <JobListItem>CSS3 en beyond</JobListItem>
        </JobList>
      </Box>
      <Box>
        <SubTitle>Jouw vaardigheden:</SubTitle>
        <JobList>
          <JobListItem>Je bent gepassioneerd bezig met frontend</JobListItem>
          <JobListItem>
            Je bent leergierig om de laatste nieuwe ontwikkelingen op te pikken
          </JobListItem>
          <JobListItem>Je bent een goede team player</JobListItem>
          <JobListItem>Je bent communicatief en sociaal</JobListItem>
          <JobListItem>Je werkt professioneel en gestructureerd</JobListItem>
          <JobListItem>Je hebt oog voor kwaliteit en gebruiksvriendelijkheid</JobListItem>
          <JobListItem>
            Je maakt web applicaties responsive en compatibel met meerdere browsers
          </JobListItem>
        </JobList>
      </Box>
      <Box>
        <SubTitle>Kom werken op één van onze vele locaties:</SubTitle>
        <JobList>
          <JobListItem>Kontich</JobListItem>
          <JobListItem>Hasselt</JobListItem>
          <JobListItem>Aalst</JobListItem>
          <JobListItem>Gent (Merelbeke)</JobListItem>
        </JobList>
      </Box>
      <Box>
        <ApplyButton to="/job">SOLLICITEER</ApplyButton>
      </Box>
    </SectionBox>
  </OuterSection>
)

export default JobInfo
