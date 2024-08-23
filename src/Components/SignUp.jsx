import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../Redux/Actions/action";

const SignUpScreen = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [tokenInput, setTokenInput] = useState("");

    const signUpBtn = () => {
      dispatch(setUser(userName));
      dispatch(setToken(tokenInput));
    
    }

    
    return(
        <>
        <h1>
            Sign up Screen
        </h1>
        <input type="text" placeholder="User Name"
         value={userName} onChange={(e) => setUserName(e.target.value) } />
        
        <input type="text" placeholder="Token" value={tokenInput}
        onChange={(e) => setTokenInput(e.target.value)} />

     <button onClick={signUpBtn}>Submit</button>
        </>
    )
};

export default SignUpScreen;