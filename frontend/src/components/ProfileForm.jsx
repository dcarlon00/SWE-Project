import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Spinner from '../components/Spinner'
import {getProfile, reset} from '../features/profile/profileSlice'
import {Link} from 'react-router-dom'



function ProfileForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {user} = useSelector((state) => state.auth) 

    useEffect(() => {
        if(!user){
            navigate('/Login')
        }

    }, [user, navigate])

    const {profile, isLoading, isError, message} = useSelector((state) => state.profile)

    //Allows us to access userData.

    useEffect(() => {
        if(isError){
            console.log(message);
        }

        dispatch(getProfile())

    }, [user, navigate, isError, message, dispatch])


    if(isLoading){
        return <Spinner />
    }
    
if(profile[0] != null)
    { 
    return (
        <>
        <header className='container profile'>
            <h1>{profile[0].name}'s Profile Page</h1>
            <h3>Below is your current profile information:</h3> 
            <br></br>
            <div class="btn-group" style={{width:`100%`, textAlign:'left' }}> 
                <form>
                    <label> Full Name: <input type="text" name="fullname" placeholder={profile[0].name} maxLength='50' size='50' readOnly/> </label>
                    <br></br>
                    <label> Address 1: &nbsp;<input type="text" name="address1" placeholder={profile[0].addressOne} maxLength='100' size='100' readOnly/> </label>
                    <br></br>
                    <label> Address 2: <input type="text" name="address2" placeholder={profile[0].addressTwo} maxLength='100' size='100' readOnly/> </label>
                    <br></br>
                    <label> City: &nbsp;&nbsp;&nbsp;<input type="text" name="city" placeholder={profile[0].city} maxLength='100' size='100' readOnly/> </label>
                    <br></br>
                    <label> State: </label>
                    <input type="text" name="state" placeholder={profile[0].state} size='16' readOnly/>
                    <label> Zipcode: <input type="text" name="zipcode" placeholder={profile[0].zipcode} minlength='5' maxLength='9' size='9' readOnly/> </label>
                    <br></br>
                </form>
                <Link to='/ProfileFinish'> <button> <a>Modify Profile</a> </button></Link> 
            </div>
        </header>
        </>
    )
    }  
}

export default ProfileForm
