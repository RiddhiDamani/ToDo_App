function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newToDo = {
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
      };
      return [newToDo, ...state];
    case "TOGGLE_TODO":
      const updatedToDo = {
        index: action.index,
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
        complete: action.complete,
        dateCompleted: action.dateCompleted,
      };
      const oldToDo = state.filter((todo, i) => i !== action.index);
      return [...oldToDo, updatedToDo];
    case "DELETE_TODO":
      console.log("Index: ", action.index);
      return state.filter((todo, i) => i !== action.index);
    case "CLEAR_TODOLIST":
      return [];
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
