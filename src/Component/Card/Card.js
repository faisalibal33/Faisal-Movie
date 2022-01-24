import React from "react";

const Card = ({apimovie}) => {
    return (
        <div className='container'>
            <div className='row row-cols-md-4'>
                {apimovie && apimovie.map((data, index) => {
                    return (
                        <div className='mb-3'>
                            <div key={index} className="card">
                                <img src={data.Poster} className="card-img-top" alt="Poster.."/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{data.Year}</h6>
                                    <a href="#" class="card-link">See Detail</a>
                                </div>
                            </div>
                         </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card;