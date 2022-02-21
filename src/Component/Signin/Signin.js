import React, { useState } from "react";
import 'tachyons';

const Signin = ({ruteChange, loadUser}) => {
  const [emailku, setEmailku] = useState('')
  const [passwordku, setPasswordku] = useState('')

  const onChangeEmail = (e) => {
    setEmailku(e.target.value)
  } 

  const onChangePassword = (e) => {
    setPasswordku(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(emailku, passwordku)
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: emailku,
        password: passwordku
      })
    })
    .then (response => response.json())
    .then (user => {
      if (user.id) {
        loadUser(user)
        ruteChange('home')        
      }
    })
  }

    return (
      <article className="br3 ba bg-dark dark-gray b--white-30 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">   
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 white mh0">Sign In</legend>
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
                value="Sign in"/>
            </div>
            <div className="mt3">
              <p
                onClick= {() => ruteChange('register')}
                className="tl ma0 f6 link dim black db white pointer">Register</p>
            </div>
          </form>
        </main>
      </article>
      
    );
}

export default Signin;