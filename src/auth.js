import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider({ children }) {

    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const login = ({ username }) => {
        setUser({ username });
        navigate('/profile');
    }
    const logout = () => {
        setUser(null);
        navigate('/');
    }

    const auth = {user, login, logout};
    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}
function useAuth() {
const auth = React.useContext(AuthContext);
return auth;
}
function AuthRoute({ children }) {
    const auth = useAuth();
    //this to prevent access from  the  url-hash to profile
    if(!auth.user) {
        //this is a component or react router
        return <Navigate to={'/login'}/>
    }
    return children
}

export {
    AuthProvider,
    AuthRoute,
    useAuth,
}