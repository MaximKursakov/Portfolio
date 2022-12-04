import {MdOutlineWavingHand} from "react-icons/md"

export function About() {
    return(
        <div className="about-container" name="about">
            <img src="./images/Avatar.svg" alt="avatar"></img>
            <div className="about-info">
                <h2>ABOUT ME</h2>
                <div>
                <h3>Hey there! Im Maxim! <MdOutlineWavingHand></MdOutlineWavingHand></h3>
                </div>
                <p>I have a huge passion for creating excellent websites with great UIs and animations. As a Frontend Developer, I relish in both the artistic, as well as the logical aspects of web development and obsess with providing brilliant work for customers.
                </p><p>I achieve this on the one hand through my work ethic, which is characterized by a great amount of discipline and productivity, and on the other by continuously challenging myself and being eager to learn and evolve.</p>
                <p></p>
            </div>
            
        </div>
    )
}