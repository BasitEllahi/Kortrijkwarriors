import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Img from 'gatsby-image'
import moment from 'moment'
import { fonts, colors, media, size } from '../style-utils'

import Layout from '../components/layout'
import Section from '../components/styles/Section'

import Clock from '../assets/clock.svg'

const List = styled.ul`
  display: flex;
  list-style: none;

  margin: -10px;
  padding: 0;
  justify-content: center;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `};

  li {
    flex: 1 1;
    max-width: 100%;
    padding: 40px 0px;
    display: flex;
    justify-content: center;

    ${media.phablet`
      flex: 1 1;
      max-width: 100%;
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
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-direction: row;
  border-radius: 10px;
  border-bottom: 2px solid ${colors.lightWhite};
  padding-bottom: 1rem;
  ${media.phoneXL`
    padding: unset;
    border: 2px solid ${colors.lightWhite};
  `};

  ${media.tablet`
    width: 90%;
  `};

  ${media.desktop`
    width: 90%;
  `};

  ${media.midDesktop`
    width: 90%;
  `};
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  ${media.desktop`
    height: 80%;
  `};
`

const ImageBox = styled.div`
  display: none;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;

  width: 8rem;

  ${media.phoneXL`
    justify-content: center;
    width: 10rem;
  `};

  ${media.tablet`
    width: 40%;
  `};
`
const ProjectImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-right: 1rem;
  display: none;

  ${media.phoneXL`
    max-width: 9rem;
    max-height: 11rem;
  `};

  ${media.tablet`
    max-width: 9rem;
    max-height: 13rem;
  `};

  ${media.desktop`
    max-width: 12rem;
  `};
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  ${media.phoneXL`
    width:90%;
  `};

  ${media.tablet`
    flex-direction: row;
  `};
`

const InfoBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: O.5rem;
  margin-right: 1rem;
  align-self: center;

  ${media.phoneXL`
    display: flex;
    align-self: flex-end;
  `};

  ${media.tablet`
    margin-bottom: 2rem;
    margin-right: 1rem;
    align-items: flex-start;
  `};
`

const Title = styled.h1`
  color: #532b7e;
  text-align: center;
  font-family: ${fonts.bebas};
  font-size: 1.8rem;
  padding: 0.2rem 1rem;
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
  font-family: ${fonts.avenir};
  font-weight: bold;
  font-size: 1.3rem;
  text-align: left;
  text-decoration: none;
  line-height: 0.9;

  ${media.phoneXL`
    font-size: 1.6rem;
  `};

  ${media.desktop`
    font-size: 2rem;
  `};
`
const Topic = styled.span`
  font-family: ${fonts.helvetica};
  font-size: 0.6rem;
  font-weight: 100;
  margin-bottom: 0.2rem;
  margin-top: unset;
  color: ${colors.main};

  ${media.phoneXL`
    margin-top: 1rem;
    font-size: 0.8rem;
  `};

  ${media.desktop`
    font-size: 1rem;
  `};
`
const Date = styled.span`
  font-family: ${fonts.helvetica};
  font-weight: 100;
  font-size: 0.6rem;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`

const Intro = styled.p`
  font-family: ${fonts.helvetica};
  font-weight: 100;
  font-size: 0.7rem;
  display: none;
  flex-direction: row;
  height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  word-wrap: break-word;
  margin: unset;
  padding-top: 0.1rem;

  ${media.tablet`
    display: flex;
  `};

  ${media.desktop`
    height: 4rem;
    width: 80%;
    font-size: 0.8rem;
  `};
`

const DateIcon = styled.img`
  width: 0.7rem;
  margin-right: 0.5rem;
`

const ReadButton = styled(Link)`
  display: flex;
  width: 7rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-family: ${fonts.helvetica};
  font-weight: 100;
  border-radius: 30px;
  font-size: 0.8rem;
  background-color: white;
  border: 1.5px solid ${colors.lightWhite};
  transition: 0.5s;
  &: hover {
    border: 1.5px solid ${colors.main};
    color: ${colors.main};
    cursor: pointer;
    font-weight: 200;
  }
`

const Blogposts = props => {
  const projects = get(props, 'data.allContentfulBlogPost.edges', [])

  return (
    <Layout>
      <SectionBox>
        <Title>News</Title>
        <List>
          {projects.map(({ node: project }) => {
            if (!project) return null

            return (
              <li key={project.id}>
                <Box>
                  <ImageBox>
                    <ProjectImg src={project.image.localFile.url} alt="" />
                  </ImageBox>
                  <TextBox>
                    <InnerBox>
                      <Topic>CRICKET</Topic>
                      <Nav to={`/blog/${project.slug}`} state={{ id: project.id }}>
                        {project.title}
                      </Nav>
                      <Intro>{project.intro.intro}</Intro>
                      <Date>
                        <DateIcon src={Clock} />
                        {moment(project.date).format('DD.MM.YY')}
                      </Date>
                    </InnerBox>
                    <InfoBox>
                      <ReadButton to={`/blog/${project.slug}`} state={{ id: project.id }}>
                        Read more
                      </ReadButton>
                    </InfoBox>
                  </TextBox>
                </Box>
              </li>
            )
          })}
        </List>
      </SectionBox>
    </Layout>
  )
}

export default Blogposts

export const query = graphql`
  query GetBlogs {
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
          title
          intro {
            intro
          }
          body {
            body
          }
          image {
            localFile {
              childImageSharp {
                fixed(width: 250, height: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
              url
            }
          }
          author {
            name
            bio {
              bio
            }
            photo {
              fluid {
                src
              }
            }
          }
          date
        }
      }
    }
  }
`
