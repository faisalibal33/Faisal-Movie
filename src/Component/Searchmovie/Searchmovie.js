import React from "react";

const Searchmovie = ({handleSubmit, handle, nama, entries, loadUser}) => {
    return (
        <div className='container'>
            <div className='row mt-3 justify-content-center'>
                <div className='col-md-8'>
<<<<<<< HEAD
                <h4 className="tc ma0">{`hai ${nama}, your current entry count is ...`} </h4>
                <h2 className="tc ma0">{`"${entries}"`}</h2>
=======
                <h1 className='tc ma0'>{`hai ${nama}, your current entry count is ...`} </h1>
                <h2 className="tc ma0">{`${entries}`}</h2>
>>>>>>> 0025b22b4a9035de5dffdeb509c7300d9f05b1ba
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
