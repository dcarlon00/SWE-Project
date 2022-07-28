import {Link} from 'react-router-dom'
import FuelForm from '../components/FuelForm'

function FuelFormPage() {
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
