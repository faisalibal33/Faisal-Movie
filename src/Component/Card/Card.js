import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({Title, Poster}) => {
    return (
        <div className="card w-25">
            <img src={Poster} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="btn btn-primary">Go somewhere</p>
            </div>
        </div>
    )
}

export default Card;