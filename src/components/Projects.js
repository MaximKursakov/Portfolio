
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
        name="projects"
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
        </div>
    )
}