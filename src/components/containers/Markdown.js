import React from 'react'
import marked from 'marked'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fonts, colors } from '../../style-utils'

const MarkdownDiv = styled.div`
  line-height: 1.7;

  img {
    max-width: 500px;
    margin: 0 auto;
    display: block;
  }

  h1,
  h2 {
    letter-spacing: 1.2px;
  }

  h1 {
    font-weight: 500;
    margin: 16px 0;
    padding: 0;
  }

  h2 {
    margin: 16px 0 8px 0;
  }

  h3 {
    margin: 8px 0;
  }

  blockquote {
    padding: 8px 8px 8px 16px;
    margin: 56px 0;

    p {
      margin: 0;
    }
  }

  code {
    width: 100%;
    min-height: 100px;
    display: block;
    padding: 16px;
    color: #ffffff;
    margin: 8px 0;
    font-family: Monaco, monospace;
    overflow: scroll;
  }

  p {
    line-height: 1.7;
    margin-bottom: 16px;
    color: ${colors.lightGrey};
    font-weight: lighter;
    font-size: 0.9rem;
    font-family: ${fonts.helvetica};
    text-align: center;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ol {
    margin: 16px 0;
    padding-left: 20px;
    list-style-type: decimal;
  }

  ul {
    margin: 16px 0;
    padding-left: 20px;
  }
`

const Markdown = ({ content }) =>
  content ? <MarkdownDiv dangerouslySetInnerHTML={{ __html: marked(content) }} /> : null

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Markdown
