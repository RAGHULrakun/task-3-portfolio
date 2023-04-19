import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <a href="https://github.com/Sampalraj"><span className="secondaryText">Explore More Works</span></a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <a href="https://sampalraj.github.io/News-homepage/"><motion.img variants={fadeIn("up", "tween", .7, .6)} src="./ss1.png" alt="project" /></a>
            <a href="https://sampalraj.github.io/portofilio-testpage/"><motion.img variants={fadeIn("up", "tween", .9, .6)} src="./ss2.png" alt="project" /></a>
            <a href="https://sampalraj.github.io/calculater/"><motion.img variants={fadeIn("up", "tween", .5, .6)} src="./ss3.png" alt="project" /></a>
            <a href="https://sampalraj.github.io/Interactive-card-details/"><motion.img variants={fadeIn("up", "tween", .7, .6)} src="./ss4.png" alt="project" /></a>
            <a href="https://sampalraj.github.io/Product-preview-card-component/"><motion.img variants={fadeIn("up", "tween", .9, .6)} src="./ss5.png" alt="project" /></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
