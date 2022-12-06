import { motion } from "framer-motion";

export function Intro1 ({introLevel}) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0, x: 0 },
        visible: (i) => {
          const delay = 0.5 + i / 3;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        },
        exit: {x : "-180vw", transition: {duration: 1.5}}
      };

      const strokeColor = "#1C1B20"

return(
    <motion.div variants={draw} exit="exit" className="welcome">
        <motion.div>
            <motion.svg 
            width="500" 
            height="400" 
            viewBox="0 0 199 165" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
                <g id="Welcome">
                        <motion.path initial={{scale: 0}} animate={{scale: 1}} transition={{duration: .5, delay: 2}} className="welcome-text" id="Dot" d="M199 151C199 158.18 193.18 164 186 164C178.82 164 173 158.18 173 151C173 143.82 178.82 138 186 138C193.18 138 199 143.82 199 151Z" fill="#EDF6FF"/>
                    <g id="O">
                    <g id="O_2">
                    <mask id="path-2-inside-1_3_21" fill="white">
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={0} className="welcome-text" d="M172 128C172 147.882 155.882 164 136 164C116.118 164 100 147.882 100 128C100 108.118 116.118 92 136 92C155.882 92 172 108.118 172 128Z"/>
                    </mask>
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={0} className="welcome-text" d="M172 128C172 147.882 155.882 164 136 164C116.118 164 100 147.882 100 128C100 108.118 116.118 92 136 92C155.882 92 172 108.118 172 128Z" stroke={strokeColor} strokeWidth="32" mask="url(#path-2-inside-1_3_21)"/>
                    </g>
                    </g>
                    <g id="H">
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={1} className="welcome-text" id="Waag" d="M17.0263 37.1309L37.8148 37.024" stroke={strokeColor} strokeWidth="16"/>
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={0} className="welcome-text" id="Senk1" d="M9.36998 73.0044L9.3763 0.999999" stroke={strokeColor} strokeWidth="16"/>
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={2} className="welcome-text" id="Senk2" d="M45.37 73.0044L45.3763 0.999999" stroke={strokeColor} strokeWidth="16"/>
                    </g>
                    <g id="L1">
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={1} id="Waag_2" d="M1 156.105L44 156.105" stroke={strokeColor} strokeWidth="16"/>
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={0} id="Senk" d="M8.89939 164.004L8.90572 92" stroke={strokeColor} strokeWidth="16"/>
                    </g>
                    <g id="L2">
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={1} className="welcome-text" id="Waag_3" d="M56 156.105L99 156.105" stroke={strokeColor} strokeWidth="16"/>
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={0} className="welcome-text" id="Senk_2" d="M63.8994 164.004L63.9057 92" stroke={strokeColor} strokeWidth="16"/>
                    </g>
                    <g id="E">
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={1} className="welcome-text" id="Waag3" d="M63.5 8.99997L100 9.00002" stroke={strokeColor} strokeWidth="16"/>
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={1} className="welcome-text" id="Waag1" d="M64 65L100.125 65.0434" stroke={strokeColor} strokeWidth="16"/>
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={2} className="welcome-text" id="Waag2" d="M78.9999 36.0584L99 35.9971" stroke={strokeColor} strokeWidth="16"/>
                        <motion.path variants={draw} initial="hidden" animate="visible" custom={0} className="welcome-text" id="Senk_3" d="M71.37 73.0044L71.3763 0.999999" stroke={strokeColor} strokeWidth="16"/>
                    </g>
                </g>
            </motion.svg>
        </motion.div>
    </motion.div>
)
}