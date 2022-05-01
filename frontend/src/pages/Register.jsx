import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    address: "",
    username: "",
    password: "",
    password2: "",
  });
  const {
    firstName,
    lastName,
    email,
    phonenumber,
    address,
    username,
    password,
    password2,
  } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please Create An Account</p>
      </div>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="fname"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={onChange}
          />
          
          </div>
          <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
          />
          
          </div>
          <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email Name"
            value={email}
            onChange={onChange}
          />
          
          </div>
          <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="phonenumber"
            name="phonenumber"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={onChange}
          />
          
          </div>
          <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Address"
            value={address}
            onChange={onChange}
          />
          
          </div>
          <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="UserName"
            value={username}
            onChange={onChange}
          />
          
          </div>
          <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          
          </div>
          <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="password2"
            value={password2}
            placeholder="Confirm Password"
            onChange={onChange}
          />          
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
