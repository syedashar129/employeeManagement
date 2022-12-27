import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Link} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import "./table.css";
import Navbar from "./Navbar";

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

        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">

            <table class="min-w-full text-center">
                <thead class="border-b bg-gray-800">
                    <tr>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">#</th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">Name</th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">Username</th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">Email</th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">Options</th>
                    </tr>
                </thead>
                <tbody>
                {employee.map((emp, index) =>(
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <th class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</th>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{emp.name}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{emp.username}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{emp.email}</td>
                            <td>
                                <Button href={`/viewUser/${emp.id}`}>View</Button>
                                <Button href={`/editUser/${emp.id}`}>Edit</Button>
                                <Button
                                    color="error"
                                    onClick={() => deleteEmployee(emp.id)}>Delete
                                </Button>


                            </td>
                        </tr>

                ))}
                </tbody>
            </table>

            <br/>

            <Button
                href={"/addUser"}
                variant="contained"
                color="success"
                href={"/addUser"}
            >Add User</Button>

        </div>
        </div>
        </div>
        </div>
    )
}
