import { motion, useDragControls, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function Card() {
    let x = useMotionValue(0)
    const rotateZ = useTransform(x, [-200, 0, 200], [-45, 0, 45])
    const scale = useTransform(x, [-200, 0, 200], [.5, 1, .5])

    return(
        <motion.div>
            <motion.div 
            style={{x, rotateZ, scale}} 
            drag="x" 
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={.2}
            className="card-container">
        </motion.div>
        </motion.div>
    )
}
