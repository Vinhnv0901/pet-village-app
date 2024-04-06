import { combineReducers } from "redux";
import appReducer from "./appReducer";
import newsReducer from "./newsReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import testPersistReducer from "./testPersistReducer";

const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const testPersisConfig = {
  ...commonConfig,
  key: "tPersist",
  whitelist: ["curData"], //những giá trị cần giữ lại trong storage
};

const rootReducer = combineReducers({
  app: appReducer,
  paper: newsReducer,
  testPersis: persistReducer(testPersisConfig, testPersistReducer),
});

export default rootReducer;
