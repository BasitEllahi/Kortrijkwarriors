import React from 'react'
import { colors } from '../style-utils'
import styled, { keyframes } from 'styled-components'

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const Dot = styled.div`
  background-color: ${colors.customWhite};
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin: 0 3px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`
const HeightFixer = styled.div`
  opacity: 0;
`

const LoadingDots = () => (
  <DotWrapper>
    <Dot delay="0s" />
    <Dot delay=".1s" />
    <Dot delay=".2s" />
    <HeightFixer>.</HeightFixer>
  </DotWrapper>
)

export default LoadingDots
