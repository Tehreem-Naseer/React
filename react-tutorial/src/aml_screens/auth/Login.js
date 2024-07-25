import React from 'react';
import { useState } from 'react';
import UserServices from '../services/UserServices';
import '../css/auth.css'

function Login(){

    const [userId , setUserId] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await UserServices.login(userId , password);
            
        } catch (error) {
            console.log(error);
            setError(error);
            setTimeout(()=>{
                setError('');
            },5000);
        }
    }


    return(
        <>
            <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>UserId </label>
                    <input type="email" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>


        </>
    )

}
export default Login;