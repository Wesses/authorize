import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { LoginForm } from './components/LoginForm/LoginForm';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/weather" element={<WeatherForecast />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App