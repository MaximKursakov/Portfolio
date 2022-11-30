import { AnimatePresence, motion, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Bird } from "./Bird"
import { IntroSidebar } from "./intro-sidebar"
import { Intro2 } from "./Intro2"
import { Intro3 } from "./Intro3"
import  {  Card}  from "./Projects-Stack"
import { Intro1 } from "./Intro1"


export function Intro ({introLevel, blackBirdVisibility, whiteBirdVisibility, mainIsInView}) {
    const delayTime = 4
    const scrollAnimate = {
        initial : {
            height: "30px"
        }, 
        minimize : {
            height: "1px", 
            transition: {
                duration: 1,
                delay: delayTime -1
                }
        }, 
        moveUp : {
            marginBottom: ["0px","30px", "0px"], 
            transition: {
                duration: 2, 
                delay: delayTime}
            },
        extendDown: {
            paddingBottom: "30px", 
            transition: {
                duration: 1, 
                delay: delayTime + 1}
            }
    }
    return(
        <div className="intro-body" style={{position: !mainIsInView ? "fixed" : "absolute", top: !mainIsInView ? "0" : "100vh"}}> 
            <div className="intro-container">
                    <motion.div
                    className="intro-hero"
                    initial={{background: `linear-gradient(90deg, #EDF6FF 50%,  #6DAFFE 50%)`}}
                    animate={{background: `linear-gradient(${introLevel >= 3 ? 180 : 90}deg, #EDF6FF 50%, #6DAFFE 50%)`}}
                    transition={{duration: 1}}
                    >
                    <div className="intro">
                        <IntroSidebar></IntroSidebar>
                        <Bird introLevel={introLevel} visibility={blackBirdVisibility} color="#6DAFFE"></Bird>
                        <Bird introLevel={introLevel} visibility={whiteBirdVisibility} color="#EDF6FF"></Bird>     
                        <AnimatePresence> 
                            {introLevel === 1 ?
                            <Intro1 introLevel={introLevel}/>
                            : null}                       
                        </AnimatePresence>  
                        <AnimatePresence>
                            {introLevel === 2 ?
                            <Intro2></Intro2>
                            : null}
                        </AnimatePresence>
                        <AnimatePresence>
                            {introLevel === 3 ?
                            <Card></Card>
                            : null}
                        </AnimatePresence>
                    </div>
                    <div className="scroll">
                        <p>Scroll</p>
                        <motion.div 
                        variants={scrollAnimate}
                        // initial="initial"
                        animate={["minimize", "moveUp", "extendDown"]}
                        ></motion.div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}