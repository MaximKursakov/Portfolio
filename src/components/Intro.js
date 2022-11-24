import { motion } from "framer-motion"
import { useState } from "react"

export function Intro () {
    const [introLevel, setIntroLevel] = useState(1)
    
    function forwardIntro() {
        if(introLevel < 4) {
            setIntroLevel(introLevel + 1)
        }
    }
    const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

    return(
        <div className="intro-container">
            <div className="intro">
                <motion.svg 
                animate={{y: [0, 20, 0]}}
                transition={{duration: 1, yoyo: Infinity, type:"tween"}}
                width="185" height="194" viewBox="0 0 185 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 1">
                        <rect x="0.5" y="0.5" width="181" height="187" fill="transparent"/>
                        <path id="bird-body" d="M74 183L72 106L99 46L128 26L144 42.5H128V86L87.5 131L99 154L74 183Z" fill="#A6A6A6"/>
                    <g id="wings">
                        <motion.path 
                        id="wing-front" 
                        initial={{d: "M72 106L8 15L99 46L72 106Z"}}
                        animate={{d: "M72 106L141.5 128.5L99 46L72 106Z", filter: "blur(10%)" }}
                        transition={{duration: .2, yoyo: Infinity, type:"tween"}}
                        fill="#A6A6A6"/>
                        <motion.path 
                        id="wing-back" 
                        initial={{d: "M72 106L39.5 11.5L99 46L72 106Z"}} 
                        animate={{d: "M72 106L141.5 96L99 46L72 106Z"}}
                        transition={{duration: .2, yoyo: Infinity, type:"tween"}}
                        fill="#A6A6A6"/>
                    </g>
                        <rect x="0.5" y="0.5" width="181" height="187"/>
                    </g>
                </motion.svg>
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