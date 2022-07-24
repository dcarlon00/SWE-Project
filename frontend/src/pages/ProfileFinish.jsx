import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import $ from 'jquery';
/* import { Button } from '@themesberg/react-bootstrap' */

function ProfileFinish() {

<div id="idofthedivtohide">
  <span>Success!</span>
</div>

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
             <Link to='/Profile'> <button><a>Back to Main Profile</a> </button></Link> 
        </div>
        <ul>
            <li>
                <div class="btn-group">
                    <button className="btn">
                        <FaSignOutAlt/> Logout
                    </button>
                </div>
            </li>  
        </ul>
    </header>

    <h1>'User' Profile Management</h1>
    <p id='message'></p>
    <br></br>
    <header className='container profileform'>
        <div class="btn-group" style={{width:`100%`, textAlign:'left'}}>
            <form action='/'>
                <label> Full Name: <input type="text" name="fullname" placeholder='required' maxlength='50' size='50'/> </label>
                <br></br>
                <label> Address 1: &nbsp;<input type="text" name="address1" placeholder='required' maxlength='100' size='100'/> </label>
                <br></br>
                <label> Address 2: <input type="text" name="address2" placeholder='optional' maxlength='100' size='100'/> </label>
                <br></br>
                <label> City: &nbsp;&nbsp;&nbsp;<input type="text" name="city" placeholder='required' maxlength='100' size='100'/> </label>
                <br></br>
                <label> State: </label>
                <select name="state" class='statedropdown'>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <label> Zipcode: <input type="text" name="zipcode" placeholder='required' minlength='5' maxlength='9' size='9'/> </label>
                <br></br>
                <input class="formbutton" type="submit" value="Submit" />
            </form>
        </div>
    </header>



    
    <script type="text/javascript">
    {
        window.onload = function() 
        {
            const queryString = window.location.search;
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);
            if (urlParams.has('newuser'))
            {
                document.getElementById("message").innerHTML = "Please finish setting up your profile then click submit"
            }  
            else
            {
                document.getElementById("message").innerHTML = "When you finish modifying up your profile, click submit"
            }
        }
    }
    </script>
    </>
    // The above script only works when ?newuser is typed manually, not from the register page.
}

export default ProfileFinish