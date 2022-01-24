import React from "react";

const Searchmovie = ({handleSubmit, handle}) => {
    return (
        <div className='container'>
            <div className='row mt-3 justify-content-center'>
                <div className='col-md-8'>
                <h1 className='text-center'> Search Movie </h1>
                <form onSubmit={handleSubmit}> 
                    <div className="input-group mb-3">
                    <input onChange={handle} type="text" className="form-control" placeholder="Movie Title..."/>
                    <button className="btn btn-warning" type="submit">Search</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Searchmovie;