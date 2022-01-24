import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [apimovie, setApimovie] = useState()
  const [search, setSearch] = useState()
  
  const handle = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.get(`http://www.omdbapi.com/?apikey=88bf0a87&s=${search}`)
      setApimovie(response.data.Search)
    }
    catch (error){
      console.log (error, "submit Error")
    }
  }
  
  return (
    <div>
      <Navbar />
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
      <hr/>
      <div className='container'>
      <div className='row row-cols-md-4'>
        {apimovie && apimovie.map((data, index) => {
          console.log(data)
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
    </div>
  );
}

export default App;
