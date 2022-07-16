import {useSelector} from 'react-redux'


function GetAddComp({profile}){

  const address1 = profile.addressOne
  /* return address1 */

  return (
    <>
    <div>
        <h1> {profile.addressOne} </h1>
    </div>
    </>
)
}



export default GetAddComp;