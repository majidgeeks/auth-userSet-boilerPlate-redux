// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Actions/action";
import { useEffect } from "react";

const TaskList = () => {
    const tasks = useSelector((store) => {
        return store.tasksReducer.tasks
    });
    const isLoading = useSelector((store) => store.tasksReducer.isLoading)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
       dispatch(deleteTodo(id));
    }
   console.log("tasks",tasks)

   useEffect(() => {
    // set IsLoading to true
    // fetch existing data from API
    // set IsLoading to false
   },[])

    
    return(
        <div className="taskList">
            <div className="display-tasks">
                <h3>Your tasks :</h3>
                <ul>
                    {isLoading ? <p>Loading....</p> : tasks.map((data) => {
                        return(
                        <li className="task" key={data.id}>
                            {data.text}
                            <button
                             onClick={()=> handleDelete(data.id)}
                             type="button" 
                             className="delete-btn"> Delete </button>
                        </li>
                        )
                    })}
                </ul>

            </div>
        </div>

    )
};

export default TaskList;