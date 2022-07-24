import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'

function FuelForm() {
    
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
            Fuel Quote History
        </h1>
    </section> 

    <div>
        <table>
            <thead>
                <tr>
                    <th>QuoteID</th>
                    <th>Gallons Requested</th>
                    <th>Delivery Address</th>
                    <th>Delivery Date</th>
                    <th>Price Per Gallon</th>
                    <th>Total Amount Due</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                    <td>Placeholder</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>etc...</td>
                    <td>etc...</td>
                    <td>etc...</td>
                    <td>etc...</td>
                    <td>etc...</td>
                    <td>etc...</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
}

export default FuelForm