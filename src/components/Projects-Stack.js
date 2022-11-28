import { AnimatePresence, motion, useDragControls, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function Card() {
    let x = useMotionValue(0)
    const rotateZ = useTransform(x, [-200, 0, 200], [-45, 0, 45])
    const scale = useTransform(x, [-200, 0, 200], [.5, 1, .5])
    const [grabPosition, setGrabPosition] = useState(0)
    const [removeCard, setRemoveCard] = useState(false)
    const [moveCard, setMoveCard] = useState(false)

    function handleGrabEnd(endPosition) {
        if(grabPosition - endPosition > 100) {
            setMoveCard("-20vw")
            setTimeout(() => {
                setRemoveCard(true)
            }, 1);
        }
        else if( endPosition - grabPosition > 200) {
            setMoveCard("20vw")
            setTimeout(() => {
                setRemoveCard(true)
            }, 1);
            
        }
    }
    console.log(moveCard)

    return(
        <motion.div>
            <AnimatePresence>
                {!removeCard ?
                <motion.div 
                style={{
                    x, 
                    rotateZ, 
                    scale,
                cursor: "grab"}} 
                onDragStart={(e) => setGrabPosition(e.x)}
                onDragEnd={(e) => handleGrabEnd(e.x)}
                exit={{x : moveCard, opacity: 0, scale: 0, transition:{duration: .4}}}
                drag="x" 
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={.2}
                className="card-container">
                </motion.div>
                : null}
        </AnimatePresence>
        </motion.div>
    )
}
