import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contact/Form'
import FormContainer from '../components/containers/Form'

const PageJob = () => (
  <Layout>
    <FormContainer title="Job">
      <ContactForm showFile formName="job" />
    </FormContainer>
  </Layout>
)

export default PageJob
