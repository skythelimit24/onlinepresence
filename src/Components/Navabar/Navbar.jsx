import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import SideBar from './SideBar/SideBar'
const Navbar = () => {
  return (
    <>
   <div className="navbar">
    <SideBar/>
    <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} > <h1>Developer </h1></motion.span>
        <div className="social">
            <a href="https://www.facebook.com/akash.tanwar.121" target='_blank' ><img src='/facebook.png'/></a>
            <a href="https://www.linkedin.com/in/akash-tanwar-7425b2168/"  target="_blank"><img src='/linkedin.png'/></a>
            <a href="https://github.com/skythelimit24" target="_blank"><img src='/github.png'/></a>
            <a href="#" ><img src='/dribbble.png'/></a>
        </div>
    </div>
    </div>   
    </>
  )
}

export default Navbar
