
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    //if statement that shows the user a different header if they are logged in and logged out.
    return (
        <header className='header'>
            <div className="logo">
                <Link to='/'>Fuel Application</Link>
            </div>
            <ul>
                {user ? (
                    <>
                    <li>
                        <div className="btn-group">
                            <Link to='/Profile'>
                                <button className="btn">
                                    My Profile
                                </button>
                            </Link>
                        </div>
                    </li>                  
                    <li>
                        <div className="btn-group">
                        <button className="btn" onClick={onLogout}>
                            <FaSignOutAlt/> Logout
                        </button>
                        </div>
                    </li>
                    </>
                    ) : (
                    <>
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
                </>)}

            </ul>
        </header>
        )
}

export default Header