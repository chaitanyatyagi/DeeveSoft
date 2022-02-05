import { useState } from "react"
import "../styles/login.css"
import 'react-toastify/dist/ReactToastify.css';
import app from "../firebase"
import { Link } from "react-router-dom"
import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = async () => {
        localStorage.setItem('Email',email)
        try {
            const result = await app.auth().createUserWithEmailAndPassword(email, password)
            window.M.toast({ html: `Welcome ${result.user.email}`, classes: "green" })
            history.push("/goal")
        } catch (error) {
            window.M.toast({ html: error.message, classes: "green" })
            history.push("")
        }
    }
    return (
        <div className="login">
            <div className="page">
                <div className="icon"></div>
                <div className="input1">
                    <label>EMAIL</label>
                    <input type="email" className='input' value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="input2">
                    <label>PASSWORD</label>
                    <input type="password" className='input' value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="submitlog"><Link className='btn1' to="/goal" onClick={(event) => handleSubmit(event)}>SUBMIT</Link></div>
            </div>
        </div>
    )
}


export default Login;
