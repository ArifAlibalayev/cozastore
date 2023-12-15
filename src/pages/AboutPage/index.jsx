import React from 'react'
import AboutContent from '../../components/AboutContent'

function AboutPage() {
  return (
   <>
    <section id='defaultPageHeader'>
      <h1 style={{color:"white",textAlign:"center",lineHeight:'250px',fontSize:'48px'}}>About</h1>
    </section>
    <AboutContent/>
   </>
  )
}

export default AboutPage