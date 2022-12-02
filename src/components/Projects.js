
import {useRef, useState} from "react"
import { motion, useMotionValue, useTransform } from "framer-motion";

export function Projects() {
    const containerRef1 = useRef()
    const containerRef2 = useRef()
    const containerRef3 = useRef()
    const containerRef4 = useRef()
    const parentRef = useRef()
    const imageRef1 = useRef()
    const imageRef2 = useRef()
    const imageRef3 = useRef()
    const imageRef4 = useRef()
    const x1 = useMotionValue(0)
    const x2 = useMotionValue(0)
    const x3 = useMotionValue(0)
    const x4 = useMotionValue(0)
    const y1 = useMotionValue(0)
    const y2 = useMotionValue(-300)
    const y3 = useMotionValue(-300)
    const y4 = useMotionValue(-300)
    

    const rotateX1 = useTransform(y1, [-300, 300], [10, -10])
    const rotateX2 = useTransform(y2, [-300, 300], [10, -10])
    const rotateX3 = useTransform(y3, [-300, 300], [10, -10])
    const rotateX4 = useTransform(y4, [-300, 300], [10, -10])
    const rotateY1 = useTransform(x1, [-300, 300], [-10, 10])
    const rotateY2 = useTransform(x2, [-300, 300], [-10, 10])
    const rotateY3 = useTransform(x3, [-300, 300], [-10, 10])
    const rotateY4 = useTransform(x4, [-300, 300], [-10, 10])

    const [mousePositionInParentX, setMousePositionInParentX] = useState(0)
    const [mousePositionInParentY, setMousePositionInParentY] = useState(0)

    function getMousePositionInParent(event) {
        const parentPositionY = parentRef.current.offsetTop
        const parentPositionX = parentRef.current.offsetLeft
        const mousePositionY = event.pageY
        const mousePositionX = event.pageX
        setMousePositionInParentX(mousePositionX - parentPositionX)
        setMousePositionInParentY(mousePositionY - parentPositionY)

        setAnimationVariables(imageRef1, containerRef1, x1, y1, mousePositionInParentX, mousePositionInParentY)
        setAnimationVariables(imageRef2, containerRef2, x2, y2, mousePositionInParentX, mousePositionInParentY)
        setAnimationVariables(imageRef3, containerRef3, x3, y3, mousePositionInParentX, mousePositionInParentY)
        setAnimationVariables(imageRef4, containerRef4, x4, y4, mousePositionInParentX, mousePositionInParentY)
    }
    
    function getImageCenter(image, container) {
        return {
            X : (image.current.clientWidth / 2) + (image.current.offsetLeft),
            Y : (image.current.clientHeight) + (container.current.offsetTop - parentRef.current.offsetTop)
        }
    }

    function setAnimationVariables(imageRef, containerRef, x, y, mouseX, mouseY) {
        const imageCenter = getImageCenter(imageRef, containerRef)
        x.set(mouseX - imageCenter.X)
        y.set(mouseY - imageCenter.Y)
    }


    return(
        <div className="projects-container"
        onMouseMove={(e) => getMousePositionInParent(e)}
        ref={parentRef}
        >
            <div 
            style={{perspective: 500}}
            ref={containerRef1}
            className="projects-odd">
                <motion.div
                style={{ rotateX : rotateX1, rotateY: rotateY1, backgroundImage: `url(./images/Project0.png)`}}
                ref={imageRef1}
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
            <div 
            className="projects-even"
            style={{perspective: 500}}
            ref={containerRef2}
            >
                <motion.div
                className="project-image"
                style={{rotateX : rotateX2, rotateY: rotateY2, backgroundImage: `url(./images/Project1.png)`}}
                ref={imageRef2}>
                </motion.div>
                <div className="project-info">
                    <h2>Project 2</h2>
                    <h3>Weather App</h3>
                    <p>The Weather App fetches data depending on the Users Location / Input and Displays it accordingly. 
                        The Websites Design changes together with certain weather conditions.
                    </p>
                    <ul>
                        <li>HTML</li>
                        <li>-</li>
                        <li>CSS</li>
                        <li>-</li>
                        <li>Javascript</li>
                    </ul>
                    <div className="project-buttons">
                        <button>View Code</button>
                    </div>
                </div>
            </div>
            <div className="projects-odd"
            style={{perspective: 500}}
            ref={containerRef3}>
                <motion.div
                ref={imageRef3}
                className="project-image"
                style={{ rotateX : rotateX3, rotateY: rotateY3, backgroundImage: `url(./images/Project2.png)`}}>

                </motion.div>
                <div className="project-info">
                    <h2>Project 3</h2>
                    <h3>Portfolio</h3>
                    <p>
                        With my Portfolio I my wanted to bring in more life and creativity into my website through its design and the usage of animations.
                        Those are beeing used more often while stil keeping the Design simple and clean.
                    </p>
                    <ul>
                        <li>HTML</li>
                        <li>-</li>
                        <li>CSS</li>
                        <li>-</li>
                        <li>React</li>
                        <li>-</li>
                        <li>Framer-Motion</li>
                    </ul>
                    <div className="project-buttons">
                        <button>View Code</button>
                    </div>
                </div>
            </div>
            <div className="projects-even"
            style={{perspective: 500}}
            ref={containerRef4}>
                <motion.div
                ref={imageRef4}
                className="project-image"
                style={{ rotateX : rotateX4, rotateY: rotateY4, backgroundImage: `url(./images/Project3.png)`}}>
                </motion.div>
                <div className="project-info">
                    <h2>Project 4</h2>
                    <h3>DistractionLess</h3>
                    <p>(Comming Soon) A Google Chrome extension which enables you to keep you focused through the following features: <br></br>
                        -Block of specified Websites for a certain daytime / ussage time / day / week <br></br>
                        -Remove the recommended / comment / subscriptions section on youtube
                        -challenges that make it harder to reanable the blocked websites
                        </p>

                    <ul>
                    </ul>
                    <div className="project-buttons">

                    </div>
                </div>
            </div>
        </div>
    )
}