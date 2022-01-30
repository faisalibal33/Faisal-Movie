import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

const Navbar = ({ruteSignin}) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container">
                <p class="navbar-brand">Search Movie</p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" style={{display: "flex", justifyContent: "flex-end"}}>
                        <p onClick = {ruteSignin} className="f3 link dim white underline pointer pa3">Signout</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;