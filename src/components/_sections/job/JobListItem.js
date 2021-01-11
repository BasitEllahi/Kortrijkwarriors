import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { media, fonts, colors } from '../../../style-utils'

const ListItem = styled.li`
  display: flex;
`
const ListLine = styled.span`
  display: flex;
  margin-top: 0.4rem;
  margin-right: 0.6rem;
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${colors.main};
  border-radius: 50%;
`
const ItemText = styled.span`
  display: block;
  width: 100%;
  color: ${colors.lightGrey};
  font-weight: lighter;
  font-size: 0.8rem;
  font-family: ${fonts.helvetica};
  ${media.tablet`
    font-size: 1rem;
  `};
`

const JobListItem = ({ children }) => (
  <ListItem>
    <ListLine />
    <ItemText>{children}</ItemText>
  </ListItem>
)

JobListItem.propTypes = {
  children: PropTypes.string.isRequired,
}

export default JobListItem
