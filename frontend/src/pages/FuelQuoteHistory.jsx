import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import FuelForm from '../components/FuelForm'
import FormItem from '../components/FormItem'
import Spinner from '../components/Spinner'
import {getForms, reset} from '../features/forms/formSlice'

function FuelQuoteHist() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {forms, isLoading, isError, isSuccess, message} = useSelector((state) => state.forms)

    useEffect(() => {
        if(isError){
            console.log(message);
        }


        if(!user) {
            navigate('/Login')
        }

        dispatch(getForms())

        return () =>{
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch]);

    if(isLoading){
        return <Spinner />
    }

    
    return (
    <>
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
        {/* <div>{num}</div> */}
    <section className="heading">
        <h1>
            Fuel Quote History
        </h1>
    </section> 
    <section className="content">
        {forms.length > 0 ? (
            <div className="forms">
                {forms.map((form) =>(
                    <FormItem key={form._id} form={form}/>
                ))}
                {/* Here we call the component to be able to display data */}
                {/* Keep in mind this will LOOP for ALL existing fuelquote forms */}
            </div>
        ) : (<h3>You have not created a Fuel Quote</h3>)
        }
    </section>

        

    </>
    )
}
export default FuelQuoteHist;