import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../Redux/Actions/action";


const Login = () => {
    const checkToken = useSelector((state) => state.authReducer.token )
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginBtn = () => {

    const getUser = JSON.parse(localStorage.getItem("USER"));
    const finding = getUser.find((value) => { 
        return ( value.email === email && value.password === password )
    });
    console.log("finding",finding)
    if(finding){
        dispatch(setToken("Token success"));
    };
    };

    // console.log("checkToken",checkToken)
    return(
        <>
        <h1>Log in screen</h1>
        <input type="text" placeholder="Email"
         value={email}  onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="User name"
         value={password} onChange={(e) => setPassword(e.target.value)} />
         
         <button type="button" onClick={loginBtn}>Submit</button>

        </>
    );
};

export default Login;