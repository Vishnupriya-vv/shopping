import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import {TableBody,TableCell,TableContainer,TableHead,TableRow } from '@mui/material'
import Paper from '@mui/material/Paper';
import axios from 'axios'
const Basic_table = () => {
    var[people,setPeople]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data);
            setPeople(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:"red",fontSize:"20px"}}>Name</TableCell>
            <TableCell style={{color:"red",fontSize:"20px"}}>Email</TableCell>
            <TableCell style={{color:"red",fontSize:"20px"}}>City</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((val,i)=>{
            return(
                <TableRow key={i}>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.email}</TableCell>
                    <TableCell>{val.address.city}</TableCell>

                </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Basic_table