import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import SideBar from './SideBar/SideBar'
const Navbar = () => {
  return (
    <>
   <div className="navbar">
    {/**  Side bar*/}
    <SideBar/>
    <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} >React Dev</motion.span>
        <div className="social">
            <a href="#" ><img src='/facebook.png'/></a>
            <a href="#" ><img src='/linkedin.png'/></a>
            <a href="#" ><img src='/github.png'/></a>
            <a href="#" ><img src='/dribbble.png'/></a>
        </div>
    </div>
    </div>   
    </>
  )
}

export default Navbar
