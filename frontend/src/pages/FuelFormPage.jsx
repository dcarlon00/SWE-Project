import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import FuelForm from '../components/FuelForm'

function FuelFormPage() {
/*     const [formData, setFormData] = useState({
        gallons: '',
        date: '',
    })

    const [selectedDate, setSelectedDate] = useState(null)

    const {gallons, date} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    } */
    
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
