import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SectionCarousel from '../components/_sections/home/SectionCarousel'
import SectionJob from '../components/_sections/home/SectionJob'
import SectionServices from '../components/_sections/home/SectionExpertise'
import SectionVideo from '../components/_sections/home/SectionVideo'

const IndexPage = ({ data }) => (
  <Layout>
    <SectionCarousel
      imageMobileLayers={data.imageMobileLayers}
      imageHeaderIllustratie={data.imageHeaderIllustratie}
    />
    <SectionServices
      imageServiceExperts={data.imageServiceExperts}
      imageServiceTechnologies={data.imageServiceTechnologies}
      imageServiceElectron={data.imageServiceElectron}
    />
    <SectionVideo />
    <SectionJob />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    imageServiceExperts: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }).isRequired,
    imageServiceTechnologies: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }).isRequired,
    imageServiceElectron: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }).isRequired,
  }).isRequired,
}

export default IndexPage

export const query = graphql`
  query indexQuery {
    imageServiceExperts: imageSharp(fluid: { originalName: { regex: "/service-experts.png/" } }) {
      fluid(maxWidth: 240) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    imageServiceTechnologies: imageSharp(
      fluid: { originalName: { regex: "/service-technologies.png/" } }
    ) {
      fluid(maxWidth: 240) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
    imageServiceElectron: imageSharp(fluid: { originalName: { regex: "/service-electron.png/" } }) {
      fluid(maxWidth: 240) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
