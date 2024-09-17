import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { signOutUser } from "../utils/firebase.utils"

function NavBar(){
    
    const {currentUser} = useContext(UserContext)
    
    return(
        <>
        <div>
        <h1>SHopSyDee</h1>
        <nav>
            <li>Home</li>
            <li>Shop</li>
            <div>
     <NavLink to={'sign-up'}>SignUp</NavLink>
 </div>
 <NavLink to={'cart'}>Cart</NavLink>
    { currentUser ?
    (  <NavLink onClick={signOutUser}>SignOut</NavLink>) :
    ( <NavLink to={'sign-in'}>SignIn</NavLink>)
        }           

 <NavLink to={'stripe'}>Payment</NavLink>
        </nav>
        </div>
        
        </>
    )
}
export default NavBar