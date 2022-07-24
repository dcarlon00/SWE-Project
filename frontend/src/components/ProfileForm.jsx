import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {createForm, reset} from '../features/forms/formSlice'
import Spinner from '../components/Spinner'
import {getProfile} from '../features/profile/profileSlice'
import {Link} from 'react-router-dom'



function ProfileForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {user} = useSelector((state) => state.auth) 

    useEffect(() => {
        if(!user){
            navigate('/Login') //should be /login
        }

    }, [user, navigate])

    const {profile, isLoading, isError, message} = useSelector((state) => state.profile)

    //Allows us to access userData.

    useEffect(() => {
        if(isError){
            console.log(message);
        }

        /*if(!user){
            navigate('/Login') //should be /login
        }*/

        dispatch(getProfile())

        return () =>{
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])


    if(isLoading){
        return <Spinner />
    }
    
  return (
    <>
    <header className='container profile'>
        <h1>{profile[0].name}'s Profile Page</h1>
        <p>Below is your current profile information:</p> 
        <br></br>
        <div class="btn-group" style={{width:`100%`, textAlign:'left' }}> 
            <form>
                <label> Full Name: <input type="text" name="fullname" placeholder={profile[0].name} maxlength='50' size='50' readOnly/> </label>
                <br></br>
                <label> Address 1: &nbsp;<input type="text" name="address1" placeholder={profile[0].addressOne} maxlength='100' size='100' readOnly/> </label>
                <br></br>
                <label> Address 2: <input type="text" name="address2" placeholder={profile[0].addressTwo} maxlength='100' size='100' readOnly/> </label>
                <br></br>
                <label> City: &nbsp;&nbsp;&nbsp;<input type="text" name="city" placeholder={profile[0].city} maxlength='100' size='100' readOnly/> </label>
                <br></br>
                <label> State: </label>
                <input type="text" name="state" placeholder={profile[0].state} size='16' readOnly/>
                <label> Zipcode: <input type="text" name="zipcode" placeholder={profile[0].zipcode} minlength='5' maxlength='9' size='9' readOnly/> </label>
                <br></br>
            </form>
            <Link to='/ProfileFinish'> <button> <a>Modify Profile</a> </button></Link> 
        </div>
    </header>
    </>
  )
}

export default ProfileForm