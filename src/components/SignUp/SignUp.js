import React from 'react';
import './signup.css';



const SignUp = () => {
  const handleCreateAccount= e=>{
  e.preventDefault()

    const name=e.target.name.value
    const email=e.target.email.value
    const phone=e.target.phone.value
    const password=e.target.password.value

    const user= {name:name,email:email,phone:phone,password:password}

    // Post data to backend

    fetch('http://localhost:8080/user',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data){
        console.log(data)
        window.location.replace("/login");
      }
    })
}


    return (
        <div className='signup-container'>
            <h1>Create Account</h1><br />
            <form onSubmit={handleCreateAccount} method='post' className='form-container'>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" name='name' className="form-control" id="staticEmail" placeholder='Name' required/>
    </div>
  </div>

  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name='email' className="form-control" id="inputPassword" placeholder="Email" required/>
    </div>
  </div>

  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Phone</label>
    <div className="col-sm-10">
      <input type="number" name='phone' className="form-control" id="inputPassword" placeholder="Phone" required/>
    </div>
  </div>

  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" name='password' className="form-control" id="inputPassword" placeholder="Password" required/>
    </div>
  </div>
  <br />
  <button type="submit" className="btn btn-primary submit-btn">Submit</button>

</form>
        </div>
    );

};

export default SignUp;