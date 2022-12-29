import React from 'react';
import {Button} from "@mui/material";

export default function LogOut (){

    return (
        <div>
            <h3>You are logged out.</h3>
            <br/>

            <p>Sign in to the employee management system below ...</p>
            <Button href={'/'}>
                Sign in
            </Button>
        </div>
    )
}