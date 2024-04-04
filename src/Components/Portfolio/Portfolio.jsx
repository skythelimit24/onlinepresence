import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion,useScroll,useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Food cart Application",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/evening-in-da-nang-manjik-pictures.jpg",
    description: " you can add and remove item of food from the UI ",
  },
  {
    id: 2,
    title: "My List",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/evening-in-da-nang-manjik-pictures.jpg",
    description: "Add update and delete the task  in different sections ",
  },
  {
    id: 3,
    title: "Weather Authentication",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/evening-in-da-nang-manjik-pictures.jpg",
    description:
      " input the city to fetch the information of the weather of the desired location ",
  },
  {
    id: 4,
    title: "News Application",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/evening-in-da-nang-manjik-pictures.jpg",
    description:
      "Fetch the daily dose of the news from the article categorized accordingly",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
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
