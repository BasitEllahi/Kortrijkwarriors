/*
// src/templates/BlogPost.js
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Section from '../components/styles/Section'

import { fonts, colors, media, size } from '../style-utils'

const SectionBox = styled(Section)`
  padding: 4rem 1rem;

  ${media.tablet`
    max-width: ${size.xlDesktop};
    margin: auto;
    padding: 5rem 2rem;
    height: auto;
  `};

  ${media.desktop`
    max-width: ${size.xlDesktop};
    margin: auto;
    padding: 3.5rem 3rem;
    height: auto;
  `};
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  li {
    flex: 1 1 calc(100% / 1);
    max-width: calc(100% / 1);
    border: 2px solid ${colors.lightWhite};
  }
`
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;
`

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${colors.lightWhite};
`

const ProjectImg = styled(Img)`
  width: 100%;
  height: 300px;
`

const ProjectLogo = styled.img`
  width: 2.5rem;
  margin-right: 1rem;
`

const InnerTitle = styled.h2`
  color: ${colors.lightGrey};
  font-family: ${fonts.bebas};
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.4rem;
  align-items: center;
  ${media.phoneXL`
    font-size: 1.6rem;
  `};
`

const Paragraph = styled.p`
  color: ${colors.lightGrey};
  font-weight: lighter;
  font-size: 0.9rem;
  font-family: ${fonts.helvetica};
  margin-bottom: 2rem;
  margin-top: 0;
`

const SubTitle = styled.span`
  color: ${colors.darkGrey};
  font-family: ${fonts.bebas};
  font-weight: lighter;
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 1rem;
  ${media.tablet`
    font-size: 1.2rem;
  `};
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const Skill = styled.span`
  color: white;
  font-family: ${fonts.bebas};
  font-size: 0.8rem;
  padding: 6px 18px;
  text-align: left;
  margin-bottom: 1rem;
  margin-right: 2rem;
  background-color: ${colors.main};
  border-radius: 20px;
  ${media.phoneXL`
    font-size: 1.1rem;
    padding: 8px 20px;
  `};
`

const Picture = styled.picture`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  align-items: center;
  span {
    text-align: center;
    font-family: ${fonts.helvetica};
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`
const Photo = styled.img`
  width: 4rem;
  clip-path: circle(50% at 50% 50%);
`
const ProjectPostTemplate = data => {
  const project = data.data.contentfulExperience

  const Skills = project.skills.map(skill => <Skill key={skill}>{skill}</Skill>)
  const Persons = project.person.map(person => (
    <Picture key={person}>
      <Photo src={person.photo.fluid.src} alt="" />
      <span>{person.name}</span>
    </Picture>
  ))

  return (
    <Layout>
      <SectionBox>
        <InnerTitle>
          <ProjectLogo src={project.logo.fluid.src} alt="" />
          {project.title}
        </InnerTitle>
        <List>
          <li key={project.id}>
            <ImageBox>
              <ProjectImg fluid={project.Photo.localFile.childImageSharp.fluid} alt="" />
            </ImageBox>
            <Box>
              <InnerBox>
                <SubTitle>Info</SubTitle>
                <Paragraph>{project.description.description}</Paragraph>
                <SubTitle>Skills used</SubTitle>
                <ItemContainer>{Skills}</ItemContainer>
                <SubTitle>Developers</SubTitle>
                <ItemContainer>{Persons}</ItemContainer>
              </InnerBox>
            </Box>
          </li>
        </List>
      </SectionBox>
    </Layout>
  )
}

export default ProjectPostTemplate

export const query = graphql`
  query($id: String!) {
    contentfulExperience(id: { eq: $id }) {
      title
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
      Photo {
        localFile {
          childImageSharp {
            fluid(maxWidth: 720, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      logo {
        fluid {
          src
        }
      }
    }
  }
`
*/
