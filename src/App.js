import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Searchmovie from './Component/Searchmovie/Searchmovie';
import Card from './Component/Card/Card';
import 'tachyons';
import Signin from './Component/Signin/Signin';
import Register from './Component/Register/Register';

function App() {
  const [apimovie, setApimovie] = useState()
  const [search, setSearch] = useState()
  let [route, setRoute] = useState('signin')
  
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

  const rutePage = () => {
    setRoute(route='page')
  }
  const ruteSignin = () => {
    setRoute(route='signin')
  }
  const ruteRegister = () => {
    setRoute(route='register')
  }
  return (
    <div> {
      route === 'page' ?
        <>
          <Navbar ruteSignin = {ruteSignin}/> 
          <div>
            <Searchmovie handle={handle} handleSubmit={handleSubmit}/>
            <hr/>
            <Card apimovie={apimovie}/>
          </div>  
        </>
      :(route === 'signin') ?
        <Signin ruteRegister={ruteRegister} rutePage={rutePage}/>
      :<Register ruteSignin={ruteSignin} rutePage={rutePage} />
    }
    </div>
  );
}

export default App;
