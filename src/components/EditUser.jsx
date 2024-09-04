import { useEffect, useState } from 'react';

import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import { useNavigate, useParams } from 'react-router-dom';

import { getUsers, editUser, updateUser } from '../service/api';


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


const EditUser = () => {

    const [user, setUser] = useState(initialValues);
    
    const navigate = useNavigate();

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async() => {
        let response = await editUser(id);
        setUser(response.data);
        console.log(response.data);
    }

    const onValueChange = (e) =>{
        setUser({ ...user, [e.target.name] : e.target.value})
        console.log(user, "user");
    }

    const editUserDetails = async() =>{
        await updateUser(id, user);
        navigate('/all');
    }


    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "name" value = {user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "username" value = {user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "email" value = {user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "phone" value = {user.phone} />
            </FormControl>
            <FormControl>
                <Button onClick ={() => editUserDetails()} variant = "contained">Update User</Button>
                <Input/>
            </FormControl>
        </Container>
    )
}

export default EditUser;