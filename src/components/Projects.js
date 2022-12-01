
import {useRef} from "react"
import { motion } from "framer-motion";

export function Projects() {

    const imageRef = useRef()
    function handleMouseOver(event) {
        const parentPositionY = imageRef.current.offsetTop
        const parentPositionX = imageRef.current.offsetLeft
        const mousePositionY = event.pageY
        const mousePositionX = event.pageX
        console.log(event.pageY)
        console.log(event.pageX)
        console.log(imageRef.current.offsetTop)
        console.log(imageRef.current.offsetLeft)
    }


    return(
        <div className="projects-container">
            <div style={{position: "absolute", top: 3001, zIndex: 2, left: 252}}>d</div>
            <div 
            onMouseMove={(e) => handleMouseOver(e)}
            ref={imageRef}
            className="projects-odd">
                <div
                
                className="project-image"
                style={{backgroundImage: `url(./images/Project0.png)`}}>
                </div>
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