import { useState } from "react";

import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
} from "../../utils/firebase.utils";

const initialField = {
    displayName: '',
    email: '',
    password: ''
};

function SignUp() {
    const [userDetails, setUserDetails] = useState(initialField);

    const { displayName, email, password } = userDetails;

    function resetFormFields() {
        setUserDetails(initialField);
        console.log('cleared')
    }
    function clearField(){
        console.log('How are you')
    }

    async function handleSignUp(event) {
        event.preventDefault();
        if (!email || !password) return;

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            console.log(user);
            clearField()
            resetFormFields();
        } 
        
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
              } else {
                console.log('user creation encountered an error', error);
              }             }

    }

    function handleSignUpChange(event) {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value });
    }

    return (
        <>
            <div>
                <h1>Create an account</h1>
                <p>Enter your details below</p>
                <form onSubmit={handleSignUp}>
                    <input
                        type="text"
                        name="displayName" 
                        placeholder="Name"
                        value={displayName} 
                        onChange={handleSignUpChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email} 
                        onChange={handleSignUpChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleSignUpChange}
                    />
                    <button type="submit">Create Account</button>
                    <button type="button">Sign up with Google</button>
                </form>
                <p>Already have an account? Log In</p>
            </div>
        </>
    );
}

export default SignUp;
