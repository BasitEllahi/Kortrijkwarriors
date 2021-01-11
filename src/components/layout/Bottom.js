/* eslint-disable react/prefer-stateless-function */
import { Link } from 'gatsby'
import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor'
import styled from 'styled-components'
import { colors, fonts, media } from '../../style-utils'

import './scrollToTop.css'

const Container = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${colors.customWhite};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px 0px 11px 0px #0000003d;
  z-index: 10;
  ${media.desktop`
    display: inline-block;
    width: auto;
    height: auto;
    position: static;
    bottom: auto;
    left: auto;
    justify-content: flex-end;
    box-shadow: none;
    background-color: transparent;
  `};
`

const Links = styled(Link)`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  text-align: center;
  color: black;
  text-decoration: none;
  padding: 10px 10px;
  font-weight: 700;
  font-size: 0.7rem;
  font-family: ${fonts.avenir};
  border-bottom: 1px solid transparent;

  & > span {
    position: relative;
  }
  &:hover,
  &:active {
    user-select: none;
    border-bottom: 1px solid ${colors.main};
  }
  &:active {
    padding-top: 6px;
    ${media.desktop`
      padding-top: 0;
    `};
  }
  ${media.phoneXL`
    font-size: 0.8rem;
  `};
  ${media.tablet`
    font-size: 0.8rem;
    `};
  ${media.desktop`
    font-size: 0.8rem;
    display: inline-block;
    flex-grow: unset;
    background: transparent;
    padding: 0px;
    margin-left: 0vw;
    margin-right: 1.2vw;
    text-shadow: 1px 1px 0px #fff, -1px -1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff;
    &:first-child {
      margin-left: 0;
    }
  `};
`

const Badge = styled.span`
  position: absolute;
  display: block;
  right: -14px;
  top: -8px;
  border-radius: 10px;
  color: #fff;
  background-color: red;
  font-size: 0.65rem;
  line-height: 15px;
  width: 15px;
  height: 15px;
  font-weight: bold;
  text-shadow: none;
`

const ButtonTop = styled.span`
  display: none;
  text-decoration: none;
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  z-index: 99;
  font-size: 15px;
  border: none;
  outline: none;
  background-color: red;
  color: ${colors.customWhite};
  cursor: pointer;
  padding: 8px;
  border-radius: 2rem;

  ${media.phoneXL`
    padding: 15px;
    font-size: 18px;
  `};
  ${media.desktop`
    bottom: 2rem;
  `};
`

class MenuBottom extends Component {
  /*
    componentDidMount() {
      document.getElementById('myBtn').style.display = 'none'
      window.onscroll = () => {
        this.scrollFunction()
      }
    }

    scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('myBtn').style.display = 'block'
        document.getElementById('myBtn').classList.add('animation')
      } else {
        document.getElementById('myBtn').style.display = 'none'
      }
    }
  */

  render() {
    return (
      <Container>
        <Links to="/#wat-doen-we">Wie zijn we</Links>
        <Links to="/blogposts">News</Links>
        {/* <Links to="/team">Team</Links> */}
        <Links to="/contact">Contact</Links>
        <Scrollchor to="" title="Naar boven">
          <ButtonTop id="myBtn">Top</ButtonTop>
        </Scrollchor>
      </Container>
    )
  }
}

export default MenuBottom
