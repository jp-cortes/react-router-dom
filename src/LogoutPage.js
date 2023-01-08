import React from 'react';
import { useAuth } from './auth';


function LogoutPage() {
    const auth = useAuth();
    const logout = (e) => {
        e.preventDefault();
        auth.logout()
    }
    
        return(
            <>
            <h1>LogoutPage</h1>
    
            <form onSubmit={logout}>
            <label>Do you want to leave?</label>
            
            <button type="submit">Logout</button>
            </form>
            </>
        );
    
}

export { LogoutPage };