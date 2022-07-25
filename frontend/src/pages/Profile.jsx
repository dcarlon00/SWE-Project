import {FaSignOutAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ProfileForm from '../components/ProfileForm'
/* import { Button } from '@themesberg/react-bootstrap' */


function Profile() {

    return <>
    
    <header className='header'>
        <div class="btn-group">
             <Link to='/'> <button><a>Return to Dashboard</a> </button></Link> 
        </div>
        <ul>
            <li>
                <div class="btn-group">
                    <button className="btn">
                        <a href="/"> <FaSignOutAlt/> Logout </a>
                    </button>
                </div>
            </li>  
        </ul>
    </header>
    <ProfileForm />
    </>
    
}

export default Profile
