import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Bird } from "./Bird"
import { IntroSidebar } from "./intro-sidebar"
import { Intro2 } from "./Intro2"
import { Intro3 } from "./Intro3"
import  {  Card}  from "./Projects-Stack"
import { WelcomeTop } from "./Welcome-Top"


export function Intro () {
    const [introLevel, setIntroLevel] = useState(1)
    const [blackBirdVisibility, setBlackBirdVisibility] = useState(true)
    const [whiteBirdVisibility, setWhiteBirdVisibility] = useState(false)
    
    
    function forwardIntro() {
        if(introLevel < 3) {
            setIntroLevel(introLevel + 1)
            setBlackBirdVisibility(!blackBirdVisibility)
            setWhiteBirdVisibility(!whiteBirdVisibility)
        }
        else if(introLevel === 3) {
        }
            
    }
    return(
        <div> 
        <div className="intro-container">
            
                <motion.div
                className="intro-hero"
                initial={{background: `linear-gradient(90deg, #EDF6FF 50%,  #6DAFFE 50%)`}}
                animate={{background: `linear-gradient(${introLevel >= 3 ? 180 : 90}deg, #EDF6FF 50%, #6DAFFE 50%)`}}
                // animate={{x : introLevel === 4 && "-100vw"}}
                transition={{duration: 1}}
                onClick={forwardIntro}
                >
                <div className="intro">
                    <IntroSidebar></IntroSidebar>
                    <Bird introLevel={introLevel} visibility={blackBirdVisibility} color="#6DAFFE"></Bird>
                    <Bird introLevel={introLevel} visibility={whiteBirdVisibility} color="#EDF6FF"></Bird>                               
                    <WelcomeTop introLevel={introLevel}/>
                    <AnimatePresence>
                    {introLevel === 2 && <Intro2></Intro2>
                    }
                    </AnimatePresence>
                    <AnimatePresence>
                    {introLevel === 3 && <Card></Card>
                    }
                    </AnimatePresence>
            </div>
            </motion.div>
            
        </div>
        
        </div>
        
    )
}