// src/templates/BlogPost.js
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import moment from 'moment'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'

import { fonts, colors, media, size } from '../style-utils'
import Clock from '../assets/clock.svg'
import Facebook from '../assets/fb.svg'
import Linkendin from '../assets/instagram.svg'

const SectionBox = styled.div`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${media.tablet`
    padding: 4rem 4rem;
  `};
`
const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 18.5rem;
  ${media.phoneXL`
    max-width:${size.blogWidth};
  `};
  ${media.desktop`
    max-width:${size.blogWidth};
  `};
  ${media.midDesktop`
    max-width:${size.blogWidth};
  `};
`

const SocialMedia = styled.div`
  font-family: ${fonts.helvetica};
  font-weight: 100;
  font-size: 0.6rem;
  width: 3rem;
  height: 9rem;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid ${colors.lightWhite};
  border-radius: 30px;
  margin-right: 2rem;
  position: fixed;
  visibility: hidden;
  ${media.tablet`
    margin-left: 0.5rem;
    left: 0;
    display:flex;
    visibility: visible;
  `};
  ${media.desktop`
    right: calc(100% - 18vw);
    left: unset;
  `};
  ${media.midDesktop`
    right: calc(100% - 20vw);
    left: unset;
  `};
`

const MediaIcon = styled.img`
  width: 2rem;
  margin: 0.3rem;
  &:hover {
    opacity: 0.5;
    transition: 0.5s;
    cursor: pointer;
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
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
  margin-bottom: 2rem;
`

const ProjectImg = styled.img`
  max-width: 16rem;
  max-height: 16rem;

  ${media.phoneXL`
    max-width: 25rem;
    max-height: 25rem;
  `};
`

const InnerTitle = styled.h2`
  color: #532b7e;
  font-family: ${fonts.bebas};
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.4rem;
  align-items: center;
  line-height: 1;
  ${media.phoneXL`
    font-size: 3.2rem;
    margin-bottom: 0.5rem;
  `};
`

const Paragraph = styled.div`
  color: ${colors.lightGrey};
  font-weight: lighter;
  font-size: 0.8rem;
  font-family: ${fonts.helvetica};
  margin-bottom: 2rem;
  margin-top: 0;
  initial-letter: 3;
  p {
    font-size: 0.8rem;
  }
`

const IntroParagraph = styled(Paragraph)`
  @supports (not (initial-letter: 5)) and (not (-webkit-initial-letter: 5)) {
    &::first-letter {
      color: black;
      font-size: 1.4em;
      float: left;
      line-height: 0.7;
      margin: 10px 4px 0 0;
    }
  }
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
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

const Picture = styled.picture`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 2rem;
  align-items: center;
  width: 8rem;
  line-height: 1.5;
  span:first-child {
    font-family: ${fonts.helvetica};
    font-weight: 100;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
  }
`

const Date = styled.span`
  font-family: ${fonts.helvetica};
  font-weight: 100;
  font-size: 0.6rem;
  display: flex;
  flex-direction: row;
`

const DateIcon = styled.img`
  width: 0.7rem;
  margin-right: 0.5rem;
`
const Photo = styled(Img)`
  width: 1.5rem;
  clip-path: circle(50% at 50% 50%);
`
const BlogPostTemplate = data => {
  /*
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('social-bar').style.display = 'flex'
      document.getElementById('social-bar').classList.add('sidebar')
    } else {
      document.getElementById('social-bar').style.display = 'none'
    }
  }

  useEffect(() => {
    document.getElementById('social-bar').style.display = 'none'
    window.onscroll = () => {
      scrollFunction()
    }
  })
  */

  const project = data.data.contentfulBlogPost

  const documentText = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: project.body.body,
            marks: [],
            data: {},
          },
        ],
      },
    ],
  }

  const options = {
    renderText: text =>
      text
        .split('\n')
        .reduce(
          (children, textSegment, index) => [
            ...children,
            index > 0 && <br key={textSegment} />,
            textSegment,
          ],
          []
        ),
  }

  return (
    <Layout>
      <SectionBox>
        <SocialMedia id="social-bar">
          <MediaIcon src={Facebook} />
          <MediaIcon src={Linkendin} />
        </SocialMedia>
        <ArticleBox>
          <TitleBox>
            <InnerTitle>{project.title}</InnerTitle>
            <ItemContainer>
              <Picture key={project.author.id}>
                <Photo fixed={project.author.photo.localFile.childImageSharp.fixed} alt="" />
                <NameContainer>
                  <span>{project.author.name}</span>
                  <Date>
                    <DateIcon src={Clock} />
                    {moment(project.date).format('DD.MM.YY')}
                  </Date>
                </NameContainer>
              </Picture>
            </ItemContainer>
          </TitleBox>
          <List>
            <Box>
              <InnerBox>
                <IntroParagraph>{project.intro.intro}</IntroParagraph>
              </InnerBox>
            </Box>
            <ImageBox>
              <ProjectImg src={project.image.localFile.url} alt="" />
            </ImageBox>
            <Box>
              <InnerBox>
                <SubTitle>Intro</SubTitle>
                <Paragraph>{documentToReactComponents(documentText, options)}</Paragraph>
              </InnerBox>
            </Box>
          </List>
        </ArticleBox>
      </SectionBox>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
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
            fixed(width: 450, height: 450) {
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
          localFile {
            childImageSharp {
              fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      date
    }
  }
`
