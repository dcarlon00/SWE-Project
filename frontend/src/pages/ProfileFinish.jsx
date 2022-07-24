import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import $ from 'jquery';
import ModifyProfileform from '../components/ModifyProfileForm'
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

    return  (
    <>
        <ModifyProfileform />
    </>
    )


 
    // The above script only works when ?newuser is typed manually, not from the register page.
}

export default ProfileFinish