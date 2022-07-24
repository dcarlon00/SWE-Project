
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {createForm, reset} from '../features/forms/formSlice'
import Spinner from '../components/Spinner'
import {getProfile} from '../features/profile/profileSlice'



function FuelForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {user} = useSelector((state) => state.auth) 

    useEffect(() => {
        if(!user){
            navigate('/Login') //should be /login
        }

    }, [user, navigate])

    const {profile, isLoading, isError, message} = useSelector((state) => state.profile)

    //Allows us to access userData.

    useEffect(() => {
        if(isError){
            console.log(message);
        }

        /*if(!user){
            navigate('/Login') //should be /login
        }*/

        dispatch(getProfile())

        return () =>{
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    const [formData, setFormData] = useState({
        galReq: '',
        delAdd: '',
        delDate: '',
        ppGal: '',
        total: '',
    })

    if(isLoading){
        return <Spinner />
    }

    const { galReq, delDate, ppGal, total} = formData
    var delAdd = `${profile[0].addressOne}`
    

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

    const onSubmit = e => {
        e.preventDefault()


        const formData = {
            galReq,
            delAdd,
            delDate,
            ppGal,
            total,
        }
        dispatch(createForm({formData}))
        setFormData('')
        navigate('/FuelQuoteHistory')
    }
    

    /*if(isLoading){
        return <Spinner />
    }*/

    
  return (
    <>
<section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label> Gallons Requested:
                <input
                    type="number"
                    className='form-control' 
                    id="galReq" 
                    name="galReq"
                    value={galReq} onChange={onChange}
                    placeholder="(Required)"        
                />
                </label>
            </div>
            <div className="form-group">
                <label>Current Delivery Address:
                <input 
                    readOnly
                    type="text"
                    className='form-control' 
                    id="delAdd" 
                    name="delAdd"
                    /* value={delAdd} onChange={onChange} */
                    defaultValue={delAdd}
                    placeholder={delAdd}
                />
                </label>
            </div>

            <div className="form-group">
                <label>Select Delivery Date: 
                <input 
                    type="date"
                    className='form-control' 
                    id="delDate" 
                    name="delDate"
                    value={delDate} onChange={onChange}
                />
                </label>
            </div>

            <div className="form-group">
                <label>Price Per Gallon:
                <input 
                    type="number"
                    step='0.01'
                    className='form-control' 
                    id="ppGal" 
                    name="ppGal"
                    placeholder='Gal.'       
                    value={ppGal} onChange={onChange} 
                />
                </label>
            </div>

            <div className="form-group">
                <label>Total Amount Due:
                <input 
                    type="number"
                    step='0.01'
                    className='form-control' 
                    id="total" 
                    name="total"
                    /* defaultValue='5.00' */
                    value={total/* .value = gallons+ppg */} 
                    onChange={onChange}         
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
    </>
  )
}

export default FuelForm
