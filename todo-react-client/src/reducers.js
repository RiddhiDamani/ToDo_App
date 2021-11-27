function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        username: action.username,
        access_token: action.access_token,
        _id: action._id,
      };
    case "LOGOUT":
      return {
        username: undefined,
        access_token: undefined,
        _id: undefined,
      };
    default:
      return state;
  }
}

function usersReducer(state, action) {
  //console.log("Action:", action);
  switch (action.type) {
    case "FETCH_USERS":
      return action.users;
    default:
      return state;
  }
}

function todoReducer(state, action) {
  //console.log("Action:", action);
  switch (action.type) {
    case "CREATE_TODO":
      const newToDo = {
        _id: action._id,
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
        complete: false,
        dateCompleted: null,
        userID: action.userID,
      };
      return [newToDo, ...state];
    case "TOGGLE_TODO":
      return state.map((t) => {
        //console.log(t);
        const updatedToDo = t;
        if (t._id === action.id) {
          // updatedToDo.complete = action.complete;
          updatedToDo.dateCompleted = action.dateCompleted;
        }
        return updatedToDo;
      });
    case "DELETE_TODO":
      return state.filter((t) => t._id !== action.id);
    case "FETCH_TODOS":
      return action.todos;
    case "CLEAR_TODOLIST":
      return [];
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    users: usersReducer(state.users, action),
    todos: todoReducer(state.todos, action),
  };
}
