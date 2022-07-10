import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {FuelForm} from '../components/FuelForm'
/* import { Button } from '@themesberg/react-bootstrap' */




function Dashboard() {
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        if(!user){
            navigate('/login') //should be /login
        }
    }, [user, navigate])

    return <>
    <div>
        
        <header className="container2">
            <h1>Welcome '{user && user.name}' to your Dashboard</h1>
            <p>Below are your user functions.</p>
        </header>
        
    </div>
    <header className='container'>
        <div class="btn-group" style={{width:`100%`}}>
            <Link to ="/FuelFormPage">
                <button style={{width:`33.3%`}}>Create Fuel Quote</button>
            </Link>
            <Link to ="/FuelQuoteHistory">
                <button style={{width:`33.3%`}}>View Fuel Quote History</button>
            </Link>
            <button style={{width:`33.3%`}}>Function 3</button>
        </div>
    </header>


    </>
    


/*     return <>
        <section className="heading">
            <h1>Welcome 'user's name'</h1>
        </section>
    
    </> */
    
}

export default Dashboard
