export function Origami() {
    return (
        <>
        <div className="origami">
            <div className="origami-header">
                <h1>Origami Presentation</h1>
                <p>Just a short showcase that origami can be more than just a simple boat or crane :)</p>
            </div>
            <div className="origami-1">
                <img className="origami-image" src="/images/Origami1.jpg" alt="crease pattern"/>
                <img className="creasepattern-image" src="/images/Origami1-cp.jpg" alt="crease pattern"/>
            </div>
            <div className="origami-2">
                <img className="origami-image" src="/images/Origami2.jpg" alt="crease pattern"/>
                <img className="creasepattern-image" src="/images/Origami2-cp.jpg" alt="crease pattern"/>
            </div>
            <div className="origami-3">
                <img className="origami-image" src="/images/Origami3.jpg" alt="crease pattern"/>
                {/* <img src="/images/Origami1-cp.jpg" alt="crease pattern"/> */}
            </div>
        </div>
        </>
    )
}