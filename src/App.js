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
    <div className="App">
      <Navbar />
      <h1> Search Movie </h1> <hr/>
      <form onSubmit={handleSubmit}> 
        <input onChange={handle}/>
        <button>Search</button>
      </form><hr/>
      {JSON.stringify(apimovie)}
    </div>
  );
}

export default App;
