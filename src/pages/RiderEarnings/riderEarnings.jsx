import "./riderEarnings.css";
import axios from "axios";
import smallcar from "./images/smallcar.svg";
import time from "./images/Time.svg";
import AuthNavbar from "../../components/AuthNavbar";
import { useEffect } from "react";

const RiderEarnings = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.post(
        "https://dispatch-buddy-api.herokuapp.com/api/v1/rider/riderEarnings",
        { riderId: "62d678a65a1f50f705f53a99" }
      );
      console.log(response);
    }
    fetchData();
  }, []);
  return (
    <>
      <AuthNavbar />
      <div className="magenta-div"></div>
      {/* <br/>
            <br/> */}
      <div className="body-group">
        <div className="wrapped-div">
          <br />
          <div className="earnings-group">
            <div className="earnings-group-inner">
              <p className="earnings-right">
                <strong>Yesterday</strong>, 3:30PM
              </p>
              <div className="earnings-left">
                <input
                  type="text"
                  placeholder="Delivered"
                  className="earnings-input"
                />
                <p>N3,500.00</p>
              </div>
            </div>
          </div>
          <br />
          <div className="earnings-group">
            <div className="earnings-group-inner">
              <p className="earnings-right">
                <strong>Yesterday</strong>, 3:30PM
              </p>
              <div className="earnings-left">
                <input
                  type="text"
                  placeholder="Delivered"
                  className="earnings-input"
                />
                <p>N3,500.00</p>
              </div>
            </div>
          </div>
          <br />
          <div className="earnings-group">
            <div className="earnings-group-inner">
              <p className="earnings-right">
                <strong>Yesterday</strong>, 3:30PM
              </p>
              <div className="earnings-left">
                <input
                  type="text"
                  placeholder="Delivered"
                  className="earnings-input"
                />
                <p>N3,500.00</p>
              </div>
            </div>
          </div>
          <br />
          <div className="earnings-group">
            <div className="earnings-group-inner">
              <p className="earnings-right">
                <strong>Today</strong>, 10:15AM
              </p>
              <div className="earnings-left">
                <input
                  type="text"
                  placeholder="Delivered"
                  className="earnings-input"
                />
                <p>N2,200.00</p>
              </div>
            </div>
          </div>
          <br />
          <div className="container1">
            <div className="column-text">
              <p>MY EARNINGS</p>
              <h1>N236,000</h1>
            </div>
            <br />
            <div className="row-text">
              <div className="ride-div">
                <img src={smallcar} alt="" className="img-ride" />
                <p>112 Rides</p>
              </div>
              <div className="time-div">
                <img src={time} alt="" className="img-time" />
                <p>890hrs . 20mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RiderEarnings;
