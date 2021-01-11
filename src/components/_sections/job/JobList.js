import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const JobList = ({ children }) => <List>{children}</List>

JobList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default JobList
