import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboards = () => {
  const [data, setData] = useState([]);
  const getData = () => {};
  useEffect(() => {
    getData();
  }, []);

  return <div>{"Leaderboards"}</div>;
};

export default Leaderboards;
