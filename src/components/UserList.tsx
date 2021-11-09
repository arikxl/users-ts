import React, { useEffect, useState} from 'react';
import useFetch from 'use-http';
import {  Container } from 'react-bootstrap';

import UserPreview, {User} from './UserPreview';

const UserList = () => {

    const [users, setUsers] = useState<User[]>([]);
    const { get, response, loading, error } = useFetch('https://jsonplaceholder.typicode.com');

    useEffect(() => {
        loadInitialUsers()
    }, []);


    const loadInitialUsers = async () => {
        const initialUsers = await get('/users');
        if(response.ok) setUsers(initialUsers);
    }

    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Users</h1>
            {error && 'ERROR!'}
            {loading && 'Loading Users .....'}
            <>
                { users.map((user) => (
                    <UserPreview user={user} key={user.id} />
                ))}
            </>
        </Container>
    );
};

export default UserList;
