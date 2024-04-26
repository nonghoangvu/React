import axios from 'axios';
import React, { useEffect, useState } from 'react'

const userData = sessionStorage.getItem("user");
export default function About() {
    const [user, setUser] = useState(JSON.parse(userData))
    const [u, setU] = useState()
    const getDetail = async () => {
        try {
            const result = await axios(`http://localhost:8080/api/user/user-detail/${user.id}`)
            setU(result.data)
        } catch (error) {
            console.log(error);
        }
    }
    getDetail()
    // useEffect(() => {
    //     getDetail()
    // }, [])
    return (
        <div>
            <h1>ID: {u.id}</h1>
            <h1>ID: {u.name}</h1>
        </div>
    )
}
