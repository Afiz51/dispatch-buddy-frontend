import React from "react";
import emailTick from "./images/email-tick.png";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./verifyEmail.css";

const VerifyEmail = () => {
  const location = useLocation();
  console.log(location.pathname.split("-")[0]);
  const { search } = useLocation();
  const destructuredToken = search.split("=")[1];
  const token = destructuredToken.split("&")[0];
  const email = search.split("=")[2];
  console.log(destructuredToken);
  console.log(search.split("="));
  console.log("token: ", token);
  console.log(email);

  const url =
    "https://dispatch-buddy-api.herokuapp.com/api/v1/auth/user/verify-email";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(url, {
      verificationToken: token,
      email: email,
    });
    console.log(data);
  };
  return (
    <div>
      <div className="verify-emal-container">
        <div className="verify-email-div">
          <img src={emailTick} alt="" />
          <h1>Verify your Email</h1>
          <p>
            Hi there, use the link below to verify your email and start enjoying
            Fintech
          </p>
          <button
            className="verify-email-button"
            style={{ cursor: "pointer" }}
            onClick={handleSubmit}
          >
            Verify Email
          </button>
          <Link to="/user-signin">
            <button className="return-to-LoginPage">Return to Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
