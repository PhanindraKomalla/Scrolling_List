import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState(" ");

  let navigate = useNavigate();
  var username = "foo";
  var password = "bar"

  function loginFunction() {

    if (inputUserName === username && inputPassword === password) {
      console.log("working");
      navigate('/homepage')
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" style={{
              border: '1px solid black',
              padding: "3rem", borderRadius: "10px", marginTop: "3rem"
            }} >
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => { setInputUserName(e.target.value) }}
                />
                <small id="emailHelp" className="text-danger form-text">

                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => { setInputPassword(e.target.value) }}
                />
                <small id="passworderror" className="text-danger form-text">

                </small>
              </div>
              <div className="form-group form-check">
              </div>
              <button type="submit" className="btn btn-primary" onClick={loginFunction}>
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default LoginPage


// username : foo ;
//password: bar