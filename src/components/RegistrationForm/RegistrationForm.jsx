import { useState } from 'react';
import './RegistrationForm.css';
import { apiAuthenticateReq } from '../../api/api';

export const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = e => {
    setUsername(e.target.value);
  }

  const changeEmail = e => {
    setEmail(e.target.value);
  }

  const changePassword = e => {
    setPassword(e.target.value);
  }

  const onRegistrationSubmit = e => {
    e.preventDefault();

    apiAuthenticateReq('register', 'POST', {
      username,
      email,
      password,
    }).then(r => {
      console.log(r);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className='registration-wrapper'>
      <div className='registration-form'>
        <h1 className='registration-form__header'>Registration</h1>

        <form action='#' onSubmit={onRegistrationSubmit}>
          <p className='registration-form__text'>
            User Name:
          </p>

          <input
            className='registration-form__input'
            type='text'
            name='username'
            placeholder='User Name'
            onChange={changeUsername}
            value={username}
            required
          />

          <p className='registration-form__text'>
            Email:
          </p>

          <input
            className='registration-form__input'
            type='email'
            name='email'
            placeholder='Email'
            onChange={changeEmail}
            value={email}
            required
          />

          <p className='registration-form__text'>
            Full Name:
          </p>

          <input
            className='registration-form__input'
            type='password'
            name='password'
            placeholder='Password'
            onChange={changePassword}
            value={password}
            required
          />

          <button 
            className='registration-form__button' 
            type='submit'>
              Registration
            </button>
        </form>
      </div>
    </div>
  )
}
