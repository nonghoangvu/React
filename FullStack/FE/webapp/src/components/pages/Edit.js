import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

export default function Edit() {
    const { id } = useParams()
    const [user, setUser] = useState({
        id: null,
        name: "",
        gender: "",
        dateOfBirth: "",
        account: {
            id: null,
            phoneNumber: "",
            password: "",
            role: {
                id: "",
                roleName: "",
                createDate: ""
            },
            isLocked: true,
            createDate: ""
        },
        address: {
            id: null,
            city: "",
            district: "",
            specificInformation: ""
        },
        lastEdited: ""
    })

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/user/${id}`)
            setUser(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        console.log(user);
    }

    return (
        <div>
            <>
                <h1 className='text-center h1 text-secondary mt-2'>Edit User</h1>
                <div className='mt-3'>
                    <Row>
                        <Col>
                            <FloatingLabel label="Your Name" className="mb-3">
                                <Form.Control type="text" name="name" value={user.name} onChange={handleChange} />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel label="Date Of Birth" className="mb-3">
                                <Form.Control type="date" name="dateOfBirth" value={user.dateOfBirth && format(new Date(user.dateOfBirth), 'yyyy-MM-dd')} onChange={handleChange} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel label="Phone Number" className="mb-3">
                                <Form.Control type="text" name="phoneNumber" onChange={handleChange} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </>
        </div>
    )
}
