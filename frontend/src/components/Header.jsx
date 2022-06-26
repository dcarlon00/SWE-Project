import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

/* import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice' */

function Header() {
/*     const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth) */


  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Fuel Application</Link>
        </div>
        <ul>
            <li>
                <Link to='/Login'>
                    <FaSignInAlt/> Login
                </Link>
            </li>  
            <li>
                <Link to='/Register'>
                    <FaUser/> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header