import React from 'react'
import FormInput from './form/FormInput';

const Login = () => {
    const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        // {
        //     id: 2,
        //     name: "email",
        //     type: "email",
        //     placeholder: "Email",
        //     errorMessage: "It should be a valid email address!",
        //     label: "Email",
        //     required: true,
        //   },
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
      };

      const onChange = (e) => {
        // setValues({ ...values, [e.target.name]: e.target.value });
      };

  return (
    <div className='app'>
         <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            // value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login