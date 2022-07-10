import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createForm} from '../features/forms/formSlice'


function FuelForm() {
    /* const {user} = useSelector((state) => state.auth)  */
    //Allows us to access userData.
    const [formData, setFormData] = useState({
        gallons: '',
        currDelivery: '',
        date: '',
        ppg: '',
        total: '',
    })

    const dispatch = useDispatch()

    const [selectedDate, setSelectedDate] = useState(null)
    const {gallons, currDelivery, date, ppg, total} = formData


    const onSubmit = e => {
        e.preventDefault();


        const formData = {
            gallons,
            currDelivery,
            date,
            ppg,
            total,
        }
        dispatch(createForm({formData}))
        setFormData('')
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
                    placeholder='Get From Database' 
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
                    value={date} onChange={(e) => setFormData(e.target.value)}
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
                    defaultValue='5.00'
                    readOnly          
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