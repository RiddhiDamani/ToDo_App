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
        id: action.id,
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
        complete: false,
        dateCompleted: null,
      };
      return [newToDo, ...state];
    case "TOGGLE_TODO":
      return state.map((t, i) => {
        if (i === action.todoId) {
          t.complete = action.complete;
          t.dateCompleted = action.dateCompleted;
          //console.log(t);
        }
        return t;
      });
    case "DELETE_TODO":
      return state.filter((todo, i) => i !== action.todoId);
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
