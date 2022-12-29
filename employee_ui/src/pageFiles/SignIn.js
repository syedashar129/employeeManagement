import React from 'react';
import {GoogleButton} from 'react-google-button';
import {UserAuth} from '../firebase/AuthContext.js'
import {useNavigate} from "react-router-dom";

export default function SignIn (){
    let navigate = useNavigate();

    const {googleSignIn} = UserAuth();

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
            navigate('/home')
        }
        catch(error){
            console.log(error);
        }

    }

    return (
        <div>
            <h1>Sign In</h1>
            <GoogleButton onClick={handleGoogleSignIn}/>
        </div>
    )
}