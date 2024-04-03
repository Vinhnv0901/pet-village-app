import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";
const reduxConfig = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk)); //dùng để gọi api
  const persistor = persistStore(store);
  return { store, persistor };
};

export default reduxConfig;
