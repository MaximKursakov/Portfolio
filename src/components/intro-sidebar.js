import { motion } from "framer-motion";
import { useState } from "react";
import {VscMenu} from "react-icons/vsc";

export function IntroSidebar() {
    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen)
    return(
        <div className="intro-sidebar"> 
        <p className="portfolio-title">MK</p>
        <div className="intro-menu"> 
            
            <motion.div 
            className="line1" 
            animate={{paddingBottom: menuOpen ? "15vh" : "35vh"}}
            ></motion.div>
            <div className="burger" onClick={() => setMenuOpen(!menuOpen)}> <VscMenu/> </div>
            <motion.div 
            className="line2" 
            animate={{paddingTop: menuOpen ? "15vh" : "35vh"}}
            ></motion.div>
        </div>
        </div>
    )
} 