import Head from 'next/head'
import Image from 'next/image'
import Header from '../content/components/Header'
import Navbar from '../content/Navbar'
import Index from '../content/index'
import About from '../content/About'
import Explore from '../content/Explore'
import Skills from '../content/Skills'
import Learning from '../content/Learning'
import Contact from '../content/Contact'
import Message from '../content/Message'
import Footer from '../content/components/Footer'



export default function Home() {
  return (
    <div className='bg-white h-screen'>
      <Header/>

      <main className=''>
        <Navbar/>
        <Index/>
        <About/>
        <Explore/>
        <Skills/>
        <Learning/>
        <Contact/>
        <Message/>
      
      </main>
        <Footer/>
      
    </div>
  )
}
