import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'
import Carousel from '../../carousel'
import Largesvg from '../../LargeSvg'
import Section from '../../styles/Section'
import { media } from '../../../style-utils'
import svgBackground from '../../../assets/svg-background.svg'
import stadium from '../../../assets/stadium.svg'
import TextureBackground from '../../../assets/texture-header.svg'

const Container = styled.div`
  position: relative;
  ${media.desktop`
    margin-bottom: 12rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    & > * {
      flex-grow: 1;
      width: 50%;
    }
  `};
`
const CarouselBox = styled(Carousel)`
  box-shadow: 2px -2px 36px -13px rgba(0, 0, 0, 0.19);
`

const ContainerBox = styled(Section)`
  position: relative;
`

const SvgContainer = styled.img`
  position: absolute;
  z-index: -1;
  ${media.desktop`
    position: absolute;
  `};
`

const ImgContainer = styled.div`
  position: relative;
  width: unset;
  margin: 0 auto;
  position: unset;
  right: unset;
  display: flex;
  justify-content: center;
  ${media.desktop`
    display: unset;
    position: absolute;
    width: 40vw;
    right: 6rem;
  `};
  ${media.midDesktop`
    right: 10rem;
  `};
`

const Svgtexture = styled.img`
  display: none;
  ${media.desktop`
    display: none;
    width: 50vw;
    position: absolute;
    left: 0vw;
    top: 40vh;
  `};
`

const StadiumSvg = styled.img`
  width: 20rem;

  ${media.tablet`
    width: 25rem;
  `};
  ${media.desktop`
    width: 30rem;
  `};
  ${media.midDesktop`
    width: 40rem;
  `};
`

export default class SectionCarousel extends Component {
  state = { index: 0 }

  getIndex = newIndex => this.setState({ index: newIndex })

  render() {
    const { index } = this.state

    return (
      <ContainerBox id="wie-zijn-we">
        <Container>
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <ImgContainer>
              {/* <SvgContainer src={svgBackground} alt="svg" />
              <Largesvg index={index} /> */}
              <StadiumSvg src={stadium} />
            </ImgContainer>
          </ScrollAnimation>
          <CarouselBox getIndex={this.getIndex} index={index} />
        </Container>
        <Svgtexture draggable="false" src={TextureBackground} alt="svg" />
      </ContainerBox>
    )
  }
}
