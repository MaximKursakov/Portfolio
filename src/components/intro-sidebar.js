import { motion } from "framer-motion";
import {VscMenu} from "react-icons/vsc";

export function IntroSidebar() {
    return(
        <div initial="hidden" animate="visible" className="intro-sidebar"> 
            <p className="portfolio-title">MK</p>
            <div className="line1"></div>
            <VscMenu></VscMenu>
            <div className="line2"></div>
        </div>
    )
} 