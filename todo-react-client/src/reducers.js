function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    // return {
    //   username: action.username,
    //   access_token: action.access_token,
    // };
    case "LOGOUT":
      return "";
    // return {
    //   username: undefined,
    //   access_token: undefined,
    // };
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newToDo = {
        id: action.id,
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
        complete: false,
        dateCompleted: null,
      };
      return [newToDo, ...state];
    case "TOGGLE_TODO":
      return state.map((t) => {
        const updatedToDo = t;
        if (t.id === action.id) {
          updatedToDo.complete = action.complete;
          updatedToDo.dateCompleted = action.dateCompleted;
          //  console.log(t);
          //  console.log(updatedToDo);
        }
        return updatedToDo;
      });
    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.id);
    case "FETCH_TODOS":
      return action.todos;
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action),
  };
}
