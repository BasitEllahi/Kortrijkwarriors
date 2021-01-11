import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import LogoImg from '../../assets/logo-kortrijk.svg'

const Img = styled.img`
  max-width: 6rem;
  height: 6rem;
  display: flex;
`

const Logo = () => (
  <Link to="/">
    <Img src={LogoImg} alt="Appeel.io logo" />
  </Link>
)

export default Logo
