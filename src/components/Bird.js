import { motion } from "framer-motion"

export function Bird({introLevel, color, visibility}) {
    console.log(visibility)
    const birdMovement = {
        initial: {
            left: "70%", right: "25%"
        },
        hover: {
            y : [0, 20, 0],
            transition: {duration: 1, yoyo: Infinity, type:"tween"},
        },
        rotate: {
            rotateZ: introLevel === 2 ? [0, -45, 0] : 0,
            transition: {duration: .8}
        },
        // rotateBack: {
        //     rotateZ: introLevel === 2 ? [0, 45, 0] : 0,
        //     transition: {delay: 1, duration: .2}
        // },
        fly: {
            translateX: introLevel === 2 ? "-50vw" : 0,
            transition: {duration: .8, delay: .2}
        },
        visibility: {
            visibility: visibility ? "shown" : "hidden",
            transition: {delay: .6}
        }
    }
    return (
        <motion.svg 
                initial={{left: "70%", right: "25%"}}
                variants={birdMovement}
                animate={["hover", "rotate", "rotateBack", "visibility",  "fly"]}
                className="bird-svg"    
                width="185" height="194" viewBox="0 0 185 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 1">
                        <rect x="0.5" y="0.5" width="181" height="187" fill="transparent"/>
                        <motion.path 
                        id="bird-body" 
                        d="M111 183L113 106L86 46L57 26L41 42.5H57V86L97.5 131L86 154L111 183Z" 
                        fill={color}/>
                    <g id="wings">
                        <motion.path 
                        id="wing-front" 
                        initial={{d: "M113 106L177 15L86 46L113 106Z"}}
                        animate={{
                            d: "M113 106L30.5 136L86 46L113 106Z", 
                            filter: ["blur(0)","blur(2px)","blur(0)"],
                            }}
                        transition={{duration: .2, yoyo: Infinity, type:"tween"}}
                        fill={color}/>
                        <motion.path 
                        id="wing-back" 
                        initial={{d: "M113 106L145.5 11.5L86 46L113 106Z"}} 
                        animate={{
                            d: "M113 106L22 91.5L86 46L113 106Z",
                            filter: ["blur(0)","blur(2px)","blur(0)"],
                            }}
                        transition={{duration: .2, yoyo: Infinity, type:"tween"}}
                        fill={color}/>
                    </g>
                    </g>
                </motion.svg>
    )
}