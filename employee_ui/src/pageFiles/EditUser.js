import React, {useEffect, useState} from 'react';
import {Card, Input, Button} from "@mui/material";
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom';
import Typography from "@mui/material/Typography";


export default function AddUser (){
    //initial state of these variables are null
    const[emp, setEmp] = useState({
        name:"",
        username:"",
        email:""
    })

    useEffect(() => {
        loadEmployee();
    }, [])

    let navigate = useNavigate();
    const {id} = useParams();

    const {name, username, email} = emp; // this is one emp object

    const onInputChange = (e) => {
        setEmp({...emp, [e.target.name] : e.target.value})
    }

    const loadEmployee = async () =>{
        const result = await axios.get(`http://localhost:8080/employee/${id}`)
        setEmp(result.data);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/employee/${id}`, emp)
        navigate("/home");
    }

    return (

        <div>
            <Typography variant={"h3"}>Edit Employee</Typography>
            <br/>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor={"name"}>Name : </label>

                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                    type="text"
                    placeholder={"Enter name"}
                    name={"name"}
                    value={name}
                    onChange={(e) => onInputChange(e)}
                />

                <label>Username : </label>
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                    type="text"
                    placeholder={"Enter username"}
                    name={"username"}
                    value={username}
                    onChange={(e) => onInputChange(e)}
                />

                <label>Email : </label>
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
                <div class={"divider"}/>
                <Button href="/home" type={"submit"} variant={"outlined"} color="error">Cancel</Button>
            </form>
        </div>
    )
}