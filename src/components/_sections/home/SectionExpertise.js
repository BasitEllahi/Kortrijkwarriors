import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'
import Section from '../../styles/Section'
import BaseOuterSection from '../../styles/OuterSection'
import { colors, fonts, media } from '../../../style-utils'
import Experts from '../../../assets/team.png'
import Interface from '../../../assets/langemunte.png'
import Cross from '../../../assets/cross.svg'
import Scroll from '../../../assets/scroll.svg'

const OuterSection = styled(BaseOuterSection)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-top: unset;
`

const SectionBox = styled.div`
  margin-top: unset;
  padding-top: unset;
  padding-bottom: 2rem;
  padding: unset;
  position: relative;
`
const SectionBox2 = styled(Section)`
  display: flex;
  justify-content: center;
  margin-top: unset;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding: unset;
  ${media.desktop`
    padding-top: 5rem;
    padding-bottom: 5rem;
  `};
`

const SvgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  &:last-of-type {
    padding-bottom: 0;
  }
  ${media.desktop`
    width: 100%;
    padding-bottom: 0;
    flex-direction: row;
    justify-content: space-around;
  `};
`
const InfoItemContainer1 = styled(InfoItemContainer)`
  display: flex;
  background-color: #ca3766;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  &:last-of-type {
    padding-bottom: 0;
  }
  ${media.desktop`
    width: 100%;
    padding-bottom: 0;
    flex-direction: row;
    justify-content: space-around;
  `};
`

const InfoImageBox = styled.div`
  display: flex;
  justify-content: center;
  ${media.desktop`
    order: ${props => props.order || '2'};
  `};
  ${media.lgDesktop`
  `};
`

const InfoImage = styled.img`
  width: 16rem;
  user-select: none;
  ${media.tablet`
    width: 23rem;
  `};
  ${media.desktop`
    width: 25rem;
  `};
`

const StyledScroll = styled.img`
  width: 2rem;
  user-select: none;
  position: absolute;
  width: 2rem;
  top: -2rem;
  left: 1rem;
  ${media.tablet`
    width: 3rem;
    top: -3rem;
    left: 2rem;
  `};
  ${media.desktop`
    width: 3rem;
    top: -3rem;
    left: 2rem;
  `};
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  order: 2;
  padding: 2rem;

  & div {
    font-family: ${fonts.Montserrat};
    font-weight: 100;
    font-size: 0.8rem;
    color: black;
  }
  h2 {
    font-family: ${fonts.Montserrat};
    font-weight: 800;
    color: black;
    margin-bottom: 1rem;
  }
  ${media.tablet`
    padding: unset;
    width: 80%;
    text-align: left;
  `};

  ${media.desktop`
    width: 40%;
    text-align: left;
  `};
`
const InfoBox1 = styled(InfoBox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  order: 2;
  color: white;
  & div {
    font-family: ${fonts.Montserrat};
    font-weight: 100;
    font-size: 0.8rem;
    color: white;
  }
  h2 {
    font-family: ${fonts.Montserrat};
    font-weight: 800;
    color: white;
    margin-bottom: 1rem;
  }
  ${media.desktop`
    width: 40%;
    text-align: left;
  `};
`

const InfoTitle = styled.h2`
  font-weight: 700;
  font-family: ${fonts.bebas};
  font-size: 1.4rem;
  color: ${colors.lightGrey};
`

const InfoDescription = styled.div`
  color: ${colors.lightGrey};
  font-weight: lighter;
  font-size: 0.9rem;
  font-family: ${fonts.helvetica};
`

const StyledTitle = styled.h1`
  text-align: center;
  font-family: ${fonts.Montserrat};
  text-align: center;
  font-size: 2rem;
  color: transparent;
  -webkit-text-stroke: 1.4px #ca3766;
  width: 11rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  ${media.tablet`
    font-size: 2.4rem;
    margin-bottom: 1rem;
  `};
  ${media.desktop`
    font-size: 5rem;
    width: 14rem;
  `};
`
const QuoteText = styled.blockquote`
  font-style: italic;
  font-size: 1.4rem;
  font-family: ${fonts.Montserrat};
  color: #ffffff;
  text-align: center;
  width: 80%;
  margin: auto;
  line-height: 1.47;
  ${media.tablet`
    font-size: 1.5rem;
    line-height: normal;
    line-height: 1.47;
    width: 80%;
    margin: auto;
  `};

  ${media.desktop`
    font-size: 1.6rem;
    line-height: normal;
    line-height: 1.47;
    width: 80%;
    margin: auto;
  `};
`
const OuterSectionQuote = styled(BaseOuterSection)`
  background-color: #532b7e;
  display: flex;
  height: 25rem;
  ${media.desktop`
    height: 30rem;
  `};
`

const SectionServices = () => (
  <OuterSection>
    <SectionBox id="wat-doen-we" className="clearfix">
      <StyledTitle>ABOUT</StyledTitle>
      <SvgContainer>
        <StyledScroll src={Scroll} alt="Experts" />
        <InfoItemContainer1>
          <InfoImageBox>
            <ScrollAnimation animateIn="bounceInRight" animateOnce>
              <InfoImage src={Experts} alt="Experts" />
            </ScrollAnimation>
          </InfoImageBox>
          <InfoBox1>
            <InfoTitle>TEAM PLAYERS</InfoTitle>
            <InfoDescription>
              Een team van gelijkgestemden, gepassioneerde cricket spelers. Kortrijk Warrriors kan
              worden beschouwd als een familieclub waar iedereen welkom is, ongeacht kleur of
              achtergrond.
            </InfoDescription>
          </InfoBox1>
        </InfoItemContainer1>
        <InfoItemContainer>
          <InfoImageBox order="3">
            <ScrollAnimation animateIn="bounceInLeft" animateOnce>
              <InfoImage src={Interface} alt="Interface" />
            </ScrollAnimation>
          </InfoImageBox>
          <InfoBox>
            <InfoTitle>New Pitch</InfoTitle>
            <InfoDescription>
              Kortrijk United Cricket Club, momenteel in derde divisie actief, is al jaren op zoek
              naar een cricketterrein in eigen stad. Het stadsbestuur bleef niet doof voor de roep
              van de club. Maar door de grootte van het terrein, zo’n pitch heeft een
              minimumdiameter van 110 meter, was het even zoeken naar een geschikte locatie.
              <br />
              <br />
              “We realiseren hier iets unieks. Want in Vlaanderen werd nog nooit een cricketpitch op
              een bestaand kunstgrasveld aangelegd”, zegt schepen van Sport Arne Vandendriessche
              (Team Burgemeester).
            </InfoDescription>
          </InfoBox>
        </InfoItemContainer>
      </SvgContainer>
    </SectionBox>
    <OuterSectionQuote>
      <SectionBox2>
        <QuoteText>
          “You don’t win or lose the games because of the 11 you select. You win or lose with that
          those 11 do on the field.”
        </QuoteText>
      </SectionBox2>
    </OuterSectionQuote>
  </OuterSection>
)

export default SectionServices
