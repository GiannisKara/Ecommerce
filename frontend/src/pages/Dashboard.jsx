import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [suc, setSuc] = useState();
  const navigate = useNavigate;
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5050/dashboard")
      .then((res) => {
        if (res.data === "Success") {
          setSuc("Successed");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{suc}</p>
    </div>
  );
};

export default Dashboard;
