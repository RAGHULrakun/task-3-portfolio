import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:sampalraj2001@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact Information</span>
            <p>No.11, Ramakirshana Main Road, <br/>
            New Colony, 1st Cross Street, Porur <br/> Chennai, Tamilnadu 600 116</p>
          </div>
          <ul className={css.menu}>
            <li>Phone +91 84288 07480</li>
            <li>Email sampalraj2001@gmail.com</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
