import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './about'
import Experiences from './experiences'
import Projects from './Projects'
import Contact from './contact'
import Footer from './footer'
import LeftSider from './LeftSider'


const Home = () => {

  
  return (
    <div>
      <Header />
    
        <div className='bg-primary px-40 sm:px-5'>
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
     
    </div>
  )
}

export default Home
