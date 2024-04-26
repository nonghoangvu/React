import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

export default function Home() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/user/users")
            setUsers(result.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1 className='h1 text-center'>User Management</h1>
            <Link to="/add" className='btn btn-outline-secondary'>Add</Link>
            <Table striped bordered hover className='mt-3'>
                <thead className='text-center'>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Phone Number</th>
                        <th>Date Of Birth</th>
                        <th>City</th>
                        <th>District</th>
                        <th>Specific Information</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => (
                            <tr key={index}>
                                <th className='text-center'>{index + 1}</th>
                                <td>{item.name}</td>
                                <td className='text-center'>{item.gender ? "Male" : "Female"}</td>
                                <td>{item.account.phoneNumber}</td>
                                <td>{format(new Date(item.dateOfBirth), 'dd-MM-yyyy')}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.district}</td>
                                <td style={{ maxWidth: '250px' }}>{item.address.specificInformation}</td>
                                <td>{item.account.role.roleName}</td>
                                <td style={{ alignContent: 'center' }}>
                                    <Link to={`/user-detail/${item.id}`} className='m-2'><i className="bi bi-pencil-square"></i></Link>
                                    <Link className='m-2 text-danger'><i className="bi bi-trash3"></i></Link>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
