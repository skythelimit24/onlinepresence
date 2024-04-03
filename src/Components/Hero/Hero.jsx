import React from "react";
import "./hero.scss";
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
              <motion.button variants={TextVariants}>
                See the latest Work
              </motion.button>
              <motion.button variants={TextVariants}>Contact Me</motion.button>
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
        ReactJs CSS Bootstrap MUI
        </motion.div>
        <div className="imageContainer">
          <img src="/hero.png" alt="AkashImage" />
        </div>
      </div>
    </>
  );
};

export default Hero;
