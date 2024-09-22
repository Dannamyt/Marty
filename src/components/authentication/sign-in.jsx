import { useState } from "react"

import { 
    signInWithGooglePopup, 
    signInUserWithEmailAndPassword } from "../../utils/firebase.utils"
    
    import { useNavigate } from "react-router-dom"


    function SignIn(){
    

    const [userLogIn, setUserLogIn] = useState( {
        email:'',
        password:''
    })
    const [errorMessage, setErrorMessage] = useState('')
    const{email,password} = userLogIn
    const navigate = useNavigate();

    function resetFormfield(){
        setUserLogIn({ email: '', password: '' })
    }

    const signInWithGoogle = async()=>{
        await signInWithGooglePopup()
        navigate('/welcome');
    }

    async function handleLogIn(event) {
        console.log('handle log in')
        event.preventDefault()

        if(!email || !password){
            alert ('Please enter email')
            setErrorMessage('Please enter email and password');
        }
        try{
            const res = await signInUserWithEmailAndPassword(email,password)
            console.log(res)
            resetFormfield()
            setErrorMessage('');
            navigate('/welcome');

        }
        catch(error){
            console.log('user cant login',error.message)
            switch (error.code) {
                case 'auth/wrong-password':
                    setErrorMessage('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    setErrorMessage('No user associated with this email');
                    break;
                case 'auth/invalid-credential':
                    setErrorMessage('Wrong password');
                    break;
                case 'auth/too-many-requests':
                    setErrorMessage('This account has been temporarily disabled due to many failed login attempts.');
                    break;
                default:
                    setErrorMessage('An unexpected error occurred. Please try again.');
                    console.log(error);
            }
        }
    }

    function handleLogInChange(event){
        const{name,value} = event.target
        setUserLogIn({...userLogIn,[name]:value})
        setErrorMessage('')
    }

    return(
        <>
   <div className="w-full max-w-sm p-6 ">
            <h1 className="text-3xl font-semibold  font-switzer mb-4">Log in</h1>
            <p className="mb-4 font-switzer">Enter your details below</p>
            <form onSubmit={handleLogIn}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleLogInChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleLogInChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                {errorMessage && (
                <p className="mb-4 text-red-500">{errorMessage}</p> // Display error message below the form
            )}
                <button type="submit" className="w-full bg-gray-900 text-white font-bold py-2 rounded">Log In</button>
                <button type="button" onClick={signInWithGoogle} className="w-full mt-2 bg-gray-200 text-gray-900 py-2 rounded">Log in with Google</button>
            </form>
            
        </div>
        </>
    )
}
export default SignIn