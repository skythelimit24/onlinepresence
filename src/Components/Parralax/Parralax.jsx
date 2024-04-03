import { useRef } from 'react' 
import './parallax.scss'
import { motion ,useScroll,useTransform } from 'framer-motion'

const Parralax = ({type}) => {
  return (
    <>
   <div className="parallax" style = {{background : type === "Services"  ? "linear-gradient(180deg ,#111132 ,#0c0c1d)" :"linear-gradient(180deg ,#111132 ,#505064)"}}>
    <motion.h1>{type === "Services" ? "What I do" :"What i Did?"}</motion.h1>
    <motion.div className="mountains"></motion.div>
    <motion.div className="planets"></motion.div>
    <motion.div className="stars"></motion.div>
    </div>   
    </>
  )
}

export default Parralax
