import React from 'react'
import Content from './Content'
import ContentLatestNews from './ContentLatestNews'
import ContentStory from './ContentStory'
import Headers from './Headers'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

const Home = () => {

  console.log(process.env.API_DEV)
  return (
    <>
      <Navbar />
      <Headers />
      <Content />
      <ContentStory />
      <ContentLatestNews />
      <Footer />
    </>
  )
}

export default Home
