import React, {useState} from 'react';
import {Card, Input, Button} from "@mui/material";
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';


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

        <div>
            <h1>Add Employee</h1>
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
            <Link to="/">
                <Button type={"submit"} variant={"outlined"}>Cancel</Button>
            </Link>
        </form>
        </div>
    )
}