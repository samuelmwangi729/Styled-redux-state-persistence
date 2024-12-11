import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
/***
 * Import modules to persist the state
 */
import {
    persistReducer, PersistConfig, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/es/storage'
import { encryptTransform } from "redux-persist-transform-encrypt";


//create persist config 

const persistConfig: PersistConfig<ReturnType<typeof baseReducers>> = {
    key: 'root',
    version: 1,
    storage,
    transforms: [
        encryptTransform({
            secretKey: import.meta.env.VITE_SECRET_KEY,
            onError: (error) => {
                console.error('Encryption error:', error); // Log the error for debugging
            },
        }),
    ],
}

//combine the reducers
const baseReducers = combineReducers({
    user: userReducer
})
//create the persisted reducers

const persistedReducers = persistReducer(persistConfig, baseReducers)
//import the reducers later


const store = configureStore({
    /**
     * if you are having more than a single reducer, you need to combine them into a single one
     */
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


//add in some types here 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store