import React, { useEffect, useState } from "react";
import { requestJira } from "@forge/bridge";
import Jirabg from "./assets/Jirabg.svg";
import logoBlack from "./assets/logo-black.svg";
import back from "./assets/back.svg";
import wallet from "./assets/wallet.svg";
import "./Jira.css";

const Jira = () => {
  const [ticket, setTicket] = useState({});
  const [page, setPage] = useState(1);
  const backClick = () => {
    setPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
  };
  const getTicket = async () => {
    const response = await requestJira(
      `/rest/api/3/issues/?jql=assignee%3DcurrentUser()%20AND%20(statusCategory%3D%22To%20Do%22%20OR%20statusCategory%3D%22In%20Progress%22)%20ORDER%20BY%20priority%20DESC&startAt` +
        page +
        `&maxResults=1`
    );
    setTicket(await response.text());
  };
  useEffect(() => {
    getTicket();
  });
  return (
    <div
      className="jira-container"
      style={{ backgroundImage: `url(${Jirabg})` }}
    >
      <div className="navbar">
        <img className="nav-img" src={back} />
        <img className="nav-img" src={logoBlack} />
        <img className="nav-img" src={wallet} />
      </div>
      <div className="ticket-container">
        <button className="left-btn jira-btn" onClick={() => backClick()}>
          {"<"}
        </button>
        <div className="ticket">{ticket}</div>
        <button
          className="right-btn jira-btn"
          onClick={() => setPage((prev) => prev + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Jira;
