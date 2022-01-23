import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apimovie, setApimovie] = useState()
  const [search, setSearch] = useState()
  
  // useEffect (() => {
  //   cobaApi ()
  // }, []);

  // const cobaApi = async () => {
  //   try{
  //     const {data} = await axios.get(`http://www.omdbapi.com/?apikey=88bf0a87&s=harry potter`)
  //     console.log (data)
  //     setApimovie(data)
  //   }
  //   catch (error) {
  //     console.log(error, 'cobaApi Error')
  //   }
  // }

  const handle = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const {data} = await axios.get(`http://www.omdbapi.com/?apikey=88bf0a87&s=${search}`)
      console.log(data)
      setApimovie(data)
    }
    catch (error){
      console.log (error, "submit Error")
    }
  }
  
  
  return (
    <div className="App">
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
