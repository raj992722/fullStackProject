import React,{useState} from "react";
import { addUser } from "../Service/api";
import {FormGroup,FormControl,Input,styled ,InputLabel,Button,Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const initialValue={
    name:'',
    username:'',
    email:'',
    phone:''
};

const AddUser=()=>{
    const [user,setUser]=useState(initialValue);
    const {name,username,email,phone}=user;
    let navigate=useNavigate();
    const onValueChange=(e)=>{
        setUser({[e.taget.name]:e.target.value});
    };
    const addUserDetails=async ()=>{
        await addUser();
        navigate("/all");
    }
    return (
        <FormGroup>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel htmlFor='my-input'>Name</InputLabel>
                <Input id='my-input' name='name' value={name} onChange={(e)=>onValueChange(e)} ></Input> 
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='my-input'>Username</InputLabel>
                <Input id='my-input' name='username' value={username} onChange={(e)=>onValueChange(e)} ></Input> 
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='my-input'>Email</InputLabel>
                <Input id='my-input' name='email' value={email} onChange={(e)=>onValueChange(e)} ></Input> 
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='my-input'>Phone</InputLabel>
                <Input id='my-input' name='phone' value={phone} onChange={(e)=>onValueChange(e)} ></Input> 
            </FormControl>
            <FormControl>
                <Button variant='contained' color='primary' onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
};

export default AddUser;