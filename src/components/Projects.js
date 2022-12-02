
import {useEffect, useRef, useState} from "react"
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Project } from "./Project";

export function Projects() {
    const parentRef = useRef()
 
    const [mousePositionInParentX, setMousePositionInParentX] = useState(0)
    const [mousePositionInParentY, setMousePositionInParentY] = useState(0)

    


    function getMousePositionInParent(event) {
        const parentPositionY = parentRef.current.offsetTop
        const parentPositionX = parentRef.current.offsetLeft
        const mousePositionY = event.pageY
        const mousePositionX = event.pageX
        setMousePositionInParentX(mousePositionX - parentPositionX)
        setMousePositionInParentY(mousePositionY - parentPositionY)
    }

    const projectArray = [{
        title: "Project 1", subtitle: "Ecommerce Website", imageTitle:"Project0", techstack: ["HTML", "CSS", "REACT", "MAPBOX"], websiteLink: "https://maximkursakov.github.io/shop", codeLink: "https://github.com/MaximKursakov/shop", id: 1, description: "This Projected started of as a simple Basket and evolved into an entire Frontend for a Fictional Chair Shop. I chose a minimalistic design approach with a Monochromatic Color Scheme and lots of white space to fit the chairs clean style."
    },
    {
        title: "Project 2", subtitle: "Weather App", imageTitle:"Project1", techstack: ["HTML", "CSS", "JAVASCRIPT"], websiteLink: "https://maximkursakov.github.io/Weather-App", codeLink: "https://github.com/MaximKursakov/Weather-App", id: 2, description: "The Weather App fetches data depending on the Users Location / Input and Displays it accordingly. The Websites Design changes together with certain weather conditions."
    },
    {
        title: "Project 3", subtitle: "Personal Website", imageTitle:"Project2", techstack: ["HTML", "CSS", "REACT", "FRAMER-MOTION"], websiteLink: "", codeLink: "https://github.com/MaximKursakov/Portfolio", id: 3, description: "With my Portfolio I my wanted to bring in more life and creativity into my website through its design and the usage of animations.Those are beeing used more often while stil keeping the Design simple and clean."
    },
    {
        title: "Project 4", subtitle: "DistractLess", imageTitle:"Project3", techstack: [], websiteLink: "", codeLink: "", id: 4, description: "With my Portfolio I my wanted to bring in more life and creativity into my website through its design and the usage of animations.Those are beeing used more often while stil keeping the Design simple and clean."
    }]


    return(
        <div className="projects-container"
        onMouseMove={(e) => getMousePositionInParent(e)}
        ref={parentRef}
        >
            <div className="projects-header">
            <h2>WORK</h2>
            </div>
            <Project 
            mousePositionInParentX={mousePositionInParentX}
            mousePositionInParentY={mousePositionInParentY} 
            parentRef={parentRef}
            project={projectArray[0]}></Project>
            <Project 
            mousePositionInParentX={mousePositionInParentX}
            mousePositionInParentY={mousePositionInParentY} 
            parentRef={parentRef}
            project={projectArray[1]}></Project>
            <Project 
            mousePositionInParentX={mousePositionInParentX}
            mousePositionInParentY={mousePositionInParentY} 
            parentRef={parentRef}
            project={projectArray[2]}></Project>
            <Project 
            mousePositionInParentX={mousePositionInParentX}
            mousePositionInParentY={mousePositionInParentY} 
            parentRef={parentRef}
            project={projectArray[3]}></Project>

    

            {/* <div 
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
            </div> */}
        </div>
    )
}