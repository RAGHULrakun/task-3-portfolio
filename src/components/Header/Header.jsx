import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight, } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Sampal Raj</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Team</a></li>
          <li><a href="https://www.canva.com/design/DAFYlWnhUVo/IagiMjXMYH9VIXs3wwsXug/view?utm_content=DAFYlWnhUVo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">view cv</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91 84288-07480</p>
            <BiPhoneCall size={"40px"} />
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <a href="https://github.com/Sampalraj">
            <BsGithub size={"40px"} />
            </a>
          </li>
          
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
