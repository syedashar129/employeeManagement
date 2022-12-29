import React from 'react';
import {UserAuth} from "../firebase/AuthContext";
import {Button} from "@mui/material";


export default function Account () {
    const {user, logOut} = UserAuth();

    return (
        <div>
            {user?.displayName ?
                <div class="center">
                    <p>Welcome, {user?.displayName}</p>
                    <br/>
                    <p>Email : {user?.email}</p>
                    <br/>

                    <Button href={'/home'}>
                        Home
                    </Button>
                    <Button onClick={logOut}>
                        Logout
                    </Button>
                </div>

                :

                <div>
                    <p>You are logged out ... Please sign in below</p>
                    <br/>

                    <Button href={'/'}>
                        Sign In
                    </Button>
                </div>


            }
        </div>
    )

}
