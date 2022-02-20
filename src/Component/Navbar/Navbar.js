import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

const Navbar = ({ruteChange}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container">
                <p className="navbar-brand">Search Movie</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{display: "flex", justifyContent: "flex-end"}}>
                        <p onClick = {() => ruteChange('signin')} className="f3 link dim white underline pointer pa3">Signout</p>
                    </div>
                </div> 
            </div>
        </nav>
    )
}

export default Navbar;