import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import FormContainer from '../components/containers/Form'
import { colors, media } from '../style-utils'

const Container = styled.div`
  box-shadow: 0 0 18px -2px rgba(0, 0, 0, 0.42);
  text-align: left;
  width: 100%;
  background-color: ${colors.customWhite};
  font-weight: bold;
  padding: 1.5rem 2rem;
  margin: auto;
  ${media.desktop`
    border-radius: 0.7rem;
  `};
`

const InfoTitle = styled.h1`
  font-weight: 700;
  color: ${colors.main};
`

const InfoDescription = styled.p`
  color: ${colors.textAlt};
`

const Link404 = styled(Link)`
  color: ${colors.textAlt};
  text-decoration: none;
  border-bottom: 2px solid ${colors.mainAction};
  padding-bottom: 4px;
`

const NotFoundPage = () => (
  <Layout>
    <FormContainer title="404">
      <Container>
        <InfoTitle>Deze pagina bestaat niet. :(</InfoTitle>
        <InfoDescription>
          Keer terug naar&nbsp;
          <Link404 to="/" title="Home">
            een veilige plaats
          </Link404>
          &nbsp;of&nbsp;
          <Link404 to="/contact/" title="Contacteer ons">
            contacteer ons
          </Link404>
          .
        </InfoDescription>
      </Container>
    </FormContainer>
  </Layout>
)

export default NotFoundPage
