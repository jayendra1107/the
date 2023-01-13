import React from "react";
import "./DashboardBtn.css";

const DashboardBtn = (props) => {
  return (
    <button className="dashboard-btn" onClick={() => props.onClick()}>
      {props.text}
    </button>
  );
};

export default DashboardBtn;
