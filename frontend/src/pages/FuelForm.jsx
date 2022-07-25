import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
//import {fuelForm} from '../modules/fuelForm'
const fuelFormModule = require('../modules/fuelForm');

function FuelForm() {
    const [formData, setFormData] = useState({
        gallons: '',
        date: '',
    })

    var [totalAmount, setTotalAmount] = useState()

    var {gallons, date} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(e.target.length,"elements were given by the form:")
        /*
        for (var i = 0; i <= e.target.length - 2; i++) // the -2 prevents printing the 'total amount' and the button
        {
            console.log(e.target[i].value)
        }
        */
        const data = e.target
        const [gallons, address, date, gallonPrice] = data
        var output = fuelFormModule(gallons.value, address.value, date.value, gallonPrice.value)
        totalAmount = output[4]
        console.log(totalAmount) // right now it does not update on the form
        setTotalAmount(totalAmount)
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
        <ul>
            <li> </li>  
        </ul>
    </header>

    <section className="heading">
        <h1>
            Generate Fuel Quote
        </h1>
        <p>Please fill in the fields below</p>
    </section> 

    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label> Gallons Requested:
                <input
                    type="number"
                    className='form-control' 
                    id="gallons" 
                    name="gallons"
                    value={gallons}
                    placeholder="(Required)" 
                    onChange={onChange}                  
                />
                </label>
            </div>

            <div className="form-group">
                <label>Current Delivery Address:
                <input 
                    type="text"
                    className='form-control' 
                    id="address" 
                    name="address"
                    value="University of Houston"  
                    readOnly
                />
                </label>
            </div>

            <div className="form-group">
                <label>Select Delivery Date: 
                <input 
                    type="date"
                    className='form-control' 
                    id="date" 
                    name="date"
                    value={date}
                    onChange={onChange}
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
                    defaultValue='5.00'
                    readOnly          
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
                    value={totalAmount}
                    onChange={onChange}
                    readOnly          
                />
                </label>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
            </div>
        </form>
        <br></br>
    </section>
    </>
}

export default FuelForm
