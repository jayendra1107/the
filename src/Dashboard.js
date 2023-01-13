import React from "react";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import poster from "./assets/poster.svg";
import logoBlack from "./assets/logo-black.svg";

const Dashboard = () => {
  const history = useHistory();
  const gotoHome = () => {
    history.push("/home");
  };
  const gotoLeaderboards = () => {
    history.push("/leaderboards");
  };
  const gotoProfile = () => {
    history.push("/profile");
  };
  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };
  return (
    <div className="dashboard-container">
      <div className="navbar">
        <img className="logo" src={logoBlack} />
      </div>
      <div className="left-container">
        <img className="poster" src={poster} />
      </div>
      <div className="right-container">
        <div className="btn-container">
          <button className="dashboard-btn" onClick={() => gotoHome()}>
            {"Play"}
          </button>
          <button className="dashboard-btn" onClick={() => gotoLeaderboards()}>
            {"Leaderboards"}
          </button>
          <button className="dashboard-btn" onClick={() => gotoProfile()}>
            {"Profile"}
          </button>
          <button className="dashboard-btn" onClick={() => closeTab()}>
            {"Quit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
