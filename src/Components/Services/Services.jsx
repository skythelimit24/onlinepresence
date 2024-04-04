import React, { useRef } from 'react'
import './Services.scss'
import {motion ,useInView} from 'framer-motion'
const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}
const Services = () => {
const ref = useRef();

const InView = useInView(ref,{margin:"-100px"});
   
  return (
    <>
  <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={InView && "animate"}>
    <motion.div className="textContainer" variants={variants}>
        <p>I love to Develop your Brand grow<br/> and move forward</p>
        <hr/>
    </motion.div>
    <motion.div className="titleContainer" variants={variants} >
        <div className="title">
            <img src="/people.webp" alt="business image"  />
            <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b>Ideas</h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
                </h1>
                <button>What We Do?</button>
        </div>
    </motion.div>
    <motion.div className="listcontainer"  variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgrey",color:"black"}}>
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae sapiente. Suscipit, quae? Laboriosam perspiciatis ratione corrupti error, tempore ipsum fuga quam repellat, ab nihil hic. Molestias, cumque minima asperiores illum corporis rerum vitae.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgrey",color:"black"}}>
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae sapiente. Suscipit, quae? Laboriosam perspiciatis ratione corrupti error, tempore ipsum fuga quam repellat, ab nihil hic. Molestias, cumque minima asperiores illum corporis rerum vitae.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgrey",color:"black"}}>
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae sapiente. Suscipit, quae? Laboriosam perspiciatis ratione corrupti error, tempore ipsum fuga quam repellat, ab nihil hic. Molestias, cumque minima asperiores illum corporis rerum vitae.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgrey",color:"black"}}>
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, recusandae sapiente. Suscipit, quae? Laboriosam perspiciatis ratione corrupti error, tempore ipsum fuga quam repellat, ab nihil hic. Molestias, cumque minima asperiores illum corporis rerum vitae.
            </p>
            <button>Go</button>
        </motion.div>
    </motion.div>
    </motion.div>    
    </>
  )
}

export default Services
