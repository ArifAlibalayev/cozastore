import React from 'react'
import './index.scss'
import ContactContent from '../../components/ContactContent'

function ContactPage() {
  return (
    <>
    <section id='defaultPageHeader'>
      <h1 style={{color:"white",textAlign:"center",lineHeight:'250px',fontSize:'48px'}}>Contact</h1>
    </section>
    <ContactContent/>
    </>
  )
}

export default ContactPage