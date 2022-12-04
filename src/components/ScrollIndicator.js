import { motion } from "framer-motion";

export function ScrollIndicator() {
    const delayAnimation = 3
    const animationSpeed = .7
    const scrollAnimate = {
        initial : {
            height: "35px"
        }, 
        minimize : {
            height: "1px", 
            transition: {
                duration: animationSpeed,
                delay: delayAnimation
                }
        }, 
        moveUp : {
            marginBottom: ["0px","35px", "0px"], 
            transition: {
                
                duration: animationSpeed * 2, 
                delay: delayAnimation + animationSpeed}
            },
        extendDown: {
            paddingBottom: "35px", 
            transition: {
                duration: animationSpeed, 
                delay: delayAnimation + animationSpeed * 2}
            }
    }
    return(
        <div className="scroll">
                        <motion.p 
                        initial={{rotateZ: -90,}}
                        animate={{ y: ["0px", "5px", "0px"]}} 
                        transition={{duration: 1, delay:delayAnimation + 3, repeat: "Infinity", repeatDelay: 3}}>Scroll</motion.p>
                        <motion.div 
                        variants={scrollAnimate}
                        animate={["minimize", "moveUp", "extendDown"]}
                        ></motion.div>
        </div>
    )
}