import React, { useEffect, useState } from "react";
import { useApp } from "./context/AppContext";
import FormInput from "./form/FormInput";
import LoadingOverlay from 'react-loading-overlay';
import './login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValue = {
    username: "",
    password: "",
  };
  const [values, setValues] = useState(initialValue);
  const {state: {isLoading, user}, logIn} = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    console.log('login render :', isLoggedIn,isLoading)
    if(isLoggedIn){
      navigate('/dashboard')
    }
  },[user])

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    logIn(values);
    setValues(initialValue);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <LoadingOverlay
  active={isLoading}
  spinner
  text='Logging in.....'
  >
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
    </LoadingOverlay>
  );
};

export default Login;
