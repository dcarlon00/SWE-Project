import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {createForm, reset} from '../features/forms/formSlice'
import Spinner from '../components/Spinner'
import Pricing from '../components/Pricing'
import {getProfile} from '../features/profile/profileSlice'
const fuelFormTest = require('../modules-test/fuelFormTest');



function FuelForm({formLength}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {user} = useSelector((state) => state.auth) 
    const {profile, isLoading, isError, message} = useSelector((state) => state.profile)

    useEffect(() => {
        if(isError){
            console.log(message);
        }

        dispatch(getProfile())

        return () =>{
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    const [formData, setFormData] = useState({
        galReq: '',
        delAdd: '',
        delDate: '',
        ppGal: '',   //placeholders since Pricing module isn't implemeneted
        total: '',
    })

    const [submitDisable, setsubmitDisable] = React.useState(true);

    if(isLoading){
        return <Spinner />
    }

    const {galReq, delDate, ppGal, total} = formData
    
    if (profile[0])
    {
        var delAdd = `${profile[0].addressOne}`
    }
    
    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))

        setsubmitDisable(true)

      }

    const handleGetQuoteClick = (e) => {
        e.preventDefault()
        
        fuelFormTest(formData)
        var priceReport = Pricing(galReq, profile[0].state, formLength)
        setFormData((prevState) => ({
            ...prevState,
            ppGal: priceReport.ppGal,
            total: priceReport.roundedTotal,
        }))

        setsubmitDisable(false)

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
                    defaultValue={galReq} onChange={onChange}
                    placeholder="(Required)"        
                    min="0"      
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
                    defaultValue={delAdd}
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
                    defaultValue={delDate} onChange={onChange}
                    min={new Date().toISOString().split('T')[0]}
                />
                </label>
            </div>

            <div className="form-group">
                <label>Price Per Gallon:
                <input 
                    readOnly
                    type="number"
                    step='0.01'
                    className='form-control' 
                    id="ppGal" 
                    name="ppGal"
                    placeholder="(Get Quote to see Price Per Gallon)"      
                    defaultValue={ppGal} 
                />
                </label>
            </div>

            <div className="form-group">
                <label>Total Amount Due:
                <input
                    readOnly 
                    type="number"
                    step='0.01'
                    className='form-control' 
                    id="total" 
                    name="total"
                    placeholder='(Get Quote to see Total Amount Due)' 
                    defaultValue={total}  
                />
                </label>
            </div>

            <div className="form-group">
                <button type='button' className="btn btn-block" disabled={galReq === '' || delDate === ''} onClick={handleGetQuoteClick}>
                    Get Quote
                </button>
            </div>
            
            <div className="form-group">
                <button type="submit" className="btn btn-block" disabled={submitDisable}>
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