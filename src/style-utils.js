const { css } = require('styled-components')

const sizes = {
  xlDesltop: 1640,
  lgDesktop: 1300,
  midDesktop: 1100,
  desktop: 992,
  tablet: 768,
  phablet: 500,
  phoneXL: 414,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `

  return acc
}, {})

module.exports = {
  colors: {
    main: '#532b7e',
    lightWhite: '#F1F1F1',
    lightRedMain: '#532B7E',
    darkGrey: '#666666',
    lightGrey: '#4d4d4d',
    customWhite: '#fefefe',
    mainAlt: '#2789E8',
    mainAction: '#80ccff',
    lightBlue: '#f2f9fe',
    second: '#f44a4a',
    secondAlt: '#d62828',
    grey: '#d7dce1',
    textAlt: '#8e8e8e',
    lightRed: '#e25751',
  },
  fonts: {
    sansSerif: 'arial',
    bebas: 'bebas, arial, Serif',
    helvetica: 'Helvetica, arial, Serif',
    anton: 'anton, arial, Serif',
    avenir: 'avenir, arial, Serif',
    Montserrat: 'Montserrat, arial',
  },
  size: {
    xlDesltop: '1640',
    blogWidth: '35rem',
  },
  media,
}
