import TaskList from "./TaskList";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskScreen = () => {
  const user = useSelector((state) => state.authReducer);

  console.log("userInfo", user);
  return (
    <>
      <div>
        <p>{}</p>
        <p>{}</p>
      </div>

      <Task />
      <TaskList />
    </>
  );
};

export default TaskScreen;
