import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import $ from 'jquery';
import {createProfile, reset} from '../features/profile/profileSlice'

/* import { Button } from '@themesberg/react-bootstrap' */

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

    /* const[profileData, setProfileData] = useState('') */

    const {name, addressOne, addressTwo, city, state, zipcode} = profileData

    const{profile, isLoading, isError, isSuccess,message} = useSelector(
        (state) => state.profile
        )

    const onChange = (e) => {
        setProfileData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))``
      }
    const onSubmit = e => {
        e.preventDefault()

        const profileData = {
            name,
            addressOne,
            addressTwo,
            city,
            state,
            zipcode,
        }
        dispatch(createProfile({profileData}))
        setProfileData('')
    }

    var namePull = `${user.name}`
    var newName = JSON.stringify(namePull);
    var newerName = JSON.parse(newName);
   /*  const pullv2 = document.getElementById('name').value; */


    return <>  
    <h1>Hello '{namePull}' Please Complete Profile</h1>
    <p id='message'></p>
    <br></br>
    <div>{newerName}</div>
    <section className="form">
        <form onSubmit={onSubmit}>
        <div className="form-group">
                <label> Name:
                <input
                    type="text"
                    className='form-control' 
                    id="name"
                    name="name"
                    value={name} onChange={onChange}
                    placeholder={namePull}
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
                <label> State:
                <input
                    type="text"
                    className='form-control' 
                    id="state" 
                    name="state"
                    value={state} onChange={onChange}
                    placeholder="(Required)"        
                />
                </label>
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