import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Home/Footer/Footer";
import Navigation from "../../Home/Navigation/Navigation";
import GoogleButton from "react-google-button";
import login from "../../../images/login.png";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleLogin = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <Navigation></Navigation>
      <div>
        <div className="row m-0">
          <div className="col-sm-12 col-md-4 login-text">
            <h2>Please login</h2>
            <GoogleButton onClick={handleLogin} className="m-auto" />
          </div>
          <div className="col-sm-12 col-md-8">
            <img className="img-fluid" src={login} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
