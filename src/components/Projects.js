
import {useRef} from "react"
import { motion, useMotionValue, useTransform } from "framer-motion";

export function Projects() {

    const parentRef = useRef()
    const imageRef = useRef()
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y, [-200, 200], [45, -45])
    const rotateY = useTransform(x, [-200, 200], [-45, 45])

    function handleMouseOver(event) {
        if (!event) return
        const MouseInParent = getMousePositionInParent(event)
        const imageCenter = getImageCenter(imageRef)
        x.set(MouseInParent.X - imageCenter.X)
        y.set(MouseInParent.Y - imageCenter.Y)
    }


    function getImageCenter(image) {
        const parentPositionY = parentRef.current.offsetTop
        const parentPositionX = parentRef.current.offsetLeft
        return {
            X : (image.current.clientWidth / 2) + (image.current.offsetLeft),
            Y : (image.current.clientHeight / 2) + (image.current.offsetTop)
        }
    }

    function getMousePositionInParent(event) {
        const parentPositionY = parentRef.current.offsetTop
        const parentPositionX = parentRef.current.offsetLeft
        const mousePositionY = event.pageY
        const mousePositionX = event.pageX
        return {
            Y : mousePositionY - parentPositionY,
            X : mousePositionX - parentPositionX
        }
    }


    return(
        <div className="projects-container">
            <div 
            style={{perspective: 400,}}
            onMouseMove={(e) => handleMouseOver(e)}
            ref={parentRef}
            className="projects-odd">
                <motion.div
                style={{ rotateX, rotateY, backgroundImage: `url(./images/Project0.png)`}}
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
            <div className="projects-even"
            >
                <div
                className="project-image"
                style={{backgroundImage: `url(./images/Project1.png)`}}>
                </div>
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
            <div className="projects-odd">
                <div
                className="project-image"
                style={{backgroundImage: `url(./images/Project3.png)`}}>
                </div>
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
            <div className="projects-even">
                <div
                className="project-image"
                style={{backgroundImage: `url(./images/Project2.png)`}}>
                </div>
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