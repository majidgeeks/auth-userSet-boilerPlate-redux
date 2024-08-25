export const addTodo = (text) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime(),
      text: text,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
export const setOnboarding = (text) => {
  return {
    type: "SET_ONBOARDING",
    payload : text
  };
};
