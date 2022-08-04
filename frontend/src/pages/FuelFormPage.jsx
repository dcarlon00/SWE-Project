import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import FuelForm from '../components/FuelForm'
import Spinner from '../components/Spinner'
import {getForms, reset} from '../features/forms/formSlice'

function FuelFormPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {forms, isLoading, isError, message} = useSelector((state) => state.forms)

    useEffect(() => {
        if(isError){
            console.log(message);
        }


        if(!user) {
            navigate('/login')
        }

        dispatch(getForms())

        return () =>{
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch]);

    const formsLength = forms.length

    if(isLoading){
        return <Spinner />
    }

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

   <FuelForm formLength={formsLength}/> {/* Fuel Form component */}
    </>
}

export default FuelFormPage;
