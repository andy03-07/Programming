import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const persistedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  auth: {
    user: persistedUser,
    isAuthenticated: !!persistedUser, 
  },
};

// const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
