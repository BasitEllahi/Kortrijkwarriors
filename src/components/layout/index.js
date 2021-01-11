/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-rest-params */
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { colors, media } from '../../style-utils'
import Footer from './Footer'
import Header from './Header'

import TopTriangle from '../../assets/others/top-triangle.svg'

import 'animate.css'
import './reset.css'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  background-color: ${colors.customWhite};
  overflow-x: hidden;

  ${media.desktop`
    background-image: url('${TopTriangle}');
    background-size: 60vw;
    background-position-x: right;
    background-repeat: no-repeat;
  `};
`

export default class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  printLayout = data => {
    const { children } = this.props

    return (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="nl" />
          <meta name="viewport" content="width=device-width" />
          <meta name="theme-color" content={colors.lightBlue} />
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="apple-mobile-web-app-title" content={data.site.siteMetadata.title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="msapplication-TileColor" content={colors.main} />
          <meta name="msapplication-TileImage" content="/icons/mstile-150x150.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color={colors.main} />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link
            href="/splashscreens/iphone5_splash.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphone6_splash.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphoneplus_splash.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphonex_splash.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphonexr_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphonexsmax_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/ipad_splash.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/ipadpro1_splash.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/ipadpro3_splash.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/ipadpro2_splash.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
        </Helmet>

        <Wrapper>
          <Header links={data.site.siteMetadata.links} />
          {children}
          <Footer links={data.site.siteMetadata.links} />
        </Wrapper>
      </>
    )
  }

  render = () => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              links {
                facebook
                linkedIn
                contact
              }
            }
          }
        }
      `}
      render={this.printLayout}
    />
  )
}
