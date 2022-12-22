import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {useState, useEffect} from "react";
import axios from 'axios';



const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'username',
        headerName: 'Username',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'number',
        width: 200,
        editable: true,
    }
];

export default function DataGrids() {
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
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={employee}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>

    );
}