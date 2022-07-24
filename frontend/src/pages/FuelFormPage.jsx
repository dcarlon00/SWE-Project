import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import FuelForm from '../components/FuelForm'

function FuelFormPage() {
    /* const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    const {forms, isLoading, isError, isSuccess, message} = useSelector((state) => state.forms)
     */
    return <>
    <header className='header'>
        <div className="logo">
            <ul>
                <li>
                    <div class="btn-group">
                        <Link to='/'>
                            <button className="btn">
                                Return to Dashboard
                            </button>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    </header>

    <section className="heading">
        <h1>
            Generate Fuel Quote
        </h1>
        <p>Please fill in the fields below</p>
    </section> 

   <FuelForm /> {/* Fuel Form component */}
    </>
}

export default FuelFormPage;
