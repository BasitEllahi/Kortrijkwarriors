import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from './util'
import Slides from './Slides'

/**
 * @render react
 * @name Carousel
 * @description Basic Carousel slider component for React
 * @example
 * <Carousel
 *    style={{
 *      width: '300px',
 *      backgroundColor: '#DDD',
 *      textAlign: 'center',
 *      fontFamily: 'sans-serif'
 *    }}
 *    hasButtons={ true }
 *    autoplay={ true }
 *    autoplaySpeed="3000"
 *    onSlideChange={ slide => console.warn(`Viewing slide #${slide}`) }>
 *   <h2>This is our first slide.</h2>
 *   <h2>Check the console to see which slide we're on</h2>
 *   <h2>It even updates when you drag</h2>
 *   <h2>This is another slide with some extra text.</h2>
 *   <h2>And even more content is put inhere. It's ok if some slides are bigger than other slides (height wise)</h2>
 * </Carousel>
 */

export default class Carousel extends Component {
  state = {
    slideWidth: null,
  }

  defaultButtonStyle = {
    padding: '10px 15px',
    backgroundColor: '#CCC',
    color: '#666',
    border: 'none',
    borderRadius: '3px',
    margin: '5px',
  }

  componentDidMount() {
    this.initSlides()
    // To support server-side rendering
    if (!window) {
      return
    }
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized)
    } else {
      window.attachEvent('onresize', this.onWindowResized)
    }
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized)
    } else {
      window.detachEvent('onresize', this.onWindowResized)
    }
  }

  onWindowResized = debounce(() => this.initSlides(), 50)

  setOuterRef = element => {
    this.outerSlider = element
  }

  setInnerRef = element => {
    this.innerSlider = element
  }

  previous = () => {
    this.innerSlider.previousSlide()
  }

  next = () => {
    this.innerSlider.nextSlide()
  }

  initSlides = () => {
    if (!this.outerSlider) return

    this.setState({
      slideWidth: this.outerSlider.offsetWidth,
    })
  }

  render() {
    const { style, children, hasButtons, onSlideChange, autoplay, autoplaySpeed } = this.props
    const { slideWidth } = this.state
    let buttons = null

    if (hasButtons) {
      buttons = (
        <div>
          <input
            type="button"
            onClick={this.previous}
            style={this.defaultButtonStyle}
            aria-label="Previous slide"
            value="<"
          />
          <input
            type="button"
            onClick={this.next}
            style={this.defaultButtonStyle}
            aria-label="Next slide"
            value=">"
          />
        </div>
      )
    }

    return (
      <div ref={this.setOuterRef} style={style}>
        <Slides
          ref={this.setInnerRef}
          slideWidth={slideWidth}
          onSlideChange={onSlideChange}
          autoplay={autoplay}
          autoplaySpeed={autoplaySpeed}
        >
          {children}
        </Slides>
        {buttons}
      </div>
    )
  }
}

Carousel.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  hasButtons: PropTypes.bool,
  onSlideChange: PropTypes.func,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
}

Carousel.defaultProps = {
  style: {},
  hasButtons: true,
  onSlideChange() {},
  autoplay: true,
  autoplaySpeed: 5000,
}
