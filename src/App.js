import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Searchmovie from './Component/Searchmovie/Searchmovie';
import Card from './Component/Card/Card';

function App() {
  const [apimovie, setApimovie] = useState()
  const [search, setSearch] = useState()
  
  const handle = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.get(`https://www.omdbapi.com/?apikey=88bf0a87&s=${search}`)
      setApimovie(response.data.Search)
    }
    catch (error){
      console.log (error, "submit Error")
    }
  }
  
  return (
    <div>
      <Navbar />
      <Searchmovie handle={handle} handleSubmit={handleSubmit}/>
      <hr/>
      <Card apimovie={apimovie}/>
    </div>
  );
}

export default App;
