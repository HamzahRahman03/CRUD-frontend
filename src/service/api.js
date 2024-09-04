import axios from 'axios';

const userUrl = 'http://localhost:8080';



export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${userUrl}/users`);
    } catch(error){
        console.log('Error while calling getUsers api', error.message);
    }
}


// export const getUser = async (user) =>{
//     try{
//         return await axios.get(`${userUrl}/${user}`);
//     } catch(error){
//         console.log('Error while calling getUser api', error.message);
//     }
// }

export const addUser = async (user) => {
    try{
        return await axios.post(`${userUrl}/user`, user);
    }catch(error){
        console.log('Error while calling api', error.message);
    }
}

export const editUser = async (id) =>{
    try{
        return await axios.get(`${userUrl}/edit/${id}`);
    } catch(error){
        console.log('Error while calling editUser api', error.message);
    }
}

export const updateUser = async (id, user) =>{
    try{
        console.log(id, user, 'hjl');
        return await axios.put(`${userUrl}/user/${id}`, user);
    } catch(error){
        console.log('Error while calling editUser api', error.message);
    }
}

export const deleteUser = async(id) => {
    try{
        return await axios.delete(`${userUrl}/delete/${id}`);
    }catch(error){
        console.log('Error while calling deleteUser api', error.message);
    }
}