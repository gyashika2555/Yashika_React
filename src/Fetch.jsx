import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.error("Error fetching data", err))
    }, [])

    return (
        <>
            <div>Fetch Data</div>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.username}</h1>
                    <h3>{user.email}</h3>
                    <p>{user.address.geo.lng}</p>
                </div>
            ))}
        </>
    )
}

export default Fetch