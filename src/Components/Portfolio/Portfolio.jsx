import React, { useRef ,useState} from "react";
import "./Portfolio.scss";
import { motion,useScroll,useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Expense Tracker",
    image: "https://www.shutterstock.com/image-vector/flat-calculator-vector-illustration-long-600nw-554850088.jpg",
    description: "Expenses Recorder, the ultimate tool to track and manage your spending habits with ease." ,
    url:"https://expenses-calculator-mz33.vercel.app/"
  },
  {
    id: 2,
    title: "Text-Utils",
    image: "https://marketplace.workiva.com/sites/marketplace/files/images/Screenshots/file-utils-logo-16-7-en.svg",
    description: "Update transform and copy text a simple text transformer app",
    url:"https://textutils-7ucrv3usb-akash-tanwars-projects.vercel.app/"
  },
  {
    id: 3,
    title: "Weather Authentication",
    image: "https://img.freepik.com/free-vector/watercolor-weather-effects-collection_23-2149115331.jpg",
    description:
      " input the city to fetch the information of the weather of the desired location ",
      url:"https://portfolio-drab-nine-46.vercel.app/"
  },
  {
    id: 4,
    title: "News Application",
    image: "https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg",
    description:"Fetch the daily dose of the news from the article categorized accordingly",
    url:"https://news24x7-f64r.vercel.app/"
  },
];


const Single = ({ item }) => {
 
  const ref = useRef();
 
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress,[0,1], [-300,300]);

  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
  <section >
    <div className="container">
      <div className="wrapper">
        <div className="imagecontainer" ref={ref}>
      <img src={item.image} alt="image"  />
      </div>
      <motion.div className="textContainer" style={{y}}  >
        <h2 >{item.title}</h2>
        <p>{item.description}</p>
      <button key={item.id} onClick={() => handleButtonClick(item.url)}>Go to {item.title} </button>
      </motion.div>
      </div>
    </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX :scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
