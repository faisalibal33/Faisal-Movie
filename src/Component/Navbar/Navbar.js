import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container">
            <a class="navbar-brand" href="#">Search Movie</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-link active" href="#">Search Movie</a>
                <a class="nav-link active" href="#">SignOut</a>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;