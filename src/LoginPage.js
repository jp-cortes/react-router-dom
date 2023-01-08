import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';


function LoginPage() {
    const auth = useAuth();
    const [username, setUsername] = React.useState('');
    
    
    const login = (e) => {
        e.preventDefault();
        auth.login({username});
    }
    if(auth.user) {
        return <Navigate to={'/profile'}/>
    }

    return(
        <>
        <h1>LoginPage</h1>

        <form onSubmit={login}>
        <label>Write your username:</label>
        <input
        value={username}
        onChange={event => setUsername(event.target.value)}
        />
        <button type="submit">Login</button>
        </form>
        </>
    );
}

export { LoginPage };