import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  axios.defaults.withCredentials = true;

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/login", { email, password })
      .then((res) => {
        if (res.data.status === "OK") {
          localStorage.setItem("NAME", res.data.name);
          localStorage.setItem("EMAIL", res.data.email);
          localStorage.setItem("ROLE", res.data.role);
          if (res.data.role === "admin") {
            navigate("/pages/Dashboard");
          } else {
            navigate("/");
          }
          return;
        }

        console.log("Invalid email or password");
      })
      .catch((err) => {
        console.log("An error occurred:", err);
      });
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400 p-20">
      <div className="min-w-[fit-content] w-[50%] h-[35rem] md:w-[60%] lg:w-[20%] bg-gradient-to-r from-violet-400 to-violet-600 mx-auto border-4 border-violet-50 rounded-lg p-3 lg:p-5">
        <h1 className="text-[40px] font-bold text-center text-violet-100">
          Log-In
        </h1>

        <form onSubmit={submit} className="flex flex-col content-center ">
          <input
            className="w-[100%] mx-auto m-5 p-1 border-2 border-violet-800 rounded bg-violet-300 text-violet-50 placeholder-violet-50 text-[17px]"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            name="email"
            id="email"
          />
          <input
            className="w-[100%] mx-auto m-5 p-1 border-2 border-violet-800 rounded bg-violet-300 text-violet-50 placeholder-violet-50 text-[17px]"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            name="password"
            id="password"
          />
          <button
            className="w-[55%] mx-auto m-10 p-1 border-2 border-violet-800  bg-violet-500 rounded text-violet-50 text-[20px] transition ease-in-out delay-0 hover:bg-violet-950 hover:border-violet-50 duration-700  "
            type="submit"
          >
            Log-In
          </button>
          <Link
            className="mx-auto mt-10 underline  text-violet-50 transition ease-in-out delay-0 hover:text-violet-950 duration-700 "
            to="../pages/Signup"
          >
            Don't have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
