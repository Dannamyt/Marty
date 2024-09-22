import { useState } from "react";

import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
} from "../../utils/firebase.utils";


function SignUp() {
    const [userDetails, setUserDetails] = useState({
        displayName: '',
        email: '',
        password: ''
    }
    );

    const { displayName, email, password } = userDetails;
    const [errorMessage, setErrorMessage] = useState('')
    
    function resetFormFields() {
        setUserDetails(initialField);
        console.log('cleared')
    }
    function clearField(){
        console.log('How are you')
    }

    async function handleSignUp(event) {
        event.preventDefault();
        if (!email || !password){
            setErrorMessage('Please enter email and password');
            return;
        } 

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            console.log(user);
            clearField()
            resetFormFields();
        } 
        
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('This user already exists');
            } else if(error.code ==='auth/invalid-email'){
                setErrorMessage('The email you entered is invalid')
            }
            
            else {
                console.log('user creation encountered an error', error);
              }             }

    }

    function handleSignUpChange(event) {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value });
        setErrorMessage('')
    }

    return (
        <>
             <div className="w-full max-w-sm p-6 ">
            <h1 className="text-3xl font-semibold  font-switzer mb-4">Create an account</h1>
            <p className="mb-4">Enter your details below</p>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    name="displayName"
                    placeholder="Name"
                    value={displayName}
                    onChange={handleSignUpChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    autoComplete="off"
                    onChange={handleSignUpChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    autoComplete="off"
                    onChange={handleSignUpChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                {errorMessage && (
                <p className="mb-4 text-red-500">{errorMessage}</p> // Display error message below the form
            )}
                <button type="submit"  className="w-full bg-gray-900 text-white font-bold py-2 rounded">Create Account</button>
            </form>
        </div>
        </>
    );
}

export default SignUp;
