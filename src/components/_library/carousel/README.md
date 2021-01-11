# Carousel

A lightweight Carousel-slider React plugin with basic functionality:

-   Next/Previous buttons (default ones can be hidden, as they are ugly, and replaced with your own)
-   Unlimited amount of "slides", in whichever styling you want
-   Endless horizontal scrolling
-   Drag and touch support to navigate slides (Safari, Chrome, Firefox, both mobile and desktop)
-   Responsive

## Usage

Simply import the Carousel component:

`import Carousel from './CarouselComponent'`

Place the component wherever you want and add children in your preferred way

```
<Carousel>
    <p>Child1</p>
    <p>Child2</p>
    <p>Child3</p>
</Carousel>
```

Children can be of any type and can even be other components or styled components.

### Settings

Right now, there is only 1 setting: `hasButtons` (default: `true`)  
This setting shows or hides the default buttons.

Following settings are currently available:

-   hasButtons (`bool`, default `true`; Hide or show the default buttons)
-   autoplay (`bool`, default `true`; Automatically cycle through the slides on a set interval)
-   autoplaySpeed (`integer`, default `5000`; Duration inbetween autoplay cycles (in ms))

You can add settings like this:

```
const settings = {
  hasButtons: false,
  autoplay: true,
  autoplaySpeed: 2000
}
<Carousel {...settings}>
...
</Carousel>
```

or alternatively:

```
<Carousel hasButtons={ true } autoplay={ true } autoplaySpeed="2000">
...
</Carousel>
```

### Retrieving the current slide

It's possible to add the prop `onSlideChange`.

This prop should be a function and recieves the currently active slide index (starting at 0)  
This function is called every time a new slide is the "main slide"

```
class CustomComponent extends React.Component {

  gotNewSlide = slide => { console.warn(`Got slide #${slide}`) }

  render() {
    return (
      <Carousel onSlideChange={this.gotNewSlide}>
        ...
      </Carousel>
    );
  }
}
```

### Adding your own Next/Previous buttons

If you want to add and style your own buttons elsewhere, you can do that as well.

All you need is to add a reference to the `Carousel` component. With that reference you can talk to the `previous()` and `next()` functions.

Basic implementation works like this:

```
class CustomComponent extends React.Component {
  constructor(props) {
    super(props);
    this.settings = { hasButtons: false }
    this.setCarouselRef = element => {
      this.carousel = element
    }
  }

  nextSlide = () => { this.carousel.next() }

  previousSlide = () => { this.carousel.previous() }

  render() {
    return (
      <Carousel ref={this.setCarouselRef} {...this.settings}>
        ...
      </Carousel>
      <MyNextButton onClick={this.nextSlide} />
      <MyPreviousButton onClick={this.previousSlide} />
    );
  }
}
```
