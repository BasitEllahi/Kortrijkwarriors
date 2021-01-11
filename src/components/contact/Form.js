import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios'
import Notifications from 'react-notify-toast'
import styled from 'styled-components'
import ErrorIcon from '../ErrorIcon'
import LoadingDots from '../LoadingDots'
import { encodeForm, errors, success } from './helper'
import { colors, media, fonts } from '../../style-utils'
import Hiring from '../../assets/contact.png'
import UploadIcon from '../../assets/upload.svg'

const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 100%;
  background-color: ${colors.customWhite};
  font-weight: bold;
  padding: 1.5rem 2rem;
  ${media.tablet`
    width: 60%;
  `};
  ${media.desktop`
    padding-bottom: 6vh;
    width: 50%;
  `};
`
const InfoImage = styled.img`
  width: 12rem;
  display: none;
  user-select: none;
  ${media.tablet`
    width: 14rem;
    display: flex;
  `};
  ${media.desktop`
    width: 25rem;
  `};
`

const TitleBox = styled.span`
  display: flex;
  width: 100%;
`
const Title = styled.h1`
  color: #532b7e;
  text-align: center;
  font-family: ${fonts.bebas};
  font-size: 1.8rem;
  width: auto;
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

const Fieldset = styled.div`
  ${media.tablet`
    display: flex;
    justify-align: space-between;
    flex-direction: column;
    border: unset;
  `};
`
const Fieldset2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${media.tablet`
    width: 80%;
    margin-bottom: 0;
    flex-direction: row;
  `};
  ${media.desktop`
    width: 70%;
  `};
`

const Label = styled.label`
  color: #666c74;
  padding-bottom: 0.5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  font-family: ${fonts.bebas};
  letter-spacing: 0.1rem;
`

const FileError = styled.label`
  color: ${colors.mainAlt};
  padding-left: 2rem;
  padding-top 1rem;
  font-size: 0.7em;
  display: flex;
  flex-direction: row;
`

const LabelFile = styled.label`
  font-size: 0.7em;
  height: 3rem;
  color: ${colors.customWhite};
  padding: 15px;
  background-color: ${props => props.borderColor || colors.lightGrey};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  align-self: baseline;
  font-family: ${fonts.sansSerif};
  border-radius: 0.4rem;
  &:hover {
    cursor: pointer;
    background-color: ${colors.main};
  }

  ${media.phablet`
    width: 10rem;
`};
`

const SubTitle = styled.h2`
  color: #333333;
  font-family: ${fonts.helvetica};
  font-weight: lighter;
  font-size: 0.9rem;
  text-align: left;
  margin-top: 0;
  ${media.tablet`
  font-size: 1.1rem;
`};
`

const Input = styled.input`
  font-size: 0.8rem;
  font-family: ${fonts.helvetica};
  font-weight: lighter;
  height: 2.2rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  color: grey;
  border: 0.01rem solid ${props => props.borderColor || colors.grey};
  outline: none;
  transition-property: box-shadow;
  transition-duration: 0.4s;
  transition-timing-function: linear;
  &:focus {
    box-shadow: inset 0px -3px 0px 0px ${props => props.borderColor || colors.main};
    outline: 0;
  }
  ${media.tablet`
    width: 80%;
    margin-bottom: 0;
  `};
  ${media.desktop`
    width: 70%;
  `};
`
const InputName = styled(Input)`
  width: 45%;
  ${media.tablet`
    width: 45%;
    margin-bottom: 0;
  `};
  ${media.desktop`
    width: 45%;
  `};
`

const Submit = styled.button`
  font-family: ${fonts.bebas};
  display: inline-block;
  width: 100%;
  background-color: ${colors.main};
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  outline: none;
  margin-top: 1.2rem;
  letter-spacing: 0.1rem;
  &:hover,
  &:active {
    background-color: ${colors.lightGrey};
  }
  ${media.tablet`
    width: 50%;
`};
  ${media.desktop`
  font-size: 1.4rem;
  margin-left: 0;
`};
  &:hover {
    cursor: pointer;
    background-color: #4398d4;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: unset;
    opacity: 0.2;
  }
`

const File = styled.input`
  display: none;
`

const Error = styled.span`
  font-family: ${fonts.helvetica};
  font-weight: lighter;
  font-size: 0.6rem;
  text-align: left;
  padding-top: 0.2rem;
  color: ${colors.second};
`

const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  font-size: 0.8rem;
  color: #70777f;
  height: 6rem;
  flex-direction: row;
  border: 0.03rem solid ${colors.grey};
  padding: 0.7rem 1rem;
  outline: none;
  transition: box-shadow 0.4s linear;
  &:focus {
    box-shadow: inset 0px -3px 0px 0px ${colors.main};
    outline: 0;
  }
  ${media.tablet`
    width: 80%;
    margin-bottom: 0;
  `};
  ${media.desktop`
    width: 70%;
  `};
`

const BoxLine = styled.div`
  background-color: ${colors.lightRedMain};
  width: 0.2rem;
  height: 57%;
  position: absolute;
  top: 13rem;
  right: 20rem;
  left: 0;
`

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-conten: flex-start;
`

const Icon = styled.img`
  width: 1rem;
  display: flex;
  user-select: none;
  ${media.tablet`
    width: 1rem;
  `};
  ${media.desktop`
    width: 1.3rem;
  `};
`

const Invis = styled.input`
  display: none;
`
const honeypot = 'r45gDF!$F!'

const initialState = {
  name: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  textarea: '',
  [honeypot]: '',
  emailCheck: false,
  nameCheck: false,
  fileCheck: false,
  isSelected: false,
  file: '',
  fileName: '',
  submitCheck: false,
}

export default class ContactForm extends Component {
  static propTypes = {
    showFile: PropTypes.bool,
    formName: PropTypes.string.isRequired,
  }

  static defaultProps = {
    showFile: false,
  }

  state = initialState

  handleInput = ({ target: { name, files } }) => {
    if (files.length > 0) {
      this.setState({
        [name]: files[0],
        fileName: files[0].name,
        isSelected: true,
        fileCheck: false,
      })
    } else {
      this.setState({
        fileName: '',
        isSelected: false,
      })
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { name, lastName, email } = this.state

      if (name !== '' && lastName !== '') {
        this.setState({ nameCheck: false })
      }

      if (email !== '') {
        this.setState({ emailCheck: false })
      }
    })
  }

  handleSubmit = e => {
    const { fileName, name, lastName, email } = this.state
    const newState = {
      fileCheck: !fileName,
      nameCheck: name === '' || lastName === '',
      emailCheck: email === '',
    }

    e.preventDefault()
    this.setState(newState, this.checkError)
  }

  checkError = () => {
    const { emailCheck, nameCheck, fileCheck } = this.state
    const { showFile } = this.props

    if (showFile) {
      if (!emailCheck && !nameCheck && !fileCheck) {
        this.fetchdata()
      }
    } else if (!emailCheck && !nameCheck) {
      this.fetchdata()
    }
  }

  fetchdata = async () => {
    // const { formName } = this.props

    this.setState({ submitCheck: true })

    /*
    try {
      await fetch('/', {
        method: 'POST',
        body: encodeForm({ 'form-name': formName, ...this.state }),
      })

      success()
      this.setState({ ...initialState, submitCheck: false })
    } catch (error) {
      errors(error)
      this.setState({ submitCheck: false })
    }
    */

    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xzbkyave',
      data: encodeForm({ ...this.state }),
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(r => {
        success()
        this.setState({ ...initialState, submitCheck: false })
      })
      .catch(r => {
        errors(r.response)
        this.setState({ submitCheck: false })
      })
  }

  render() {
    const {
      name,
      lastName,
      email,
      textarea,
      nameCheck,
      emailCheck,
      fileCheck,
      phoneNumber,
      fileName,
      isSelected,
      submitCheck,
    } = this.state

    const { formName, showFile } = this.props

    return (
      <Section>
        <Form
          onSubmit={this.handleSubmit}
          name={formName}
          enctype="multipart/form-data"
          charset="utf-8"
          action="https://formspree.io/f/xzbkyave"
        >
          <Notifications wrapperId />
          <Invis name="country-field" onChange={this.handleChange} />
          <TitleBox>
            <Title>Contact</Title>
          </TitleBox>
          <SubTitle>Klaar om met ons aan de slag te gaan? Vertel ons meer.</SubTitle>
          <BoxLine />
          <Label htmlFor="name">
            Naam&nbsp;
            <ErrorIcon showError={nameCheck} />
          </Label>
          <Fieldset2>
            <InputName
              type="text"
              name="name"
              placeholder="Voornaam"
              value={name}
              onChange={this.handleChange}
              borderColor={nameCheck && colors.lightRed}
            />
            <InputName
              type="text"
              name="lastName"
              placeholder="Achternaam"
              value={lastName}
              onChange={this.handleChange}
              borderColor={nameCheck && colors.lightRed}
            />
          </Fieldset2>
          {nameCheck && <Error>* Geen geldige naam</Error>}
          <Label htmlFor="email">
            Email&nbsp;
            <ErrorIcon showError={emailCheck} />
          </Label>
          <Fieldset>
            <Input
              type="email"
              name="email"
              placeholder="naam.voornaam@voorbeeld.com"
              value={email}
              onChange={this.handleChange}
              borderColor={emailCheck && colors.lightRed}
            />
            {emailCheck && <Error>* Geen geldige email</Error>}
          </Fieldset>
          <Label htmlFor="phoneNumber">Telefoonnummer</Label>
          <Fieldset>
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="+32"
              value={phoneNumber}
              onChange={this.handleChange}
            />
          </Fieldset>
          {showFile && (
            <div>
              <Label htmlFor="file">
                Cv&nbsp;
                <ErrorIcon showError={fileCheck} />
              </Label>
              <Fieldset>
                <Box2>
                  <LabelFile htmlFor="file" borderColor={fileCheck && colors.lightRed}>
                    <File
                      type="file"
                      name="file"
                      id="file"
                      onChange={this.handleInput}
                      accept="application/msword,text/plain, application/pdf,"
                    />
                    <Icon src={UploadIcon} alt="Upoadicon" />
                    {isSelected ? '1 Bestand geselecteerd' : 'Kies een bestand...'}
                  </LabelFile>
                  <FileError>
                    {fileCheck ? <Error>* Selecteer een bestand</Error> : fileName}
                  </FileError>
                </Box2>
              </Fieldset>
            </div>
          )}
          <Label htmlFor="textarea">Bericht</Label>
          <Fieldset>
            <TextArea name="textarea" value={textarea} onChange={this.handleChange} />
          </Fieldset>
          <Submit type="submit" disabled={submitCheck ? 'disabled' : ''}>
            {submitCheck ? <LoadingDots /> : 'Verzenden'}
          </Submit>
        </Form>
        <InfoImage src={Hiring} alt="Hiring" />
      </Section>
    )
  }
}
