import React from "react";
import "./hero.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
const Hero = () => {
  const TextVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
      },
    },
  };

    const handleDownload = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = "/AkashTanwarResume.pdf";
      downloadLink.download = 'Resume.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      toast.info('Downloading resume...');
    };

  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={TextVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={TextVariants}>Akash Tanwar</motion.h2>
            <motion.h1 variants={TextVariants}>Web Developer</motion.h1>
            <motion.div className="buttons" variants={TextVariants}>
              <motion.button variants={TextVariants} >
                See the latest Work
              </motion.button>
              <button variants={TextVariants} onClick={handleDownload}>Download Resume</button>
              <ToastContainer />    
            </motion.div>
            <motion.img
              variants={TextVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt="Scroll buttton"
            />
          </motion.div>
        </div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
        ReactJs CSS Javascript.
        </motion.div>
        <div className="imageContainer">
          <img src="./hero2.png" alt="AkashImage" />
        </div>
      </div>
    </>
  );
};

export default Hero;
