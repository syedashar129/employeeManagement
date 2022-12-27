import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

export default function ViewEmployee(){
    const [emp, setEmp] = useState({
        name:"",
        username:"",
        email:""
    })

    //to get the employee id from URL
    const{id} = useParams();

    const loadEmployee = async () =>{
        const result = await axios.get(`http://localhost:8080/employee/${id}`)
        setEmp(result.data);
    }

    useEffect(() => {
        loadEmployee();
    }, [])



    return (
        <div>
            <h1>View User details</h1>

            <ul>
                <li>Name</li>
                <b>{emp.name}</b>

                <li>Username</li>
                <b>{emp.username}</b>

                <li>Email</li>
                <b>{emp.email}</b>
            </ul>
        </div>
    )
}