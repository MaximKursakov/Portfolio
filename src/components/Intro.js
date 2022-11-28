import { motion } from "framer-motion"
import { useState } from "react"
import { Bird } from "./Bird"
import { IntroSidebar } from "./intro-sidebar"
import { Intro2 } from "./Intro2"
import { WelcomeTop } from "./Welcome-Top"


export function Intro () {
    const [introLevel, setIntroLevel] = useState(1)
    const [blackBirdVisibility, setBlackBirdVisibility] = useState(true)
    const [whiteBirdVisibility, setWhiteBirdVisibility] = useState(false)
    
    function forwardIntro() {
        if(introLevel < 4) {
            setIntroLevel(introLevel + 1)
        }
            setBlackBirdVisibility(!blackBirdVisibility)
            setWhiteBirdVisibility(!whiteBirdVisibility)
    }
console.log(introLevel)
    return(
        <div onClick={forwardIntro} className="intro-container">
                <motion.div
                className="intro-hero"
                initial={{background: `linear-gradient(90deg, #EDF6FF 50%,  #6DAFFE 50%)`}}
                animate={{background: `linear-gradient(${introLevel >= 3 ? 180 : 90}deg, #EDF6FF 50%, #6DAFFE 50%)`}}
                // animate={{x : introLevel === 3 && "-100vw"}}
                transition={{duration: 1}}
                onClick={forwardIntro}>
                    <div className="intro">
                        <IntroSidebar></IntroSidebar>
                <Bird introLevel={introLevel} visibility={blackBirdVisibility} color="#6DAFFE"></Bird>
                <Bird introLevel={introLevel} visibility={whiteBirdVisibility} color="#EDF6FF"></Bird>                               
                <WelcomeTop introLevel={introLevel}/>
                {introLevel === 2 && <Intro2></Intro2>
                }
            </div>
            </motion.div>
        </div>
        
    )
}