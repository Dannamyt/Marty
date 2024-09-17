import { useState } from "react"

import { 
    signInWithGooglePopup, 
    signInUserWithEmailAndPassword } from "../../utils/firebase.utils"

const initialField = {
    email:'',
    passoword:''
}

function SignIn(){
    

    const [userLogIn, setUserLogIn] = useState(initialField)

    const{email,password} = userLogIn

    function resetFormfield(){
        setUserLogIn(initialField)
    }

    const signInWithGoogle = async()=>{
        await signInWithGooglePopup()
    }

    async function handleLogIn(event) {
        console.log('handle log in')
        event.preventDefault()

        if(!email || !password){
            alert ('Please enter email')
        }
        try{
            const res = await signInUserWithEmailAndPassword(email,password)
            console.log(res)
            resetFormfield()
        }
        catch(error){
            console.log('user cant login',error.message)
        switch(error.code){
            case 'auth/wrong-password':
            alert('incorrect password for email')
            break;
            case 'auth/user-not-found':
            alert('no user associated with this email')
            break;
        default:
            console.log(error)
        }
        }
    }

    function handleLogInChange(event){
        const{name,value} = event.target
        setUserLogIn({...userLogIn,[name]:value})
    }

    return(
        <>
        <h1>Log in to ShopSyDee</h1>
        <p>Enter your details below</p>
        <form action="" onSubmit={handleLogIn}>
            <input type="email" name="email" onChange={handleLogInChange} />
            <input type="password" name="password"  onChange={handleLogInChange} />
            <button type="submit">Log In</button>
            <button onClick={signInWithGoogle}>Log in with Google</button>
        </form>
        </>
    )
}
export default SignIn