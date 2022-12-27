import React, {useEffect, useState} from 'react';
import {Card, Input, Button} from "@mui/material";
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom';


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
        navigate("/");
    }

    return (

        <div>
            <h1 className="text-3xl font-bold underline">Edit Employee</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor={"name"}>Name : </label>

                <Input
                    type="text"
                    placeholder={"Enter name"}
                    name={"name"}
                    value={name}
                    onChange={(e) => onInputChange(e)}
                />

                <label>Username : </label>
                <Input
                    type="text"
                    placeholder={"Enter username"}
                    name={"username"}
                    value={username}
                    onChange={(e) => onInputChange(e)}
                />

                <label>Email : </label>
                <Input
                    type="text"
                    placeholder={"Enter email "}
                    name={"email"}
                    value={email}
                    onChange={(e) => onInputChange(e)}
                />

                <Button type="submit" variant="outlined">Submit</Button>
                <Button href="/" type={"submit"} variant={"outlined"}>Cancel</Button>
            </form>
        </div>
    )
}