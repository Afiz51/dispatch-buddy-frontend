import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./reEnterPassword.css";

const initialState = {
  token: "",
  email: "",
  password: "",
};

const url =
  "https://dispatch-buddy-api.herokuapp.com/api/v1/auth/user/reset-password";

const ReEnterPassword = () => {
  const [form, setForm] = useState(initialState);
  const { search } = useLocation();
  const destructuredToken = search.split("=")[1];
  const token = destructuredToken.split("&")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(url, {
        token: token,
        email: form.email,
        password: form.password,
      });
      if (data.status === 200) {
        toast.success("Password has been reset");
      }
      setForm({ ...form, email: "", password: "" });
      console.log(data);
    } catch (error) {
      setForm({ ...form, email: "", password: "" });
      if (error) toast.error("An error occured");
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="reset-password-main-div">
      <div className="reset-password-container">
        <form className="re-enterPassword" onSubmit={handleSubmit}>
          <h1>Reset Yout Password</h1>
          <div className="first form-group">
            <label htmlFor="">Enter Email</label>
            <input
              type="text"
              name="email"
              id=""
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className=" second form-group">
            <label htmlFor="">Enter Password</label>
            <input
              type="text"
              name="password"
              id=""
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <button type="submit" className="reset-password-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReEnterPassword;
