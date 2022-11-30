import {MdOutlineWavingHand} from "react-icons/md"

export function About() {
    return(
        <div className="about-container">
            <img src="./images/Avatar.svg" alt="avatar"></img>
            <div className="about-info">
                <h2>ABOUT ME</h2>
                <div>
                <h3>Hey there! Im Maxim! <MdOutlineWavingHand></MdOutlineWavingHand></h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}