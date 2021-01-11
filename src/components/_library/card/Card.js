import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts, media } from '../../../style-utils'

import Markdown from '../../containers/Markdown'

const Container = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #f1f1f1;
  img {
    width: 10rem;
    clip-path: circle(44% at 50% 49%);
    ${media.phablet`
      width: 12rem;
      clip-path: circle(48% at 50% 49%);
    `};
    margin-bottom: 1rem;
  }
`

const CardImg = styled.img`
  width: 12rem;
  height: 12rem;
`

const Title = styled.h1`
  margin: 0;
  font-family: ${fonts.bebas};
  font-size: 1.4rem;
  color: #333333;

  * + & {
    margin-bottom: 1rem;
  }
`

const Card = ({ title, content, picture, ...rest }) => (
  <Container {...rest}>
    {picture && <CardImg src={picture} alt={`${title}`} />}
    <Title>{title}</Title>
    {content && <Markdown content={content} />}
  </Container>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  picture: PropTypes.string,
}

Card.defaultProps = {
  content: '',
  picture: '',
}

export default Card
