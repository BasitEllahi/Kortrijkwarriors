import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import { fonts, colors, media } from '../style-utils'

import Layout from '../components/layout'
import Card from '../components/_library/card/Card'
import Section from '../components/styles/Section'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  margin: -10px;
  padding: 0;

  li {
    flex: 1 1 calc(100% / 1);
    max-width: calc(100% / 1);
    padding: 5px;
    ${media.phablet`
      flex: 1 1 calc(100% / 2);
      max-width: calc(100% / 2);
      padding: 10px;
    `};
    ${media.tablet`
      padding: 20px 10px;
    `};
  }
`
const Box = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  color: #333333;
  text-align: center;
  font-family: ${fonts.bebas};
  font-size: 1.8rem;
  padding: 0.2rem 1rem;
  border: solid 3px ${colors.main};
  width: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
  ${media.phablet`
    font-size: 2.2rem;
  `};
  ${media.tablet`
    font-size: 3rem;
  `};
`

const PageTeam = props => {
  const members = get(props, 'data.allContentfulPerson.edges', [])

  return (
    <Layout>
      <Section>
        <Box>
          <Title>team</Title>
        </Box>
        <List>
          {members.map(({ node: member }) => {
            if (!member) return null

            return (
              <li key={member.name}>
                <Card
                  title={member.name}
                  content={get(member, 'bio.bio')}
                  picture={get(member, 'illustration.file.url')}
                />
              </li>
            )
          })}
        </List>
      </Section>
    </Layout>
  )
}

export default PageTeam

export const query = graphql`
  query GetPersons {
    allContentfulPerson {
      totalCount
      edges {
        node {
          id
          name
          bio {
            bio
          }
          photo {
            localFile {
              childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          illustration {
            file {
              url
            }
          }
        }
      }
    }
  }
`
