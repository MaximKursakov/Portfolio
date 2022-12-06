
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
        title: "Project 1", subtitle: "Ecommerce Website", imageTitle:"Project0", techstack: ["HTML", "CSS", "REACT", "MAPBOX"], websiteLink: "https://maximkursakov.github.io/shop", codeLink: "https://github.com/MaximKursakov/shop", id: 1, description: "This Projected started off as a simple basket and evolved into an entire frontend for a fictional Chair Shop. I chose a minimalistic design approach with a monochromatic color scheme and lots of white space to fit the chair's clean style."
    },
    {
        title: "Project 2", subtitle: "Weather App", imageTitle:"Project1", techstack: ["HTML", "CSS", "JAVASCRIPT"], websiteLink: "https://maximkursakov.github.io/Weather-App", codeLink: "https://github.com/MaximKursakov/Weather-App", id: 2, description: "The Weather App fetches data depending on the users location / input and displays it accordingly. The websites design changes together with certain weather conditions."
    },
    {
        title: "Project 3", subtitle: "Personal Website", imageTitle:"Project2", techstack: ["HTML", "CSS", "REACT", "FRAMER-MOTION"], websiteLink: "", codeLink: "https://github.com/MaximKursakov/Portfolio", id: 3, description:"The focus of my portfolio laid on the usage of animations to bring some life and personality into the website, while keeping the design clean and simple."
    },
    {
        title: "Project 4", subtitle: "DistractLess", imageTitle:"Project3", techstack: [], websiteLink: "", codeLink: "", id: 4, description: "In Progress: Chrome extension which adds aids to block off distractions through functionalities such as: Blocking whole websites during a certain time period or after a defined amount of usage, blocking parts of youtube such as the recommended or the comment section etc."
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