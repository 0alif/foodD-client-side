import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <div>
                <h2>This is login </h2>
                <p>Developer is sleeping...</p>
                <button onClick={handleLogin}>Google log in</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;