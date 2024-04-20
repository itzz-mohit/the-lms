import React from 'react'
import { Footer, Header } from '../components'
import MyLearningBanner from '../components/Banners/MyLearningBanner'
import MyLearning from '../components/Dashboard/MyLearning'

const MyLearningPage = () => {
  return (
    <div>
        <Header/>
        <MyLearning/>
        <Footer/>
    </div>
  )
}

export default MyLearningPage