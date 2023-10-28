export function adminReducer(
  state = localStorage.getItem("admin") ? localStorage.getItem("admin") : null,
  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return null;

    default:
      return state;
  }
}
