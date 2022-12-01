
import {useRef} from "react"
import { motion, useMotionValue, useTransform } from "framer-motion";

export function Projects() {

    const parentRef = useRef()
    const imageRef1 = useRef()
    const imageRef2 = useRef()
    const x1 = useMotionValue(0)
    const y1 = useMotionValue(-300)
    const x2 = useMotionValue(0)
    const y2 = useMotionValue(-300)

    const rotateX1 = useTransform(y1, [-300, 300], [10, -10])
    const rotateY1 = useTransform(x1, [-300, 300], [-10, 10])
    const rotateX2 = useTransform(y2, [-300, 300], [10, -10])
    const rotateY2 = useTransform(x2, [-300, 300], [-10, 10])

    function handleMouseOver(event, x, y, image) {
        if (!event) return
        const MouseInParent = getMousePositionInParent(event)
        const imageCenter = getImageCenter(image)
        x.set(MouseInParent.X - imageCenter.X)
        y.set(MouseInParent.Y - imageCenter.Y)
    }


    function getImageCenter(image) {
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

    const ProjectsArray = [{
        title: "Project1", subtitle: "Ecommerce Website", stack: ["HTML", "CSS", "REACT", "MAPBOX"], WebsiteLink: "", GithubLink : "", id: 1, description: " This Projected started of as a simple Basket and evolved into an entire Frontend for a Fictional Chair Shop. I chose a minimalistic design approach with a Monochromatic Color Scheme and lots of white space to fit the chairs clean style."
    },
    {
        title: "Project2", subtitle: "Weather App", stack: ["HTML", "CSS", "JAVASCRIPT"], WebsiteLink: "", GithubLink : "", id: 2, description: "The Weather App fetches data depending on the Users Location / Input and Displays it accordingly. The Websites Design changes together with certain weather conditions."
    },
    {
        title: "Project3", subtitle: "Portfolio", stack: ["HTML", "CSS", "REACT", "FRAMER-MOTION"], WebsiteLink: "", GithubLink : "", id: 3, description:"With my Portfolio I my wanted to bring in more life and creativity into my website through its design and the usage of animations.Those are beeing used more often while stil keeping the Design simple and clean."
    },
    {
        title: "Project4", subtitle: "DistractLess", stack: [], WebsiteLink: "", GithubLink : "", id: 4, description:"(Comming Soon) A Google Chrome extension which enables you to keep you focused through the following features: <br></br>-Block of specified Websites for a certain daytime / ussage time / day / week <br></br>-Remove the recommended / comment / subscriptions section on youtube-challenges that make it harder to reanable the blocked websites"
    }]

    function isOdd(x) {
        return ( x & 1 ) ? true : false;
      }
      console.log(isOdd(1))

    return(
        <div className="projects-container"
        ref={parentRef}
        >
            {ProjectsArray.map((project) => 
             
                <div 
                onMouseMove={(e) => handleMouseOver(e, x1, y1, imageRef1)}
                className={isOdd(project.id) ? "projects-odd" : "projects-even"}
                style={{perspective: 500}}
                >
                    <motion.div
                    style={{ rotateX : rotateX1, rotateY: rotateY1, backgroundImage: `url(./images/Project${project.id - 1}.png)`}}
                    ref={imageRef1}
                    className="project-image">
                    </motion.div>
                    <div className="project-info">
                        <h2>{project.title}</h2>
                        <h3>{project.subtitle}</h3>
                        <p>{project.description}</p>
                        <ul>
                            {project.stack.map(tech => 
                                <li>{tech}</li>)}
                        </ul>
                        <div className="project-buttons">
                            <button>Visit Site</button>
                            <button>View Code</button>
                        </div>
                    </div>
                </div>
            )}
        


            <div 
            onMouseMove={(e) => handleMouseOver(e, x1, y1, imageRef1)}
            
            style={{perspective: 500}}
            
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
            >
                <motion.div
                className="project-image"
                style={{backgroundImage: `url(./images/Project1.png)`}}
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