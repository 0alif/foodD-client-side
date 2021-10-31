import React from "react";
import { useHistory } from "react-router";
import notFound from "../../images/404.png";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();

  const backToHome = () => {
    history.push("/home");
  };

  return (
    <div>
      <img className="img-fluid not-found" src={notFound} alt="" />
      <button onClick={backToHome} className="btn not-found-btn">
        Back to home
      </button>
    </div>
  );
};

export default NotFound;
