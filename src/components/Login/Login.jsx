import { Alert } from 'bootstrap';
import React from 'react';
import AnotherMenu from '../AnotherMenu/AnotherMenu';
import './Login.css'
const Login = () => {


  const loginHandler=e=>{
      e.preventDefault()

      const email=e.target.email.value
      const password=e.target.password.value

      const userDet={
        'email':email,
        'password':password
      }

      fetch('http://localhost:8080/signin',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(userDet)
    }).then(res=>res.json())
      .then(data=>{

      if(data.userId){
        window.location.replace("/");
        localStorage.setItem('loggedData',JSON.stringify(data))
        console.log(data)
      }else{
        window.location.replace('/loginerror')
      }
// console.log(data)
       
      })
  }


    return (
      <div>
        <AnotherMenu></AnotherMenu>
        <div className='login-container'>
          <h1>Login</h1>
            <form onSubmit={loginHandler}>
  <div className="form-group row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" name='email'  className="form-control" id="staticEmail"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" name='password' className="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div><br />
  <button type="submit" className="btn btn-primary submit-btn">Submit</button>
  <br /><br />
      <p>Don't have any account <a href="/signup">create one</a></p>
</form>
        </div>
        </div>
    );
};

export default Login;

    // <p>Not a member? <a href="#">Create Account</a><p>
