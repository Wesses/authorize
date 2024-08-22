import './Header.css';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <li className='header__links'>
        <ul><Link className='header__link' to='/'>
          Home
        </Link></ul>
        <ul><Link className='header__link' to='/login'>
          Login
        </Link></ul>
        <ul><Link className='header__link' to='/register'>
          Register
        </Link></ul>
        <ul><Link className='header__link' to='/weather'>
          Weather forecast
        </Link></ul>
      </li>
    </div>
  )
}
