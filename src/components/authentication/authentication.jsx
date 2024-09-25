import SignIn from "./sign-in"
import SignUp from "./sign-up"

function Authentication(){
    return(
       
       <>
        <div className="flex flex-col md:flex-row ">
            <div className="flex-1 flex items-center justify-center">
                <SignUp />
            </div>

            <div className="flex-1 flex items-center justify-center">
                <SignIn />
            </div>
        </div>
        </>
    )
}
export default Authentication