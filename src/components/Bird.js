import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion"
import { useRef, useState, useTransition } from "react"

export function Bird({mainIsInView ,introLevel, color, visibility}) {
    const birdMovement = {
        initial: {
            left: "70%", right: "25%"
        },
        hover: {
            y : [0, 20, 0],
            transition: {duration: 1, yoyo: Infinity, type:"tween"},
        },
        rotate: {
            rotateZ: 
                introLevel === 2 ? [0, -45, 0]
                : introLevel === 3 ? [0, -60, 0] 
                : introLevel === 4 ? [0, 25, 0] : 0,
            transition: {duration: .8}
        },
        fly: {
            translateX: introLevel === 2 ? "-50vw" : 
                        introLevel === 3 ? "-25vw" :
                        introLevel === 4 ? "-25vw" : 0,
            translateY: introLevel === 3 ? "25vh" 
                        : introLevel === 4 ? "-75vh" : 0,
            transition: {duration: .8, delay: .2}
        },
        visibility: {
            display: visibility ? "none" : "block",
            transition: {delay: introLevel < 4 ? .6 : .45}
        },
        turn: {
            rotateY: introLevel >= 3 ? 180 : 0
        }
    }
    
    const hoverBox = useRef()

    const [mousePositionY, setMousePositionY] = useState()
    const [mousePositionX, setMousePositionX] = useState()
    const [mouseHovering, setMouseHovering] = useState(false)

    function getMousePosition(event) {
        if (!mainIsInView) {
            setMousePositionY(event.clientY - (hoverBox.current.clientHeight/ 2 + 50))
            setMousePositionX(event.pageX - hoverBox.current.clientWidth / 2)
            document.body.style.cursor = 'none';
        }  
    }

    function handleMouseOver() {
        if (!mainIsInView) setMouseHovering(true)
    }
    function handleMouseOut() {
        if (!mainIsInView) {
            setMouseHovering(false)
            document.body.style.cursor = "default";
        }
    }
    console.log(hoverBox)
    
    const birdWidth = 185
    const birdHeight = 194
    return (
        <> 
        <AnimatePresence>
            {mouseHovering ?
                <motion.div
                ref={hoverBox}
                className="bird-hover" 
                initial={{ position: "absolute", left: mousePositionX, top: mousePositionY, visibility: "hidden", scale: 0, opacity: 0}}
                animate={{left: mousePositionX, top: mousePositionY, visibility: "visible", scale: 1, opacity: 1}}
                exit={{scale: 0, opacity: 0}}>
                    <h2>Why is there a bird on my screen?</h2>
                    <p>People say you should bring some personality into your portfolio. I like origami. And thats an origami bird. Fantastic, right?...right??</p>
                </motion.div> : null}
            </AnimatePresence>
        <motion.div 
        style={{width: birdWidth, height: birdHeight}}
        className="bird bird-copy"
        variants={birdMovement}
        initial="initial"
        animate="fly"
        onMouseMove={(e) => getMousePosition(e)}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}>
            
        </motion.div>
        <div className="bird" >
        <motion.svg 
                initial="initial"
                variants={birdMovement}
                animate={["hover", "rotate", "rotateBack", "visibility",  "fly", "turn"]}
                width={birdWidth} height={birdHeight} viewBox="0 0 185 194" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                </>
    )
}