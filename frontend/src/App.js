import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import FuelForm from './pages/FuelForm'

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
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
