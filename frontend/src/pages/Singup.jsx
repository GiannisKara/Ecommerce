//import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
    try {
      fetch(`http://localhost:5050/singup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((res) => {
          // Access the 'Userdata' property from the response object
          if (res.Userdata === "exist") {
            alert("User already exists");
          } else if (res.Userdata === "not exist") {
            navigate("/", { state: { id: email } }); // Replace this with your navigation logic
          }
        })
        .catch((e) => {
          alert("An error occurred. Please try again later.");
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400 p-20">
      <div className="min-w-[fit-content] w-[50%] h-[35rem] md:w-[60%] lg:w-[20%] bg-gradient-to-r from-violet-400 to-violet-600 mx-auto border-4 border-violet-50 rounded-lg p-3 lg:p-5">
        <h1 className="text-[40px] font-bold text-center text-violet-100">
          Sign-Up
        </h1>

        <form action="POST" className="flex flex-col content-center ">
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
          <input
            className="w-[100%] mx-auto m-5 p-1 border-2 border-violet-800 rounded bg-violet-300 text-violet-50 placeholder-violet-50 text-[17px]"
            type="password"
            placeholder="Confirm Password"
            name="confirm-password"
            id="confirm-password"
          />
          <button
            className="w-[55%] mx-auto m-10 p-1 border-2 border-violet-800  bg-violet-500 rounded text-violet-50 text-[20px] transition ease-in-out delay-0 hover:bg-violet-950 hover:border-violet-50 duration-700  "
            type="submit"
            onClick={submit}
          >
            Sign-Up
          </button>
          <Link
            className="mx-auto mt-10 underline  text-violet-50 transition ease-in-out delay-0 hover:text-violet-950 duration-700 "
            to="../pages/Login"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
