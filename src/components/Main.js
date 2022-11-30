import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Intro } from "./Intro";

export function Main() {
    const [introLevel, setIntroLevel] = useState(1)
    const [blackBirdVisibility, setBlackBirdVisibility] = useState(true)
    const [whiteBirdVisibility, setWhiteBirdVisibility] = useState(false)
        
    
    
    // function forwardIntro() {
    //     if(introLevel < 4) {
    //         setIntroLevel(introLevel + 1)
    //         setBlackBirdVisibility(!blackBirdVisibility)
    //         setWhiteBirdVisibility(!whiteBirdVisibility)
    //     }
    //     else if(introLevel === 3) {
    //     }    
    // }

    const ref = useRef(null);
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
        else if(scrollYProgress.current < 0.33) {
            setIntroLevel(3)
            setBlackBirdVisibility(true)
            setWhiteBirdVisibility(false)}
    })
    }, [])

    return(
        <div className="main-container" >
            <Intro introLevel={introLevel} blackBirdVisibility={blackBirdVisibility} whiteBirdVisibility={whiteBirdVisibility}></Intro>
            <div className="intro-background" ref={ref}>
            </div>
            <div className="main">
                main
            </div>
        </div>
    )
}