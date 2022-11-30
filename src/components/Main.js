import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { About } from "./About";
import { Intro } from "./Intro";
import { Projects } from "./Projects";

export function Main() {
    const [introLevel, setIntroLevel] = useState(1)
    const [blackBirdVisibility, setBlackBirdVisibility] = useState(true)
    const [whiteBirdVisibility, setWhiteBirdVisibility] = useState(false)
    const [introSticky, setIntroSticky] = useState(true)
    const ref = useRef(null);
    const mainRef = useRef(null)
    const mainIsInView = useInView(mainRef)
    
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
    });

    useEffect(() => {
    return scrollYProgress.onChange(() => {
        if(scrollYProgress.current > 0.66) {
            setIntroLevel(1)
            setBlackBirdVisibility(true)
            setWhiteBirdVisibility(false)
        }
        if(scrollYProgress.current <= 0.66 && scrollYProgress.current >= 0.33) {
            setIntroLevel(2)
            setBlackBirdVisibility(!blackBirdVisibility)
            setWhiteBirdVisibility(!whiteBirdVisibility)
        }
        if(scrollYProgress.current < 0.33 && scrollYProgress.current > 0) {
            setIntroLevel(3)
            setBlackBirdVisibility(true)
            setWhiteBirdVisibility(false)
        }
        })
    }, [])


    return(
        <div className="main-container" >
            <Intro introLevel={introLevel} blackBirdVisibility={blackBirdVisibility} whiteBirdVisibility={whiteBirdVisibility} mainIsInView={mainIsInView}></Intro>
            <div className="intro-background" ref={ref}>
            </div>
            <div className="main" ref={mainRef}>
                <About/>
                <Projects/>

            </div>
        </div>
    )
}