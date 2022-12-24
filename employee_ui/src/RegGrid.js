import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Link} from "@mui/material";

export default function RegGrid(){
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        loadEmployee();
    }, [])

    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8080/employee");
        setEmployee(result.data);
        console.log(result);
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {employee.map((emp, index) =>(
                        <tr>
                            <th>{index + 1}</th>
                            <td>{emp.name}</td>
                            <td>{emp.username}</td>
                            <td>{emp.email}</td>
                            <td>
                                <Button>View</Button>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </td>
                        </tr>

                ))}
                </tbody>
            </table>

            <Link to="/addUser">
                <Button>Add User</Button>
            </Link>
        </div>
    )
}
