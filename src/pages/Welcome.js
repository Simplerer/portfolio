import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
export default function Welcome() {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
    })

    return(
        <div id='welcome'>
        <h1>Welcome to Scott Stone's Portfolio</h1>
        </div>
    )
}