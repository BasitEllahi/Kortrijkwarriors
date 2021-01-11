import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../style-utils'

const ErrorRed = styled.span`
  font-size: 0.9rem;
  color: ${colors.secondAlt};
`

const Optional = styled.span`
  font-size: 0.9rem;
  color: #b2b3b7;
`

const ErrorIcon = ({ showError }) => (showError ? <ErrorRed>*</ErrorRed> : <Optional>*</Optional>)

ErrorIcon.propTypes = {
  showError: PropTypes.bool.isRequired,
}

export default ErrorIcon
