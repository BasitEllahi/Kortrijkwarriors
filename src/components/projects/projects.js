/*
import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { fonts, colors, media, size } from '../style-utils'

import Layout from '../components/layout'
import Section from '../components/styles/Section'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  margin: -10px;
  padding: 0;
  justify-content: center;

  li {
    flex: 1 1 calc(100% / 1);
    max-width: calc(100% / 1);
    padding: 40px 0px;
    display: flex;
    justify-content: center;

    ${media.phablet`
      flex: 1 1 calc(100% / 2);
      max-width: calc(100% / 2);
    `};
  }
`
const SectionBox = styled(Section)`
  padding: 5rem 1rem;

  ${media.desktop`
    max-width: ${size.xlDesktop};
    margin: auto;
    padding: 3.5rem 3rem;
    height: auto;
  `};
`
const Box = styled.div`
  width: 17rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid ${colors.lightWhite};
  ${media.phablet`
    width: 13rem;
  `};
  ${media.tablet`
    width: 17rem;
  `};
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const ProjectImg = styled(Img)`
  min-width: 100%;
  max-width: 100%;
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
const Nav = styled(Link)`
  color: black;
  font-family: ${fonts.bebas};
  font-size: 1.2rem;
  padding: 20px 9px;
  text-align: left;
  text-decoration: none;
  ${media.tablet`
    padding: 20px 20px;
  `};
`

const Projects = props => {
  const projects = get(props, 'data.allContentfulExperience.edges', [])

  return (
    <Layout>
      <SectionBox>
        <Title>Projects</Title>
        <List>
          {projects.map(({ node: project }) => {
            if (!project) return null

            return (
              <li key={project.id}>
                <Box>
                  <ImageBox>
                    <ProjectImg fixed={project.logo.localFile.childImageSharp.fixed} alt="" />
                  </ImageBox>
                  <InnerBox>
                    <Nav to={`/post/${project.slug}`} state={{ id: project.id }}>
                      {project.title}
                    </Nav>
                  </InnerBox>
                </Box>
              </li>
            )
          })}
        </List>
      </SectionBox>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query GetProjects {
    allContentfulExperience {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
          skills
          person {
            name
            bio {
              bio
            }
            photo {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          logo {
            localFile {
              childImageSharp {
                fixed(width: 320, height: 320) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
*/
