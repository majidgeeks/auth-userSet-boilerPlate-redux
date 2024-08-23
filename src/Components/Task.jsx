import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Actions/action";

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const addNewTask = () => {
    const task = inputRef.current.value;
    if (task !== "") {
        console.log("task",task)
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  };

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="write-todo"
          ref={inputRef}
          className="task-input"
        />
        <button type="button" onClick={addNewTask}> Add todo </button>
      </div>
    </div>
  );
};

export default Task;
