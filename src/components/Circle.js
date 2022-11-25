import { motion } from "framer-motion"

export function Circle() {
    const draw = {
      hidden: { pathLength: 0, opacity: 0 },
      visible:  {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: {delay: 1, type: "spring", duration: 1.5, bounce: 0 },
            opacity: {delay: 1, duration: 0.01 }
          }
      }
    };
    return(
        <div className="circle">
            <motion.svg
            
                    width="70"
                    height="70"
                    viewBox="0 0 200 200"
                    initial="hidden"
                    animate="visible"
                    >
                    <motion.circle
                        cx="100"
                        cy="100"
                        r="80"
                        stroke="#6DAFFE"
                        variants={draw}
                    />
                </motion.svg>
        </div>
    )
}