import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export function Project({mousePositionInParentX, mousePositionInParentY, parentRef}) {
    const containerRef = useRef()
    const imageRef = useRef()

    const x = useMotionValue(0)
    const y = useMotionValue(-300)
    const rotateX = useTransform(y, [-300, 300], [5, -5])
    const rotateY = useTransform(x, [-300, 300], [-5, 5])

    function getImageCenter(image, container) {
        return {
            X : (image.current.clientWidth / 2) + (image.current.offsetLeft),
            Y : (image.current.clientHeight) + (container.current.offsetTop - parentRef.current.offsetTop)
        }
    }

    useEffect(() => {
        setAnimationVariables(imageRef, containerRef, x, y, mousePositionInParentX, mousePositionInParentY)
    }, [mousePositionInParentX, mousePositionInParentY])

    function setAnimationVariables(imageRef, containerRef, x, y, mouseX, mouseY) {
        const imageCenter = getImageCenter(imageRef, containerRef)
        x.set(mouseX - imageCenter.X)
        y.set(mouseY - imageCenter.Y)
    }
    return(
        <div 
            style={{perspective: 500}}
            ref={containerRef}
            className="projects-odd">
                <motion.div
                style={{ rotateX : rotateX, rotateY: rotateY, backgroundImage: `url(./images/Project0.png)`}}
                ref={imageRef}
                className="project-image">
                </motion.div>
                <div className="project-info">
                    <h2>Project 1</h2>
                    <h3>Ecommerce Website</h3>
                    <p>
                        This Projected started of as a simple Basket and evolved into an entire Frontend for a Fictional Chair Shop. 
                        I chose a minimalistic design approach with a Monochromatic Color Scheme and lots of white space to fit the chairs clean style.</p>
                    <ul>
                        <li>HTML</li>
                        <li>-</li>
                        <li>CSS</li>
                        <li>-</li>
                        <li>React</li>
                        <li>-</li>
                        <li>MapBox</li>
                    </ul>
                    <div className="project-buttons">
                        <button>Visit Site</button>
                        <button>View Code</button>
                    </div>
                </div>
            </div>
    )
}