import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [suc, setSuc] = useState();
  const navigate = useNavigate();

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
  }, []);

  return (
    <div>
      {suc === "Successed" ? (
        <h1>Welcome to the Dashboard!</h1>
      ) : (
        <h1>Access denied. Please log in as admin.</h1>
      )}
    </div>
  );
};

export default Dashboard;
