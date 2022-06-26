import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
/* import { Button } from '@themesberg/react-bootstrap' */




function Profile() {
/*     const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth) */

 /*    useEffect(() => {
        if(!user){
            navigate('/login') //should be /login
        }
    }, [user, navigate]) */

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
    <header className='container profile'>
        <h1>'User' Profile Page</h1>
        <p>Below is your current profile information:</p> 
        <br></br>
        <div class="btn-group" style={{width:`100%`, textAlign:'left' }}> 
            <form>
                <label> Full Name: <input type="text" name="fullname" placeholder='User' maxlength='50' size='50' readOnly/> </label>
                <br></br>
                <label> Address 1: &nbsp;<input type="text" name="address1" placeholder='University of Houston' maxlength='100' size='100' readOnly/> </label>
                <br></br>
                <label> Address 2: <input type="text" name="address2" placeholder='' maxlength='100' size='100' readOnly/> </label>
                <br></br>
                <label> City: &nbsp;&nbsp;&nbsp;<input type="text" name="city" placeholder='Houston' maxlength='100' size='100' readOnly/> </label>
                <br></br>
                <label> State: </label>
                <input type="text" name="state" placeholder='Texas' size='16' readOnly/>
                <label> Zipcode: <input type="text" name="zipcode" placeholder='77000' minlength='5' maxlength='9' size='9' readOnly/> </label>
                <br></br>
            </form>
            <Link to='/ProfileFinish'> <button> <a>Modify Profile</a> </button></Link> 
        </div>
    </header>


    </>
    


/*     return <>
        <section className="heading">
            <h1>Welcome 'user's name'</h1>
        </section>
    
    </> */
    
}

export default Profile