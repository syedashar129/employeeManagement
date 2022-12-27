import React, {useState} from 'react';
import {Card, Input, Button} from "@mui/material";
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import Typography from '@mui/material/Typography'




export default function AddUser (){
    //initial state of these variables are null
    const[emp, setEmp] = useState({
        name:"",
        username:"",
        email:""
    })

    let navigate = useNavigate();

    const {name, username, email} = emp; // this is one emp object

    const onInputChange = (e) => {
        setEmp({...emp, [e.target.name] : e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/employee", emp)
        navigate("/");
    }

    return (

        <div class="center">
            <Typography variant={"h3"}>Add Employee</Typography>
            <br/>
            <form
                onSubmit={(e) => onSubmit(e)}
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
            <label
                htmlFor={"name"}
                class="block text-gray-700 text-sm font-bold mb-2" for="username"
            >Name : </label>

            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                type="text"
                placeholder={"Enter name"}
                name={"name"}
                value={name}
                onChange={(e) => onInputChange(e)}
            />

            <label
                class="block text-gray-700 text-sm font-bold mb-2" for="username"
            >Username : </label>
            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                type="text"
                placeholder={"Enter username"}
                name={"username"}
                value={username}
                onChange={(e) => onInputChange(e)}
            />

            <label class="block text-gray-700 text-sm font-bold mb-2" for="username"
            >Email : </label>
            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                type="text"
                placeholder={"Enter email "}
                name={"email"}
                value={email}
                onChange={(e) => onInputChange(e)}
            />

            <br/>

            <Button type="submit" variant="outlined">Submit</Button>
            <div className={"divider"}/>
            <Button
                color = "error"
                href={"/"}
                type={"submit"} variant={"outlined"}
            >Cancel</Button>
        </form>
        </div>
    )
}