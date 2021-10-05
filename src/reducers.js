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
      const dateCheck = Date(Date.now()).toString().slice(0, 25);
      return state.map((todo, i) =>
        i === action.index
          ? { ...todo, complete: !todo.complete, dateCompleted: dateCheck }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo, i) => i !== action.index);
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
