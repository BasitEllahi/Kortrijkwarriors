import PropTypes from 'prop-types'
import React, { Component, cloneElement } from 'react'
import { expandChildStyle } from './util'

export default class Slides extends Component {
  // Initial state
  state = {
    currentSlide: 1, // Currently visible slide
    slides: null, // # of different slides
    sliding: false, // Check if sliding animation is active
    width: null, // Total width of the component (all slides next to eachother)
    transition: null, // Transition style element
    xPosition: null, // Current xPosition of the slide container
    initialX: 0, // initial pointer x-position for drag functionality
    previousX: 0, // relative x-position, from last update
    dragging: false, // Check if we're currently dragging or not
    extendedChildren: null,
  }

  interval = null

  componentDidMount() {
    const { children } = this.props

    // Copy the children array into a mutable local array, and copy the first and
    // last child to the opposite end (for endless scrolling)
    let extendedChildren = [children[children.length - 1], ...children, children[0]]
    let key = 0

    // Add unique keys to every child, and make them "unselectable" (small CSS thingie)
    extendedChildren = extendedChildren.map(child => {
      key += 1

      const style = expandChildStyle(child, { userSelect: 'none' })

      return cloneElement(child, { key, style })
    })

    this.setState({ extendedChildren, slides: children.length })

    // Bind events to carousel element
    if (typeof PointerEvent !== 'undefined') {
      // Pointer events available
      this.carousel.onpointerdown = this.onDown
      this.carousel.onpointermove = this.onMove
      this.carousel.onpointerup = this.onUp
      this.carousel.onpointerleave = this.onUp
    } else if ('ontouchstart' in window || window.DocumentTouch) {
      // (window.DocumentTouch && document instanceof DocumentTouch)

      // Touch events available
      this.carousel.ontouchstart = this.onDown
      this.carousel.ontouchmove = this.onMove
      this.carousel.ontouchcancel = this.onUp
      this.carousel.ontouchend = this.onUp
    } else {
      // Fallback to mouse events
      this.carousel.onmousedown = this.onDown
      this.carousel.onmousemove = this.onMove
      this.carousel.onmouseup = this.onUp
      this.carousel.onmouseleave = this.onUp
    }

    this.startAutoplay()
  }

  componentDidUpdate(prevProps) {
    // Fix slide positions when the component gets updated (usually on resize)
    if (!this.props.slideWidth || prevProps.slideWidth === this.props.slideWidth) return

    this.repositionSlide().resizeChildren()
  }

  componentWillUnmount() {
    this.stopAutoplay()
  }

  setCarouselRef = element => {
    this.carousel = element
  }

  startAutoplay = () => {
    const { autoplay, autoplaySpeed } = this.props

    if (!autoplay) return

    this.interval = setInterval(() => this.updateSlide(1), autoplaySpeed)
  }

  stopAutoplay = () => {
    clearInterval(this.interval)

    return this
  }

  resetAutoPlay = () => {
    this.stopAutoplay().startAutoplay()
  }

  resizeChildren = () => {
    const { slideWidth } = this.props

    this.setState(prevState => ({
      extendedChildren: prevState.extendedChildren.map(child => {
        const style = expandChildStyle(child, { width: slideWidth })

        return cloneElement(child, { style })
      }),
    }))
  }

  // Adjust slides when needed
  repositionSlide = () => {
    const { slideWidth } = this.props

    this.setState(prevState => ({
      width: slideWidth * (prevState.slides + 2),
      transition: `all .5s ease`,
      xPosition: prevState.currentSlide * slideWidth * -1,
    }))

    return this
  }

  nextSlide = () => {
    this.updateSlide(1)
  }

  previousSlide = () => {
    this.updateSlide(-1)
  }

  updateSlide = amt => {
    const { slideWidth, onSlideChange, autoplay } = this.props
    const { sliding, slides, currentSlide } = this.state

    // Reset the interval timer after we navigate to another slide
    if (autoplay) {
      this.resetAutoPlay()
    }

    // Don't do anything if we're currently sliding (spam throttle)
    if (!sliding) {
      const index = currentSlide + amt // Index we're sliding to
      let followup = null // Follow up index where we should "teleport" to, if we are at the start, or the end of the slides

      if (index === 0) {
        // Should go to "n-1" slide when animation is done
        followup = slides
      } else if (index === slides + 1) {
        // Should go back to slide "1"
        followup = 1
      }

      this.setState(prevState => ({
        sliding: true,
        currentSlide: prevState.currentSlide + amt,
        transition: `all .5s ease`,
        xPosition: (prevState.currentSlide + amt) * slideWidth * -1,
      }))

      // Ability to let parent know which slide we're on. Do -1 so we start the index at 0 like proper programmers
      if (followup) {
        onSlideChange(followup - 1)
      } else {
        onSlideChange(index - 1)
      }

      // Reset sliding parameter, and "teleport" if needed
      setTimeout(() => {
        if (followup !== null) {
          this.setState({
            sliding: false,
            currentSlide: followup,
            transition: 'none',
            xPosition: followup * slideWidth * -1,
          })
        } else {
          this.setState({ sliding: false })
        }
      }, 500)
    }
  }

  onDown = e => {
    this.stopAutoplay()

    if (e.buttons || e.type === 'touchstart') {
      const xPos = e.type === 'touchstart' ? e.touches[0].clientX : e.pageX

      this.setState({
        dragging: true,
        initialX: xPos,
        previousX: xPos,
      })
    }
  }

  onMove = e => {
    const { sliding, dragging, previousX } = this.state

    this.stopAutoplay()

    if (!sliding && dragging) {
      const xPos = e.type === 'touchmove' ? e.touches[0].clientX : e.pageX

      const offset = previousX - xPos

      this.setState({ previousX: xPos })
      this.dragSlide(offset)
    }
  }

  onUp = () => {
    const { dragging, initialX, previousX } = this.state

    this.startAutoplay()

    if (dragging) {
      this.setState({ dragging: false })
      // Calculate delta based on the initialX and previousX coordinates (defined in onDown and onMove respectively)
      const delta = initialX - previousX

      if (delta < -100) {
        this.previousSlide()
      } else if (delta > 100) {
        this.nextSlide()
      } else {
        this.repositionSlide()
      }
    }
  }

  dragSlide = offset => {
    this.setState(prevState => ({
      sliding: false,
      transition: 'none',
      xPosition: prevState.xPosition - offset,
    }))
  }

  render() {
    const { slideWidth } = this.props
    const { extendedChildren, transition, xPosition, width } = this.state

    const output = (
      <div
        ref={this.setCarouselRef}
        style={{
          width: slideWidth,
          overflow: 'hidden',
          touchAction: 'pan-y',
          userSelect: 'none',
        }}
        role="presentation"
      >
        <div
          style={{
            display: 'flex',
            transform: `translateX(${xPosition}px)`,
            transition,
            width,
          }}
        >
          {extendedChildren}
        </div>
      </div>
    )

    return output
  }
}

Slides.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  slideWidth: PropTypes.number,
  onSlideChange: PropTypes.func.isRequired,
  autoplay: PropTypes.bool.isRequired,
  autoplaySpeed: PropTypes.number.isRequired,
}

Slides.defaultProps = {
  slideWidth: 0,
}
