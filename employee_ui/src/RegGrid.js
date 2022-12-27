import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Link} from "@mui/material";
import {useParams} from "react-router-dom";

export default function RegGrid(){
    const [employee, setEmployee] = useState([]);

    const{id} = useParams();

    useEffect(() => {
        loadEmployee();
    }, [])

    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8080/employee");
        setEmployee(result.data);
        console.log(result);
    }

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:8080/employee/${id}`);
        loadEmployee();
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
                                <Button href={`/viewUser/${emp.id}`}>View</Button>
                                <Button href={`/editUser/${emp.id}`}>Edit</Button>
                                <Button
                                    onClick={() => deleteEmployee(emp.id)}>Delete
                                </Button>


                            </td>
                        </tr>

                ))}
                </tbody>
            </table>

            <Link to="/addUser">
                <Button href={"/addUser"}>Add User</Button>
            </Link>
        </div>
    )
}
