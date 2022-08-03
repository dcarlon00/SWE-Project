import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import ModifyProfileform from '../components/ModifyProfileForm'
import Spinner from '../components/Spinner'
import {getProfile} from '../features/profile/profileSlice'


function ProfileFinish() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {user} = useSelector((state) => state.auth) 

    useEffect(() => {
        if(!user){
            navigate('/Login')
        }

    }, [user, navigate])

    const {profile, isLoading, isError, message} = useSelector((state) => state.profile)

    useEffect(() => {
        if(isError){
            console.log(message);
        }

        dispatch(getProfile())

    }, [user, navigate, isError, message, dispatch])

    if(isLoading){
        return <Spinner />
    }

    if (profile[0] != null)
    {
        const profileData = {
            userName: `${profile[0].name}`,
            addressOne: `${profile[0].addressOne}`,
            addressTwo: `${profile[0].addressTwo}`,
            city: `${profile[0].city}`,
            state: `${profile[0].state}`,
            zipcode: `${profile[0].zipcode}`,
            id: `${profile[0]._id}`,
            }
        return  (
            <>
                <ModifyProfileform 
                    userName={profileData.userName} 
                    addressOne={profileData.addressOne} 
                    addressTwo={profileData.addressTwo} 
                    city={profileData.city} 
                    state={profileData.state} 
                    zipcode={profileData.zipcode} 
                    id={profileData.id}/>
            </>
            )
        }
    }
    
    

export default ProfileFinish
