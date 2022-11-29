import { AnimatePresence, motion, useDragControls, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function Card() {
    const [cards, setCards] = useState([{cardID: 1}, {cardID: 2}, {cardID: 3}, {cardID: 4},])
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
                setCardPosition(cardPosition + 1)
            }, 1);
        }
        else if( endPosition - grabPosition > 200) {
            setMoveCard("20vw")
            setTimeout(() => {
                setCardPosition(cardPosition + 1)
                console.log("it runs this too")
            }, 1);
        }
    }

    console.log(cards)
    console.log("card position: " + cardPosition)

    return(
        <motion.div className="card-container">
            <AnimatePresence>
                    <motion.div 
                        key={cardPosition}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            opacity: { duration: 0.2 },
                        }}
                        onDragStart={(e) => setGrabPosition(e.x)}
                        onDragEnd={(e) => handleGrabEnd(e.x)}
                        exit={{x : moveCard, opacity: 0, scale: 0, transition:{duration: .4}}}
                        drag="x" 
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={.2}
                        className="card">
                            {cards[cardPosition].cardID}
                </motion.div>
                    <motion.div 
                         key={cardPosition + 1}
                         initial={{ scale: 0, y: -100, opacity: 0 }}
                         animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
                         transition={{
                             scale: { duration: 0.2 },
                             opacity: { duration: 0.4 },
                         }}
                         style={{position: "absolute"}}
                        className="card">
                            {cards[cardPosition.cardID]}
                </motion.div>
        </AnimatePresence>
        </motion.div>
    )
}
