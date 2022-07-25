import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/common/SignUpFrontEnd";
import logo from "./images/logo.svg";
import "./userSignup.css";
import Axios from "axios";
import { toast } from "react-toastify";

const UserSignup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked", email, password, name, phoneNum, address);
    Axios.post(
      "https://dispatch-buddy-api.herokuapp.com/api/v1/auth/user/create",
      {
        name: name,
        phoneNum: phoneNum,
        email: email,
        password: password,
        user_type: "shipper",
        address: address,
      }
    )
      .then((response) => {
        if (response.status === 201) {
          toast.success(response.data.msg);
        }
        console.log(response);
      })
      .catch((error) => {
        if (error) toast("An error occured");
      });
    // window.location.replace("/user/verify");
  };
  return (
    <>
      <div>
        <section className="user-signup">
          <div className="image-section">
            <img className="signup-image" src="/images/signupImg.png" alt="" />
            <h1>
              Delivery service just got
              <br />
              easier, elegant & superb
              <br />
              with Dispatch Buddy{" "}
            </h1>
          </div>
          <div className="form-section">
            <div className="logo-group">
              <img src={logo} alt="" />
              <h2 className="logo-text">
                Dispatch <br />
                Buddy
              </h2>
            </div>
            <form className="form-group">
              <h2>Sign Up as a Customer</h2>
              <label>Name</label>
              <SignUpForm
                icon="email-icon"
                placeholder="Enter your name"
                type="text"
                setName={setName}
              />
              <label>Email</label>
              <SignUpForm icon="email-icon" type="email" setName={setEmail} />
              <label>Phone Number</label>
              <SignUpForm
                icon="email-icon"
                placeholder="Enter your phone number"
                type="phone"
                setName={setPhoneNum}
              />
              <label>Password</label>
              <SignUpForm
                icon="password-icon"
                type="password"
                setName={setPassword}
              />
              <label>Address</label>
              <SignUpForm
                icon="password-icon"
                placeholder="Enter your address"
                type="text"
                setName={setAddress}
              />
              <button
                className="signup-btn"
                type="submit"
                onClick={handleFormSubmit}
              >
                Sign Up
              </button>

              {/* <br /> */}
              <p>
                Already have an account?
                <Link to="/user-signin" style={{ color: "red" }}>
                  <span> Sign In</span>
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
export default UserSignup;
