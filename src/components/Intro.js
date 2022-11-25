import { motion } from "framer-motion"
import { useState } from "react"
import { Bird } from "./Bird"
import { Circle } from "./Circle"
import { WelcomeTop } from "./Welcome-Top"

export function Intro () {
    const [introLevel, setIntroLevel] = useState(1)
    const [blackBirdVisibility, setBlackBirdVisibility] = useState(true)
    const [whiteBirdVisibility, setWhiteBirdVisibility] = useState(false)
    
    function forwardIntro() {
        if(introLevel < 3) {
            setIntroLevel(introLevel + 1)
        }
            setBlackBirdVisibility(!blackBirdVisibility)
            setWhiteBirdVisibility(!whiteBirdVisibility)
    }

    return(
        <div className="intro-container">
            <div className="intro">
                <Bird introLevel={introLevel} visibility={blackBirdVisibility} color="#6DAFFE"></Bird>
                
                <Bird introLevel={introLevel} visibility={whiteBirdVisibility} color="#EDF6FF"></Bird>
                
                <motion.div
                className="intro-left"
                initial={{background: `linear-gradient(90deg, #6DAFFE 50%, #EDF6FF 50%)`}}
                // animate={{background: `linear-gradient(${introLevel === 1 ? 90 : introLevel === 2 ? 270 : 360}deg, black 50%, white 50%)`}}
                animate={{x : introLevel === 3 && "-100vw"}}
                transition={{duration: 1}}
                onClick={forwardIntro}>
                </motion.div>
                <div className="welcome">
                        <WelcomeTop/>
                </div>
            </div>
        </div>
        
    )
}