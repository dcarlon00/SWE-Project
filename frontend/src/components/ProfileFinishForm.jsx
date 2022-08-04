import React, {useEffect, useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import $ from 'jquery';
import {createProfile, reset} from '../features/profile/profileSlice'
const profileManagement = require('../modules-test/profileManagement');


function ProfileFinish() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)


    useEffect(() => {
        if(!user){
            navigate('/Login') //should be /login
        }

    }, [user, navigate])


    const[profileData, setProfileData] = useState({
        name: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zipcode: '',
    })


    const {addressOne, addressTwo, city, zipcode} = profileData
    if(user == null)
    {
        var name = ''
    }  
    else
    {
        var name = `${user.name}`
    }  
    var state = ''


    const onChange = (e) => {
        setProfileData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      
    const onSubmit = e => {
        e.preventDefault()

        state = document.querySelector("#state").value;
        console.log(state)

        const profileData = {
            name,
            addressOne,
            addressTwo,
            city,
            state,
            zipcode,
        }  
        profileManagement(profileData)
        dispatch(createProfile({profileData})) 
        setProfileData('')
    }

    

    return <>  
    <h1>Hello '{name}' Please Complete Profile</h1>
    <p id='message'></p>
    <br></br>
    <section className="form">
        <form onSubmit={onSubmit}>
        <div className="form-group">
                <label> Name:
                <input
                    type="text"
                    className='form-control' 
                    id="name"
                    name="name"
                    defaultValue={name}
                    placeholder={name}
                    readOnly='readOnly'
                />
                </label>
            </div>
        <div className="form-group">
                <label> Address 1 'Main':
                <input
                    type="text"
                    className='form-control' 
                    id="addressOne" 
                    name="addressOne"
                    value={addressOne} onChange={onChange}
                    placeholder="(Required)"        
                />
                </label>
            </div>
            <div className="form-group">
                <label> Address 2:
                <input
                    type="text"
                    className='form-control' 
                    id="addressTwo" 
                    name="addressTwo"
                    value={addressTwo} onChange={onChange}
                    placeholder="(Optional)"        
                />
                </label>
            </div>
            <div className="form-group">
                <label> City:
                <input
                    type="text"
                    className='form-control' 
                    id="city" 
                    name="city"
                    value={city} onChange={onChange}
                    placeholder="(Required)"        
                />
                </label>
            </div>
            <div className="form-group">
                <label> State: </label>
                <select 
                name="state"
                id="state" 
                class='statedropdown'>
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
            </div>
            <div className="form-group">
                <label> Zipcode:
                <input
                    type="text"
                    className='form-control' 
                    id="zipcode" 
                    name="zipcode"
                    value={zipcode} onChange={onChange}
                    placeholder="(Required)"        
                />
                </label>
            </div>

            <div className="form-group">
                <button type='submit' className="btn btn-block">
                    Complete Profile
                </button>
            </div>

        </form>
    </section>

    </>
}

export default ProfileFinish;
