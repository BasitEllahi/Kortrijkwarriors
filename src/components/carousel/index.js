import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'
import Slider from '../_library/carousel'
import { colors, fonts, media } from '../../style-utils'
import CarouselButton from './Button'

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CarouselTitle = styled.span`
  color: ${colors.lightGrey};
  font-weight: normal;
  font-size: 1.2rem;
  font-family: ${fonts.anton};
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  ${media.desktop`
    text-align: left;
    margin-bottom: 0;
    font-size: 1rem;
    justify-content: flex-start;
  `};
`
const Title = styled.span`
  color: #532b7e;
  font-weight: 800;
  font-size: 1.5rem;
  font-family: ${fonts.Montserrat};
  padding: 0.5rem;
  width: auto;
  max-width: 20rem;
  line-height: 1.5rem;
  ${media.tablet`
    font-size: 1.5rem;
  `};
  ${media.desktop`
    text-align: left;
    margin-bottom: 0;
    font-size: 1.5rem;
    justify-content: flex-start;
  `};
`

const Small = styled.span`
  color: black;
  font-weight: 500;
  font-size: 0.8rem;
  font-family: ${fonts.Montserrat};
  padding: 0.5rem;
  max-width: 600px;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  span {
    float: right;
    margin-right: 1rem;
    font-family: ${fonts.Montserrat};
    font-weight: 100;
    max-width: 600px;
  }
  ${media.tablet`
    font-size: 0.8rem;
  `};
  ${media.desktop`
    text-align: left;
    margin-bottom: 0;
    font-size: 0.8rem;
  `};
`

const CarouselText = styled.span`
  color: black;
  text-align: center;
  font-weight: lighter;
  font-size: 0.8rem;
  font-family: ${fonts.Montserrat};

  &:focus {
    outline: none;
  }
  ${media.tablet`
    font-size: 0.8rem;
    padding-left: 25px;
    padding-right: 20px;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
  `};
  ${media.desktop`
    text-align: left;
    margin-bottom: 0;
    font-size: 0.8rem;
  `};
`

const CarouselButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  &:first-child {
    margin-right: 25px;
  }
  ${media.desktop`
    justify-content: left;
    text-align: left;
  `};
`

export default class Carousel extends Component {
  settings = {
    hasButtons: false,
    autoplay: true,
    autoplaySpeed: 6000,
    style: {
      boxShadow: '2px -2px 36px -13px rgba(0,0,0,0.19)',
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '600px',
    },
  }

  setSliderRef = element => {
    this.slider = element
  }

  onArrowClickPrevious = () => this.slider.previous()

  onArrowClickNext = () => this.slider.next()

  render() {
    const { getIndex, index } = this.props

    return (
      <ScrollAnimation animateIn="bounceInLeft" animateOnce delay={500}>
        <Small>
          Latest news
          <span>
            {index + 1}
            /2
          </span>
        </Small>
        <Slider ref={this.setSliderRef} {...this.settings} onSlideChange={getIndex}>
          <CarouselBox>
            <CarouselTitle>
              <Title>Diwan's memorial cup</Title>
            </CarouselTitle>
            <CarouselText>
              Kortrijk warriors en Ostend exiles organiseren cricket toernooi.
            </CarouselText>
          </CarouselBox>
          <CarouselBox>
            <CarouselTitle>
              <Title>Nieuw cricket veld</Title>
            </CarouselTitle>
            <CarouselText>
              Kortrijk Warrriors heeft een nieuwe cricket veld in Kortrijk. Het is gelegen op het
              sportcampus van Lange munte.
            </CarouselText>
          </CarouselBox>
        </Slider>
        <CarouselButtonsContainer>
          <CarouselButton left onClick={this.onArrowClickPrevious} />
          <CarouselButton onClick={this.onArrowClickNext} />
        </CarouselButtonsContainer>
      </ScrollAnimation>
    )
  }
}

Carousel.propTypes = {
  getIndex: PropTypes.func,
}

Carousel.defaultProps = {
  getIndex: () => {},
}
