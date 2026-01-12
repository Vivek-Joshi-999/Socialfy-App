import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Cards from './components/Cards/Cards'
import FeedCard from './components/Feeds/FeedCard'
import Addfriends from './components/AddFriend/Addfriends'
import Cta from "./components/cta/Cta"
import Footer from './components/Footer/Footer'


const Home = () => {
  return (
    <div className='  bg-white '>
        <Navbar/>
        <Intro/>
        <Cards/>
        <FeedCard/>
       <Addfriends/>
       <Cta/>
       <Footer/>
        
    </div>
  )
}

export default Home;
