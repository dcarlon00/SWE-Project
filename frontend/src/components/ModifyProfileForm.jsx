import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
//import {createForm, reset} from '../features/forms/formSlice'
import Spinner from '../components/Spinner'
import {getProfile, updateProfile, reset} from '../features/profile/profileSlice'
import {Link} from 'react-router-dom'



function ModifyProfileForm( {userName, addressOne, addressTwo, city, state, zipcode, id} ) {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {user} = useSelector((state) => state.auth) 

    useEffect(() => {
        if(!user){
            navigate('/Login') //should be /login
        }

    }, [user, navigate])

    const {profile, isLoading, isError, message} = useSelector((state) => state.profile)
    
    const[profileData, SetProfileData] = useState({
        nameUpdate: userName,
        addressOneUpdate: addressOne,
        addressTwoUpdate: addressTwo,
        cityUpdate: city,
        stateUpdate: state,
        zipcodeUpdate: zipcode,
    })
 

    const {nameUpdate, addressOneUpdate, addressTwoUpdate, cityUpdate, zipcodeUpdate} = profileData

    var stateUpdate = state

    const onChange = (e) => {
        SetProfileData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

    const onSubmit = e => {
        e.preventDefault()

        stateUpdate = document.querySelector("#stateUpdate").value;
        console.log(stateUpdate)

        const profileData = {
            nameUpdate,
            addressOneUpdate,
            addressTwoUpdate,
            cityUpdate,
            stateUpdate,
            zipcodeUpdate,
        }
        //console.log(profileData)
        
        dispatch(updateProfile({id, profileData}))
        if(isLoading){
            return <Spinner />
        }
        SetProfileData('') 
        navigate('/Profile')
    }

    return (
    <>
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
    

    <header className='container profileform'>
        <h1>{userName}'s Profile Management</h1>
        <p id='message'></p>
        <br></br>
        <form onSubmit={onSubmit}>
            <div class="btn-group" style={{width:`100%`, textAlign:'left'}}>
                <label> Full Name: <input type="text" name="nameUpdate" defaultValue={userName} placeholder={userName} maxLength='50' size='50' onChange={onChange}/> </label>
                <br></br>
                <label> Address 1: &nbsp;<input type="text" name="addressOneUpdate" defaultValue={addressOne} placeholder={addressOne} maxLength='100' size='100' onChange={onChange}/> </label>
                <br></br>
                <label> Address 2: <input type="text" name="addressTwoUpdate" defaultValue={addressTwo} placeholder={addressTwo} maxLength='100' size='100' onChange={onChange}/> </label>
                <br></br>
                <label> City: &nbsp;&nbsp;&nbsp;<input type="text" name="cityUpdate" defaultValue={city} placeholder={city} maxLength='100' size='100' onChange={onChange}/> </label>
                <br></br>
                <label> State: </label>
                <select name="stateUpdate" id="stateUpdate" class='statedropdown' defaultValue={stateUpdate} placeholder={stateUpdate}>
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
                <label> Zipcode: <input type="text" name="zipcodeUpdate" defaultValue={zipcode} placeholder={zipcode} minLength='5' maxLength='9' size='9' onChange={onChange}/> </label>
                <br></br>
                <input class="formbutton" type="submit" value="Submit" />
            </ div>
        </form>
    </ header>    
    </>
  )
}

export default ModifyProfileForm
