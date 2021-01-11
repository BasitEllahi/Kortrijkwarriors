import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contact/Form'
import FormContainer from '../components/containers/Form'

const PageContact = () => (
  <Layout>
    <FormContainer title="Contact">
      <ContactForm formName="contact" />
    </FormContainer>
  </Layout>
)

export default PageContact
