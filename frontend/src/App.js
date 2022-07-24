import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import FuelFormPage from './pages/FuelFormPage'
import Profile from './pages/Profile'
import ProfileFinish from './pages/ProfileFinish'
import FuelQuoteHistory from './pages/FuelQuoteHistory'

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path ='/' element = {<Dashboard />} />
          <Route path ='/Login' element = {<Login />} />
          <Route path ='/Register' element = {<Register />} />
          <Route path ='/FuelFormPage' element = {<FuelFormPage />} />
          <Route path ='/Profile' element = {<Profile />} />
          <Route path ='/ProfileFinish' element = {<ProfileFinish />} />
          <Route path ='/ProfileFinish?newuser' element = {<ProfileFinish/>} />
          <Route path ='/FuelQuoteHistory' element = {<FuelQuoteHistory />} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
