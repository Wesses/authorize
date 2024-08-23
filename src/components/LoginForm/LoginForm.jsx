import './LoginForm.css'
import { FaUser, FaLock } from 'react-icons/fa';
import { apiAuthenticateReq } from '../../api/api';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const tokensKey = 'tokens';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [test, setTest] = useState(null);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  const onSubmitLogin = (e) => {
    e.preventDefault();

    apiAuthenticateReq('login', 'POST', {
      username,
      password,
    }).then(r => {
      setData(r);
    }).catch(() => {
      setIsError(true);
    });
  }

  const usernameChange = (e) => {
    setIsError(false);
    setUsername(e.target.value);
  }

  const passwordChange = (e) => {
    setIsError(false);
    setPassword(e.target.value);
  }

  const onButtonClick = () => {
    fetch('https://communal.in.ua/Cabinet6api/api/test')
      .then(r => r.json())
      .then(r => setTest(r))
      .catch(e => console.error(e))
      .finally(() => console.log('test - ', test));
  }

  useEffect(() => {
    console.log('data - ', data);

    if (localStorage.getItem(tokensKey)) {
      localStorage.removeItem(tokensKey);
    }

    if (data) {
      localStorage.setItem("tokens", Object.values(data));
    }
    
  }, [data]);

  return (
    <div className='login-wrapper'>
      <div className='login-form'>
        <button
          className='login-form__button'
          onClick={onButtonClick}
        >
          test
        </button>

        <form action='#' onSubmit={onSubmitLogin}>
          <h1 className='login-form__header'>
            Login
          </h1>

          <div className={classNames('login-form__warrning-text', {
            'login-form__error-massage': isError,
          })}>
            Your login or password are wrong! Try again
          </div>

          <div className='login-form__input-box'>
            <input
              className={classNames('login-form__input-box__input', {
                'login-form__error-border': isError,
              })}
              type='text'
              placeholder='Username'
              required
              value={username}
              onChange={usernameChange}
            />
            <FaUser className='login-form__input-box__icon' />
          </div>

          <div className='login-form__input-box'>
            <input
              className={classNames('login-form__input-box__input', {
                'login-form__error-border': isError,
              })}
              type='password'
              placeholder='Password'
              required
              value={password}
              onChange={passwordChange}
            />
            <FaLock className='login-form__input-box__icon' />
          </div>

          <div className='login-form__remember-forgot'>
            <label className='login-form__remember-forgot__label'>
              <input className='login-form__remember-forgot__input' type='checkbox' />

              Remember me
            </label>
            <a className='login-form__remember-forgot__link' href='#'>Forgot password?</a>
          </div>

          <button
            className={classNames('login-form__button', {
              'login-form__success--button': !!data,
            })}
            type='submit'
            disabled={!!data}
          >
            Login
          </button>

          <div className='login-form__register-link'>
            <p className='login-form__register-link__text'>
              {'Don`t have an account? '}
              <a className='login-form__register-link__link' href='#'>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
