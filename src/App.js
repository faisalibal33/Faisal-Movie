import axios from 'axios';
import React from 'react';
import { useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Searchmovie from './Component/Searchmovie/Searchmovie';
import Card from './Component/Card/Card';
import 'tachyons';
import Signin from './Component/Signin/Signin';
import Register from './Component/Register/Register';

const initialState = {
  id: '',
  name: '',
  email: '',
  entries: 0,
  joined: ''
}

function App() {
  const [apimovie, setApimovie] = useState()
  const [search, setSearch] = useState()
  let [route, setRoute] = useState('signin')
  const [dataAkun, setDataAkun] = useState({initialState})

  // useEffect(() => {
  //   server();
  // });

  // const server = async () => {
  //   try{
  //     const response = await axios.get('http://localhost:3000/')
  //     console.log(response.data)
  //   }catch (err) {
  //     console.log("error")
  //   }
  // }

  const loadUser = (data) => {
    setDataAkun({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
  }
  
  const handle = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      fetch('http://localhost:3000/url', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            search: search
          })
        })
      .then(response => response.json())
      .then(data => {
        setApimovie(data)
      })
      if (true) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: dataAkun.id
          })
        })
        .then(response => response.json())
        .then(count => {
          setDataAkun({...dataAkun, entries: count})
        })

      }
    }
     catch (error){
      console.log (error, "submit Error")
    }
  }
  const ruteChange = (route) => {
    if (route === 'signin'){
      setDataAkun(initialState)
      setSearch('')
      setApimovie('')
    }
    setRoute(route)
  }
 
  return (
    <div> {
      route === 'home' ?
        <>
          <Navbar ruteChange={ruteChange}/> 
          <div>
            <Searchmovie nama={dataAkun.name} entries={dataAkun.entries} handle={handle} handleSubmit={handleSubmit}/>
            <hr/>
            <Card apimovie={apimovie}/>
          </div>  
        </>
      :(route === 'signin') ?
        <Signin loadUser={loadUser} ruteChange={ruteChange}/>
      :<Register loadUser={loadUser} ruteChange={ruteChange} />
    }
    </div>
  );
}

export default App;
