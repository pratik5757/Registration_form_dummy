import React, { useState, useEffect } from 'react';

const Form = () => {
  const data = { name: '', email: '', password: '' };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log('Registered');
  }, [flag]);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert('All Fields are mandatory');
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <Pre>
        {flag ? (
          <h2 className='ui-define'>
            Hello {inputData.name}, You've Registered Successfully
          </h2>
        ) : null}
      </Pre>
      <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
          <h1>Registration Form</h1>
        </div>
        <div>
          <input
            type='text'
            placeholder='Enter Your Name'
            name='name'
            value={inputData.name}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Enter Your Email'
            name='email'
            value={inputData.email}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Enter Your PassWord'
            name='password'
            value={inputData.password}
            onChange={handleData}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
