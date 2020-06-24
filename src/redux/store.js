import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
//Some configuration about store/redux-logger/redux-persistor
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
