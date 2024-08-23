import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  tasksReducer: taskReducer,
  authReducer: authReducer,
});

export default rootReducer;
