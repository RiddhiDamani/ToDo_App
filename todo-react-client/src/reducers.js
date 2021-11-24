function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        username: action.username,
        access_token: action.access_token,
      };
    case "LOGOUT":
      return {
        username: undefined,
        access_token: undefined,
      };
    default:
      return state;
  }
}

function todoReducer(state, action) {
  console.log("Action:", action);
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
      //console.log("Inside NEW TODO Reducer -------", newToDo);
      return [newToDo, ...state];
    case "TOGGLE_TODO":
      return state.map((t) => {
        const updatedToDo = t;
        console.log(
          "Inside the TOGGLE_TODO reducer option: ",
          t._id + " " + action.id
        );
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
    todos: todoReducer(state.todos, action),
  };
}
