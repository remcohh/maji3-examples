import { createStore, combineReducers } from "redux";
import { welcome } from "src/modules/welcome/reducer";
import todo from "src/modules/todo/reducer"

const rootReducer = combineReducers({
  welcome,
  todo
  // additional reducers would be added here
});

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
window.store = store;

export default store;
