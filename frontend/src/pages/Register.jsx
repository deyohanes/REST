import React from "react";
import "../style.css";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector,useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {register,reset} from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: 251,
    address: "",
    username: "",
    password: "",
    password2: "",
  });
  const {
    firstName,
    lastName,
    email,
    phonenumber ,
    address,
    username,
    password,
    password2,
  } = formData;

const navigate = useNavigate()
const dispatch = useDispatch()

const { user, isLoading, isError, isSuccess, message } = useSelector(
  (state) => state.auth
)

useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess || user){
    navigate('/')
  }
  dispatch(reset())
},[user, isError, isSuccess, message, navigate, dispatch ] )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2){
      toast.error("Password Don't match")
    }else {
      const userData = 
      { firstName,
        lastName,
        email,
        phonenumber,
        address,
        username,
        password,
      }
        dispatch(register(userData))
    }
  }

  if(isLoading){
    return <Spinner/>
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
