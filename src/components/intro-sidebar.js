import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {IoIosMenu} from "react-icons/io";
import Link from "react-scroll/modules/components/Link";
import { Burger } from "./Burger";

export function IntroSidebar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const linkAnimation = {
        initial : {opacity: 0, scale: 0},
        animate: {opacity:1, scale: 1 , transition: {duration: .3}},
        exit: {opacity: 0, scale: 0, transition: {duration: .3}}
    }
    return(
        <>
        <div className="intro-sidebar"> 
        <p className="portfolio-title">MK</p>
        <div className="intro-menu"> 
            <motion.div 
            className="line1" 
            animate={{paddingBottom: menuOpen ? "25vh" : "33vh"}}
            transition={{duration: .5}}
            ></motion.div>
            <div className="navMenu">
                <AnimatePresence>
                    {menuOpen ? 
                    <motion.ul className="navLinks"
                    variants={linkAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    >
                        <motion.li initial={{opacity: .7}} whileHover={{opacity: 1}}>
                            <Link to="about" smooth={true}>ABOUT</Link>
                        </motion.li>
                        <motion.li initial={{opacity: .7}} whileHover={{opacity: 1}}>
                            <Link to="projects" smooth={true}>PROJECTS</Link>
                        </motion.li>
                        <motion.li initial={{opacity: .7}} whileHover={{opacity: 1}}>
                            <Link to="contact" smooth={true}>CONTACT</Link>
                        </motion.li>
                    </motion.ul> : null}
                    
                </AnimatePresence>
                <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} xOffset={"400%"}/>
            </div>
            <motion.div 
            className="line2" 
            animate={{paddingTop: menuOpen ? "25vh" : "33vh"}}
            transition={{duration: .5}}
            ></motion.div>
        </div>
        </div>
        <div className="intro-sidebar-phone">
        <AnimatePresence>
            {menuOpen ? 
                    <motion.ul className="navLinks-Phone"
                    variants={linkAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    >
                        <AnimatePresence>
                        <motion.li initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: .5, delay: 0}}>
                            <Link to="about" smooth={true}>ABOUT</Link>
                        </motion.li>
                        </AnimatePresence>
                        <motion.li initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: .5, delay: .1}}>
                            <Link to="projects" smooth={true}>PROJECTS</Link>
                        </motion.li>
                        <motion.li initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: .5, delay: .2}}>
                            <Link to="contact" smooth={true}>CONTACT</Link>
                        </motion.li>
                    </motion.ul> : null}
                </AnimatePresence>
                <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} xOffset="0%"/>
        </div>
        </>
    )
} 