import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../style-utils'

import IconArrowBlue from '../../assets/arrow-right.svg'

const StyledCarouselButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  padding: 7px 0;
  text-align: center;
  background-color: black;
  margin-left: 2rem;
  cursor: pointer;
  transition: background-color 0.8s cubic-bezier(1, -0.01, 0, 1);
  &:focus {
    outline: 0;
  }
  &:hover {
    outline: 0;
    background-color: #6a4199;
  }
  margin-left: ${props => (props.left ? '0' : '25px')};
  transform: ${props => (props.left ? 'scaleX(-1)' : '')};
`

const StyledImgIconArrow = styled.img`
  width: 0.7rem;
`

class CarouselButton extends Component {
  static defaultProps = {
    left: false,
    name: 'button',
  }

  static propTypes = {
    left: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string,
  }

  state = {
    hover: false,
  }

  setHover = hover => this.setState({ hover })

  setButtonActive = () => this.setHover(true)

  setButtonNormal = () => this.setHover(false)

  render() {
    const { onClick, left, name } = this.props
    const { hover } = this.state

    return (
      <StyledCarouselButton
        left={left}
        hover={hover}
        onClick={onClick}
        onMouseOver={this.setButtonActive}
        onMouseOut={this.setButtonNormal}
        role="button"
        aria-label={name}
      >
        <StyledImgIconArrow src={hover ? IconArrowBlue : IconArrowBlue} alt={name} />
      </StyledCarouselButton>
    )
  }
}

export default CarouselButton
