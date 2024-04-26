import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'


export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()

    const handleSubmit = async () => {
        try {
            const result = await axios(`http://localhost:8080/api/user/login?phoneNumber=${phoneNumber}&pw=${password}`)
            setUser(result.data)
        } catch (error) {
            console.log(error);
        }
        console.log(user.id);
        user !== null && sessionStorage.setItem("user", JSON.stringify(user));
    }
    return (
        <div>
            <Container>
                <h1 className='h1 text-center'>Sign in</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number"
                            onChange={(e) => {
                                setPhoneNumber(e.target.value)
                            }} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
