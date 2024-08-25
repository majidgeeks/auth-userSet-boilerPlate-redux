import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/Actions/action";

const SignUpScreen = () => {
    const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpBtn = () => {
    const userInfo = {
      user_name: userName,
      first_name: firstName,
      last_name: lastName,
      user_email: email,
    };

    const user = JSON.parse(localStorage.getItem("USER")) || [];
    console.log("before set item", user)
    user.push({email: email, password: password});

    localStorage.setItem("USER", JSON.stringify(user));
    console.log("after set item", user)
    const getUser = JSON.parse(localStorage.getItem("USER"));
    console.log("getting user", getUser);
    dispatch(setUser(userInfo));

  };

  return (
    <>
      <h1>Sign up Screen</h1>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signUpBtn}>Submit</button>
    </>
  );
};

export default SignUpScreen;
