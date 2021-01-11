import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors, media, size } from '../../style-utils'
import OuterSection from '../styles/OuterSection'
import BaseSection from '../styles/Section'

const Title = styled.h1`
  color: ${colors.customWhite};
  margin-bottom: 0.1rem;
  padding-left: 2rem;
`

const Section = styled(BaseSection)`
  max-width: 100%;
  margin: 0;
  padding: 0;

  ${media.desktop`
    margin: auto;
    padding: 2rem 2rem;
    max-width: ${size.xlDesktop};
  `};
`

const ContainerForm = ({ children, title }) => (
  <OuterSection>
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  </OuterSection>
)

ContainerForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
}

export default ContainerForm
