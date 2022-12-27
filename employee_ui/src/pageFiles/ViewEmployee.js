import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";

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

            <div className="flex items-center h-screen w-full justify-center">


                <div className="max-w-xs">
                    <div className="bg-white shadow-xl rounded-lg py-3">

                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{emp.name}</h3>
                            <div className="text-center text-gray-400 text-xs font-semibold">
                                <p>Employee : {emp.id}</p>
                            </div>


                            <table className="text-xs my-3">
                                <tbody>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Full Name</td>
                                    <td className="px-2 py-2">{emp.name}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Username</td>
                                    <td className="px-2 py-2">{emp.username}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td className="px-2 py-2">{emp.email}</td>
                                </tr>
                                </tbody>

                            </table>
                            <br/>

                            <Button
                                href={"/"}
                                variant={"outlined"}
                            >
                                Home
                            </Button>


                            <div className="divider"/>
                            <div className="divider"/>
                            <div className="divider"/>
                            <div className="divider"/>
                            <div className="divider"/>
                            <div className="divider"/>
                            <div className="divider"/>
                            <div className="divider"/>
                            <div className="divider"/>
                            <div className="divider"/>

                            <Button
                                href={`/editUser/${id}`}
                                variant={"outlined"}
                            >
                                Edit
                            </Button>



                        </div>

                    </div>

                </div>

            </div>

    )
}