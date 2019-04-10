import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from '../reducers/main.reducer';
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['form'], //reducers that will not be persisted
};


const pReducer = persistReducer(persistConfig, reducers);
export const store = createStore(pReducer, applyMiddleware(thunk));
export const persist = persistStore(store);