
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {createForm} from '../features/forms/formSlice'


import Spinner from '../components/Spinner'
import GetAddComp from './GetAddComp'
import {getProfile, reset} from '../features/profile/profileSlice'
import FormItem from './FormItem'

function FuelForm() {

    //Allows us to access userData.
    const [formData, setFormData] = useState({
        gallons: '',
        currDelivery: '',
        date2: '',
        ppg: '',
        total: '',
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [selectedDate, setSelectedDate] = useState(null)
    const {gallons, currDelivery, date2, ppg, total} = formData


    const onSubmit = e => {
        e.preventDefault();


        const formData = {
            gallons,
            currDelivery,
            date2,
            ppg,
            total,
        }
        dispatch(createForm({formData}))
        setFormData('')
    }
    
    

    const {user} = useSelector((state) => state.auth)
    const {forms} = useSelector((state) => state.forms)
    const {profile, isLoading, isError, message} = useSelector((state) => state.profile)

    useEffect(() => {
        if(isError){
            console.log(message);
        }


        if(!user) {
            navigate('/login')
        }

        dispatch(getProfile())

        return () =>{
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch]);

    if(isLoading){
        return <Spinner />
    }

    
  return (
<section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label> Gallons Requested:
                <input
                    type="number"
                    className='form-control' 
                    id="gallons" 
                    name="gallons"
                    value={gallons} onChange={(e) => setFormData(e.target.value)}
                    placeholder="(Required)"        
                />
                </label>
            </div>
            <div className="form-group">
                <label>Current Delivery Address:
                <input 
                    type="text"
                    className='form-control' 
                    id="currDelivery" 
                    name="currDelivery"
                    value={currDelivery} onChange={(e) => setFormData(e.target.value)}
/*                     placeholder={profile.map((profile) =>(
                        <GetAddComp key={profile._id} profile={profile}/>   
                    ))} */
                />
                </label>
            </div>

 {/*            {profile.length > 0 ? (
                <div className="profile">
                    {profile.map((profile) => (
                        <GetAddComp key={profile._id} profiler={profile}/>
                    ))}
                </div>
            ) : 
            (<h3> Error </h3>)} */}
    
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
    

            <div className="form-group">
                <label>Select Delivery Date: 
                <input 
                    type="date"
                    className='form-control' 
                    id="date2" 
                    name="date2"
                    value={date2} onChange={(e) => setFormData(e.target.value)}
                />
                </label>
            </div>

            <div className="form-group">
                <label>Price Per Gallon:
                <input 
                    type="number"
                    step='0.01'
                    className='form-control' 
                    id="gallonPrice" 
                    name="gallonPrice"
                    placeholder='Gal.'       
                    value={ppg} onChange={(e) => setFormData(e.target.value)} 
                />
                </label>
            </div>

            <div className="form-group">
                <label>Total Amount Due:
                <input 
                    type="number"
                    step='0.01'
                    className='form-control' 
                    id="totalAmount" 
                    name="totalAmount"
                    /* defaultValue='5.00' */
                    value={total/* .value = gallons+ppg */} 
                    onChange={(e) => setFormData(e.target.value)}         
                />
                </label>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-block">
                    Submit Quote
                </button>
            </div>
        </form>
        <br></br>
    </section>
  )
}

export default FuelForm;