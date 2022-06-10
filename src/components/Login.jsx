import React, { useState } from "react";
import { useApp } from "./context/AppContext";
import FormInput from "./form/FormInput";

const Login = () => {
  const initialValue = {
    username: "",
    password: "",
  };
  const [values, setValues] = useState(initialValue);
  const {state: {isLoding}, logIn} = useApp();

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
        <button disabled={isLoding}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
