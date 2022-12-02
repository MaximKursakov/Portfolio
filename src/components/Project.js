import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export function Project({mousePositionInParentX, mousePositionInParentY, parentRef, project}) {
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

    function isOdd(id) {
        return (id % 2) ? true : false
    }
    return(
        <div 
            style={{perspective: 500}}
            ref={containerRef}
            className={isOdd(project.id) ? "projects-odd" : "projects-even"}>
                <motion.a
                href={project.websiteLink}
                target="_blank"
                style={{ 
                    rotateX, 
                    rotateY, 
                    backgroundImage: `url(./images/${project.imageTitle}.png)`, 
                    pointerEvents: project.websiteLink === "" ? "none" : "default"}}
                ref={imageRef}
                className="project-image">
                </motion.a>
                <div className="project-info">
                    <h2>{project.title}</h2>
                    <h3>{project.subtitle}</h3>
                    <p>
                        {project.description}</p>
                    <ul>
                        {project.techstack.map(tech => 
                        <li>
                            {tech}
                        </li>)
                        }
                    </ul>
                    <div className="project-buttons">
                        {project.websiteLink !== "" ? 
                        <a href={project.websiteLink} target="_blank" rel="noreferrer">Visit Site</a> 
                        : null}
                        {project.codeLink !== "" ? 
                        <a href={project.codeLink} target="_blank" rel="noreferrer">View Code</a>
                        : null}
                        
                    </div>
                </div>
            </div>
    )
}