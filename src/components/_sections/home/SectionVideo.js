import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'
import Section from '../../styles/Section'
import { colors, fonts, media } from '../../../style-utils'
import video from '../../../assets/cricket.mp4'
import Play from '../../../assets/others/playButton.svg'
import Pause from '../../../assets/others/pauseButton.svg'
import Interface from '../../../assets/playing.png'

const SectionOverview = styled(Section)`
  padding-top: unset;
  padding-left: unset;
  padding-right: unset;
  ${media.tablet`
    padding-top: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
  `};
`

const Playbutton = styled.span`
  position: absolute;
  top: 40%;
  left: 46%;
  display: flex;
  height: 3rem;
  width: 3rem;
  opacity: ${props => (props.button ? 1 : 0)};
  background-color: #532b7e;
  border-radius: 50%;
  background-image: url(${props => props.showPause});
  background-repeat: no-repeat;
  background-size: 60px 35px;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  ${media.midDesktop`
    top: 7rem;
    left: 14rem;
`};
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 2rem;

  ${media.desktop`
    flex-direction: row;
    justify-content: space-around;
`};
`

const ShadingLayer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0.05rem;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.button ? 0.5 : 0)};
  background-color: black;
  transition: opacity 0.2s ease-in-out;
  ${media.tablet`
    flex-direction: row;
    justify-content: space-around;
  `};
  ${media.desktop`
    width: 100%;
    height: 100%;
`};
  ${media.midDesktop`
    width: 100%;
`};
`

const SectionBox = styled.div`
  position: relative;
  display: none;
  visibility: hidden;
  &:hover ${Playbutton} {
    opacity: ${props => (props.button ? 0 : 1)};
  }
  &:hover ${ShadingLayer} {
    opacity: ${props => (props.button ? 0 : 0.5)};
  }

  ${media.tablet`
    display:none;
    justify-content: center;
    width: 73vw;
    height: 40vw;
    align-self:center;
  `};
  ${media.desktop`
    display:none;
    justify-content: center;
    width: unset;
    height: unset;
  `};
`

const Video = styled.video`
  display: flex;
  width: 100vw;
  ${media.tablet`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  `};
  ${media.desktop`
    width: 100%;
    height: 100%;
  `};
  ${media.midDesktop`
    width: 620px;
  `};
`
const Line = styled.span`
  width: 40%;
  display: flex;
  height: 0.15rem;
  background-color: ${colors.lightRedMain};
  margin-top: 1rem;
  border-bottom: 3px solid #black;
`
const Box = styled.div`
  ${media.tablet`
    position: absolute;
    width: 30rem;
    left: -8vw;
    top: 7rem;
    display: flex;
    height: 8rem;
    background-color: #532b7e;
    z-index: 0;
  `};
  ${media.desktop`
    display:flex;
    width: 30rem;
    left: -8vw;
    top: 12rem;
  `};
`

const InfoDescription = styled.div`
  color: ${colors.lightGrey};
  font-family: ${fonts.Montserrat};
  font-weight: 100;
  font-size: 0.8rem;
  color: black;
  padding-left: 1rem;
  width: 95%;
  margin-top: 1rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  align-self: center;
  ${media.tablet`
    width: 80%;
  `};
  ${media.desktop`
    font-size: 0.8rem;
    margin-top:unset;
    width: 40%;
  `};
`

const SvgBox = styled.div`
  position: relative;
  display: none;
`
const InfoImageBox = styled.div`
  display: flex;
  width: 100%;
  ${media.tablet`
    width: 23rem;
  `};
  ${media.desktop`
    width: 25rem;
  `};
`
const InfoImage = styled.img`
  user-select: none;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
}
  ${media.tablet`
    width: 23rem;
  `};
  ${media.desktop`
    width: 25rem;
  `};
`

const SvgInfo = styled.svg`
  display: flex;
  position: absolute;
  left: 65vw;
  top: 0rem;
  bottom: 10rem;
  width: 35vw;
  ${media.tablet`
    position: absolute;
    left: 68vw;
    bottom: 20rem;
    width: 28vw;
  `};
  ${media.desktop`
    position: absolute;
    left: 68vw;
    bottom: 0rem;
    top: 0rem;
  `};
  ${media.midDesktop`
    position: absolute;
    left: 69vw;
    bottom: unset;
    top: -4rem;
    width: 28vw;
  `};
  & .cls-1 {
    fill: #c12f5b;
    animation: vue 1.5s ease-in-out;
    &:hover {
      filter: grayscale(100%) sepia(100%);
    }
  }
  @keyframes vue {
    0% {
      width: Orem;
    }
    50% {
      width: 2rem;
    }
    100% {
      width: Orem;
    }
  }

  & .cls-2 {
    fill: #fff;
  }

  & .cls-3 {
    fill: ${colors.lightRedMain};
  }
`

export default class SectionVideo extends Component {
  state = { showButton: true }

  PlayVideo = () => {
    const myVideo = document.getElementById('videoAppeel')

    if (myVideo.paused) {
      myVideo.play()
      this.setState({ showButton: false })
    } else {
      myVideo.pause()
      this.setState({ showButton: true })
    }
  }

  render() {
    const { showButton } = this.state

    return (
      <SectionOverview id="video">
        <SectionContainer>
          <Box />
          <SectionBox>
            <Video width="620" id="videoAppeel">
              <track kind="descrption" srcLang="en" label="english_description" />
              <source src={video} type="video/mp4" />
            </Video>
            <ShadingLayer button={showButton} />
            <Playbutton
              onClick={this.PlayVideo}
              showPause={showButton ? Play : Pause}
              button={showButton}
            />
          </SectionBox>
          <InfoImageBox>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce>
              <InfoImage src={Interface} alt="Interface" />
            </ScrollAnimation>
          </InfoImageBox>
          <InfoDescription>
            Bij Kortrijk Warriors is het streven om de beste te willen zijn belangrijk. Winnen is
            ook leuk en door het geven van goede begeleiding en training worden onze spelers er
            spelertjes steeds betere cricketers. Maar bij Kortrijk Warriors vinden we plezier het
            belangrijkste. Wij willen niet grootste vereniging van België zijn, wel de beste én de
            gezelligste.
            <Line />
          </InfoDescription>
        </SectionContainer>
        <SvgBox>
          <SvgInfo viewBox="0 0 450 328" draggable="false" alt="svg">
            <g id="isometric">
              <rect className="cls-1" width="164" height="164" />
              <rect className="cls-2" x="164" width="164" height="164" />
              <rect className="cls-1" x="328" width="122" height="164" />
              <rect className="cls-2" y="164" width="164" height="164" />
              <rect className="cls-3" x="164" y="164" width="164" height="164" />
              <rect className="cls-2" x="328" y="164" width="122" height="164" />
              <circle className="cls-3" cx="246" cy="44" r="44" />
              <circle className="cls-3" cx="246" cy="111" r="14" />
              <g>
                <path
                  className="cls-2"
                  d="M214.94,222.41h4.55l2.1,23.09h.09l2.23-23.09h5.15l2.23,23.09h.09l2.1-23.09h4.08l-3.05,30h-5.88l-2.14-20.25h-.09l-2.15,20.25H218Z"
                />
                <path
                  className="cls-2"
                  d="M240,222.41h12.87v4.3h-8.15v7.93h6.48v4.29h-6.48v9.23h8.15v4.29H240Z"
                />
                <path
                  className="cls-2"
                  d="M255.54,222.41h7.12c4.89,0,7,2.28,7,6.91v1.2c0,3.09-1,5-3.05,5.88v.09c2.53.86,3.52,3.09,3.52,6.26v2.58c0,4.63-2.45,7.12-7.17,7.12h-7.42Zm6.56,12.23c1.76,0,2.84-.77,2.84-3.17v-1.68c0-2.14-.73-3.08-2.41-3.08h-2.27v7.93Zm.86,13.52c1.59,0,2.45-.73,2.45-3v-2.62c0-2.79-.9-3.65-3.05-3.65h-2.1v9.23Z"
                />
              </g>
              <g>
                <path
                  className="cls-2"
                  d="M59,97.45V93.16a6.22,6.22,0,0,0,1.54.17c1.89,0,2.79-.9,2.79-2.87v-23H68V90.33c0,4.93-2.23,7.29-6.87,7.29A11.15,11.15,0,0,1,59,97.45Z"
                />
                <path
                  className="cls-2"
                  d="M70.62,90.33V88.61h4.46v2.06c0,2.15.94,2.92,2.44,2.92s2.45-.77,2.45-3c0-2.48-.94-4.07-4-6.78-4-3.47-5.24-5.92-5.24-9.35,0-4.72,2.45-7.47,7-7.47s6.86,2.75,6.86,7.56v1.24H80.14V74.24c0-2.15-.86-3-2.36-3s-2.36.81-2.36,2.87,1,3.78,4.08,6.48c4,3.47,5.19,5.88,5.19,9.61,0,4.89-2.49,7.64-7.12,7.64S70.62,95.13,70.62,90.33Z"
                />
              </g>
              <g>
                <path
                  className="cls-2"
                  d="M376.06,67.41H383c4.72,0,7,2.62,7,7.43v3c0,4.8-2.32,7.42-7,7.42h-2.23V97.45h-4.72ZM383,80.93c1.5,0,2.32-.69,2.32-2.83V74.54c0-2.15-.82-2.83-2.32-2.83h-2.23v9.22Z"
                />
                <path
                  className="cls-2"
                  d="M391.51,67.41h4.55l2.1,23.09h.08l2.24-23.09h5.14l2.24,23.09h.08L410,67.41h4.08l-3.05,30H405.2L403.05,77.2H403l-2.14,20.25h-6.27Z"
                />
                <path
                  className="cls-2"
                  d="M419.57,67.41H426l4.89,30h-4.72l-.86-6v.08h-5.36l-.86,5.88h-4.38Zm5.15,20.08-2.1-14.84h-.09l-2.06,14.84Z"
                />
              </g>
            </g>
          </SvgInfo>
        </SvgBox>
      </SectionOverview>
    )
  }
}
