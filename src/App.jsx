import { useEffect } from "react";
import "./App.css";
// import Task from "./Components/Task";
// import TaskList from "./Components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { setOnboarding, setToken } from "./Redux/Actions/action";
import SignUpScreen from "./Components/SignUp";

function App() {
  const dispatch = useDispatch();
  // const token = useSelector((store) => store.authReducer.token);
  // const isOnboarding = useSelector((store) => store.authReducer.isOnboarding);

  useEffect(() => {
    // fake login
    new Promise((resolve) => {
      console.log("Login user");
      setTimeout(() => {
        resolve();
      }, 10000);
    }).then(() => {
      // after login
      console.log("login done");
      dispatch(setOnboarding(true))
      dispatch(setToken("abcd"));
      // set user and token
      // redirect
    });
  }, []);

  return (
  // if (token && isOnboarding) {
  //   return (
      <>
      <SignUpScreen />
        {/* <Task />
        <TaskList /> */}
      </>
  //   );
  // }
  // if (token && !isOnboarding) {
  //   return <p>Onboarding</p>;
  // }

  // return <p>Please login first</p>;
  )
}

export default App;
