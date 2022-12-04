import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
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
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <Projects/>
                <Contact/>
            </div>
        </div>
    )
}