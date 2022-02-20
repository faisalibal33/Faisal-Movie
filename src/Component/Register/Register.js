import React, { useState } from "react";
import 'tachyons';

const Register = ({ruteChange, loadUser}) => {
  const [registerEmail, setRegisterEmail] = useState()
  const [registerPassword, setRegisterPassword] = useState()
  const [registerName, setRegisterName] = useState()

  const onChangeEmail = (e) => {
    setRegisterEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setRegisterPassword(e.target.value)
  }

  const onChangeName = (e) => {
    setRegisterName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: registerEmail,
        password: registerPassword,
        name: registerName
      })
    })
    .then (response => response.json())
    .then (user => {
      if(user.id) {
        loadUser(user);
        ruteChange('home');
      }else{
        console.log("errror")
      }
    })
  }

    return (
      <article className="br3 ba bg-dark dark-gray b--white-30 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">   
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 white mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                <input 
                  className="white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="name" 
                  name="name"  
                  id="name"
                  onChange={onChangeName}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                <input 
                  className="white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange={onChangeEmail}  
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                <input 
                  className="white b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={onChangePassword}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick= {onSubmit} 
                className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Register"/>
            </div>
            <div className="lh-copy mt3 w-50 center">
              <p onClick= {() => ruteChange('signin')} className="f6 link dim black db white">Sign in</p>
            </div>
          </form>
        </main>
      </article>
      
    );
}

export default Register;