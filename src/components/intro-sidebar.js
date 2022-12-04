import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {IoIosMenu} from "react-icons/io";
import { Burger } from "./Burger";

export function IntroSidebar() {
    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen)
    const linkAnimation = {
        initial : {opacity: 0, scale: 0},
        animate: {opacity:1, scale: 1 , transition: {duration: .3}},
        exit: {opacity: 0, scale: 0}
    }
    return(
        <div className="intro-sidebar"> 
        <p className="portfolio-title">MK</p>
        <div className="intro-menu"> 
            
            <motion.div 
            className="line1" 
            animate={{paddingBottom: menuOpen ? "25vh" : "35vh"}}
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
                        <motion.li>ABOUT</motion.li>
                        <motion.li>PROJECTS</motion.li>
                        <motion.li>CONTACT</motion.li>
                    </motion.ul> : null}
                    
                </AnimatePresence>
                <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </div>
            <motion.div 
            className="line2" 
            animate={{paddingTop: menuOpen ? "25vh" : "35vh"}}
            ></motion.div>
        </div>
        </div>
    )
} 