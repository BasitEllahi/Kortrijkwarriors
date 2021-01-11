import styled from 'styled-components'
import { media, size } from '../../style-utils'

export default styled.div`
  padding: 5rem 2rem;

  ${media.desktop`
    max-width: ${size.xlDesktop};
    margin: auto;
    padding: 3.5rem 4rem;
    height: auto;
  `};
`
