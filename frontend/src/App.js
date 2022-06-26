import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import FuelForm from './pages/FuelForm'
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
          <Route path ='/FuelForm' element = {<FuelForm />} />
          <Route path ='/Profile' element = {<Profile />} />
          <Route path ='/ProfileFinish' element = {<ProfileFinish />} />
          <Route path ='/ProfileFinish?newuser' element = {<ProfileFinish/>} />
          <Route path ='/FuelQuoteHistory' element = {<FuelQuoteHistory />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
