import { useState, useEffect } from "react";


const Login = () => {
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    
    return ( 
        <div className=" mx-auto border-red">
             
            <h1 className="text-3xl font-bold underline ">Log-In</h1>
            
             <form action="POST" className="flex flex-column flex-wrap justify-items-center" > 
                <input type="email" onChange = {(e) => {setEmail(e.target.value)}} placeholder="Email" name="email" id="email" />
                <input type="password" onChange = {(e) => {setPassword(e.target.value)}} placeholder="Password" name="password" id="email" />
                <button type="submit">Log-In</button>
             </form>

        </div>
     );
}
 
export default Login;