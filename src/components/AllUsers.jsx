import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';

import { getUsers, deleteUser } from '../service/api';

import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
width : 93%;
margin : 50px auto 50px auto;
`
const THead = styled(TableRow)`
background : #010138;
& > th {
color : white;
text-align : center;
font-size : 25px
}
`

const TBody = styled(TableRow)`
background : #bcbacf;
& > td {
text-align : center;
font-size : 20px
}
`



const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersDetails();
    }, []);

    const getUsersDetails = async () => {
        let response = await getUsers();
        console.log(response);

        setUsers(response.data);
    }

    const deleteUserData = async(id) =>{
        await deleteUser(id);
        getUsersDetails();
    }

    
    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    users.map(user => (
                        <TBody>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant = "outlined" color = "inherit" style = {{marginRight: 15}} component = {Link} to = {`/edit/${user.id}`}>Edit</Button>
                                <Button variant = "contained" color = "error" onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;