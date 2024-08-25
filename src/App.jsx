import "./App.css";
// import Task from "./Components/Task";
// import TaskList from "./Components/TaskList";
import { useSelector } from "react-redux";
// import { setToken } from "./Redux/Actions/action";
import SignUpScreen from "./Components/SignUp";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import Onboarding from "./Components/OnboardingScreen";
import TaskScreen from "./Components/TaskScreen";

function App() {
  const [userState, setUserState] = useState(null);
  const [tokenLoaded, setTokenLoaded] = useState(null);
  const checkUser = useSelector((state) => state.authReducer.user);
  const checkToken = useSelector((state) => state.authReducer.token);
  const checkOnboarding = useSelector((state) => state.authReducer.onBoarding );

  useEffect(() => {
    setUserState(checkUser);
    if(checkToken){
      setTokenLoaded(checkToken);
    }

  }, [checkUser, checkToken]);

  console.log("userState",userState);
  console.log("tokenLoaded",tokenLoaded);


  if (!userState) {
    return <SignUpScreen />;
  } else if (userState && !tokenLoaded) {
    return <Login />;
  } else if (tokenLoaded && !checkOnboarding ) {
    return <Onboarding />;
  }else if (tokenLoaded && checkOnboarding){

    return <TaskScreen />
  }
}

export default App;
