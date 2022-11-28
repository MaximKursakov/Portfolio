import { motion } from "framer-motion";

export function Intro2() {
    const fadeIn = {
        hidden : {opacity: 0, x: "50vw"},
        visible : (i) => {
            const delay = i * .5
            return {
                opacity: 1, 
                x: 0, 
                transition: {delay, duration: .7, type: "tween"} 
        };
    }
}
    const typeText = {
        invisible : {display: "none" },
        type : (i) => {
            const delay = 1.7 + i * .15
             return {
                display: "block",
                transition: {delay, }
            }
        },
    }
    return(
        <motion.div className="intro-part-2" initial="hidden" animate="visible">
            <motion.p className="welcome-text" variants={fadeIn} custom={1}>WELCOME!</motion.p>
            <motion.div className="greeting" variants={fadeIn} initial="hidden" animate="visible" custom={1.3}>
                <h2>I'M</h2>
                <motion.div className="name">
                    <motion.p variants={typeText} initial="invisible" animate="type" custom={1} >M</motion.p>
                    <motion.p variants={typeText} initial="invisible" animate="type" custom={2}>A</motion.p>
                    <motion.p variants={typeText} initial="invisible" animate="type" custom={3}>X</motion.p>
                    <motion.p variants={typeText} initial="invisible" animate="type" custom={4}>I</motion.p>
                    <motion.p variants={typeText} initial="invisible" animate="type" custom={5}>M</motion.p>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, yoyo:Infinity}} className="text-line"></motion.div>
                </motion.div>
            </motion.div>
            <motion.h3 variants={fadeIn} custom={1.6}>FRONTEND DEVELOPER</motion.h3>
            <motion.p className="welcome-info" variants={fadeIn} custom={1.9}>I'm a Frontend Developer with a huge passion for bringing great UIs into existence through solid and scalable code.</motion.p>
            {/* <motion.img variants={fadeIn} custom={2} src="/images/Avatar.svg"></motion.img> */}
            <motion.button  
                variants={fadeIn}
                custom={2.2}
                whileHover={{}} 
                transition={{duration: 2,
                repeat: Infinity,
                repeatType: "reverse",}} >About Me</motion.button>
        </motion.div>
    )
}