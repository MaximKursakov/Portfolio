import { motion } from "framer-motion"
import { useState } from "react"

export function Intro () {
    const [introLevel, setIntroLevel] = useState(1)
    
    function forwardIntro() {
        if(introLevel < 4) {
            setIntroLevel(introLevel + 1)
        }
    }

    console.log(introLevel)
    return(
        <div className="intro-container">
            <div className="intro">
                <motion.div
                className="intro-left"
                initial={{background: `linear-gradient(90deg, black 50%, white 50%)`}}
                animate={{background: `linear-gradient(${introLevel === 4 ? 5 * 90 : introLevel * 90}deg, black 50%, white 50%)`}}
                transition={{duration: 1}}
                onClick={forwardIntro}>
                </motion.div>
                <motion.div
                className="intro-right"
                transition={{duration: 4}}
                onClick={forwardIntro}>
                </motion.div>
            </div>
        </div>
        
    )
}