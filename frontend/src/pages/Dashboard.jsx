import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import ProfileFinishForm from '../components/ProfileFinishForm'
import {getProfile, reset} from '../features/profile/profileSlice'
import Spinner from '../components/Spinner'




function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        if(!user){
            navigate('/Login') //should be /login
        }

    }, [user, navigate])

    const {profile, isLoading, isError, message} = useSelector((state) => state.profile)

    useEffect(() => {
        if(isError){
            console.log(message);
        }


        if(!user) {
            navigate('/Login')
        }

        dispatch(getProfile())

        /*return () =>{
            dispatch(reset())
        }*/
    }, [user, navigate, isError, message, dispatch]);

    if(isLoading){
        return <Spinner />
    }


    return <>
    {/* Check condition to see if Dashboard is completed by checking profile length*/}
    {profile.length > 0 ? (   
        <> 
    <div>
        
        <header className="container2">
            <h1>Welcome '{profile[0].name}' to your Dashboard</h1>
            <h3>Below are your user functions.</h3>
        </header>
    {/* CHECK to see if user has completed dash. IF not force to complete dash. */}

    </div>
    
    <header className='container'>
        <div class="btn-group" style={{width:`100%`}}>
            <Link to ="/FuelFormPage">
                <button style={{width:`33.3%`}}>Create Fuel Quote</button>
            </Link>
            <Link to ="/FuelQuoteHistory">
                <button style={{width:`33.3%`}}>View Fuel Quote History</button>
            </Link>
        </div>
    </header>
    </>) 
    : (<ProfileFinishForm />)}


    
    </>
    
}

export default Dashboard
