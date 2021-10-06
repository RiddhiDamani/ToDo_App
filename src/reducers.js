import nextId from "react-id-generator";

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
        index: nextId(),
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
        complete: false,
        dateCompleted: null,
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
      const oldToDo = state.filter((todo) => todo.index !== action.index);
      return [...oldToDo, updatedToDo];
    case "DELETE_TODO":
      return state.filter((todo) => todo.index !== action.index);
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
