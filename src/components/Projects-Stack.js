import { AnimatePresence, motion, useDragControls, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import {BsChevronRight} from "react-icons/bs"

export function Card() {
    const [cards, setCards] = useState([{cardID: 1}, {cardID: 2},])
    let x = useMotionValue(0)
    const rotateZ = useTransform(x, [-200, 0, 200], [-45, 0, 45])
    const scale = useTransform(x, [-200, 0, 200], [.5, 1, .5])
    const [grabPosition, setGrabPosition] = useState(0)
    const [cardPosition, setCardPosition] = useState(0)
    const [moveCard, setMoveCard] = useState(false)

    function handleGrabEnd(endPosition) {
        if(grabPosition - endPosition > 100) {
            setMoveCard("-20vw")
            setTimeout(() => {
                if(cardPosition === cards.length) setCardPosition(0)
                else setCardPosition(cardPosition + 1)
                
            }, 1);
        }
        else if( endPosition - grabPosition > 200) {
            setMoveCard("20vw")
            setTimeout(() => {
                if(cardPosition === cards.length) setCardPosition(0)
                else setCardPosition(cardPosition + 1)
            }, 1);
        }
    }
    return(
        <motion.div 
        className="card-container"
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: 1}}>
            <motion.h2 initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: .5, delay: 1}}>WORK</motion.h2>
            <AnimatePresence>
                    <motion.a 
                        // href="https://maximkursakov.github.io/shop"
                        // target="_blank" 
                        key={cardPosition}
                        initial={{scale: 0,  y: -100, opacity: 0}}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            opacity: { duration: 0.2 },
                        }}
                        style={{backgroundImage: `url(./images/Project${cardPosition}.png)`, zIndex: 2}}
                        onDragStart={(e) => setGrabPosition(e.x)}
                        onDragEnd={(e) => handleGrabEnd(e.x)}
                        exit={{x : moveCard, opacity: 0, scale: 0, transition:{duration: .4}}}
                        drag="x" 
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={.2}
                        className="card">
                    </motion.a>
                    <motion.a 
                         key={cardPosition + 1}
                         initial={{ scale: 0, y: -100, opacity: 0 }}
                         animate={{ scale: 0.75, y: 70, opacity: 1 }}
                         transition={{
                             scale: { duration: 0.2 },
                             opacity: { duration: 0.4 },
                         }}
                         style={{
                             backgroundImage: `url(./images/Project${cardPosition + 1}.png)`, zIndex: 1}}
                        className="card">
                </motion.a>
            </AnimatePresence>
            <div className="intro-read-more">
            <motion.div initial={{y: 0}} animate={{y: [0, -10, 10, -5, 5, 0]}} transition={{repeat: "Infinity", type: "spring", repeatDelay: 2, duration: 2}}><BsChevronRight></BsChevronRight></motion.div>
            <p>Read more</p>
            </div>
        </motion.div>
    )
}
