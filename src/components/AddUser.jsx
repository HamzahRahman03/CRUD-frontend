import {useState} from 'react';

import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import {addUser} from '../service/api';

import { useNavigate } from 'react-router-dom';


const Container = styled(FormGroup) `
    width : 40%;
    margin : 5% auto auto auto;
    & > div {
    margin-top : 10px
    }
`

const initialValues = {
    name : '',
    username: '',
    email : '',
    phone:''
}


const AddUser = () => {

    const [user, setUser] = useState(initialValues);
    
    const navigate = useNavigate();

    const onValueChange = (e) =>{
        setUser({ ...user, [e.target.name] : e.target.value})
        console.log(user);
    }

    const addUserDetails = async() =>{
        await addUser(user);
        navigate('/all');
    }


    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "name" autoComplete="off"/>
            </FormControl>
            <FormControl>
                <InputLabel>username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "username" autoComplete="off"/>
            </FormControl>
            <FormControl>
                <InputLabel>email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "email" autoComplete="off"/>
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "phone" autoComplete="off"/>
            </FormControl>
            <FormControl>
                <Button onClick ={() => addUserDetails()} variant = "contained">Add User</Button>
                <Input/>
            </FormControl>
        </Container>
    )
}

export default AddUser;
