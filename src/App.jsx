import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { LoginForm } from './components/LoginForm/LoginForm';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast';
import { Home } from './components/Home/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/weather' element={<WeatherForecast />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App